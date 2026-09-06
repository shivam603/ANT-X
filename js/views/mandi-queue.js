/**
 * KisanSetu-Agri DSS - Phase 3: Mandi Queue & Weighbridge Live Feed Module
 * Live incoming truck/tractor feed table, Gross vs Tare -> Net weight calculation, estimated gate wait times
 */

import { LIVE_WEIGHBRIDGE_TRUCKS, MANDI_LIST } from '../data.js';
import { speakText } from '../speech.js';
import { t } from '../i18n.js';

export function renderMandiQueueView(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="view-header">
      <div>
        <h1 class="view-title" data-i18n="navMandiQueue">Mandi Queue & Weighbridge Live Feed</h1>
        <p class="view-subtitle">Automated truck weighment telemetry, gate pass validation & estimated queue clearance times</p>
      </div>
      <div class="btn-group">
        <button class="btn btn-outline" id="refreshQueueBtn">🔄 Refresh Telemetry</button>
        <button class="btn btn-primary" id="speakQueueStatusBtn">🔊 Voice Queue Status</button>
      </div>
    </div>

    <!-- Top Summary Metrics Bar -->
    <div class="kpi-grid">
      <div class="kpi-card glass-card">
        <div class="kpi-icon-box bg-emerald">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
        </div>
        <div class="kpi-content">
          <span class="kpi-label">Active Weighbridge Scale</span>
          <div class="kpi-value-row">
            <span class="kpi-number text-teal">Terminal #WB-01</span>
            <span class="kpi-badge badge-success">Calibrated • Online</span>
          </div>
          <span class="kpi-hint">99.9% Load cell sensor accuracy</span>
        </div>
      </div>

      <div class="kpi-card glass-card">
        <div class="kpi-icon-box bg-amber">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
        </div>
        <div class="kpi-content">
          <span class="kpi-label">Avg. Gate Wait Time</span>
          <div class="kpi-value-row">
            <span class="kpi-number text-amber">14.2 Mins</span>
            <span class="kpi-badge badge-warning">Optimum Flow</span>
          </div>
          <span class="kpi-hint">-6 mins vs yesterday</span>
        </div>
      </div>

      <div class="kpi-card glass-card">
        <div class="kpi-icon-box bg-slate">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
        </div>
        <div class="kpi-content">
          <span class="kpi-label">Total Trucks Weighed Today</span>
          <div class="kpi-value-row">
            <span class="kpi-number">384 Trucks</span>
            <span class="kpi-badge badge-info">18,420 MT Grain</span>
          </div>
          <span class="kpi-hint">Across 28 Connected Mandis</span>
        </div>
      </div>
    </div>

    <!-- MAIN WEIGHBRIDGE MODULE GRID: Scale Simulator (Left) + Live Queue Feed Table (Right) -->
    <div class="queue-grid margin-top-lg">
      <!-- LEFT COLUMN: LIVE WEIGHBRIDGE TERMINAL CALCULATOR -->
      <div class="glass-card calculator-card">
        <div class="card-header">
          <h2 class="card-title">⚖️ Weighbridge Telemetry Calculator</h2>
          <span class="status-indicator-live"><span class="pulse-dot"></span> Digital Scale Live</span>
        </div>

        <form id="weighbridgeForm" class="styled-form">
          <div class="form-group">
            <label>Select Incoming Vehicle / Token</label>
            <select id="truckSelect" class="form-select">
              ${LIVE_WEIGHBRIDGE_TRUCKS.map((q, idx) => `<option value="${idx}">${q.vehicleNo} (${q.tokenNo}) - ${q.farmer} [${q.crop}]</option>`).join('')}
            </select>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label>Gross Truck Weight (Kg)</label>
              <input type="number" id="grossWeightInput" class="form-input font-mono" value="28450" required>
            </div>
            <div class="form-group">
              <label>Tare (Empty Truck) Weight (Kg)</label>
              <input type="number" id="tareWeightInput" class="form-input font-mono" value="10200" required>
            </div>
          </div>

          <div class="net-weight-box">
            <span class="net-label">Net Crop Procurement Weight</span>
            <div class="net-value-row">
              <span class="net-number font-mono" id="netWeightDisplay">18,250 Kg</span>
              <span class="net-quintals" id="netQuintalsDisplay">(182.50 Quintals)</span>
            </div>
          </div>

          <div class="form-actions">
            <button type="submit" class="btn btn-primary btn-block">
              🎟️ Calculate & Issue Digital Gate Pass
            </button>
          </div>
        </form>
      </div>

      <!-- RIGHT COLUMN: PHASE 3 CORE FEATURE — LIVE TRUCK QUEUE FEED TABLE -->
      <div class="glass-card full-width-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">🚛 Mandi Queue & Weighbridge Live Feed</h2>
            <p class="card-subtitle">Live stream of incoming trucks, token numbers, weight telemetry & estimated wait times</p>
          </div>
          <span class="badge badge-success font-mono">Live Telemetry</span>
        </div>

        <div class="table-responsive">
          <table class="data-table">
            <thead>
              <tr>
                <th>Vehicle & Type</th>
                <th>Token No.</th>
                <th>Farmer Name</th>
                <th>Gross / Tare (Kg)</th>
                <th>Net Weight</th>
                <th>Est. Wait</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${LIVE_WEIGHBRIDGE_TRUCKS.map(t => `
                <tr>
                  <td>
                    <strong>${t.vehicleNo}</strong>
                    <div class="kpi-hint">${t.vehicleType}</div>
                  </td>
                  <td><strong class="font-mono text-teal">${t.tokenNo}</strong></td>
                  <td>${t.farmer}</td>
                  <td class="font-mono">
                    <div>Gross: ${t.grossKg.toLocaleString()} kg</div>
                    <div class="kpi-hint">Tare: ${t.tareKg.toLocaleString()} kg</div>
                  </td>
                  <td class="font-mono">
                    <strong class="text-teal">${t.netKg.toLocaleString()} kg</strong>
                    <div class="kpi-hint">(${t.netQuintals})</div>
                  </td>
                  <td><span class="badge badge-warning font-mono">⏱️ ${t.estWait}</span></td>
                  <td><span class="status-pill status-${t.status.toLowerCase().replace(/\s+/g, '-')}">${t.status}</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <!-- Bottom Mandis Congestion Grid -->
    <div class="glass-card full-width-card margin-top-lg">
      <div class="card-header">
        <h2 class="card-title">Mandi Gate Sensor Telemetry (All Procurement Centers)</h2>
        <span class="kpi-hint">Auto-synced with State Agrotech IoT Sensors</span>
      </div>

      <div class="mandi-cards-grid">
        ${MANDI_LIST.map(m => `
          <div class="mandi-status-box mandi-status-${m.status.toLowerCase()}">
            <div class="mandi-box-header">
              <span class="mandi-box-title">${m.name}</span>
              <span class="mandi-box-badge">${m.status}</span>
            </div>
            <div class="mandi-box-body">
              <div class="mandi-box-stat">
                <span>Waiting Queue:</span>
                <strong class="font-mono">${m.queue} Trucks</strong>
              </div>
              <div class="mandi-box-stat">
                <span>Throughput Efficiency:</span>
                <strong class="text-teal">${m.eff}</strong>
              </div>
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill" style="width: ${m.status === 'Congested' ? '92%' : (m.status === 'Moderate' ? '65%' : '40%')}"></div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `;

  attachQueueEventListeners();
}

function attachQueueEventListeners() {
  const grossInput = document.getElementById('grossWeightInput');
  const tareInput = document.getElementById('tareWeightInput');
  const netDisplay = document.getElementById('netWeightDisplay');
  const quintalsDisplay = document.getElementById('netQuintalsDisplay');

  function calculateNet() {
    const gross = parseFloat(grossInput.value) || 0;
    const tare = parseFloat(tareInput.value) || 0;
    const net = Math.max(0, gross - tare);
    const quintals = (net / 100).toFixed(2);

    netDisplay.textContent = `${net.toLocaleString()} Kg`;
    quintalsDisplay.textContent = `(${quintals} Quintals)`;
  }

  if (grossInput && tareInput) {
    grossInput.addEventListener('input', calculateNet);
    tareInput.addEventListener('input', calculateNet);
  }

  const truckSelect = document.getElementById('truckSelect');
  if (truckSelect) {
    truckSelect.addEventListener('change', (e) => {
      const idx = e.target.value;
      const data = LIVE_WEIGHBRIDGE_TRUCKS[idx];
      if (data) {
        grossInput.value = data.grossKg;
        tareInput.value = data.tareKg;
        calculateNet();
      }
    });
  }

  const form = document.getElementById('weighbridgeForm');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const netText = netDisplay.textContent;
      const passNo = "GP-2026-" + Math.floor(1000 + Math.random() * 9000);
      speakText(`Gate pass issued successfully. Pass number ${passNo}. Net procurement weight recorded as ${netText}.`);
      alert(`Digital Gate Pass ${passNo} Issued Successfully!\nNet Weight: ${netText}`);
    });
  }

  const speakQueueBtn = document.getElementById('speakQueueStatusBtn');
  if (speakQueueBtn) {
    speakQueueBtn.addEventListener('click', () => {
      speakText("Live Weighbridge Feed: Khanna Mandi gate 2 average wait time is 14 minutes. Suratgarh Mandi queue is 48 trucks.");
    });
  }
}
