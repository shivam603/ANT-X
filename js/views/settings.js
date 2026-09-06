/**
 * KisanSetu-Agri DSS - Settings & System Integrations View
 * Controls language preferences across 22 official languages, voice synthesis, & e-NAM / PM-KISAN sync
 */

import { LANGUAGES, setLanguage, getCurrentLanguage, t } from '../i18n.js';
import { speakText } from '../speech.js';

export function renderSettingsView(container) {
  if (!container) return;

  const currentLang = getCurrentLanguage();

  container.innerHTML = `
    <div class="view-header">
      <div>
        <h1 class="view-title" data-i18n="navSettings">Settings & System Integrations</h1>
        <p class="view-subtitle">Customize application language, voice assistance, and government portal API connections</p>
      </div>
      <button class="btn btn-primary" id="saveSettingsBtn">
        💾 Save System Settings
      </button>
    </div>

    <div class="settings-grid">
      <!-- Card 1: Language & Accessibility Setup -->
      <div class="glass-card">
        <div class="card-header">
          <h2 class="card-title">🌐 Official Language & Speech Accessibility</h2>
          <span class="badge badge-info">22 Official Languages of India</span>
        </div>

        <div class="styled-form">
          <div class="form-group">
            <label data-i18n="primaryLanguage">Primary Application Language</label>
            <select id="settingsLangSelect" class="form-select font-bold">
              ${LANGUAGES.map(l => `<option value="${l.code}" ${l.code === currentLang ? 'selected' : ''}>${l.native} (${l.name}) — ${l.region}</option>`).join('')}
            </select>
          </div>

          <div class="form-group">
            <label data-i18n="voiceLanguage">Voice Readout Audio Rate</label>
            <select id="voiceRateSelect" class="form-select">
              <option value="0.8">Slow (0.8x) — Recommended for rural announcements</option>
              <option value="0.95" selected>Normal (0.95x)</option>
              <option value="1.1">Fast (1.1x)</option>
            </select>
          </div>

          <button class="btn btn-subtle" id="testVoiceSettingsBtn">
            🔊 Test Audio Voice Synthesis
          </button>
        </div>
      </div>

      <!-- Card 2: Government Portal API Sync (e-NAM, PM-KISAN, PFMS) -->
      <div class="glass-card">
        <div class="card-header">
          <h2 class="card-title">🔗 National Agricultural API Integrations</h2>
          <span class="badge badge-success">APIs Connected</span>
        </div>

        <div class="integration-list">
          <div class="integration-item">
            <div class="integration-icon">🌾</div>
            <div class="integration-info">
              <h4>e-NAM (National Agriculture Market)</h4>
              <p>Real-time mandi price ticker & online bidding ledger</p>
            </div>
            <div class="toggle-switch">
              <input type="checkbox" id="enamToggle" checked>
              <label for="enamToggle"></label>
            </div>
          </div>

          <div class="integration-item">
            <div class="integration-icon">🆔</div>
            <div class="integration-info">
              <h4>PM-KISAN Farmer Database</h4>
              <p>Instant Aadhaar & land ownership verification API</p>
            </div>
            <div class="toggle-switch">
              <input type="checkbox" id="pmkisanToggle" checked>
              <label for="pmkisanToggle"></label>
            </div>
          </div>

          <div class="integration-item">
            <div class="integration-icon">💳</div>
            <div class="integration-info">
              <h4>PFMS (Direct Benefit Transfer)</h4>
              <p>Automated MSP payment disbursement gateway</p>
            </div>
            <div class="toggle-switch">
              <input type="checkbox" id="pfmsToggle" checked>
              <label for="pfmsToggle"></label>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Language select change event
  const langSelect = document.getElementById('settingsLangSelect');
  if (langSelect) {
    langSelect.addEventListener('change', (e) => {
      const newLang = e.target.value;
      setLanguage(newLang);
      
      // Update language select element in header if present
      const headerLang = document.getElementById('headerLangSelect');
      if (headerLang) headerLang.value = newLang;

      speakText(t('appTitle') + ". " + t('subtitle'));
    });
  }

  // Test Voice
  const testVoiceBtn = document.getElementById('testVoiceSettingsBtn');
  if (testVoiceBtn) {
    testVoiceBtn.addEventListener('click', () => {
      speakText(t('appTitle') + ". " + t('subtitle') + ". KisanSetu DSS system voice guide online.");
    });
  }

  // Save button
  const saveBtn = document.getElementById('saveSettingsBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      alert("Settings and Integration preferences saved successfully!");
    });
  }
}
