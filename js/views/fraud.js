/**
 * KisanSetu-Agri DSS - Phase 3 & 4: Fraud & Anomaly Detection Engine (AI Feature)
 * Cross-verifies declared crop yield against land records and satellite NDVI telemetry.
 * Integrates with Phase 4 HITL System Learning Feed ("Override logged. AI model updated with new seasonal intake constraint.")
 */

import { SATELLITE_YIELD_CROSS_VERIFICATIONS, logHITLOverride } from '../data.js';
import { speakText } from '../speech.js';

export function renderFraudView(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="view-header">
      <div>
        <h1 class="view-title">AI Fraud & Anomaly Detection Engine</h1>
        <p class="view-subtitle">Cross-verifies declared harvest yield against satellite land acreage, ISRO telemetry & historical crop benchmarks</p>
      </div>
      <div class="btn-group">
        <button class="btn btn-outline" id="voiceFraudSummaryBtn">
          🔊 Voice Audit Summary
        </button>
      </div>
    </div>

    <!-- Top Anomaly Risk Stats -->
    <div class="kpi-grid">
      <div class="kpi-card glass-card">
        <div class="kpi-icon-box bg-red">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>
        </div>
        <div class="kpi-content">
          <span class="kpi-label">Yield Limit Anomalies</span>
          <div class="kpi-value-row">
            <span class="kpi-number text-danger">3 Flagged</span>
            <span class="kpi-badge badge-danger">High Risk</span>
          </div>
          <span class="kpi-hint">Cross-verified via Sentinel-2 satellite</span>
        </div>
      </div>

      <div class="kpi-card glass-card">
        <div class="kpi-icon-box bg-amber">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
        </div>
        <div class="kpi-content">
          <span class="kpi-label">Duplicate Tokens Frozen</span>
          <div class="kpi-value-row">
            <span class="kpi-number text-amber">14 Tokens</span>
            <span class="kpi-badge badge-warning">Prevention</span>
          </div>
          <span class="kpi-hint">Prevented ₹32.8L potential procurement fraud</span>
        </div>
      </div>

      <div class="kpi-card glass-card">
        <div class="kpi-icon-box bg-teal">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 000 20 14.5 14.5 0 000-20"/><path d="M2 12h20"/></svg>
        </div>
        <div class="kpi-content">
          <span class="kpi-label">Land Record Sync Accuracy</span>
          <div class="kpi-value-row">
            <span class="kpi-number text-teal">96.4%</span>
            <span class="kpi-badge badge-teal">AgriStack Synced</span>
          </div>
          <span class="kpi-hint">Direct State Bhulekh API link</span>
        </div>
      </div>
    </div>

    <!-- SATELLITE LAND RECORD & CROP YIELD CROSS-VERIFICATION AUDIT TABLE -->
    <div class="glass-card full-width-card margin-top-lg">
      <div class="card-header">
        <div>
          <h2 class="card-title">📡 Satellite Land Record & Crop Yield Cross-Verification Audit Table</h2>
          <p class="card-subtitle">AI-assisted comparison of declared harvest vs satellite NDVI land productivity maximum</p>
        </div>
        <span class="badge badge-danger-count">3 Action Required</span>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Farmer ID & Name</th>
              <th>Crop & Land Area</th>
              <th>Declared Qty</th>
              <th>Land Limit Max</th>
              <th>AI Discrepancy Flag</th>
              <th>Audit Status</th>
              <th>Action Controls</th>
            </tr>
          </thead>
          <tbody>
            ${SATELLITE_YIELD_CROSS_VERIFICATIONS.map(row => `
              <tr class="${row.farmerId.includes('#9821') ? 'highlight-fraud-row' : ''}">
                <td>
                  <strong class="font-mono text-teal">${row.farmerId}</strong>
                  <div class="font-bold">${row.farmerName}</div>
                  <div class="kpi-hint">${row.aadhaarMasked}</div>
                </td>
                <td>
                  <strong>${row.crop}</strong>
                  <div class="kpi-hint">${row.landAreaAcres} Acres Cultivated</div>
                </td>
                <td class="font-mono font-bold">
                  <span class="${row.declaredQtyQtl > row.landLimitMaxQtl ? 'text-danger' : 'text-teal'}">${row.declaredQtyQtl} Quintals</span>
                </td>
                <td class="font-mono">
                  <strong>${row.landLimitMaxQtl} Quintals</strong>
                  <div class="kpi-hint">Max Satellite Capacity</div>
                </td>
                <td>
                  <span class="badge ${row.declaredQtyQtl > row.landLimitMaxQtl ? 'badge-danger' : 'badge-success'}">${row.discrepancyPct}</span>
                  <div class="kpi-hint font-mono">${row.ndviConfidence}</div>
                </td>
                <td>
                  <span class="status-pill status-${row.status.toLowerCase().includes('flagged') ? 'congested' : (row.status.toLowerCase().includes('optimal') ? 'optimal' : 'moderate')}" id="status-badge-${row.farmerId.replace(/[^a-zA-Z0-9]/g, '')}">
                    ${row.status}
                  </span>
                </td>
                <td>
                  <div class="action-btn-group">
                    <button class="btn btn-xs btn-outline approve-override-btn" data-farmer-id="${row.farmerId}">
                      ⚡ Approve Override
                    </button>
                    <button class="btn btn-xs btn-danger block-inspector-btn" data-farmer-id="${row.farmerId}">
                      ⛔ Block & Notify Inspector
                    </button>
                  </div>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  attachFraudEventListeners();
}

function attachFraudEventListeners() {
  document.querySelectorAll('.approve-override-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const farmerId = e.currentTarget.getAttribute('data-farmer-id');
      const badgeId = 'status-badge-' + farmerId.replace(/[^a-zA-Z0-9]/g, '');
      const badge = document.getElementById(badgeId);

      if (badge) {
        badge.textContent = 'Override Approved ✓';
        badge.className = 'status-pill status-optimal';
      }

      // PHASE 4 HITL SYSTEM LEARNING LOG TRIGGER
      const log = logHITLOverride(
        "FCI Central Admin (#ADM-9012)",
        `Approved Yield Limit Override (${farmerId})`,
        farmerId
      );

      alert(`Administrative Override Granted for ${farmerId}.\nHITL Feed Logged: "${log.systemMsg}"`);
      speakText("Override logged. AI model updated with new seasonal intake constraint.");
    });
  });

  document.querySelectorAll('.block-inspector-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      const farmerId = e.currentTarget.getAttribute('data-farmer-id');
      const badgeId = 'status-badge-' + farmerId.replace(/[^a-zA-Z0-9]/g, '');
      const badge = document.getElementById(badgeId);

      if (badge) {
        badge.textContent = 'Blocked & Inspector Notified ⛔';
        badge.className = 'status-pill status-congested';
      }

      alert(`Security Block Triggered for ${farmerId}! Inspector notified via SMS.`);
      speakText(`Security block triggered for ${farmerId}. Inspector notified.`);
    });
  });

  const voiceFraudBtn = document.getElementById('voiceFraudSummaryBtn');
  if (voiceFraudBtn) {
    voiceFraudBtn.addEventListener('click', () => {
      speakText("AI Fraud Engine: Farmer ID 9821 declared 150 Quintals exceeding the 90 Quintal satellite limit. Audit action required.");
    });
  }
}
