/**
 * KisanSetu-Agri DSS - Phase 2: Smart Slot Booking & Tokenization Module
 * Includes:
 * 1. Interactive Slot Booking Simulator
 * 2. AI / Dynamic Throttling Recommendation Box
 * 3. End-to-End 5-Step Milestone Tracker (Token -> Arrival -> Quality -> Graded -> Payment)
 * 4. Actionable Administrative Controls (Approve/Override, Reschedule, Issue Digital Receipt)
 */

import { ACTIVE_MILESTONE_TICKETS, MANDI_LIST, RECENT_SLOTS } from '../data.js';
import { speakText } from '../speech.js';
import { t } from '../i18n.js';

let activeTicket = { ...ACTIVE_MILESTONE_TICKETS[0] };

export function renderSlotBookingView(container) {
  if (!container) return;

  container.innerHTML = `
    <div class="view-header">
      <div>
        <h1 class="view-title" data-i18n="navSlotBooking">Smart Slot Booking & Tokenization Module (Farmer Portal)</h1>
        <p class="view-subtitle">AI-driven arrival slot throttling, dynamic queue optimization & end-to-end procurement tracking</p>
      </div>
      <div class="btn-group">
        <button class="btn btn-secondary voice-read-header" id="speakBookingHelp">
          🔊 Voice Instructions
        </button>
      </div>
    </div>

    <!-- PHASE 2: AI DYNAMIC THROTTLING RECOMMENDATION WIDGET -->
    <div class="glass-card ai-recommendation-card margin-bottom-lg" id="aiThrottlingWidget">
      <div class="ai-card-header">
        <div class="ai-title-wrap">
          <span class="ai-sparkle-icon">🤖</span>
          <div>
            <h3 class="ai-card-title" data-i18n="aiThrottlingTitle">AI Dynamic Throttling & Recommendation Engine</h3>
            <p class="ai-card-subtitle">Analyzes real-time warehouse occupancy, weighbridge throughput & satellite traffic feeds</p>
          </div>
        </div>
        <span class="badge badge-success font-mono" id="aiEfficiencyBadge">98% Queue Efficiency</span>
      </div>

      <div class="ai-recommendation-body">
        <div class="ai-recommend-box">
          <span class="recommend-icon">💡</span>
          <div class="recommend-content">
            <h4 class="recommend-heading" id="aiRecommendedSlotText">Recommended Arrival Slot: 10:30 AM at Khanna Mandi Gate 2</h4>
            <p class="recommend-desc" id="aiRecommendedSavings">Optimal logistics window detected. Saves an estimated <strong>45 minutes gate delay</strong> and prevents demurrage charges.</p>
          </div>
        </div>

        <div class="ai-stat-pills">
          <div class="ai-pill">
            <span class="pill-label">Warehouse Occupancy</span>
            <strong class="pill-val" id="aiWarehouseOcc">64% (Safe)</strong>
          </div>
          <div class="ai-pill">
            <span class="pill-label">Gate Truck Queue</span>
            <strong class="pill-val" id="aiTruckQueue">12 Trucks</strong>
          </div>
          <div class="ai-pill">
            <span class="pill-label">Est. Clearance Time</span>
            <strong class="pill-val" id="aiEstClearance">18 Mins</strong>
          </div>
        </div>
      </div>
    </div>

    <!-- MAIN MODULE GRID: Form Simulator (Left) + Milestone Tracker & Controls (Right) -->
    <div class="phase2-module-grid">
      <!-- LEFT COLUMN: INTERACTIVE SLOT BOOKING SIMULATOR FORM -->
      <div class="glass-card form-card">
        <div class="card-header">
          <div>
            <h2 class="card-title" data-i18n="slotSimulatorTitle">Interactive Slot Booking Simulator</h2>
            <p class="card-subtitle">Simulate farmer slot allocation with instant AI availability check</p>
          </div>
          <span class="badge badge-info">e-NAM / PM-KISAN Verified</span>
        </div>

        <form id="slotBookingSimulatorForm" class="styled-form">
          <div class="form-row">
            <div class="form-group">
              <label data-i18n="farmerNameLabel">Farmer Full Name</label>
              <input type="text" id="simFarmerName" class="form-input" value="Sukhdev Sharma" required>
            </div>

            <div class="form-group">
              <label data-i18n="farmerIdLabel">Farmer Aadhaar / Krishi ID (Masked)</label>
              <input type="text" id="simAadhaar" class="form-input font-mono" value="XXXX-XXXX-9918" required>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label data-i18n="mobileNumberLabel">Mobile Number (SMS Alert)</label>
              <input type="tel" id="simMobile" class="form-input" value="98120-XXXX1" required>
            </div>

            <div class="form-group">
              <label data-i18n="cropTypeLabel">Crop Type</label>
              <select id="simCropSelect" class="form-select" required>
                <option value="Wheat (Sharbati Premium)" selected>Wheat (Sharbati Premium) - 🌾</option>
                <option value="Paddy (Grade A)">Paddy (Grade A) - 🌾</option>
                <option value="Millet / Bajra">Millet / Bajra - 🌾</option>
                <option value="Mustard Seeds">Mustard Seeds - 🟡</option>
                <option value="Chana (Gram / Pulses)">Chana (Gram / Pulses) - 🟤</option>
              </select>
            </div>
          </div>

          <div class="form-row">
            <div class="form-group">
              <label data-i18n="estQtyLabel">Quantity (Quintals)</label>
              <input type="number" id="simQtyInput" class="form-input font-mono" min="5" max="2000" value="90" required>
            </div>

            <div class="form-group">
              <label data-i18n="selectMandiLabel">Preferred Mandi Center</label>
              <select id="simMandiSelect" class="form-select" required>
                ${MANDI_LIST.map(m => `<option value="${m.name}" ${m.id === '101' ? 'selected' : ''}>${m.name} (${m.state}) — ${m.eff} Eff.</option>`).join('')}
              </select>
            </div>
          </div>

          <div class="form-actions">
            <button type="button" class="btn btn-subtle" id="voiceFormReadout">🔊 Read Instructions</button>
            <button type="submit" class="btn btn-primary btn-lg" data-i18n="generatePassBtn">Generate Smart Slot Pass (QR)</button>
          </div>
        </form>
      </div>

      <!-- RIGHT COLUMN: CORE FEATURE — END-TO-END TICKET MILESTONE TRACKER & CONTROLS -->
      <div class="glass-card milestone-card">
        <div class="card-header">
          <div>
            <h2 class="card-title" data-i18n="milestoneTitle">End-to-End Ticket Milestone Tracker</h2>
            <p class="card-subtitle">Real-time telemetry tracking from slot issuance to bank credit</p>
          </div>
          <span class="badge badge-success font-mono" id="activeTokenBadge">${activeTicket.tokenId}</span>
        </div>

        <!-- 5-STEP LIVE PROGRESS STEPPER -->
        <div class="milestone-stepper-container" id="milestoneStepperBox">
          ${renderMilestoneStepperHTML(activeTicket)}
        </div>

        <!-- STEP DETAILS DISPLAY & LOG SENSOR READOUT -->
        <div class="milestone-detail-card" id="milestoneDetailLog">
          ${renderMilestoneLogHTML(activeTicket)}
        </div>

        <!-- ACTIONABLE CONTROLS BAR -->
        <div class="actionable-controls-bar margin-top-lg">
          <div class="control-btn-group">
            <button class="btn btn-sm btn-outline" id="btnApproveOverride" data-i18n="btnApproveOverride">
              ⚡ Approve / Override Slot
            </button>
            <button class="btn btn-sm btn-outline" id="btnRescheduleSlot" data-i18n="btnReschedule">
              📅 Reschedule Slot
            </button>
            <button class="btn btn-sm btn-primary" id="btnDigitalReceipt" data-i18n="btnDigitalReceipt">
              🎟️ Issue Digital Receipt
            </button>
          </div>

          <!-- STAGE ADVANCE SIMULATOR CONTROLS -->
          <div class="stage-sim-controls">
            <button class="btn btn-xs btn-subtle" id="btnResetStage" data-i18n="btnResetStage">
              🔄 Reset Stage
            </button>
            <button class="btn btn-xs btn-secondary" id="btnAdvanceStage" data-i18n="btnAdvanceStage">
              Simulate Next Stage →
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- RECENT ALLOCATED SLOTS TABLE -->
    <div class="glass-card full-width-card margin-top-lg">
      <div class="card-header">
        <h2 class="card-title">Recent Allocated Farmer Slots (Live Log Feed)</h2>
        <button class="btn btn-xs btn-subtle" id="refreshSlotsLog">🔄 Refresh Feed</button>
      </div>

      <div class="table-responsive">
        <table class="data-table">
          <thead>
            <tr>
              <th>Token ID</th>
              <th>Farmer Name</th>
              <th>Crop Type</th>
              <th>Est. Quantity</th>
              <th>Mandi Center</th>
              <th>Slot Time</th>
              <th>Milestone Stage</th>
            </tr>
          </thead>
          <tbody id="recentSlotsTbody">
            ${RECENT_SLOTS.map(s => `
              <tr>
                <td><strong class="font-mono">${s.tokenId}</strong></td>
                <td>${s.farmer}</td>
                <td>${s.crop}</td>
                <td>${s.qty}</td>
                <td>${s.mandi}</td>
                <td>${s.slotTime}</td>
                <td><span class="status-pill status-${s.status.toLowerCase().replace(/\s+/g, '-')}">${s.status}</span></td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- DIGITAL RECEIPT MODAL (HIDDEN BY DEFAULT) -->
    <div class="receipt-modal-backdrop" id="receiptModalBackdrop">
      <div class="receipt-modal-content glass-card">
        <div class="card-header">
          <h2 class="card-title">🧾 Digital Procurement Voucher & Receipt</h2>
          <button class="btn-close-modal" id="closeReceiptModal">&times;</button>
        </div>

        <div class="receipt-body-print" id="receiptPrintArea">
          <div class="receipt-header-brand">
            <h2>KisanSetu-Agri DSS • Official Voucher</h2>
            <p>Ministry of Agriculture & Food Corporation of India (FCI)</p>
          </div>

          <div class="receipt-grid">
            <div><strong>Token ID:</strong> <span id="recToken">${activeTicket.tokenId}</span></div>
            <div><strong>Farmer:</strong> <span id="recFarmer">${activeTicket.farmerName}</span></div>
            <div><strong>Aadhaar ID:</strong> <span id="recAadhaar">${activeTicket.maskedAadhaar}</span></div>
            <div><strong>Crop & Qty:</strong> <span id="recCrop">${activeTicket.crop} (${activeTicket.qtyQuintals} Qtl)</span></div>
            <div><strong>Mandi:</strong> <span id="recMandi">${activeTicket.mandi}</span></div>
            <div><strong>Quality Log:</strong> <span>12.2% Moisture • Grade A</span></div>
            <div><strong>Total MSP Value:</strong> <strong class="text-teal">₹2,04,750</strong></div>
            <div><strong>PFMS UTR:</strong> <span class="font-mono">SBI9912083100</span></div>
          </div>

          <div class="receipt-qr-center">
            <img src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=${activeTicket.tokenId}" alt="Voucher QR Code" class="receipt-qr-img">
            <p class="receipt-qr-sub">Scan at Weighbridge Gate Scanner for instant clearance</p>
          </div>
        </div>

        <div class="receipt-modal-footer">
          <button class="btn btn-outline" id="closeModalBtn">Close</button>
          <button class="btn btn-primary" id="printReceiptBtn">🖨️ Print / Save Voucher</button>
        </div>
      </div>
    </div>
  `;

  attachPhase2EventListeners();
}

/**
 * Renders the 5-Step Milestone Stepper HTML
 */
function renderMilestoneStepperHTML(ticket) {
  const current = ticket.currentStage;

  const steps = [
    { num: 1, title: "Token Issued", icon: "🎫" },
    { num: 2, title: "Mandi Arrival", icon: "🚛" },
    { num: 3, title: "Weighment & Quality", icon: "⚖️" },
    { num: 4, title: "Lot Graded", icon: "🌾" },
    { num: 5, title: "Payment Disbursed", icon: "💳" }
  ];

  return `
    <div class="stepper-track">
      ${steps.map(step => {
        let stateClass = 'upcoming';
        if (step.num < current) stateClass = 'completed';
        else if (step.num === current) stateClass = 'active';

        return `
          <div class="stepper-step step-${stateClass}" data-step-num="${step.num}">
            <div class="step-circle">
              ${stateClass === 'completed' ? '✓' : step.icon}
            </div>
            <span class="step-label">${step.title}</span>
          </div>
        `;
      }).join('')}
    </div>
  `;
}

/**
 * Renders detailed log output for the current milestone stage
 */
function renderMilestoneLogHTML(ticket) {
  const stage = ticket.currentStage;
  const logs = ticket.stageLogs;

  const currentLog = logs[`stage${stage}`] || logs.stage1;

  return `
    <div class="log-banner stage-banner-${stage}">
      <div class="log-title-row">
        <span class="log-stage-tag">Stage ${stage} of 5 Active</span>
        <span class="log-timestamp font-mono">${currentLog.timestamp}</span>
      </div>
      <h3 class="log-heading">${currentLog.title}</h3>
      <p class="log-detail-text">${currentLog.detail}</p>
    </div>

    <div class="log-sensor-grid">
      <div class="sensor-box">
        <span class="sensor-title">Digital Scale Net Weight</span>
        <strong class="sensor-value font-mono">9,000 Kg (90.0 Qtl)</strong>
      </div>
      <div class="sensor-box">
        <span class="sensor-title">Moisture Sensor Log</span>
        <strong class="sensor-value text-teal font-mono">12.2% (Grade A Optimal)</strong>
      </div>
      <div class="sensor-box">
        <span class="sensor-title">MSP Dynamic Pricing</span>
        <strong class="sensor-value font-mono">₹2,275 / Quintal</strong>
      </div>
      <div class="sensor-box">
        <span class="sensor-title">PFMS DBT Payment Status</span>
        <strong class="sensor-value ${stage === 5 ? 'text-teal' : 'text-amber'} font-mono">${stage === 5 ? 'DISBURSED (SBI9912)' : 'PENDING STAGE 5'}</strong>
      </div>
    </div>
  `;
}

function attachPhase2EventListeners() {
  const mandiSelect = document.getElementById('simMandiSelect');
  const qtyInput = document.getElementById('simQtyInput');

  // Dynamic AI Throttling Update
  function updateAIRecommendation() {
    const mandiName = mandiSelect.value;
    const qty = parseInt(qtyInput.value) || 90;

    const recommendText = document.getElementById('aiRecommendedSlotText');
    const savingsText = document.getElementById('aiRecommendedSavings');
    const occText = document.getElementById('aiWarehouseOcc');
    const queueText = document.getElementById('aiTruckQueue');
    const effBadge = document.getElementById('aiEfficiencyBadge');

    if (mandiName.includes('Suratgarh')) {
      effBadge.textContent = '64% Queue Efficiency';
      effBadge.className = 'badge badge-danger font-mono';
      recommendText.textContent = `High Delay Alert at ${mandiName}!`;
      savingsText.innerHTML = `Recommended Reroute: Slot at <strong>Anupgarh Silo #109</strong> saves 2.5 hours wait.`;
      occText.textContent = '89% (Congested)';
      queueText.textContent = '48 Trucks';
    } else if (mandiName.includes('Karnal')) {
      effBadge.textContent = '85% Queue Efficiency';
      effBadge.className = 'badge badge-warning font-mono';
      recommendText.textContent = `Moderate Queue at ${mandiName}`;
      savingsText.innerHTML = `Recommended arrival at <strong>11:15 AM (Gate 3)</strong> — Saves 25 minutes wait.`;
      occText.textContent = '72% (Moderate)';
      queueText.textContent = '24 Trucks';
    } else {
      effBadge.textContent = '98% Queue Efficiency';
      effBadge.className = 'badge badge-success font-mono';
      recommendText.textContent = `Recommended Arrival Slot: 10:30 AM at ${mandiName}`;
      savingsText.innerHTML = `Optimal logistics window. Saves an estimated <strong>45 minutes gate delay</strong>.`;
      occText.textContent = '64% (Optimal)';
      queueText.textContent = '12 Trucks';
    }
  }

  if (mandiSelect && qtyInput) {
    mandiSelect.addEventListener('change', updateAIRecommendation);
    qtyInput.addEventListener('input', updateAIRecommendation);
  }

  // Booking Form Simulator Submission
  const simForm = document.getElementById('slotBookingSimulatorForm');
  if (simForm) {
    simForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const farmerName = document.getElementById('simFarmerName').value;
      const aadhaar = document.getElementById('simAadhaar').value;
      const crop = document.getElementById('simCropSelect').value;
      const qty = document.getElementById('simQtyInput').value;
      const mandi = document.getElementById('simMandiSelect').value;

      const newTokenId = "KS-2026-" + Math.floor(8000 + Math.random() * 1900);

      activeTicket.tokenId = newTokenId;
      activeTicket.farmerName = farmerName;
      activeTicket.maskedAadhaar = aadhaar;
      activeTicket.crop = crop;
      activeTicket.qtyQuintals = qty;
      activeTicket.mandi = mandi;
      activeTicket.currentStage = 1;

      // Update UI elements
      document.getElementById('activeTokenBadge').textContent = newTokenId;
      document.getElementById('milestoneStepperBox').innerHTML = renderMilestoneStepperHTML(activeTicket);
      document.getElementById('milestoneDetailLog').innerHTML = renderMilestoneLogHTML(activeTicket);

      speakText(`Smart slot pass generated successfully. Token ID ${newTokenId} for ${farmerName}. Mandi center ${mandi}.`);
    });
  }

  // Stage Advance Simulator Controls
  const btnAdvance = document.getElementById('btnAdvanceStage');
  if (btnAdvance) {
    btnAdvance.addEventListener('click', () => {
      if (activeTicket.currentStage < 5) {
        activeTicket.currentStage++;
        document.getElementById('milestoneStepperBox').innerHTML = renderMilestoneStepperHTML(activeTicket);
        document.getElementById('milestoneDetailLog').innerHTML = renderMilestoneLogHTML(activeTicket);

        const currentLogTitle = activeTicket.stageLogs[`stage${activeTicket.currentStage}`].title;
        speakText(`Ticket ${activeTicket.tokenId} updated to stage ${activeTicket.currentStage}. ${currentLogTitle}.`);
      } else {
        alert("Ticket is already at final Stage 5 (Payment Disbursed via PFMS DBT).");
      }
    });
  }

  const btnReset = document.getElementById('btnResetStage');
  if (btnReset) {
    btnReset.addEventListener('click', () => {
      activeTicket.currentStage = 1;
      document.getElementById('milestoneStepperBox').innerHTML = renderMilestoneStepperHTML(activeTicket);
      document.getElementById('milestoneDetailLog').innerHTML = renderMilestoneLogHTML(activeTicket);
      speakText(`Ticket ${activeTicket.tokenId} reset to Stage 1.`);
    });
  }

  // Actionable Control Buttons
  const btnApproveOverride = document.getElementById('btnApproveOverride');
  if (btnApproveOverride) {
    btnApproveOverride.addEventListener('click', () => {
      alert(`Supervisory Directive: Slot for ${activeTicket.tokenId} has been force-approved by Mandi Admin.`);
      speakText("Slot approval override applied by administrator.");
    });
  }

  const btnRescheduleSlot = document.getElementById('btnRescheduleSlot');
  if (btnRescheduleSlot) {
    btnRescheduleSlot.addEventListener('click', () => {
      const newTime = prompt("Enter new rescheduled slot time:", "08 Sep 2026, 02:30 PM");
      if (newTime) {
        activeTicket.slotTime = newTime;
        alert(`Slot for ${activeTicket.tokenId} rescheduled to ${newTime}. SMS updated.`);
        speakText(`Slot rescheduled to ${newTime}.`);
      }
    });
  }

  // Issue Digital Receipt Modal
  const btnDigitalReceipt = document.getElementById('btnDigitalReceipt');
  const receiptBackdrop = document.getElementById('receiptModalBackdrop');
  const closeReceiptModal = document.getElementById('closeReceiptModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const printReceiptBtn = document.getElementById('printReceiptBtn');

  if (btnDigitalReceipt && receiptBackdrop) {
    btnDigitalReceipt.addEventListener('click', () => {
      document.getElementById('recToken').textContent = activeTicket.tokenId;
      document.getElementById('recFarmer').textContent = activeTicket.farmerName;
      document.getElementById('recAadhaar').textContent = activeTicket.maskedAadhaar;
      document.getElementById('recCrop').textContent = `${activeTicket.crop} (${activeTicket.qtyQuintals} Qtl)`;
      document.getElementById('recMandi').textContent = activeTicket.mandi;

      receiptBackdrop.classList.add('active');
      speakText(`Digital voucher receipt generated for token ${activeTicket.tokenId}.`);
    });

    [closeReceiptModal, closeModalBtn].forEach(btn => {
      if (btn) {
        btn.addEventListener('click', () => {
          receiptBackdrop.classList.remove('active');
        });
      }
    });

    if (printReceiptBtn) {
      printReceiptBtn.addEventListener('click', () => {
        window.print();
      });
    }
  }

  // Voice Read Instructions
  const voiceReadout = document.getElementById('voiceFormReadout');
  if (voiceReadout) {
    voiceReadout.addEventListener('click', () => {
      speakText("Smart Slot Booking Simulator. Select crop type, quantity, preferred mandi center, and view AI throttling recommendation.");
    });
  }

  const headerVoice = document.getElementById('speakBookingHelp');
  if (headerVoice) {
    headerVoice.addEventListener('click', () => {
      speakText("Farmers can simulate booking and track their ticket live from token generation to bank payment disbursement.");
    });
  }
}
