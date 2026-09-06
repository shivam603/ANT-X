/**
 * KisanSetu-Agri DSS - Phase 4: Procurement Heatmaps, HITL Feedback & Reports Module
 * Includes:
 * 1. Procurement Heatmaps Visual Grid with color-coded congestion markers (Green/Yellow/Red)
 * 2. Human-in-the-Loop (HITL) System Learning Feed ("Override logged. AI model updated with new seasonal intake constraint.")
 * 3. Export Daily Audit Log CSV & Executive Summary Reports
 */

import { MANDI_LIST, HEATMAP_STATES, HITL_OVERRIDE_LOGS, logHITLOverride, LIVE_WEIGHBRIDGE_TRUCKS } from '../data.js';
import { speakText } from '../speech.js';

export function renderHeatmapsView(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="view-header">
      <div>
        <h1 class="view-title">Procurement Heatmaps & HITL System Learning Engine</h1>
        <p class="view-subtitle">Regional congestion telemetry, Human-in-the-Loop AI model feedback feed & audit log export</p>
      </div>
      <div class="btn-group">
        <button class="btn btn-outline" id="btnExportCSV">
          📥 Export Daily Audit Log (CSV)
        </button>
        <button class="btn btn-primary" id="btnExportPDF">
          📄 Export Executive Report (PDF)
        </button>
      </div>
    </div>

    <!-- PHASE 4 FEATURE 1: REGIONAL MANDIS CONGESTION HEATMAP GRID -->
    <div class="glass-card full-width-card margin-bottom-lg">
      <div class="card-header">
        <div>
          <h2 class="card-title">🗺️ Regional Procurement Mandi Telemetry Grid</h2>
          <p class="card-subtitle">Live congestion status markers across major state procurement centers</p>
        </div>
        <div class="heatmap-legend">
          <span class="legend-item"><span class="marker-dot bg-green"></span> Green: Normal Flow</span>
          <span class="legend-item"><span class="marker-dot bg-yellow"></span> Yellow: Heavy Load</span>
          <span class="legend-item"><span class="marker-dot bg-red"></span> Red: Bottlenecked</span>
        </div>
      </div>

      <div class="mandi-heatmap-grid">
        ${MANDI_LIST.map(m => `
          <div class="heatmap-mandi-card marker-border-${m.marker}">
            <div class="heatmap-mandi-top">
              <span class="heatmap-marker-pin marker-pin-${m.marker}">●</span>
              <strong class="heatmap-mandi-name">${m.name}</strong>
              <span class="badge ${m.marker === 'green' ? 'badge-success' : (m.marker === 'yellow' ? 'badge-warning' : 'badge-danger')}">${m.status}</span>
            </div>

            <div class="heatmap-mandi-stats">
              <div>State: <strong>${m.state}</strong></div>
              <div>Capacity: <strong>${m.capacity}</strong></div>
              <div>Queue: <strong class="font-mono">${m.queue} Trucks</strong></div>
              <div>Throughput: <strong class="text-teal font-mono">${m.eff}</strong></div>
            </div>

            <div class="progress-bar-wrap">
              <div class="progress-bar-fill ${m.marker === 'green' ? 'bg-emerald' : (m.marker === 'yellow' ? 'bg-amber' : 'bg-red')}" style="width: ${m.marker === 'red' ? '94%' : (m.marker === 'yellow' ? '70%' : '38%')}"></div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- PHASE 4 FEATURE 2: HUMAN-IN-THE-LOOP (HITL) OVERRIDE SYSTEM LEARNING FEED -->
    <div class="hitl-analytics-grid">
      <!-- LEFT: HITL FEED -->
      <div class="glass-card hitl-feed-card">
        <div class="card-header">
          <div>
            <h2 class="card-title">🧠 Human-in-the-Loop (HITL) System Learning Feed</h2>
            <p class="card-subtitle">Real-time log of administrative overrides updating AI seasonal intake constraints</p>
          </div>
          <button class="btn btn-xs btn-subtle" id="btnSimulateHITL">
            + Simulate Admin Override
          </button>
        </div>

        <div class="hitl-log-stream" id="hitlLogStream">
          ${renderHITLLogsHTML(HITL_OVERRIDE_LOGS)}
        </div>
      </div>

      <!-- RIGHT: STATE PROCUREMENT PROGRESS -->
      <div class="glass-card state-progress-card">
        <div class="card-header">
          <h2 class="card-title">🇮🇳 State Procurement Target Progress</h2>
          <span class="badge badge-success font-mono">77.4% Overall</span>
        </div>

        <div class="state-mini-list">
          ${HEATMAP_STATES.map(s => `
            <div class="state-mini-item">
              <div class="state-mini-header">
                <strong>${s.state}</strong>
                <span class="font-mono text-teal">${s.progressPct}%</span>
              </div>
              <div class="progress-bar-wrap">
                <div class="progress-bar-fill bg-emerald" style="width: ${s.progressPct}%"></div>
              </div>
              <div class="state-mini-sub">${s.procuredMT} / ${s.targetMT}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;

  attachHeatmapEventListeners();
}

function renderHITLLogsHTML(logs) {
  return logs.map(log => `
    <div class="hitl-log-item">
      <div class="hitl-log-header">
        <span class="hitl-badge-ai">🤖 AI Model Feedback</span>
        <span class="hitl-timestamp font-mono">${log.timestamp}</span>
      </div>
      <div class="hitl-log-body">
        <div class="hitl-admin-info">
          <strong>${log.adminId}</strong> • <span class="text-teal">${log.entity}</span>
        </div>
        <div class="hitl-action-text">${log.action}</div>
        <div class="hitl-system-msg font-mono">
          💬 "${log.systemMsg}"
        </div>
      </div>
      <div class="hitl-log-footer">
        <span class="hitl-score-badge">${log.rlConfidenceUpdate}</span>
        <span class="hitl-mandi-tag">${log.mandi}</span>
      </div>
    </div>
  `).join('');
}

function attachHeatmapEventListeners() {
  // Simulate HITL Override button
  const btnSimulate = document.getElementById('btnSimulateHITL');
  if (btnSimulate) {
    btnSimulate.addEventListener('click', () => {
      const newLog = logHITLOverride(
        "FCI Central Admin (#ADM-9012)",
        "Overrode Mandi Storage Capacity Ceiling (+2,500 MT)",
        "Suratgarh Mandi #104"
      );

      const stream = document.getElementById('hitlLogStream');
      if (stream) {
        stream.innerHTML = renderHITLLogsHTML(HITL_OVERRIDE_LOGS);
      }

      speakText("Override logged. AI model updated with new seasonal intake constraint.");
      alert(`HITL Log Appended:\n"${newLog.systemMsg}"`);
    });
  }

  // Export CSV Handler
  const btnCSV = document.getElementById('btnExportCSV');
  if (btnCSV) {
    btnCSV.addEventListener('click', () => {
      exportAuditLogCSV();
    });
  }

  // Export PDF Handler
  const btnPDF = document.getElementById('btnExportPDF');
  if (btnPDF) {
    btnPDF.addEventListener('click', () => {
      window.print();
    });
  }
}

/**
 * Phase 4 CSV Export Functionality
 */
function exportAuditLogCSV() {
  const headers = ["Log_ID", "Timestamp", "Admin_ID", "Target_Entity", "Action_Details", "System_Feedback_Msg", "RL_Weight_Update"];
  const rows = HITL_OVERRIDE_LOGS.map(l => [
    l.id,
    `"${l.timestamp}"`,
    `"${l.adminId}"`,
    `"${l.entity}"`,
    `"${l.action}"`,
    `"${l.systemMsg}"`,
    `"${l.rlConfidenceUpdate}"`
  ]);

  const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", `KisanSetu_Procurement_Audit_Log_${new Date().toISOString().slice(0,10)}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);

  speakText("Procurement audit log CSV downloaded successfully.");
}
