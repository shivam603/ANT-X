/**
 * KisanSetu-Agri DSS (Team ANT-X) - Main Application Controller
 * Handles global navigation, 22 Indian languages dropdown, notification bell, search, view routing,
 * and the Bhashini Multilingual AI Voice Assistant Floating Widget
 */

import { LANGUAGES, setLanguage, getCurrentLanguage, updateDOMTranslations, t } from './i18n.js';
import { toggleVoiceGuide, speakText, initSpeechEngine } from './speech.js';
import { URGENT_ALERTS, BHASHINI_SAMPLE_QUERIES } from './data.js';

import { renderDashboardView } from './views/dashboard.js';
import { renderSlotBookingView } from './views/slot-booking.js';
import { renderMandiQueueView } from './views/mandi-queue.js';
import { renderHeatmapsView } from './views/heatmaps.js';
import { renderFraudView } from './views/fraud.js';
import { renderSettingsView } from './views/settings.js';

let activeTab = 'dashboard';

document.addEventListener('DOMContentLoaded', () => {
  initApp();
});

export function initApp() {
  initSpeechEngine();
  populateTopBarLanguageSelector();
  setupSidebarNavigation();
  setupNotificationsModal();
  setupGlobalSearch();
  setupBhashiniVoiceWidget();

  const voiceBtn = document.getElementById('voiceGuideBtn');
  if (voiceBtn) {
    voiceBtn.addEventListener('click', () => {
      toggleVoiceGuide();
    });
  }

  switchView('dashboard');
}

function populateTopBarLanguageSelector() {
  const langSelect = document.getElementById('headerLangSelect');
  if (!langSelect) return;

  langSelect.innerHTML = LANGUAGES.map(l => 
    `<option value="${l.code}">🌐 ${l.native} (${l.name})</option>`
  ).join('');

  langSelect.value = getCurrentLanguage();

  langSelect.addEventListener('change', (e) => {
    const selectedLang = e.target.value;
    setLanguage(selectedLang);
    switchView(activeTab);
    speakText(t('appTitle') + ". " + t('subtitle'));
  });
}

function setupSidebarNavigation() {
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetView = link.getAttribute('data-view');
      if (targetView) {
        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        switchView(targetView);

        const sidebar = document.getElementById('appSidebar');
        if (sidebar && window.innerWidth <= 992) {
          sidebar.classList.remove('sidebar-mobile-open');
        }
      }
    });
  });

  const toggleBtn = document.getElementById('sidebarToggleBtn');
  const sidebar = document.getElementById('appSidebar');
  if (toggleBtn && sidebar) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }

  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  if (mobileMenuBtn && sidebar) {
    mobileMenuBtn.addEventListener('click', () => {
      sidebar.classList.toggle('sidebar-mobile-open');
    });
  }
}

export function switchView(viewName) {
  activeTab = viewName;
  const container = document.getElementById('mainContentArea');
  if (!container) return;

  container.innerHTML = '';

  switch (viewName) {
    case 'dashboard':
      renderDashboardView(container);
      break;
    case 'slot-booking':
      renderSlotBookingView(container);
      break;
    case 'mandi-queue':
      renderMandiQueueView(container);
      break;
    case 'analytics':
      renderHeatmapsView(container);
      break;
    case 'fraud':
      renderFraudView(container);
      break;
    case 'settings':
      renderSettingsView(container);
      break;
    default:
      renderDashboardView(container);
      break;
  }

  updateDOMTranslations();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupNotificationsModal() {
  const bellBtn = document.getElementById('notificationBellBtn');
  const dropdown = document.getElementById('notificationDropdown');
  const badge = document.getElementById('notifBadgeCount');

  if (badge) {
    badge.textContent = URGENT_ALERTS.length;
  }

  if (bellBtn && dropdown) {
    bellBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      dropdown.classList.toggle('active');
    });

    document.addEventListener('click', (e) => {
      if (!dropdown.contains(e.target) && !bellBtn.contains(e.target)) {
        dropdown.classList.remove('active');
      }
    });

    const list = document.getElementById('notifDropdownList');
    if (list) {
      list.innerHTML = URGENT_ALERTS.map(a => `
        <div class="notif-dropdown-item notif-${a.severity}">
          <div class="notif-item-title">${a.title}</div>
          <div class="notif-item-time">${a.time} • ${a.mandi}</div>
        </div>
      `).join('');
    }
  }
}

function setupGlobalSearch() {
  const searchInput = document.getElementById('globalSearchInput');
  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length > 2) {
      console.log("Global search query:", query);
    }
  });
}

/**
 * PHASE 3: Floating Bhashini AI Multilingual Voice Assistant Handler
 */
function setupBhashiniVoiceWidget() {
  const toggleBtn = document.getElementById('bhashiniToggleBtn');
  const dialogBox = document.getElementById('bhashiniDialogBox');
  const closeBtn = document.getElementById('closeBhashiniBtn');
  const form = document.getElementById('bhashiniForm');
  const queryInput = document.getElementById('bhashiniQueryInput');
  const chatArea = document.getElementById('bhashiniChatArea');

  if (!toggleBtn || !dialogBox) return;

  toggleBtn.addEventListener('click', () => {
    dialogBox.classList.toggle('active');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      dialogBox.classList.remove('active');
    });
  }

  // Quick Prompt Chips
  document.querySelectorAll('.prompt-chip').forEach(chip => {
    chip.addEventListener('click', (e) => {
      const text = e.currentTarget.getAttribute('data-query');
      if (queryInput) queryInput.value = text;
      handleBhashiniQuery(text);
    });
  });

  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const q = queryInput.value.trim();
      if (q) {
        handleBhashiniQuery(q);
      }
    });
  }

  function handleBhashiniQuery(userQuery) {
    // Append User Message
    appendChatMessage('user', userQuery);

    // Find Matching AI Response
    let botResponse = "Aapka sawal mil gaya hai. KisanSetu DSS system dwara aapka token KS-2026-8802 active weighbridge queue me lag chuka hai. 14 minute me gate pass issue hoga.";
    let speakResponse = "आपका सवाल मिल गया है। टोकन 8802 एक्टिव वेईब्रिज कतार में है। 14 मिनट में गेट पास इशू होगा।";

    const match = BHASHINI_SAMPLE_QUERIES.find(q => userQuery.toLowerCase().includes(q.query.toLowerCase().substring(0, 10)));
    if (match) {
      botResponse = match.answer;
      speakResponse = match.audioText;
    }

    setTimeout(() => {
      appendChatMessage('bot', botResponse);
      speakText(speakResponse);
    }, 400);

    if (queryInput) queryInput.value = '';
  }

  function appendChatMessage(sender, text) {
    if (!chatArea) return;
    const msgDiv = document.createElement('div');
    msgDiv.className = `chat-msg ${sender}-msg`;
    msgDiv.innerHTML = `
      <span class="msg-sender">${sender === 'user' ? '👤 Aap:' : '🤖 Bhashini AI:'}</span>
      <p class="msg-text">${text}</p>
    `;
    chatArea.appendChild(msgDiv);
    chatArea.scrollTop = chatArea.scrollHeight;
  }
}
