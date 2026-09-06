/**
 * KisanSetu-Agri DSS - Phase 1 Dashboard View Logic
 * Renders Top KPI Cards, Inflow vs Capacity Chart, and Recent Alerts Panel
 */

import { KPI_DATA, URGENT_ALERTS, MANDI_LIST, RECENT_SLOTS } from '../data.js';
import { renderInflowChart } from '../chart-config.js';
import { speakText, stopSpeech } from '../speech.js';
import { t } from '../i18n.js';

export function renderDashboardView(container) {
  if (!container) return;

  container.innerHTML = `
    <!-- Top KPI Cards Row -->
    <div class="kpi-grid">
      <!-- Card 1: Slots -->
      <div class="kpi-card glass-card">
        <div class="kpi-icon-box bg-emerald">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>
        </div>
        <div class="kpi-content">
          <span class="kpi-label" data-i18n="kpiSlotsTitle">Total Daily Slots Allocated</span>
          <div class="kpi-value-row">
            <span class="kpi-number" id="kpiSlotsValue">${KPI_DATA.slotsAllocated.toLocaleString()}</span>
            <span class="kpi-badge badge-success" data-i18n="kpiSlotsSub">${KPI_DATA.slotsTrend}</span>
          </div>
          <span class="kpi-hint">Across 28 Procurement Mandis</span>
        </div>
      </div>

      <!-- Card 2: Pending Check-ins -->
      <div class="kpi-card glass-card">
        <div class="kpi-icon-box bg-amber">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="kpi-content">
          <span class="kpi-label" data-i18n="kpiPendingTitle">Pending Farmer Check-ins</span>
          <div class="kpi-value-row">
            <span class="kpi-number" id="kpiPendingValue">${KPI_DATA.pendingCheckins}</span>
            <span class="kpi-badge badge-warning" data-i18n="kpiPendingSub">Gate Clearance Needed</span>
          </div>
          <span class="kpi-hint">Avg. gate wait time: 14 mins</span>
        </div>
      </div>

      <!-- Card 3: Spoilage Saved -->
      <div class="kpi-card glass-card">
        <div class="kpi-icon-box bg-teal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/></svg>
        </div>
        <div class="kpi-content">
          <span class="kpi-label" data-i18n="kpiSpoilageTitle">Est. Demurrage/Spoilage Saved</span>
          <div class="kpi-value-row">
            <span class="kpi-number" id="kpiSpoilageValue">${KPI_DATA.demurrageSavedText}</span>
            <span class="kpi-badge badge-teal" data-i18n="kpiSpoilageSub">Eco-Financial Savings</span>
          </div>
          <span class="kpi-hint">+₹4.2L vs last week</span>
        </div>
      </div>

      <!-- Card 4: Active Mandis -->
      <div class="kpi-card glass-card">
        <div class="kpi-icon-box bg-slate">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18M3 7v14M21 7v14M6 21V11m4 10V11m4 10V11m4 10V11M12 3L2 7h20L12 3z"/></svg>
        </div>
        <div class="kpi-content">
          <span class="kpi-label" data-i18n="kpiMandisTitle">Active Mandis Connected</span>
          <div class="kpi-value-row">
            <span class="kpi-number" id="kpiMandisValue">${KPI_DATA.activeMandis} Centers</span>
            <span class="kpi-badge badge-info" data-i18n="kpiMandisSub">12 States</span>
          </div>
          <span class="kpi-hint">99.8% IoT sensor uptime</span>
        </div>
      </div>
    </div>

    <!-- Main Visual Component Row -->
    <div class="dashboard-main-grid">
      <!-- Left Column: Chart Container -->
      <div class="chart-container-card glass-card">
        <div class="card-header">
          <div>
            <h2 class="card-title" data-i18n="chartTitle">Daily Mandi Inflow vs. Warehouse Capacity (Last 7 Days)</h2>
            <p class="card-subtitle">Real-time telemetry tracking grain volume vs safe storage threshold limit</p>
          </div>
          <div class="chart-controls">
            <span class="status-indicator-live">
              <span class="pulse-dot"></span> Live Telemetry
            </span>
            <button class="btn btn-sm btn-outline" id="refreshChartBtn">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M23 4v6h-6M1 20v-6h6"/><path d="M3.51 9a9 9 0 0114.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0020.49 15"/></svg>
              Refresh
            </button>
          </div>
        </div>

        <div class="chart-wrapper">
          <canvas id="inflowChart"></canvas>
        </div>

        <div class="chart-footer-metrics">
          <div class="metric-pill">
            <span class="color-dot bg-emerald"></span>
            <span data-i18n="chartInflowLegend">Actual Mandi Inflow (MT)</span>
          </div>
          <div class="metric-pill">
            <span class="color-dot bg-red"></span>
            <span data-i18n="chartPeakAlert">Capacity Limit Threshold (25,000 MT)</span>
          </div>
        </div>
      </div>

      <!-- Right Column: Recent Urgent Alerts Panel -->
      <div class="alerts-container-card glass-card">
        <div class="card-header">
          <div class="header-with-badge">
            <h2 class="card-title" data-i18n="recentAlertsTitle">Urgent Operational Alerts</h2>
            <span class="badge badge-danger-count" id="alertsCountBadge">${URGENT_ALERTS.length} New</span>
          </div>
          <button class="btn btn-sm btn-subtle" id="audioAllAlertsBtn" title="Speak All Alerts">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/></svg>
            Read Out
          </button>
        </div>

        <div class="alerts-list" id="urgentAlertsList">
          ${renderAlertsListHTML(URGENT_ALERTS)}
        </div>
      </div>
    </div>

    <!-- Quick Live Status Table & Mandi Grid -->
    <div class="secondary-dashboard-row">
      <div class="glass-card full-width-card">
        <div class="card-header">
          <h2 class="card-title">Live Procurement Mandi Centers & Capacity Monitor</h2>
          <button class="btn btn-sm btn-primary" id="quickBookBtnNav">
            + Book Smart Slot
          </button>
        </div>
        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Mandi Center ID</th>
                <th>State & Region</th>
                <th>Storage Capacity</th>
                <th>Queue Status</th>
                <th>Truck Queue</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              ${MANDI_LIST.map(m => `
                <tr>
                  <td><strong>${m.name}</strong></td>
                  <td>${m.state}</td>
                  <td>${m.capacity}</td>
                  <td>
                    <span class="status-pill status-${m.status.toLowerCase()}">${m.status}</span>
                  </td>
                  <td>${m.queue} trucks</td>
                  <td>
                    <button class="btn btn-xs btn-outline view-mandi-btn" data-mandi-id="${m.id}">Inspect Center</button>
                  </td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  // Render chart after DOM attach
  setTimeout(() => {
    renderInflowChart('inflowChart');
  }, 50);

  // Attach event listeners
  attachDashboardEventListeners();
}

function renderAlertsListHTML(alerts) {
  return alerts.map(alert => `
    <div class="alert-item alert-border-${alert.severity}">
      <div class="alert-header">
        <span class="alert-badge alert-badge-${alert.severity}">${alert.badge}</span>
        <span class="alert-time">${alert.time}</span>
      </div>
      <h4 class="alert-item-title">${alert.title}</h4>
      <p class="alert-desc">${alert.desc}</p>
      <div class="alert-actions">
        <span class="alert-location font-mono">${alert.mandi}</span>
        <div class="action-btn-group">
          <button class="btn btn-xs btn-subtle alert-speech-btn" data-speech="${escapeHTML(alert.speechText)}">
            🔊 Read
          </button>
          <button class="btn btn-xs btn-outline resolve-alert-btn" data-alert-id="${alert.id}">
            Resolve
          </button>
        </div>
      </div>
    </div>
  `).join('');
}

function attachDashboardEventListeners() {
  // Speech buttons for alerts
  document.querySelectorAll('.alert-speech-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const text = e.currentTarget.getAttribute('data-speech');
      speakText(text);
    });
  });

  // Audio Readout All Alerts
  const audioAllBtn = document.getElementById('audioAllAlertsBtn');
  if (audioAllBtn) {
    audioAllBtn.addEventListener('click', () => {
      const summaryText = URGENT_ALERTS.map(a => a.speechText).join('. ');
      speakText("Attention operational alerts. " + summaryText);
    });
  }

  // Refresh chart
  const refreshChartBtn = document.getElementById('refreshChartBtn');
  if (refreshChartBtn) {
    refreshChartBtn.addEventListener('click', () => {
      renderInflowChart('inflowChart');
    });
  }

  // Resolve alert handler
  document.querySelectorAll('.resolve-alert-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const alertId = e.currentTarget.getAttribute('data-alert-id');
      const alertEl = e.currentTarget.closest('.alert-item');
      if (alertEl) {
        alertEl.style.opacity = '0.5';
        alertEl.style.transform = 'scale(0.98)';
        e.currentTarget.textContent = 'Resolved ✓';
        e.currentTarget.disabled = true;
      }
    });
  });

  // Window resize re-render chart
  window.addEventListener('resize', () => {
    renderInflowChart('inflowChart');
  });
}

function escapeHTML(str) {
  return str.replace(/"/g, '&quot;');
}
