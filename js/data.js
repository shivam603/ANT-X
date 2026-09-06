/**
 * KisanSetu-Agri DSS - Core Data Repository
 * Data for Mandis, slots, weighbridges, procurement analytics, fraud detection, Bhashini AI, and HITL Learning Logs
 */

export const KPI_DATA = {
  slotsAllocated: 1250,
  slotsTrend: "+12.4%",
  pendingCheckins: 142,
  pendingAlert: "High queue at Suratgarh Mandi #104",
  demurrageSavedLakhs: 48.5,
  demurrageSavedText: "₹48.5 Lakhs",
  activeMandis: 28,
  activeStates: 12
};

export const CHART_DATA_7DAYS = {
  labels: ["01 Sep (Mon)", "02 Sep (Tue)", "03 Sep (Wed)", "04 Sep (Thu)", "05 Sep (Fri)", "06 Sep (Sat)", "07 Sep (Sun)"],
  inflowMT: [14200, 18500, 22100, 26400, 24800, 19200, 15800],
  capacityMT: [25000, 25000, 25000, 25000, 25000, 25000, 25000],
  procurementMT: [12100, 16200, 20400, 23900, 22100, 17800, 14100]
};

export const URGENT_ALERTS = [
  {
    id: "ALT-104",
    severity: "red",
    badge: "CRITICAL QUEUE",
    title: "Queue congestion at Mandi #104 (Suratgarh Mandi)",
    desc: "48 heavy trucks waiting at weighbridge Gate 2. Est. delay: 3.5 hours. Recommended rerouting 15 trucks to nearby Anupgarh Silo #109.",
    time: "10 mins ago",
    mandi: "Suratgarh Mandi #104",
    actionRequired: "Reroute Traffic",
    speechText: "Alert: Queue congestion at Mandi 104 Suratgarh. 48 trucks waiting."
  },
  {
    id: "ALT-DBT-92",
    severity: "yellow",
    badge: "DBT PAYMENT SYNC",
    title: "DBT payment failure sync for 12 farmers",
    desc: "Bank Gateway Timeout encountered during Public Financial Management System (PFMS) batch sync for SBI/PNB accounts. Total amount blocked: ₹8.42 Lakhs.",
    time: "25 mins ago",
    mandi: "Karnal APMC #201",
    actionRequired: "Retry Batch Sync",
    speechText: "Warning: DBT payment sync failed for 12 farmers due to bank gateway timeout."
  },
  {
    id: "ALT-FRD-09",
    severity: "red",
    badge: "YIELD MISMATCH",
    title: "Yield limit mismatch flagged for Trader X (M/s Agrotech Global)",
    desc: "Declared harvest: 40 Quintals/Acre vs Historical Maximum: 22 Quintals/Acre for Paddy Grade A in District Bathinda. Satellite NDVI cross-check confidence: 94% anomaly.",
    time: "42 mins ago",
    mandi: "Khanna Mandi #101",
    actionRequired: "Freeze Procurement Token",
    speechText: "Urgent: Yield limit mismatch flagged for Trader X. Declared 40 quintals per acre vs max 22."
  },
  {
    id: "ALT-SILO-05",
    severity: "green",
    badge: "CAPACITY BOOST",
    title: "New Silo Storage online at Khanna Mandi",
    desc: "Modern steel silo complex with +5,000 MT temperature-controlled grain storage successfully linked to KisanSetu DSS system.",
    time: "1 hour ago",
    mandi: "Khanna Mandi #101",
    actionRequired: "Acknowledge Capacity",
    speechText: "Info: New Silo storage online at Khanna Mandi adding 5,000 MT capacity."
  }
];

export const MANDI_LIST = [
  { id: "101", name: "Khanna Mandi #101", state: "Punjab", capacity: "35,000 MT", status: "Optimal", queue: 12, eff: "98%", marker: "green" },
  { id: "104", name: "Suratgarh Mandi #104", state: "Rajasthan", capacity: "18,000 MT", status: "Bottlenecked", queue: 48, eff: "64%", marker: "red" },
  { id: "201", name: "Karnal APMC #201", state: "Haryana", capacity: "28,000 MT", status: "Heavy Load", queue: 24, eff: "85%", marker: "yellow" },
  { id: "305", name: "Nizamabad APMC #305", state: "Telangana", capacity: "22,000 MT", status: "Optimal", queue: 8, eff: "96%", marker: "green" },
  { id: "402", name: "Rajkot Grain Market #402", state: "Gujarat", capacity: "30,000 MT", status: "Optimal", queue: 15, eff: "92%", marker: "green" },
  { id: "508", name: "Indore Mandi #508", state: "Madhya Pradesh", capacity: "40,000 MT", status: "Heavy Load", queue: 29, eff: "79%", marker: "yellow" }
];

export const RECENT_SLOTS = [
  { tokenId: "KS-2026-9081", farmer: "Gurpreet Singh", phone: "98765-XXXX1", crop: "Paddy (Grade A)", qty: "150 Qtl", mandi: "Khanna Mandi #101", slotTime: "07 Sep 2026, 09:30 AM", status: "Checked In" },
  { tokenId: "KS-2026-9082", farmer: "Rameshwar Prasad", phone: "94123-XXXX8", crop: "Wheat (Sharbati)", qty: "85 Qtl", mandi: "Karnal APMC #201", slotTime: "07 Sep 2026, 10:15 AM", status: "In Queue" },
  { tokenId: "KS-2026-9083", farmer: "Venkat Rao", phone: "91002-XXXX3", crop: "Maize / Corn", qty: "110 Qtl", mandi: "Nizamabad APMC #305", slotTime: "07 Sep 2026, 11:00 AM", status: "Approved" },
  { tokenId: "KS-2026-9084", farmer: "Patel Dahyabhai", phone: "97234-XXXX9", crop: "Mustard Seeds", qty: "60 Qtl", mandi: "Rajkot Grain #402", slotTime: "07 Sep 2026, 11:45 AM", status: "Weighed" },
  { tokenId: "KS-2026-9085", farmer: "Sukhwinder Kaur", phone: "98140-XXXX2", crop: "Paddy (Grade A)", qty: "200 Qtl", mandi: "Suratgarh #104", slotTime: "07 Sep 2026, 12:30 PM", status: "Delayed" }
];

export const LIVE_WEIGHBRIDGE_TRUCKS = [
  {
    tokenNo: "KS-2026-8802",
    vehicleNo: "PB-11-CB-8921",
    vehicleType: "12-Wheeler Heavy Truck",
    farmer: "Sukhdev Sharma",
    crop: "Wheat (Sharbati)",
    grossKg: 28450,
    tareKg: 10200,
    netKg: 18250,
    netQuintals: "182.50 Qtl",
    estWait: "14 mins",
    gatePass: "GP-99120",
    mandi: "Khanna Mandi #101",
    status: "Weighing Net"
  },
  {
    tokenNo: "KS-2026-8805",
    vehicleNo: "HR-05-AX-4412",
    vehicleType: "Tractor Trolley",
    farmer: "Jaipal Sharma",
    crop: "Wheat (Sharbati)",
    grossKg: 22100,
    tareKg: 9100,
    netKg: 13000,
    netQuintals: "130.00 Qtl",
    estWait: "22 mins",
    gatePass: "GP-99121",
    mandi: "Karnal APMC #201",
    status: "Tare Pending"
  },
  {
    tokenNo: "KS-2026-8809",
    vehicleNo: "RJ-13-GA-1092",
    vehicleType: "Heavy Truck",
    farmer: "Bhuraram Jat",
    crop: "Mustard Seeds",
    grossKg: 19800,
    tareKg: 8500,
    netKg: 11300,
    netQuintals: "113.00 Qtl",
    estWait: "45 mins",
    gatePass: "GP-99122",
    mandi: "Suratgarh Mandi #104",
    status: "Gross Weighed"
  },
  {
    tokenNo: "KS-2026-8814",
    vehicleNo: "MP-09-HH-3390",
    vehicleType: "Tractor Trolley",
    farmer: "Kamlesh Yadav",
    crop: "Chana (Gram)",
    grossKg: 24500,
    tareKg: 9800,
    netKg: 14700,
    netQuintals: "147.00 Qtl",
    estWait: "08 mins",
    gatePass: "GP-99123",
    mandi: "Indore Mandi #508",
    status: "Gate Check-in"
  }
];

export const SATELLITE_YIELD_CROSS_VERIFICATIONS = [
  {
    farmerId: "Farmer ID #9821",
    farmerName: "Ramswaroop Singh",
    aadhaarMasked: "XXXX-XXXX-9821",
    crop: "Paddy (Grade A)",
    landAreaAcres: 4.5,
    declaredQtyQtl: 150,
    landLimitMaxQtl: 90,
    discrepancyPct: "+66.7% Over Limit",
    ndviConfidence: "96% AI Anomaly Flag",
    mandi: "Suratgarh Mandi #104",
    status: "Flagged for Review",
    actionState: "pending"
  },
  {
    farmerId: "Farmer ID #4402",
    farmerName: "Harbhajan Kaur",
    aadhaarMasked: "XXXX-XXXX-4402",
    crop: "Wheat (Sharbati)",
    landAreaAcres: 8.0,
    declaredQtyQtl: 240,
    landLimitMaxQtl: 220,
    discrepancyPct: "+9.1% Minor Variance",
    ndviConfidence: "89% Normal Range",
    mandi: "Khanna Mandi #101",
    status: "Optimal Verified",
    actionState: "approved"
  },
  {
    farmerId: "Farmer ID #7719",
    farmerName: "Trader M/s Agrotech",
    aadhaarMasked: "XXXX-XXXX-7719",
    crop: "Mustard Seeds",
    landAreaAcres: 2.0,
    declaredQtyQtl: 110,
    landLimitMaxQtl: 40,
    discrepancyPct: "+175% High Surge",
    ndviConfidence: "99% High Risk Flag",
    mandi: "Rajkot Grain #402",
    status: "Blocked & Inspector Notified",
    actionState: "blocked"
  }
];

// Phase 4: Human-in-the-Loop (HITL) System Learning Feed Logs
export const HITL_OVERRIDE_LOGS = [
  {
    id: "HITL-LOG-901",
    timestamp: "07 Sep 2026, 02:34 PM",
    adminId: "FCI Central Admin (#ADM-9012)",
    entity: "Farmer ID #9821 (Ramswaroop Singh)",
    action: "Approved Yield Limit Override (150 Qtl)",
    systemMsg: "Override logged. AI model updated with new seasonal intake constraint.",
    rlConfidenceUpdate: "+0.04 RL Weight Adjustment",
    mandi: "Suratgarh Mandi #104"
  },
  {
    id: "HITL-LOG-900",
    timestamp: "07 Sep 2026, 01:15 PM",
    adminId: "Mandi Officer (#MO-2201)",
    entity: "Slot Token #KS-2026-8802",
    action: "Overrode Gate Arrival Capacity Threshold (+15 Trucks)",
    systemMsg: "Override logged. AI model updated with new seasonal intake constraint.",
    rlConfidenceUpdate: "+0.02 RL Weight Adjustment",
    mandi: "Khanna Mandi #101"
  }
];

export function logHITLOverride(adminId, actionDetails, entityName) {
  const newLog = {
    id: "HITL-LOG-" + Math.floor(902 + Math.random() * 900),
    timestamp: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
    adminId: adminId || "FCI Central Admin (#ADM-9012)",
    entity: entityName || "Slot / Yield Override Target",
    action: actionDetails || "Manual Administrative Capacity Override",
    systemMsg: "Override logged. AI model updated with new seasonal intake constraint.",
    rlConfidenceUpdate: "+0.03 RL Weight Adjustment",
    mandi: "Central Procurement DSS"
  };

  HITL_OVERRIDE_LOGS.unshift(newLog);
  return newLog;
}

export const BHASHINI_SAMPLE_QUERIES = [
  {
    query: "Mera token kab aayega?",
    lang: "hi",
    answer: "Aapka active token #KS-2026-8802 (Sukhdev Sharma) Stage 3 me hai. Weighbridge Gate 2 me approx 14 minute me aapka number aayega.",
    audioText: "आपका एक्टिव टोकन KS-2026-8802 स्टेज 3 में है। 14 मिनट में वेब्रिज पर नंबर आएगा।"
  },
  {
    query: "Suratgarh Mandi me queue kitna hai?",
    lang: "hi",
    answer: "Suratgarh Mandi #104 me filhaal 48 trucks queue me hain. Estimated delay 3.5 ghante hai. Reroute recommendation: Anupgarh Silo #109.",
    audioText: "सूरजगढ़ मंडी 104 में 48 ट्रक कतार में हैं। 3.5 घंटे का समय लगेगा।"
  },
  {
    query: "Wheat ka MSP rate kya hai?",
    lang: "hi",
    answer: "Rabi 2026 season ke liye Wheat (Sharbati Grade) ka official MSP rate ₹2,275 per Quintal hai.",
    audioText: "गेहूं का आधिकारिक एमएसपी दर ₹2,275 प्रति क्विंटल है।"
  }
];

export const ACTIVE_MILESTONE_TICKETS = [
  {
    tokenId: "KS-2026-8802",
    farmerName: "Sukhdev Sharma",
    maskedAadhaar: "XXXX-XXXX-9918",
    phone: "98120-XXXX1",
    crop: "Wheat (Sharbati Premium)",
    qtyQuintals: 90,
    mandi: "Khanna Mandi #101 (Gate 2)",
    slotTime: "07 Sep 2026, 10:30 AM",
    currentStage: 3,
    stageLogs: {
      stage1: { title: "Token Issued", detail: "Digital SMS & WhatsApp voucher generated", timestamp: "07 Sep, 08:15 AM", code: "PASS-99182" },
      stage2: { title: "Mandi Arrival", detail: "Scanned at Weighbridge Gate 02", timestamp: "07 Sep, 09:42 AM", lane: "Lane B" },
      stage3: { title: "Weighment & Quality Check", detail: "Net Weight: 9,000 kg | Moisture: 12.2% (Optimal < 14%)", timestamp: "07 Sep, 10:10 AM", sensorId: "IOT-MOIST-901" },
      stage4: { title: "Lot Accepted / Graded", detail: "Grade A Approved @ MSP Rate ₹2,275/Qtl", timestamp: "07 Sep, 10:25 AM", grossValue: "₹2,04,750" },
      stage5: { title: "Payment Disbursed", detail: "PFMS DBT Direct Bank Credit Completed", timestamp: "Pending Final Dispatch", utr: "SBI9912083100" }
    }
  }
];

export const HEATMAP_STATES = [
  { state: "Punjab", progressPct: 88, targetMT: "125,000 MT", procuredMT: "110,000 MT", activeMandis: 42, risk: "Low" },
  { state: "Haryana", progressPct: 81, targetMT: "95,000 MT", procuredMT: "76,950 MT", activeMandis: 35, risk: "Low" },
  { state: "Madhya Pradesh", progressPct: 74, targetMT: "140,000 MT", procuredMT: "103,600 MT", activeMandis: 58, risk: "Medium" },
  { state: "Uttar Pradesh", progressPct: 69, targetMT: "180,000 MT", procuredMT: "124,200 MT", activeMandis: 72, risk: "Medium" },
  { state: "Rajasthan", progressPct: 62, targetMT: "70,000 MT", procuredMT: "43,400 MT", activeMandis: 29, risk: "High Congestion" },
  { state: "Gujarat", progressPct: 78, targetMT: "65,000 MT", procuredMT: "50,700 MT", activeMandis: 24, risk: "Low" },
  { state: "Telangana", progressPct: 85, targetMT: "85,000 MT", procuredMT: "72,250 MT", activeMandis: 31, risk: "Low" }
];

export const FRAUD_ANOMALIES = SATELLITE_YIELD_CROSS_VERIFICATIONS;
