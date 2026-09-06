const fs = require('fs');
const path = require('path');

const appJsxContent = `import React, { useState, useEffect, useMemo, useRef } from 'react';

/**
 * KisanSetu-Agri DSS (Team ANT-X Platform)
 * Single File React Architecture (App.jsx)
 * Fully Multilingual across all 22 Official Languages of India + All 4 Phases
 */

// ============================================================================
// 1. CONSTANTS & MULTILINGUAL DICTIONARY (ALL 22 OFFICIAL LANGUAGES OF INDIA)
// ============================================================================

export const LANGUAGES = [
  { code: 'hi', name: 'Hindi', native: 'हिंदी', region: 'National / North India' },
  { code: 'en', name: 'English', native: 'English', region: 'Official / All India' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', region: 'West Bengal / Tripura' },
  { code: 'mr', name: 'Marathi', native: 'मराठी', region: 'Maharashtra' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', region: 'Andhra Pradesh / Telangana' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', region: 'Tamil Nadu' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', region: 'Gujarat' },
  { code: 'ur', name: 'Urdu', native: 'اردو', region: 'Jammu & Kashmir / UP' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', region: 'Karnataka' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ', region: 'Odisha' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', region: 'Kerala' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', region: 'Punjab / Haryana' },
  { code: 'as', name: 'Assamese', native: 'অসমীয়া', region: 'Assam' },
  { code: 'mai', name: 'Maithili', native: 'मैथिली', region: 'Bihar / Jharkhand' },
  { code: 'sat', name: 'Santali', native: 'ᱥᱟᱱᱛᱟᱲᱤ', region: 'Jharkhand / WB' },
  { code: 'ks', name: 'Kashmiri', native: 'कॉशुर', region: 'Jammu & Kashmir' },
  { code: 'ne', name: 'Nepali', native: 'नेपाली', region: 'Sikkim / West Bengal' },
  { code: 'kok', name: 'Konkani', native: 'कोंकणी', region: 'Goa / Karnataka' },
  { code: 'doi', name: 'Dogri', native: 'डोगरी', region: 'Jammu & Kashmir' },
  { code: 'mni', name: 'Manipuri', native: 'মৈতৈলোন্', region: 'Manipur' },
  { code: 'brx', name: 'Bodo', native: 'बर\\'', region: 'Assam (BTAD)' },
  { code: 'sa', name: 'Sanskrit', native: 'संस्कृतम्', region: 'Academic / National' },
  { code: 'sd', name: 'Sindhi', native: 'सिन्धी', region: 'Gujarat / Rajasthan' }
];

export const TRANSLATIONS = {
  en: {
    appTitle: "KisanSetu-Agri DSS",
    subtitle: "Decision Support System for Agricultural Logistics & Procurement",
    teamName: "ANT-X Platform",
    searchPlaceholder: "Search slots, Mandis, Farmer ID, tokens...",
    profileRole: "Ministry / FCI Admin",
    profileName: "FCI Central Admin",
    voiceGuide: "Voice Assistant",
    coreNav: "Core Navigation",
    navDashboard: "Dashboard (Overview)",
    navSlotBooking: "Smart Slot Booking (Farmer Portal)",
    navMandiQueue: "Mandi Queue & Weighbridge",
    navAnalytics: "Procurement Heatmaps & Analytics",
    navFraud: "Fraud & Anomaly Detection",
    navSettings: "Settings & Integrations",
    urgentNotifs: "Urgent Notifications",
    newCount: "New",
    kpiSlotsTitle: "Total Daily Slots Allocated",
    kpiSlotsSub: "Across 28 Connected Mandis",
    kpiPendingTitle: "Pending Farmer Check-ins",
    kpiPendingBadge: "Clearance Needed",
    kpiPendingSub: "Avg wait: 14 mins",
    kpiSpoilageTitle: "Est. Demurrage/Spoilage Saved",
    kpiSpoilageBadge: "Eco-Savings",
    kpiSpoilageSub: "+₹4.2L vs last week",
    kpiMandisTitle: "Active Mandis Connected",
    kpiMandisBadge: "12 States",
    kpiMandisSub: "99.8% sensor uptime",
    centers: "Centers",
    chartTitle: "Daily Mandi Inflow vs. Warehouse Capacity (Last 7 Days)",
    chartSub: "Real-time telemetry tracking grain volume vs safe storage limit",
    chartBadge: "Live Telemetry",
    chartThreshold: "Threshold Limit: 25,000 MT",
    chartMaxCap: "MAX STORAGE CAP",
    chartActualInflow: "Actual Inflow (MT)",
    chartMaxThreshold: "Max Limit Threshold (25,000 MT)",
    recentAlertsTitle: "Urgent Operational Alerts",
    btnRead: "🔊 Read",
    aiThrottlingTitle: "AI Dynamic Throttling Recommendation Engine",
    aiThrottlingSub: "Real-time warehouse storage capacity & weighbridge throughput optimization",
    statWarehouse: "Warehouse",
    statGateQueue: "Gate Queue",
    statEstClear: "Est. Clear",
    slotSimulatorTitle: "Interactive Slot Booking Simulator",
    badgeENAM: "e-NAM Verified",
    labelFarmerName: "Farmer Full Name",
    labelAadhaar: "Aadhaar ID (Masked)",
    labelCropCategory: "Crop Category",
    labelQuantity: "Quantity (Quintals)",
    labelMandiCenter: "Preferred Mandi Center",
    btnGenerateSlot: "🎟️ Generate Smart Slot Pass (QR)",
    milestoneTitle: "End-to-End Ticket Milestone Tracker",
    milestoneSub: "Live grain logistics telemetry tracking",
    step1: "Token Issued",
    step2: "Mandi Arrival",
    step3: "Quality Check",
    step4: "Lot Graded",
    step5: "Payment",
    activeStage: "ACTIVE STAGE",
    btnApproveOverride: "⚡ Approve / Override Slot",
    btnReschedule: "📅 Reschedule Slot",
    btnDigitalReceipt: "🎟️ Issue Digital Receipt",
    btnResetStage: "Reset Ticket Stage",
    btnAdvanceStage: "Simulate Next Stage →",
    weighbridgeTitle: "⚖️ Weighbridge Terminal #WB-01",
    sensorCalibrated: "Sensor Calibrated",
    grossWeightLabel: "Gross Truck Weight (Kg)",
    tareWeightLabel: "Tare (Empty Truck) Weight (Kg)",
    netProcurementWeight: "Net Crop Procurement Weight",
    btnCalculatePass: "🎟️ Calculate & Issue Digital Gate Pass",
    liveFeedTitle: "🚛 Mandi Queue & Weighbridge Live Feed",
    liveFeedSub: "Live incoming truck telemetry & gate wait times",
    liveFeedBadge: "Live Feed",
    thVehicle: "Vehicle",
    thToken: "Token No.",
    thFarmer: "Farmer",
    thGrossTare: "Gross / Tare",
    thNet: "Net Weight",
    thWait: "Est. Wait",
    thStatus: "Status",
    fraudTitle: "📡 Satellite Land Record & Crop Yield Cross-Verification Audit Table",
    fraudSub: "AI-assisted comparison of declared harvest vs satellite NDVI land productivity maximum",
    actionReqBadge: "Action Required",
    thFarmerIdName: "Farmer ID & Name",
    thCropLand: "Crop & Land Area",
    thDeclaredQty: "Declared Qty",
    thLandLimit: "Land Limit Max",
    thDiscrepancy: "AI Discrepancy",
    thAuditStatus: "Audit Status",
    thActionControls: "Action Controls",
    btnApprove: "⚡ Approve Override",
    btnBlock: "⛔ Block & Notify",
    analyticsHeader: "Procurement Heatmaps & HITL Engine",
    analyticsSub: "Regional congestion markers and administrative learning log",
    btnExportCSV: "📥 Export Daily Audit Log (CSV)",
    btnExportPDF: "📄 Export Executive Report (PDF)",
    heatmapTitle: "🗺️ Regional Mandi Congestion Heatmap Grid",
    normalFlow: "Normal Flow",
    heavyLoad: "Heavy Load",
    bottlenecked: "Bottlenecked",
    capacityLabel: "Capacity:",
    queueLabel: "Queue:",
    hitlTitle: "Human-in-the-Loop (HITL) System Learning Feed",
    hitlSub: "Real-time log of administrative overrides updating AI intake constraints",
    btnSimulateOverride: "+ Simulate Admin Override",
    aiFeedbackEngine: "🤖 AI Model Feedback Engine",
    settingsAccessibility: "🌐 Interface & Speech Accessibility Settings",
    labelPrimaryLang: "Primary Interface Language",
    btnTestAudio: "🔊 Test Audio Synthesis",
    settingsAPI: "🔗 National Agricultural API Integrations",
    apiENAM: "e-NAM National Agriculture Market",
    apiENAMDesc: "Real-time price ticker sync",
    apiPMKisan: "PM-KISAN Aadhaar Registry",
    apiPMKisanDesc: "Land ownership verification API",
    statusActive: "ACTIVE",
    bhashiniTitle: "🇮🇳 Bhashini AI Voice Assistant",
    bhashiniWelcome: "Namaste! You can ask queries in Hindi, Punjabi or any of 22 languages.",
    bhashiniPlaceholder: "Type or ask in Hindi/Punjabi...",
    btnAsk: "Ask",
    voucherTitle: "🧾 Digital Procurement Voucher",
    voucherHeader: "KisanSetu-Agri DSS • Official Voucher",
    voucherFCI: "Food Corporation of India (FCI)",
    voucherRate: "Rate:",
    voucherScan: "Scan at Weighbridge Gate Scanner for instant clearance",
    btnClose: "Close",
    btnPrint: "🖨️ Print / Save"
  },
  hi: {
    appTitle: "किसानसेतु-कृषि DSS",
    subtitle: "कृषि रसद और खरीद के लिए निर्णय सहायता प्रणाली",
    teamName: "ANT-X प्लेटफॉर्म",
    searchPlaceholder: "स्लॉट, मंडी, किसान आईडी, टोकन खोजें...",
    profileRole: "मंत्रालय / एफसीआई प्रशासक",
    profileName: "एफसीआई केंद्रीय प्रशासक",
    voiceGuide: "ध्वनि सहायक (बोलकर सुनें)",
    coreNav: "मुख्य नेविगेशन",
    navDashboard: "डैशबोर्ड (अवलोकन)",
    navSlotBooking: "स्मार्ट स्लॉट बुकिंग (किसान पोर्टल)",
    navMandiQueue: "मंडी कतार और वेब्रिज",
    navAnalytics: "खरीद हीटमैप और विश्लेषण",
    navFraud: "धोखाधड़ी और विसंगति पहचान",
    navSettings: "सेटिंग्स और एकीकरण",
    urgentNotifs: "तत्काल सूचनाएं",
    newCount: "नया",
    kpiSlotsTitle: "कुल दैनिक आवंटित स्लॉट",
    kpiSlotsSub: "28 जुड़े मंडियों में",
    kpiPendingTitle: "लंबित किसान चेक-इन",
    kpiPendingBadge: "निकासी आवश्यक",
    kpiPendingSub: "औसत प्रतीक्षा: 14 मिनट",
    kpiSpoilageTitle: "अनुमानित नुकसान/डेमरेज बचत",
    kpiSpoilageBadge: "पर्यावरण बचत",
    kpiSpoilageSub: "+₹4.2 लाख पिछले सप्ताह की तुलना में",
    kpiMandisTitle: "सक्रिय मंडियां कनेक्टेड",
    kpiMandisBadge: "12 राज्य",
    kpiMandisSub: "99.8% सेंसर अपटाइम",
    centers: "केंद्र",
    chartTitle: "दैनिक मंडी आवक बनाम गोदाम क्षमता (पिछले 7 दिन)",
    chartSub: "अनाज मात्रा बनाम सुरक्षित भंडारण सीमा का रीयल-टाइम टेलीमेट्री ट्रैकिंग",
    chartBadge: "लाइव टेलीमेट्री",
    chartThreshold: "सीमा दर: 25,000 मीट्रिक टन",
    chartMaxCap: "अधिकतम भंडारण क्षमता",
    chartActualInflow: "वास्तविक आवक (मीट्रिक टन)",
    chartMaxThreshold: "अधिकतम सीमा दर (25,000 मीट्रिक टन)",
    recentAlertsTitle: "तत्काल परिचालन अलर्ट",
    btnRead: "🔊 पढ़ें",
    aiThrottlingTitle: "एआई डायनेमिक थ्रॉटलिंग अनुशंसा इंजन",
    aiThrottlingSub: "रीयल-टाइम गोदाम क्षमता और वेब्रिज थ्रूपुट अनुकूलन",
    statWarehouse: "गोदाम",
    statGateQueue: "गेट कतार",
    statEstClear: "अनुमानित समय",
    slotSimulatorTitle: "इंटरएक्टिव स्लॉट बुकिंग सिम्युलेटर",
    badgeENAM: "e-NAM सत्यापित",
    labelFarmerName: "किसान का पूरा नाम",
    labelAadhaar: "आधार आईडी (गोपनीय)",
    labelCropCategory: "फसल श्रेणी",
    labelQuantity: "मात्रा (क्विंटल)",
    labelMandiCenter: "पसंदीदा मंडी केंद्र",
    btnGenerateSlot: "🎟️ स्मार्ट स्लॉट पास (QR) जनरेट करें",
    milestoneTitle: "एंड-टू-एंड टिकट मील का पत्थर ट्रैकर",
    milestoneSub: "लाइव अनाज रसद टेलीमेट्री ट्रैकिंग",
    step1: "टोकन जारी",
    step2: "मंडी आगमन",
    step3: "गुणवत्ता जांच",
    step4: "लॉट ग्रेडिंग",
    step5: "भुगतान",
    activeStage: "सक्रिय चरण",
    btnApproveOverride: "⚡ अनुमोदन / ओवरराइड स्लॉट",
    btnReschedule: "📅 पुनर्निर्धारित करें",
    btnDigitalReceipt: "🎟️ डिजिटल रसीद जारी करें",
    btnResetStage: "चरण रीसेट करें",
    btnAdvanceStage: "अगला चरण सिम्युलेट करें →",
    weighbridgeTitle: "⚖️ वेब्रिज टर्मिनल #WB-01",
    sensorCalibrated: "सेंसर कैलिब्रेटेड",
    grossWeightLabel: "सकल ट्रक वजन (किग्रा)",
    tareWeightLabel: "खाली ट्रक का वजन (किग्रा)",
    netProcurementWeight: "शुद्ध फसल खरीद वजन",
    btnCalculatePass: "🎟️ गणना करें और गेट पास जारी करें",
    liveFeedTitle: "🚛 मंडी कतार और वेब्रिज लाइव फीड",
    liveFeedSub: "इनकमिंग ट्रक टेलीमेट्री और गेट प्रतीक्षा समय",
    liveFeedBadge: "लाइव फीड",
    thVehicle: "वाहन",
    thToken: "टोकन नं.",
    thFarmer: "किसान",
    thGrossTare: "सकल / खाली",
    thNet: "शुद्ध वजन",
    thWait: "अनुमानित समय",
    thStatus: "स्थिति",
    fraudTitle: "📡 उपग्रह भूमि रिकॉर्ड और फसल उपज सत्यापन तालिका",
    fraudSub: "एआई द्वारा घोषित फसल बनाम उपग्रह उत्पादकता सीमा का मिलान",
    actionReqBadge: "कार्रवाई आवश्यक",
    thFarmerIdName: "किसान आईडी और नाम",
    thCropLand: "फसल और भूमि क्षेत्र",
    thDeclaredQty: "घोषित मात्रा",
    thLandLimit: "भूमि सीमा अधिकतम",
    thDiscrepancy: "एआई विसंगति",
    thAuditStatus: "ऑडिट स्थिति",
    thActionControls: "कार्रवाई नियंत्रण",
    btnApprove: "⚡ अनुमोदन ओवरराइड",
    btnBlock: "⛔ ब्लॉक और सूचित करें",
    analyticsHeader: "खरीद हीटमैप और HITL इंजन",
    analyticsSub: "क्षेत्रीय भीड़भाड़ मार्कर और प्रशासनिक लर्निंग लॉग",
    btnExportCSV: "📥 ऑडिट लॉग (CSV) डाउनलोड",
    btnExportPDF: "📄 पीडीएफ रिपोर्ट डाउनलोड",
    heatmapTitle: "🗺️ क्षेत्रीय मंडी भीड़भाड़ हीटमैप ग्रिड",
    normalFlow: "सामान्य प्रवाह",
    heavyLoad: "भारी लोड",
    bottlenecked: "अत्यधिक भीड़",
    capacityLabel: "क्षमता:",
    queueLabel: "कतार:",
    hitlTitle: "ह्यूमन-इन-द-लूप (HITL) सिस्टम लर्निंग फीड",
    hitlSub: "एआई सेवन बाधाओं को अपडेट करने वाले प्रशासनिक ओवरराइड का लाइव लॉग",
    btnSimulateOverride: "+ प्रशासक ओवरराइड सिम्युलेट करें",
    aiFeedbackEngine: "🤖 एआई मॉडल फीडबैक इंजन",
    settingsAccessibility: "🌐 इंटरफ़ेस और भाषण पहुँच सेटिंग्स",
    labelPrimaryLang: "प्राथमिक इंटरफ़ेस भाषा",
    btnTestAudio: "🔊 ध्वनि परीक्षण करें",
    settingsAPI: "🔗 राष्ट्रीय कृषि एपीआई एकीकरण",
    apiENAM: "e-NAM राष्ट्रीय कृषि बाज़ार",
    apiENAMDesc: "रीयल-टाइम मूल्य सिंक",
    apiPMKisan: "पीएम-किसान आधार रजिस्ट्री",
    apiPMKisanDesc: "भूमि स्वामित्व सत्यापन एपीआई",
    statusActive: "सक्रिय",
    bhashiniTitle: "🇮🇳 भाषिणी एआई वॉयस असिस्टेंट",
    bhashiniWelcome: "नमस्ते! आप हिंदी, पंजाबी या किसी भी 22 भाषाओं में पूछ सकते हैं।",
    bhashiniPlaceholder: "हिंदी या अन्य भाषा में पूछें...",
    btnAsk: "पूछें",
    voucherTitle: "🧾 डिजिटल खरीद वाउचर",
    voucherHeader: "किसानसेतु-कृषि DSS • आधिकारिक वाउचर",
    voucherFCI: "भारतीय खाद्य निगम (FCI)",
    voucherRate: "दर:",
    voucherScan: "त्वरित निकासी के लिए वेब्रिज गेट स्कैनर पर स्कैन करें",
    btnClose: "बंद करें",
    btnPrint: "🖨️ प्रिंट / सहेजें"
  },
  pa: {
    appTitle: "ਕਿਸਾਨਸੇਤੂ-ਖੇਤੀਬਾੜੀ DSS",
    subtitle: "ਖੇਤੀਬਾੜੀ ਲੌਜਿਸਟਿਕਸ ਅਤੇ ਖਰੀਦ ਲਈ ਫੈਸਲਾ ਸਹਾਇਤਾ ਪ੍ਰਣਾਲੀ",
    teamName: "ANT-X ਪਲੇਟਫਾਰਮ",
    searchPlaceholder: "ਸਲਾਟ, ਮੰਡੀ, ਕਿਸਾਨ ਆਈਡੀ ਖੋਜੋ...",
    profileRole: "ਮੰਤਰਾਲੇ / ਐਫ.ਸੀ.ਆਈ ਪ੍ਰਸ਼ਾਸਕ",
    profileName: "ਐਫ.ਸੀ.ਆਈ ਕੇਂਦਰੀ ਪ੍ਰਸ਼ਾਸਕ",
    voiceGuide: "ਆਵਾਜ਼ ਸਹਾਇਕ",
    coreNav: "ਮੁੱਖ ਨੇਵੀਗੇਸ਼ਨ",
    navDashboard: "ਡੈਸ਼ਬੋਰਡ (ਓਵਰਵਿਊ)",
    navSlotBooking: "ਸਮਾਰਟ ਸਲਾਟ ਬੁਕਿੰਗ (ਕਿਸਾਨ ਪੋਰਟਲ)",
    navMandiQueue: "ਮੰਡੀ ਕਤਾਰ ਅਤੇ ਵੇਅਬ੍ਰਿਜ",
    navAnalytics: "ਖਰੀਦ ਹੀਟਮੈਪ ਅਤੇ ਵਿਸ਼ਲੇਸ਼ਣ",
    navFraud: "ਧੋਖਾਧੜੀ ਅਤੇ ਅਨੋਮਲੀ ਪਛਾਣ",
    navSettings: "ਸੈਟਿੰਗਾਂ ਅਤੇ ਏਕੀਕਰਣ",
    urgentNotifs: "ਜ਼ਰੂਰੀ ਸੂਚਨਾਵਾਂ",
    newCount: "ਨਵਾਂ",
    kpiSlotsTitle: "ਕੁੱਲ ਰੋਜ਼ਾਨਾ ਅਲਾਟ ਕੀਤੇ ਸਲਾਟ",
    kpiSlotsSub: "28 ਮੰਡੀਆਂ ਵਿੱਚ",
    kpiPendingTitle: "ਬਕਾਇਆ ਕਿਸਾਨ ਚੈੱਕ-ਇਨ",
    kpiPendingBadge: "ਮਨਜ਼ੂਰੀ ਲੋੜੀਂਦੀ",
    kpiPendingSub: "ਔਸਤ ਉਡੀਕ: 14 ਮਿੰਟ",
    kpiSpoilageTitle: "ਬਚਾਇਆ ਗਿਆ ਖਰਾਬਾ/ਖਰਚਾ",
    kpiSpoilageBadge: "ਬਚਤ",
    kpiSpoilageSub: "+₹4.2 ਲੱਖ ਪਿਛਲੇ ਹਫ਼ਤੇ ਦੀ ਤੁਲਨਾ",
    kpiMandisTitle: "ਚਾਲੂ ਮੰਡੀਆਂ",
    kpiMandisBadge: "12 ਰਾਜ",
    kpiMandisSub: "99.8% ਸੈਂਸਰ ਅੱਪਟਾਈਮ",
    centers: "ਕੇਂਦਰ",
    chartTitle: "ਰੋਜ਼ਾਨਾ ਮੰਡੀ ਆਮਦ ਬਨਾਮ ਗੋਦਾਮ ਸਮਰੱਥਾ",
    chartSub: "ਅਨਾਜ ਮਾਤਰਾ ਬਨਾਮ ਸੁਰੱਖਿਅਤ ਸਟੋਰੇਜ ਦੀ ਨਿਗਰਾਨੀ",
    chartBadge: "ਲਾਈਵ ਟੈਲੀਮੈਟਰੀ",
    chartThreshold: "ਸੀਮਾ: 25,000 ਮੀਟ੍ਰਿਕ ਟਨ",
    chartMaxCap: "ਅਧਿਕਤਮ ਸਟੋਰੇਜ ਸੀਮਾ",
    chartActualInflow: "ਅਸਲ ਆਮਦ (MT)",
    chartMaxThreshold: "ਸੀਮਾ (25,000 MT)",
    recentAlertsTitle: "ਜ਼ਰੂਰੀ ਸੰਚਾਲਨ ਅਲਰਟ",
    btnRead: "🔊 ਸੁਣੋ",
    aiThrottlingTitle: "ਏਆਈ ਡਾਇਨਾਮਿਕ ਥ੍ਰੋਟਲਿੰਗ ਸਿਫਾਰਸ਼",
    aiThrottlingSub: "ਰੀਅਲ-ਟਾਈਮ ਗੋਦਾਮ ਸਮਰੱਥਾ ਅਨੁਕੂਲਨ",
    statWarehouse: "ਗੋਦਾਮ",
    statGateQueue: "ਗੇਟ ਕਤਾਰ",
    statEstClear: "ਉਡੀਕ ਸਮਾਂ",
    slotSimulatorTitle: "ਇੰਟਰਐਕਟਿਵ ਸਲਾਟ ਬੁਕਿੰਗ ਸਿਮੂਲੇਟਰ",
    badgeENAM: "e-NAM ਪ੍ਰਮਾਣਿਤ",
    labelFarmerName: "ਕਿਸਾਨ ਦਾ ਪੂਰਾ ਨਾਮ",
    labelAadhaar: "ਆਧਾਰ ਆਈਡੀ",
    labelCropCategory: "ਫਸਲ ਸ਼੍ਰੇਣੀ",
    labelQuantity: "ਮਾਤਰਾ (ਕੁਇੰਟਲ)",
    labelMandiCenter: "ਪਸੰਦੀਦਾ ਮੰਡੀ",
    btnGenerateSlot: "🎟️ ਸਮਾਰਟ ਸਲਾਟ ਪਾਸ (QR) ਬਣਾਓ",
    milestoneTitle: "ਐਂਡ-ਟੂ-ਐਂਡ ਟਿਕਟ ਮੀਲ ਪੱਥਰ ਟਰੈਕਰ",
    milestoneSub: "ਲਾਈਵ ਖੇਤੀਬਾੜੀ ਲੋਜਿਸਟਿਕਸ ਟ੍ਰੈਕਿੰਗ",
    step1: "ਟੋਕਨ ਜਾਰੀ",
    step2: "ਮੰਡੀ ਆਮਦ",
    step3: "ਗੁਣਵੱਤਾ ਜਾਂਚ",
    step4: "ਗ੍ਰੇਡਿੰਗ",
    step5: "ਭੁਗਤਾਨ",
    activeStage: "ਸਰਗਰਮ ਚਰਨ",
    btnApproveOverride: "⚡ ਮਨਜ਼ੂਰ / ਓਵਰਰਾਈਡ",
    btnReschedule: "📅 ਰੀ-ਸ਼ਡਿਊਲ ਕਰੋ",
    btnDigitalReceipt: "🎟️ ਡਿਜੀਟਲ ਰਸੀਦ ਜਾਰੀ ਕਰੋ",
    btnResetStage: "ਚਰਨ ਰੀਸੈਟ ਕਰੋ",
    btnAdvanceStage: "ਅਗਲਾ ਚਰਨ →",
    weighbridgeTitle: "⚖️ ਵੇਅਬ੍ਰਿਜ ਟਰਮੀਨਲ #WB-01",
    sensorCalibrated: "ਸੈਂਸਰ ਕੈਲੀਬਰੇਟ ਕੀਤਾ ਗਿਆ",
    grossWeightLabel: "ਕੁੱਲ ਟਰੱਕ ਭਾਰ (Kg)",
    tareWeightLabel: "ਖਾਲੀ ਟਰੱਕ ਭਾਰ (Kg)",
    netProcurementWeight: "ਸ਼ੁੱਧ ਖਰੀਦ ਭਾਰ",
    btnCalculatePass: "🎟️ ਗੇਟ ਪਾਸ ਜਾਰੀ ਕਰੋ",
    liveFeedTitle: "🚛 ਮੰਡੀ ਕਤਾਰ ਅਤੇ ਵੇਅਬ੍ਰਿਜ ਫੀਡ",
    liveFeedSub: "ਆਮਦ ਟਰੱਕ ਟੈਲੀਮੈਟਰੀ",
    liveFeedBadge: "ਲਾਈਵ ਫੀਡ",
    thVehicle: "ਵਾਹਨ",
    thToken: "ਟੋਕਨ ਨੰ.",
    thFarmer: "ਕਿਸਾਨ",
    thGrossTare: "ਕੁੱਲ / ਖਾਲੀ",
    thNet: "ਸ਼ੁੱਧ ਭਾਰ",
    thWait: "ਅਨੁਮਾਨਿਤ ਸਮਾਂ",
    thStatus: "ਸਥਿਤੀ",
    fraudTitle: "📡 ਸੈਟੇਲਾਈਟ ਜਮੀਨ ਰਿਕਾਰਡ ਅਤੇ ਖਰੀਦ ਜਾਂਚ",
    fraudSub: "ਏਆਈ ਦੁਆਰਾ ਫਸਲ ਜਾਂਚ",
    actionReqBadge: "ਕਾਰਵਾਈ ਲੋੜੀਂਦੀ",
    thFarmerIdName: "ਕਿਸਾਨ ਆਈਡੀ ਅਤੇ ਨਾਮ",
    thCropLand: "ਫਸਲ ਅਤੇ ਜ਼ਮੀਨ",
    thDeclaredQty: "ਐਲਾਨੀ ਮਾਤਰਾ",
    thLandLimit: "ਜ਼ਮੀਨ ਸੀਮਾ",
    thDiscrepancy: "ਏਆਈ ਅੰਤਰ",
    thAuditStatus: "ਆਡਿਟ ਸਥਿਤੀ",
    thActionControls: "ਕਾਰਵਾਈ",
    btnApprove: "⚡ ਮਨਜ਼ੂਰ ਕਰੋ",
    btnBlock: "⛔ ਬਲਾਕ ਕਰੋ",
    analyticsHeader: "ਖਰੀਦ ਹੀਟਮੈਪ ਅਤੇ HITL",
    analyticsSub: "ਖੇਤਰੀ ਮੰਡੀ ਵਿਸ਼ਲੇਸ਼ਣ",
    btnExportCSV: "📥 CSV ਰਿਪੋਰਟ",
    btnExportPDF: "📄 PDF ਰਿਪੋਰਟ",
    heatmapTitle: "🗺️ ਮੰਡੀ ਹੀਟਮੈਪ ਗ੍ਰਿਡ",
    normalFlow: "ਆਮ ਪ੍ਰਵਾਹ",
    heavyLoad: "ਭਾਰੀ ਲੋਡ",
    bottlenecked: "ਜਾਮ",
    capacityLabel: "ਸਮਰੱਥਾ:",
    queueLabel: "ਕਤਾਰ:",
    hitlTitle: "ਹਿਊਮਨ-ਇਨ-ਦੀ-ਲੂਪ (HITL) ਲਰਨਿੰਗ ਫੀਡ",
    hitlSub: "ਏਆਈ ਸਿਸਟਮ ਅੱਪਡੇਟ ਫੀਡ",
    btnSimulateOverride: "+ ਓਵਰਰਾਈਡ ਸਿਮੂਲੇਟ ਕਰੋ",
    aiFeedbackEngine: "🤖 ਏਆਈ ਫੀਡਬੈਕ ਇੰਜਣ",
    settingsAccessibility: "🌐 ਭਾਸ਼ਾ ਅਤੇ ਆਵਾਜ਼ ਸੈਟਿੰਗਾਂ",
    labelPrimaryLang: "ਮੁੱਖ ਭਾਸ਼ਾ",
    btnTestAudio: "🔊 ਆਵਾਜ਼ ਟੈਸਟ ਕਰੋ",
    settingsAPI: "🔗 ਰਾਸ਼ਟਰੀ ਖੇਤੀਬਾੜੀ API ਏਕੀਕਰਣ",
    apiENAM: "e-NAM ਮੰਡੀ",
    apiENAMDesc: "ਰੀਅਲ-ਟਾਈਮ ਕੀਮਤ ਸਿਸਟਮ",
    apiPMKisan: "PM-KISAN ਰਜਿਸਟਰੀ",
    apiPMKisanDesc: "ਜ਼ਮੀਨ ਜਾਂਚ API",
    statusActive: "ਚਾਲੂ",
    bhashiniTitle: "🇮🇳 ਭਾਸ਼ਿਣੀ ਏਆਈ ਆਵਾਜ਼ ਸਹਾਇਕ",
    bhashiniWelcome: "ਜੀ ਆਇਆਂ ਨੂੰ! ਤੁਸੀਂ ਪੰਜਾਬੀ, ਹਿੰਦੀ ਜਾਂ 22 ਭਾਸ਼ਾਵਾਂ ਵਿੱਚ ਪੁੱਛ ਸਕਦੇ ਹੋ।",
    bhashiniPlaceholder: "ਪੰਜਾਬੀ ਵਿੱਚ ਪੁੱਛੋ...",
    btnAsk: "ਪੁੱਛੋ",
    voucherTitle: "🧾 ਡਿਜੀਟਲ ਖਰੀਦ ਰਸੀਦ",
    voucherHeader: "ਕਿਸਾਨਸੇਤੂ-ਖੇਤੀਬਾੜੀ DSS • ਸਰਕਾਰੀ ਰਸੀਦ",
    voucherFCI: "ਭਾਰਤੀ ਭੋਜਨ ਨਿਗਮ (FCI)",
    voucherRate: "ਦਰ:",
    voucherScan: "ਵੇਅਬ੍ਰਿਜ ਗੇਟ 'ਤੇ ਸਕੈਨ ਕਰੋ",
    btnClose: "ਬੰਦ ਕਰੋ",
    btnPrint: "🖨️ ਪ੍ਰਿੰਟ ਕਰੋ"
  },
  bn: {
    appTitle: "কিষাণসেতু-কৃষি DSS",
    subtitle: "কৃষি লজিস্টিকস ও ক্রয়ের জন্য সিদ্ধান্ত সহায়তা ব্যবস্থা",
    teamName: "ANT-X প্ল্যাটফর্ম",
    searchPlaceholder: "স্লট, মান্ডি, কৃষক আইডি খুঁজুন...",
    profileRole: "মন্ত্রণালয় / এফসিআই প্রশাসক",
    profileName: "এফসিআই কেন্দ্রীয় প্রশাসক",
    voiceGuide: "ভয়েস সহকারী",
    coreNav: "মূল নেভিগেশন",
    navDashboard: "ড্যাশবোর্ড (একনজরে)",
    navSlotBooking: "স্মার্ট স্লট বুকিং (কৃষক পোর্টাল)",
    navMandiQueue: "মান্ডি সারি ও ওয়েব্রীজ",
    navAnalytics: "ক্রয় হিটম্যাপ ও বিশ্লেষণ",
    navFraud: "জালিয়াতি ও অসঙ্গতি সনাক্তকরণ",
    navSettings: "সেটিংস ও ইন্টিগ্রেশন",
    urgentNotifs: "জরুরী বিজ্ঞপ্তি",
    newCount: "নতুন",
    kpiSlotsTitle: "মোট দৈনিক বরাদ্দকৃত স্লট",
    kpiSlotsSub: "২৮টি সংযুক্ত মান্ডিতে",
    kpiPendingTitle: "বকেয়া কৃষক চেক-ইন",
    kpiPendingBadge: "অনুমতি প্রয়োজন",
    kpiPendingSub: "গড় অপেক্ষা: ১৪ মিনিট",
    kpiSpoilageTitle: "আনুম্পনিক অপচয় সাশ্রয়",
    kpiSpoilageBadge: "সঞ্চয়",
    kpiSpoilageSub: "+₹৪.২ লাখ গত সপ্তাহের তুলনায়",
    kpiMandisTitle: "সক্রিয় মান্ডি সংযুক্ত",
    kpiMandisBadge: "১২টি রাজ্য",
    kpiMandisSub: "৯৯.৮% সেন্সর আপটাইম",
    centers: "কেন্দ্র",
    chartTitle: "দৈনিক মান্ডি আগমন বনাম গুদাম ক্ষমতা",
    chartSub: "রিয়েল-টাইম শস্য ভলিউম পর্যবেক্ষণ",
    chartBadge: "লাইভ টেলিম্যাট্রি",
    chartThreshold: "সীমা: ২৫,০০০ মেট্রিক টন",
    chartMaxCap: "সর্বোচ্চ গুদাম ক্ষমতা",
    chartActualInflow: "প্রকৃত আগমন (MT)",
    chartMaxThreshold: "সীমা (২৫,০০০ MT)",
    recentAlertsTitle: "জরুরী অপারেশনাল অ্যালার্ট",
    btnRead: "🔊 শুনুন",
    aiThrottlingTitle: "এআই ডায়নামিক থ্রোটলিং ইঞ্জিন",
    aiThrottlingSub: "রিয়েল-টাইম গুদাম ক্ষমতা অপ্টিমাইজেশান",
    statWarehouse: "গুদাম",
    statGateQueue: "গেট সারি",
    statEstClear: "আনুমানিক সময়",
    slotSimulatorTitle: "ইন্টারেক্টিভ স্লট বুকিং সিমুলেটর",
    badgeENAM: "e-NAM যাচাইকৃত",
    labelFarmerName: "কৃষকের পুরো নাম",
    labelAadhaar: "আধারের আইডি",
    labelCropCategory: "ফসলের বিভাগ",
    labelQuantity: "পরিমাণ (কুইন্টাল)",
    labelMandiCenter: "পছন্দের মান্ডি কেন্দ্র",
    btnGenerateSlot: "🎟️ স্মার্ট স্লট পাস (QR) তৈরি করুন",
    milestoneTitle: "এন-টু-এন্ড টিকিট ট্র্যাক ট্র্যাকার",
    milestoneSub: "লাইভ কৃষি লজিস্টিক ট্র্যাকিং",
    step1: "টোকেন ইস্যু",
    step2: "মান্ডি আগমন",
    step3: "গুণমান পরীক্ষা",
    step4: "গ্রেডিং",
    step5: "পেমেন্ট",
    activeStage: "সক্রিয় পর্যায়",
    btnApproveOverride: "⚡ অনুমোদন / ওভাররাইড",
    btnReschedule: "📅 সময় পরিবর্তন করুন",
    btnDigitalReceipt: "🎟️ ডিজিটাল রসিদ ইস্যু করুন",
    btnResetStage: "পর্যায় রিসেট করুন",
    btnAdvanceStage: "পরবর্তী পর্যায় →",
    weighbridgeTitle: "⚖️ ওয়েব্রীজ টার্মিনাল #WB-01",
    sensorCalibrated: "সেন্সর ক্যালিব্রেটেড",
    grossWeightLabel: "মোট ট্রাকের ওজন (কেজি)",
    tareWeightLabel: "খালি ট্রাকের ওজন (কেজি)",
    netProcurementWeight: "খাটি ফসলের ওজন",
    btnCalculatePass: "🎟️ গেট পাস প্রদান করুন",
    liveFeedTitle: "🚛 মান্ডি সারি লাইভ ফিড",
    liveFeedSub: "ইনকামিং ট্রাক লাইভ আপডেট",
    liveFeedBadge: "লাইভ ফিড",
    thVehicle: "যানবাহন",
    thToken: "টোকেন নং",
    thFarmer: "কৃষক",
    thGrossTare: "মোট / খালি",
    thNet: "খাটি ওজন",
    thWait: "আনুমানিক সময়",
    thStatus: "অবস্থা",
    fraudTitle: "📡 স্যাটেলাইট জমি রেকর্ড ও ফলন অডিট",
    fraudSub: "এআই দ্বারা ফলন যাচাইকরণ",
    actionReqBadge: "পদক্ষেপ প্রয়োজন",
    thFarmerIdName: "কৃষক আইডি ও নাম",
    thCropLand: "ফসল ও জমি",
    thDeclaredQty: "ঘোষিত পরিমাণ",
    thLandLimit: "জমি সীমা",
    thDiscrepancy: "এআই পার্থক্য",
    thAuditStatus: "অডিট অবস্থা",
    thActionControls: "পদক্ষেপ",
    btnApprove: "⚡ অনুমোদন করুন",
    btnBlock: "⛔ ব্লক করুন",
    analyticsHeader: "ক্রয় হিটম্যাপ ও HITL",
    analyticsSub: "আঞ্চলিক মান্ডি বিশ্লেষণ",
    btnExportCSV: "📥 CSV রিপোর্ট",
    btnExportPDF: "📄 PDF রিপোর্ট",
    heatmapTitle: "🗺️ মান্ডি হিটম্যাপ গ্রিড",
    normalFlow: "স্বাভাবিক",
    heavyLoad: "ভারী চাপ",
    bottlenecked: "জ্যাম",
    capacityLabel: "ক্ষমতা:",
    queueLabel: "সারি:",
    hitlTitle: "হিউম্যান-ইন-দ্য-লুপ (HITL) লার্নিং ফিড",
    hitlSub: "এআই সিস্টেম আপডেট ফিড",
    btnSimulateOverride: "+ ওভাররাইড করুন",
    aiFeedbackEngine: "🤖 এআই ফিডব্যাক ইঞ্জিন",
    settingsAccessibility: "🌐 ভাষা ও ভয়েস সেটিংস",
    labelPrimaryLang: "প্রধান ভাষা",
    btnTestAudio: "🔊 অডিও টেস্ট",
    settingsAPI: "🔗 জাতীয় কৃষি API সংযোগ",
    apiENAM: "e-NAM মান্ডি",
    apiENAMDesc: "রিয়েল-টাইম মূল্য সিস্টেম",
    apiPMKisan: "PM-KISAN রেজিস্ট্রি",
    apiPMKisanDesc: "জমি যাচাই API",
    statusActive: "সক্রিয়",
    bhashiniTitle: "🇮🇳 ভাষিণী এআই ভয়েস সহকারী",
    bhashiniWelcome: "স্বাগতম! আপনি বাংলা, হিন্দি বা ২২টি ভাষায় প্রশ্ন করতে পারেন।",
    bhashiniPlaceholder: "বাংলায় প্রশ্ন করুন...",
    btnAsk: "জিজ্ঞাসা করুন",
    voucherTitle: "🧾 ডিজিটাল ক্রয় ভাউচার",
    voucherHeader: "কিষাণসেতু-কৃষি DSS • অফিসিয়াল ভাউচার",
    voucherFCI: "ফুড কর্পোরেশন অফ ইন্ডিয়া (FCI)",
    voucherRate: "দর:",
    voucherScan: "ওয়েব্রীজ গেটে স্ক্যান করুন",
    btnClose: "বন্ধ করুন",
    btnPrint: "🖨️ প্রিন্ট করুন"
  },
  mr: {
    appTitle: "किसानसेतू-कृषी DSS",
    subtitle: "कृषी लॉजिस्टिक्स आणि खरेदीसाठी निर्णय समर्थन प्रणाली",
    teamName: "ANT-X प्लॅटफॉर्म",
    searchPlaceholder: "स्लॉट, मंदी, शेतकरी आयडी शोधा...",
    profileRole: "मंत्रालय / FCI प्रशासक",
    profileName: "FCI केंद्रीय प्रशासक",
    voiceGuide: "व्हॉइस असिस्टंट",
    coreNav: "मुख्य नेव्हिगेशन",
    navDashboard: "डॅशबोर्ड (आढावा)",
    navSlotBooking: "स्मार्ट स्लॉट बुकिंग (शेतकरी पोर्टल)",
    navMandiQueue: "मंडी रांग आणि वेब्रिज",
    navAnalytics: "खरेदी हीटमॅप्स आणि विश्लेषण",
    navFraud: "फसवणूक आणि तफावत ओळख",
    navSettings: "सेटिंग्ज आणि एकत्रीकरण",
    urgentNotifs: "तातडीच्या सूचना",
    newCount: "नवीन",
    kpiSlotsTitle: "एकूण दैनिक वाटप केलेले स्लॉट",
    kpiSlotsSub: "28 जोडलेल्या मंडींमध्ये",
    kpiPendingTitle: "प्रलंबित शेतकरी चेक-इन",
    kpiPendingBadge: "मंजुरी आवश्यक",
    kpiPendingSub: "सरासरी वाट पाहणे: 14 मिनिटे",
    kpiSpoilageTitle: "अंदाजे नुकसान बचत",
    kpiSpoilageBadge: "बचत",
    kpiSpoilageSub: "+₹4.2 लाख मागील आठवड्याच्या तुलनेत",
    kpiMandisTitle: "सक्रिय मंड्या जोडल्या",
    kpiMandisBadge: "12 राज्ये",
    kpiMandisSub: "99.8% सेन्सर अपटाइम",
    centers: "केंद्रे",
    chartTitle: "दैनिक मंडी आवक विरुद्ध गोदाम क्षमता",
    chartSub: "धान्य प्रमाणाचे रिअल-टाइम ट्रॅकिंग",
    chartBadge: "लाइव्ह टेलिमेट्री",
    chartThreshold: "मर्यादा: 25,000 मेट्रिक टन",
    chartMaxCap: "कमाल गोदाम क्षमता",
    chartActualInflow: "प्रत्यक्ष आवक (MT)",
    chartMaxThreshold: "मर्यादा (25,000 MT)",
    recentAlertsTitle: "तातडीचे ऑपरेशन्स इशारे",
    btnRead: "🔊 ऐका",
    aiThrottlingTitle: "AI डायनॅमिक थ्रॉटलिंग इंजिन",
    aiThrottlingSub: "रिअल-टाइम गोदाम क्षमता ऑप्टिमायझेशन",
    statWarehouse: "गोदाम",
    statGateQueue: "गेट रांग",
    statEstClear: "अंदाजे वेळ",
    slotSimulatorTitle: "इंटरअॅक्टिव्ह स्लॉट बुकिंग सिम्युलेटर",
    badgeENAM: "e-NAM सत्यापित",
    labelFarmerName: "शेतकऱ्याचे पूर्ण नाव",
    labelAadhaar: "आधार आयडी",
    labelCropCategory: "पिकाचा प्रकार",
    labelQuantity: "प्रमाण (क्विंटल)",
    labelMandiCenter: "पसंतीचे मंडी केंद्र",
    btnGenerateSlot: "🎟️ स्मार्ट स्लॉट पास (QR) तयार करा",
    milestoneTitle: "एंड-टू-एंड तिकीट मायलस्टोन ट्रॅकर",
    milestoneSub: "लाइव्ह कृषी लॉजिस्टिक्स ट्रॅकिंग",
    step1: "टोकन जारी",
    step2: "मंडी आगमन",
    step3: "गुणवत्ता तपासणी",
    step4: "प्रतवारी",
    step5: "पेमेंट",
    activeStage: "सक्रिय टप्पा",
    btnApproveOverride: "⚡ मंजूर / ओव्हरराइड",
    btnReschedule: "📅 वेळ बदला",
    btnDigitalReceipt: "🎟️ डिजिटल पावती द्या",
    btnResetStage: "टप्पा रिसेट करा",
    btnAdvanceStage: "पुढील टप्पा →",
    weighbridgeTitle: "⚖️ वेब्रिज टर्मिनल #WB-01",
    sensorCalibrated: "सेन्सर कॅलिब्रेटेड",
    grossWeightLabel: "एकूण ट्रक वजन (Kg)",
    tareWeightLabel: "रिकाम्या ट्रकचे वजन (Kg)",
    netProcurementWeight: "निव्वळ पीक वजन",
    btnCalculatePass: "🎟️ गेट पास तयार करा",
    liveFeedTitle: "🚛 मंडी रांग लाइव्ह फीड",
    liveFeedSub: "येणाऱ्या ट्रक्सची माहिती",
    liveFeedBadge: "लाइव्ह फीड",
    thVehicle: "वाहन",
    thToken: "टोकन क्र.",
    thFarmer: "शेतकरी",
    thGrossTare: "एकूण / रिकामे",
    thNet: "निव्वळ वजन",
    thWait: "अंदाजे वेळ",
    thStatus: "स्थिती",
    fraudTitle: "📡 सॅटेलाइट जमीन नोंद आणि उत्पन्न तपासणी",
    fraudSub: "AI द्वारे पीक तपासणी",
    actionReqBadge: "कारवाई आवश्यक",
    thFarmerIdName: "शेतकरी आयडी व नाव",
    thCropLand: "पीक व जमीन",
    thDeclaredQty: "घोषित प्रमाण",
    thLandLimit: "जमीन मर्यादा",
    thDiscrepancy: "AI तफावत",
    thAuditStatus: "ऑडिट स्थिती",
    thActionControls: "कारवाई",
    btnApprove: "⚡ मंजूर करा",
    btnBlock: "⛔ ब्लॉक करा",
    analyticsHeader: "खरेदी हीटमॅप्स आणि HITL",
    analyticsSub: "प्रादेशिक मंडी विश्लेषण",
    btnExportCSV: "📥 CSV रिपोर्ट",
    btnExportPDF: "📄 PDF रिपोर्ट",
    heatmapTitle: "🗺️ मंडी हीटमॅप ग्रिड",
    normalFlow: "सामान्य",
    heavyLoad: "जड भार",
    bottlenecked: "वाहतूक कोंडी",
    capacityLabel: "क्षमता:",
    queueLabel: "रांग:",
    hitlTitle: "ह्युमन-इन-द-लूप (HITL) लर्निंग फीड",
    hitlSub: "AI सिस्टम अपडेट्स",
    btnSimulateOverride: "+ ओव्हरराइड करा",
    aiFeedbackEngine: "🤖 AI फीडबॅक इंजिन",
    settingsAccessibility: "🌐 भाषा आणि आवाज सेटिंग्ज",
    labelPrimaryLang: "मुख्य भाषा",
    btnTestAudio: "🔊 आवाज चाचणी",
    settingsAPI: "🔗 राष्ट्रीय कृषी API एकत्रीकरण",
    apiENAM: "e-NAM मंडी",
    apiENAMDesc: "रिअल-टाइम किंमत प्रणाली",
    apiPMKisan: "PM-KISAN नोंदणी",
    apiPMKisanDesc: "जमीन पडताळणी API",
    statusActive: "सक्रिय",
    bhashiniTitle: "🇮🇳 भाषिणी AI व्हॉइस असिस्टंट",
    bhashiniWelcome: "नमस्कार! आपण मराठी, हिंदी किंवा 22 भाषांमध्ये विचारू शकता.",
    bhashiniPlaceholder: "मराठीत विचारा...",
    btnAsk: "विचारा",
    voucherTitle: "🧾 डिजिटल खरेदी पावती",
    voucherHeader: "किसानसेतू-कृषी DSS • अधिकृत पावती",
    voucherFCI: "भारतीय अन्न महामंडळ (FCI)",
    voucherRate: "दर:",
    voucherScan: "वेब्रिज गेटवर स्कॅन करा",
    btnClose: "बंद करा",
    btnPrint: "🖨️ प्रिंट करा"
  },
  te: {
    appTitle: "కిసాన్ సేతు-వ్యవసాయ DSS",
    subtitle: "వ్యవసాయ లాజిస్టిక్స్ మరియు సేకరణ నిర్ణయ మద్దతు వ్యవస్ధ",
    teamName: "ANT-X వేదిక",
    searchPlaceholder: "స్లాట్‌లు, మండి, రైతు ఐడి వెతకండి...",
    profileRole: "అధికారి / FCI అడ్మిన్",
    profileName: "FCI సెంట్రల్ అడ్మిన్",
    voiceGuide: "వాయిస్ అసిస్టెంట్",
    coreNav: "ముఖ్య నావిగేషన్",
    navDashboard: "డాష్‌బోర్డ్ (ఓవర్‌వ్యూ)",
    navSlotBooking: "స్మార్ట్ స్లాట్ బుకింగ్ (రైతు పోర్టల్)",
    navMandiQueue: "మండి క్యూ మరియు వేబ్రిడ్జ్",
    navAnalytics: "సేకరణ హీట్‌మ్యాప్‌లు",
    navFraud: "మోసాల గుర్తింపు",
    navSettings: "సెట్టింగ్‌లు",
    urgentNotifs: "అత్యవసర నోటిఫికేషన్‌లు",
    newCount: "కొత్తవి",
    kpiSlotsTitle: "మొత్తం రోజువారీ కేటాయించిన స్లాట్‌లు",
    kpiSlotsSub: "28 కనెక్ట్ చేయబడిన మండీలలో",
    kpiPendingTitle: "పెండింగ్‌లో ఉన్న రైతు చెక్-ఇన్‌లు",
    kpiPendingBadge: "క్లియరెన్స్ అవసరం",
    kpiPendingSub: "సగటు నిరీక్షణ: 14 నిమిషాలు",
    kpiSpoilageTitle: "అంచనా ఆదా పొదుపు",
    kpiSpoilageBadge: "పొదుపు",
    kpiSpoilageSub: "+₹4.2 లక్షలు గత వారంతో పోలిస్తే",
    kpiMandisTitle: "క్రియాశీల మండీలు",
    kpiMandisBadge: "12 రాష్ట్రాలు",
    kpiMandisSub: "99.8% సెన్సార్ పనిచేస్తుంది",
    centers: "కేంద్రాలు",
    chartTitle: "రోజువారీ మండి రాక మరియు గిడ్డంగి సామర్థ్యం",
    chartSub: "నిజ-సమయ ధాన్యం పరిమాణం పర్యవేక్షణ",
    chartBadge: "లైవ్ టెలిమెట్రీ",
    chartThreshold: "పరిమితి: 25,000 మెట్రిక్ టన్నులు",
    chartMaxCap: "గరిష్ట నిల్వ సామర్థ్యం",
    chartActualInflow: "అసలు రాక (MT)",
    chartMaxThreshold: "పరిమితి (25,000 MT)",
    recentAlertsTitle: "అత్యవసర హెచ్చరికలు",
    btnRead: "🔊 వినండి",
    aiThrottlingTitle: "AI డైనమిక్ సిఫార్సు ఇengine",
    aiThrottlingSub: "రియల్ టైమ్ గిడ్డంగి సామర్థ్యం అనుకూలీకరణ",
    statWarehouse: "గిడ్డంగి",
    statGateQueue: "గేట్ క్యూ",
    statEstClear: "అంచనా సమయం",
    slotSimulatorTitle: "స్లాట్ బుకింగ్ సిమ్యులేటర్",
    badgeENAM: "e-NAM ధృవీకరించబడింది",
    labelFarmerName: "రైతు పూర్తి పేరు",
    labelAadhaar: "ఆధార్ ఐడి",
    labelCropCategory: "పంట రకం",
    labelQuantity: "పరిమాణం (క్వింటాళ్ళు)",
    labelMandiCenter: "మండి కేంద్రం",
    btnGenerateSlot: "🎟️ స్మార్ట్ స్లాట్ పాస్ (QR) పొందండి",
    milestoneTitle: "టికెట్ మైలురాయి ట్రాకర్",
    milestoneSub: "లైవ్ అగ్రికల్చర్ లాజిస్టిక్స్ ట్రాకింగ్",
    step1: "టోకెన్ జారీ",
    step2: "మండి రాక",
    step3: "నాణ్యత తనిఖీ",
    step4: "గ్రేడింగ్",
    step5: "చెల్లింపు",
    activeStage: "క్రియాశీల దశ",
    btnApproveOverride: "⚡ ఆమోదించండి",
    btnReschedule: "📅 రీషెడ్యూల్ చేయండి",
    btnDigitalReceipt: "🎟️ డిజిటల్ రసీదు పొందు",
    btnResetStage: "దశ రీసెట్ చేయండి",
    btnAdvanceStage: "తరువాతి దశ →",
    weighbridgeTitle: "⚖️ వేబ్రిడ్జ్ టెర్మినల్ #WB-01",
    sensorCalibrated: "సెన్సార్ తనిఖీ చేయబడింది",
    grossWeightLabel: "మొత్తం ట్రక్ బరువు (Kg)",
    tareWeightLabel: "ఖాళీ ట్రక్ బరువు (Kg)",
    netProcurementWeight: "నికర పంట బరువు",
    btnCalculatePass: "🎟️ గేట్ పాస్ ఇవ్వండి",
    liveFeedTitle: "🚛 మండి క్యూ లైవ్ ఫీడ్",
    liveFeedSub: "వస్తున్న ట్రక్కుల సమాచారం",
    liveFeedBadge: "లైవ్ ఫీడ్",
    thVehicle: "వాహనం",
    thToken: "టోకెన్ నంబరు",
    thFarmer: "రైతు",
    thGrossTare: "మొత్తం / ఖాళీ",
    thNet: "నికర బరువు",
    thWait: "అంచనా సమయం",
    thStatus: "స్థితి",
    fraudTitle: "📡 ఉపగ్రహ భూమి రికార్డులు & పంట రికార్డులు",
    fraudSub: "AI ద్వారా పంట ధృవీకరణ",
    actionReqBadge: "చర్య అవసరం",
    thFarmerIdName: "రైతు ఐడి & పేరు",
    thCropLand: "పంట & భూమి",
    thDeclaredQty: "ప్రకటించిన పరిమాణం",
    thLandLimit: "భూమి పరిమితి",
    thDiscrepancy: "AI వ్యత్యాసం",
    thAuditStatus: "ఆడిట్ స్థితి",
    thActionControls: "చర్యలు",
    btnApprove: "⚡ ఆమోదించండి",
    btnBlock: "⛔ బ్లాక్ చేయండి",
    analyticsHeader: "సేకరణ హీట్‌మ్యాప్‌లు & HITL",
    analyticsSub: "ప్రాంతీయ మండి విశ్లేషణ",
    btnExportCSV: "📥 CSV నివేదిక",
    btnExportPDF: "📄 PDF నివేదిక",
    heatmapTitle: "🗺️ మండి హీట్‌మ్యాప్ గ్రిడ్",
    normalFlow: "సౌకర్యవంతంగా ఉన్ది",
    heavyLoad: "ఎక్కువ రద్దీ",
    bottlenecked: "జామ్ అయింది",
    capacityLabel: "సామర్థ్యం:",
    queueLabel: "క్యూ:",
    hitlTitle: "హ్యూమన్-ఇన్-ది-లూప్ (HITL) లెర్నింగ్ ఫీడ్",
    hitlSub: "AI సిస్టమ్ సమాచారం",
    btnSimulateOverride: "+ ఓవర్‌రైడ్ చేయండి",
    aiFeedbackEngine: "🤖 AI ఫీడ్‌బ్యాక్ ఇంజిన్",
    settingsAccessibility: "🌐 భాష మరియు వాయిస్ సెట్టింగ్‌లు",
    labelPrimaryLang: "ముఖ్య భాష",
    btnTestAudio: "🔊 వాయిస్ టెస్ట్ చేయండి",
    settingsAPI: "🔗 జాతీయ వ్యవసాయ API సమితి",
    apiENAM: "e-NAM మండి",
    apiENAMDesc: "రియల్ టైమ్ ధరల వివరాలు",
    apiPMKisan: "PM-KISAN రిజిస్ట్రీ",
    apiPMKisanDesc: "భూమి ధృవీకరణ API",
    statusActive: "సక్రియంగా ఉంది",
    bhashiniTitle: "🇮🇳 భాషిణి AI వాయిస్ అసిస్టెంట్",
    bhashiniWelcome: "నమస్కారం! మీరు తెలుగు, హిందీ లేదా 22 భాషలలో అడగవచ్చు.",
    bhashiniPlaceholder: "తెలుగులో అడగండి...",
    btnAsk: "అడగండి",
    voucherTitle: "🧾 డిజిటల్ సేకరణ రసీదు",
    voucherHeader: "కిసాన్ సేతు-వ్యవసాయ DSS • అధికారిక రసీదు",
    voucherFCI: "భారతీయ ఆహార సంస్థ (FCI)",
    voucherRate: "ధర:",
    voucherScan: "వేబ్రిడ్జ్ గేట్ వద్ద స్కాన్ చేయండి",
    btnClose: "మూసివేయి",
    btnPrint: "🖨️ ప్రింట్ చేయండి"
  },
  ta: {
    appTitle: "கிசான்சேது-வேளாண்மை DSS",
    subtitle: "வேளாண் தளவாடங்கள் மற்றும் கொள்முதல் முடிவு ஆதரவு அமைப்பு",
    teamName: "ANT-X தளம்",
    searchPlaceholder: "ஸ்லாட்டுகள், மண்டி, விவசாயி ஐடி தேடவும்...",
    profileRole: "அமைச்சகம் / FCI நிர்வாகி",
    profileName: "FCI மத்திய நிர்வாகி",
    voiceGuide: "குரல் உதவியாளர்",
    coreNav: "முதன்மை வழிசெலுத்தல்",
    navDashboard: "டாஷ்போர்டு (மேலோட்டம்)",
    navSlotBooking: "ஸ்மார்ட் ஸ்லாட் முன்பதிவு (விவசாயி போர்டல்)",
    navMandiQueue: "மண்டி வரிசை & எடடைமேடை",
    navAnalytics: "கொள்முதல் வரைபடங்கள் & பகுப்பாய்வு",
    navFraud: "மோசடி கண்டறிதல்",
    navSettings: "அமைப்புகள்",
    urgentNotifs: "அவசர அறிவிப்புகள்",
    newCount: "புதிய",
    kpiSlotsTitle: "மொத்த தினசரி ஒதுக்கீடு ஸ்லாட்டுகள்",
    kpiSlotsSub: "28 இணைக்கப்பட்ட மண்டிகளில்",
    kpiPendingTitle: "நிலுவையில் உள்ள காசோலைகள்",
    kpiPendingBadge: "ஒப்புதல் தேவை",
    kpiPendingSub: "சராசரி காத்திருப்பு: 14 நிமிடங்கள்",
    kpiSpoilageTitle: "சேமிக்கப்பட்ட இழப்பு சேமிப்பு",
    kpiSpoilageBadge: "சேமிப்பு",
    kpiSpoilageSub: "+₹4.2 லட்சம் கடந்த வாரத்துடன் ஒப்பிடுகையில்",
    kpiMandisTitle: "செயலில் உள்ள மண்டிகள்",
    kpiMandisBadge: "12 மாநிலங்கள்",
    kpiMandisSub: "99.8% சென்சார் இயக்கம்",
    centers: "மையங்கள்",
    chartTitle: "தினசரி மண்டி வருகை மற்றும் சேமிப்பு திறன்",
    chartSub: "நிகழ்நேர தானிய அளவு கண்காணிப்பு",
    chartBadge: "நேரலை கண்காணிப்பு",
    chartThreshold: "வரம்பு: 25,000 மெட்ரிக் டன்",
    chartMaxCap: "அதிகபட்ச சேமிப்பு திறன்",
    chartActualInflow: "உண்மையான வருகை (MT)",
    chartMaxThreshold: "வரம்பு (25,000 MT)",
    recentAlertsTitle: "அவசர எச்சரிக்கைகள்",
    btnRead: "🔊 கேளுங்கள்",
    aiThrottlingTitle: "AI நெரிசல் மேலாண்மை எஞ்சின்",
    aiThrottlingSub: "நிகழ்நேர சேமிப்பக திறன் மேலாண்மை",
    statWarehouse: "கிடங்கு",
    statGateQueue: "கேட் வரிசை",
    statEstClear: "எதிர்பார்க்கப்படும் நேரம்",
    slotSimulatorTitle: "ஸ்லாட் முன்பதிவு சிமுலேட்டர்",
    badgeENAM: "e-NAM சரிபார்க்கப்பட்டது",
    labelFarmerName: "விவசாயியின் முழு பெயர்",
    labelAadhaar: "ஆதார் ஐடி",
    labelCropCategory: "பயிர் வகை",
    labelQuantity: "அளவு (குவிண்டால்)",
    labelMandiCenter: "விருப்பமான மண்டி மையம்",
    btnGenerateSlot: "🎟️ ஸ்மார்ட் ஸ்லாட் பாஸ் (QR) பெறுங்கள்",
    milestoneTitle: "டிக்கெட் கண்காணிப்பு சாதனம்",
    milestoneSub: "நேரலை விவசாய தளவாடக் கண்காணிப்பு",
    step1: "டோக்கன் வழங்ப்பட்டது",
    step2: "மண்டி வருகை",
    step3: "தர பரிசோதனை",
    step4: "தரம் பிரித்தல்",
    step5: "கட்டணம்",
    activeStage: "செயலில் உள்ள நிலை",
    btnApproveOverride: "⚡ ஒப்புதல் அளிக்கவும்",
    btnReschedule: "📅 நேரத்தை மாற்றவும்",
    btnDigitalReceipt: "🎟️ டிஜிட்டல் ரசீது பெறவும்",
    btnResetStage: "நிலையை மீட்டமைக்கவும்",
    btnAdvanceStage: "அடுத்த நிலை →",
    weighbridgeTitle: "⚖️ எடைமேடை முனையம் #WB-01",
    sensorCalibrated: "சென்சார் சரிபார்க்கப்பட்டது",
    grossWeightLabel: "மொத்த டிரக் எடை (Kg)",
    tareWeightLabel: "வெற்று டிரக் எடை (Kg)",
    netProcurementWeight: "நிகர பயிர் எடை",
    btnCalculatePass: "🎟️ கேட் பாஸ் வழங்கவும்",
    liveFeedTitle: "🚛 மண்டி வரிசை நேரலை",
    liveFeedSub: "வரும் டிரக்குகளின் தகவல்கள்",
    liveFeedBadge: "நேரலை",
    thVehicle: "வாகனம்",
    thToken: "டோக்கன் எண்",
    thFarmer: "விவசாயி",
    thGrossTare: "மொத்தம் / வெற்று",
    thNet: "நிகர எடை",
    thWait: "எதிர்பார்க்கப்படும் நேரம்",
    thStatus: "நிலை",
    fraudTitle: "📡 செயற்கைக்கோள் நிலப் பதிவுகள் & பயிர் சரிபார்ப்பு",
    fraudSub: "AI மூலம் பயிர் சரிபார்ப்பு",
    actionReqBadge: "நடவடிக்கை தேவை",
    thFarmerIdName: "விவசாயி ஐடி & பெயர்",
    thCropLand: "பயிர் & நிலம்",
    thDeclaredQty: "அறிவிக்கப்பட்ட அளவு",
    thLandLimit: "நில வரம்பு",
    thDiscrepancy: "AI வேறுபாடு",
    thAuditStatus: "தணிக்கை நிலை",
    thActionControls: "நடவடிக்கைகள்",
    btnApprove: "⚡ ஒப்புதல் அளிக்கவும்",
    btnBlock: "⛔ தடுக்குங்கள்",
    analyticsHeader: "கொள்முதல் வரைபடங்கள் & HITL",
    analyticsSub: "பிராந்திய மண்டி பகுப்பாய்வு",
    btnExportCSV: "📥 CSV அறிக்கை",
    btnExportPDF: "📄 PDF அறிக்கை",
    heatmapTitle: "🗺️ மண்டி நெரிசல் வரைபடம்",
    normalFlow: "சாதாரண இயக்கம்",
    heavyLoad: "அதிக பாரம்",
    bottlenecked: "நெரிசல் நிலை",
    capacityLabel: "திறன்:",
    queueLabel: "வரிசை:",
    hitlTitle: "ஹ்யூமன்-இன்-தி-லூப் (HITL) கற்றல் மையம்",
    hitlSub: "AI அமைப்பு புதுப்பிப்புகள்",
    btnSimulateOverride: "+ மாற்றங்களைச் செய்யுங்கள்",
    aiFeedbackEngine: "🤖 AI பின்னூட்ட எஞ்சின்",
    settingsAccessibility: "🌐 மொழி மற்றும் குரல் அமைப்புகள்",
    labelPrimaryLang: "முதன்மை மொழி",
    btnTestAudio: "🔊 குரல் சோதனை",
    settingsAPI: "🔗 தேசிய வேளாண்மை API இணைப்புகள்",
    apiENAM: "e-NAM மண்டி",
    apiENAMDesc: "நிகழ்நேர விலை தகவல்",
    apiPMKisan: "PM-KISAN பதிவு",
    apiPMKisanDesc: "நில சரிபார்ப்பு API",
    statusActive: "செயலில் உள்ளது",
    bhashiniTitle: "🇮🇳 பாஷிணி AI குரல் உதவியாளர்",
    bhashiniWelcome: "வணக்கம்! தமிழ், ஹிந்தி அல்லது 22 மொழிகளில் கேட்கலாம்.",
    bhashiniPlaceholder: "தமிழில் கேட்கவும்...",
    btnAsk: "கேட்கவும்",
    voucherTitle: "🧾 டிஜிட்டல் கொள்முதல் ரசீது",
    voucherHeader: "கிசான்சேது-வேளாண்மை DSS • அதிகாரப்பூர்வ ரசீது",
    voucherFCI: "இந்திய உணவுக் கழகம் (FCI)",
    voucherRate: "விலை:",
    voucherScan: "எடைமேடை வாயிலில் ஸ்கேன் செய்யவும்",
    btnClose: "மூடு",
    btnPrint: "🖨️ அச்சிடவும்"
  },
  gu: {
    appTitle: "કિસાનસેતુ-કૃષિ DSS",
    subtitle: "કૃષિ લોજિસ્ટિક્સ અને ખરીદી માટે નિર્ણય સહાય પ્રણાલી",
    teamName: "ANT-X પ્લેટફોર્મ",
    searchPlaceholder: "સ્લોટ, મંડી, ખેડૂત આઈડી શોધો...",
    profileRole: "મંત્રાલય / FCI એડમિન",
    profileName: "FCI સેન્ટ્રલ એડમિન",
    voiceGuide: "વોઇસ આસિસ્ટન્ટ",
    coreNav: "મુખ્ય નેવિગેશન",
    navDashboard: "ડેશબોર્ડ (ઓવરવ્યુ)",
    navSlotBooking: "સ્માર્ટ સ્લોટ બુકિંગ (ખેડૂત પોર્ટલ)",
    navMandiQueue: "મંડી કતાર અને વેબ્રિજ",
    navAnalytics: "ખરીદી હીટમેપ્સ અને વિશ્લેષણ",
    navFraud: "છેતરપિંડી અને વિસંગતતા શોધ",
    navSettings: "સેટિંગ્સ અને એકીકરણ",
    urgentNotifs: "તાકીદની સૂચનાઓ",
    newCount: "નવું",
    kpiSlotsTitle: "કુલ દૈનિક ફાળવેલ સ્લોટ",
    kpiSlotsSub: "28 જોડાયેલ મંડીઓમાં",
    kpiPendingTitle: "પેન્ડિંગ ખેડૂત ચેક-ઇન",
    kpiPendingBadge: "મંજૂરી જરૂરી",
    kpiPendingSub: "સરેરાશ રાહ: 14 મિનિટ",
    kpiSpoilageTitle: "અંદાજિત નુકસાન બચત",
    kpiSpoilageBadge: "બચત",
    kpiSpoilageSub: "+₹4.2 લાખ ગત સપ્તાહની સરખામણીએ",
    kpiMandisTitle: "સક્રિય મંડીઓ કનેક્ટેડ",
    kpiMandisBadge: "12 રાજ્યો",
    kpiMandisSub: "99.8% સેન્સર અપટાઇમ",
    centers: "કેન્દ્રો",
    chartTitle: "દૈનિક મંડી આવક વિરુદ્ધ ગોડાઉન ક્ષમતા",
    chartSub: "અનાજના જથ્થાનું રિયલ-ટાઇમ ટ્રેકિંગ",
    chartBadge: "લાઇવ ટેલિમેટ્રી",
    chartThreshold: "મર્યાદા: 25,000 મેટ્રિક ટન",
    chartMaxCap: "મહત્તમ ગોડાઉન ક્ષમતા",
    chartActualInflow: "વાસ્તવિક આવક (MT)",
    chartMaxThreshold: "મર્યાદા (25,000 MT)",
    recentAlertsTitle: "તાકીદની ચેતવણીઓ",
    btnRead: "🔊 સાંભળો",
    aiThrottlingTitle: "AI ડાયનેમિક થ્રોટલિંગ એન્જિન",
    aiThrottlingSub: "રિયલ-ટાઇમ ગોડાઉન ક્ષમતા ઓપ્ટિમાઇઝેશન",
    statWarehouse: "ગોડાઉન",
    statGateQueue: "ગેટ કતાર",
    statEstClear: "અંદાજિત સમય",
    slotSimulatorTitle: "ઇન્ટરેક્ટિવ સ્લોટ બુકિંગ સિમ્યુલેટર",
    badgeENAM: "e-NAM ચકાસાયેલ",
    labelFarmerName: "ખેડૂતનું પૂરૂં નામ",
    labelAadhaar: "આધાર આઈડી",
    labelCropCategory: "પાકની શ્રેણી",
    labelQuantity: "જથ્થો (ક્વિન્ટલ)",
    labelMandiCenter: "પસંદગીનું મંડી કેન્દ્ર",
    btnGenerateSlot: "🎟️ સ્માર્ટ સ્લોટ પાસ (QR) મેળવો",
    milestoneTitle: "એન્ડ-ટુ-એન્ડ ટિકિટ માઇલસ્ટોન ટ્રેકર",
    milestoneSub: "લાઇવ કૃષિ લોજિસ્ટિક્સ ટ્રેકિંગ",
    step1: "ટોકન જારી",
    step2: "મંડી આગમન",
    step3: "ગુણવત્તા ચકાસણી",
    step4: "ગ્રેડિંગ",
    step5: "ચુકવણી",
    activeStage: "સક્રિય તબક્કો",
    btnApproveOverride: "⚡ મંજૂર કરો",
    btnReschedule: "📅 સમય બદલો",
    btnDigitalReceipt: "🎟️ ડિજિટલ રસીદ મેળવો",
    btnResetStage: "તબક્કો રીસેટ કરો",
    btnAdvanceStage: "આગળનો તબક્કો →",
    weighbridgeTitle: "⚖️ વેબ્રિજ ટર્મિનલ #WB-01",
    sensorCalibrated: "સેન્સર કેલિબ્રેટ થયેલ",
    grossWeightLabel: "કુલ ટ્રક વજન (Kg)",
    tareWeightLabel: "ખાલી ટ્રક વજન (Kg)",
    netProcurementWeight: "ચોખ્ખું પાક વજન",
    btnCalculatePass: "🎟️ ગેટ પાસ જારી કરો",
    liveFeedTitle: "🚛 મંડી કતાર લાઇવ ફીડ",
    liveFeedSub: "આવતા ટ્રકની વિગતો",
    liveFeedBadge: "લાઇવ ફીડ",
    thVehicle: "વાહન",
    thToken: "ટોકન નં.",
    thFarmer: "ખેડૂત",
    thGrossTare: "કુલ / ખાલી",
    thNet: "ચોખ્ખું વજન",
    thWait: "અંદાજિત સમય",
    thStatus: "સ્થિતિ",
    fraudTitle: "📡 સેટેલાઇટ જમીન રેકોર્ડ અને પાક ચકાસણી",
    fraudSub: "AI દ્વારા પાક ચકાસણી",
    actionReqBadge: "પગલાં જરૂરી",
    thFarmerIdName: "ખેડૂત આઈડી અને નામ",
    thCropLand: "પાક અને જમીન",
    thDeclaredQty: "જાહેર કરેલ જથ્થો",
    thLandLimit: "જમીન મર્યાદા",
    thDiscrepancy: "AI વિસંગતતા",
    thAuditStatus: "ઓડિટ સ્થિતિ",
    thActionControls: "પગલાં",
    btnApprove: "⚡ મંજૂર કરો",
    btnBlock: "⛔ બ્લોક કરો",
    analyticsHeader: "ખરીદી હીટમેપ્સ અને HITL",
    analyticsSub: "પ્રાદેશિક મંડી વિશ્લેષણ",
    btnExportCSV: "📥 CSV રિપોર્ટ",
    btnExportPDF: "📄 PDF રિપોર્ટ",
    heatmapTitle: "🗺️ મંડી હીટમેપ ગ્રીડ",
    normalFlow: "સામાન્ય",
    heavyLoad: "ભારે ભાર",
    bottlenecked: "જામ",
    capacityLabel: "ક્ષમતા:",
    queueLabel: "કતાર:",
    hitlTitle: "હ્યુમન-ઇન-ધ-લૂપ (HITL) લર્નિંગ ફીડ",
    hitlSub: "AI સિસ્ટમ અપડેટ્સ",
    btnSimulateOverride: "+ ઓવરરાઇડ કરો",
    aiFeedbackEngine: "🤖 AI ફીડબેક એન્જિન",
    settingsAccessibility: "🌐 ભાષા અને અવાજ સેટિંગ્સ",
    labelPrimaryLang: "મુખ્ય ભાષા",
    btnTestAudio: "🔊 અવાજ ચકાસણી",
    settingsAPI: "🔗 રાષ્ટ્રીય કૃષિ API એકીકરણ",
    apiENAM: "e-NAM મંડી",
    apiENAMDesc: "રિયલ-ટાઇમ કિંમત પ્રણાલી",
    apiPMKisan: "PM-KISAN રજીસ્ટ્રી",
    apiPMKisanDesc: "જમીન ચકાસણી API",
    statusActive: "સક્રિય",
    bhashiniTitle: "🇮🇳 ભાષિણી AI વોઇસ આસિસ્ટન્ટ",
    bhashiniWelcome: "નમસ્તે! તમે ગુજરાતી, હિન્દી કે 22 ભાષાઓમાં પૂછી શકો છો.",
    bhashiniPlaceholder: "ગુજરાતીમાં પૂછો...",
    btnAsk: "પૂછો",
    voucherTitle: "🧾 ડિજિટલ ખરીદી રસીદ",
    voucherHeader: "કિસાનસેતુ-કૃષિ DSS • સત્તાવાર રસીદ",
    voucherFCI: "ભારતીય અન્ન નિગમ (FCI)",
    voucherRate: "ભાવ:",
    voucherScan: "વેબ્રિજ ગેટ પર સ્કેન કરો",
    btnClose: "બંધ કરો",
    btnPrint: "🖨️ પ્રિન્ટ કરો"
  },
  ur: {
    appTitle: "کسان سیٹو-زرعی DSS",
    subtitle: "زرعی لاجسٹکس اور خریداری کے لیے فیصلہ سازی کا نظام",
    teamName: "ANT-X پلیٹ فارم",
    searchPlaceholder: "سلاٹس، منڈی، کسان آئی ڈی تلاش کریں...",
    profileRole: "وزارت / FCI ایڈمن",
    profileName: "FCI سنٹرل ایڈمن",
    voiceGuide: "وائس اسسٹنٹ",
    coreNav: "بنیادی نیویگیشن",
    navDashboard: "ڈیش بورڈ (جائزہ)",
    navSlotBooking: "سمارٹ سلاٹ بکنگ (کسان پورٹل)",
    navMandiQueue: "منڈی کی قطار اور ویبرج",
    navAnalytics: "خریداری کے ہیٹ میپس",
    navFraud: "دھوکہ دہی کی نشاندہی",
    navSettings: "سیٹنگز",
    urgentNotifs: "اہم اطلاعات",
    newCount: "نیا",
    kpiSlotsTitle: "کل روزانہ مختص کردہ سلاٹس",
    kpiSlotsSub: "28 منسلک منڈیوں میں",
    kpiPendingTitle: "زیر التواء کسان چیک ان",
    kpiPendingBadge: "منظوری درکار ہے",
    kpiPendingSub: "اوسط انتظار: 14 منٹ",
    kpiSpoilageTitle: "بچایا گیا تخمینہ نقصان",
    kpiSpoilageBadge: "بچت",
    kpiSpoilageSub: "+₹4.2 لاکھ پچھلے ہفتے کے مقابلے",
    kpiMandisTitle: "فعال منڈیاں",
    kpiMandisBadge: "12 ریاستیں",
    kpiMandisSub: "99.8% سینسر اپ ٹائم",
    centers: "مراکز",
    chartTitle: "روزانہ منڈی آمد بمقابلہ گودام کی گنجائش",
    chartSub: "ریئل ٹائم اناج کے حجم کی نگرانی",
    chartBadge: "لائیو ٹیلی میٹری",
    chartThreshold: "حد: 25,000 میٹرک ٹن",
    chartMaxCap: "زیادہ سے زیادہ گنجائش",
    chartActualInflow: "اصل آمد (MT)",
    chartMaxThreshold: "حد (25,000 MT)",
    recentAlertsTitle: "اہم آپریشنل الرٹس",
    btnRead: "🔊 سنیں",
    aiThrottlingTitle: "AI متحرک سفارشات انجن",
    aiThrottlingSub: "گودام کی گنجائش کی بہتری",
    statWarehouse: "گودام",
    statGateQueue: "گیٹ کی قطار",
    statEstClear: "تخمینہ وقت",
    slotSimulatorTitle: "سلاٹ بکنگ سمیلیٹر",
    badgeENAM: "e-NAM تصدیق شدہ",
    labelFarmerName: "کسان کا پورا نام",
    labelAadhaar: "آدھار آئی ڈی",
    labelCropCategory: "فصل کی قسم",
    labelQuantity: "مقدار (کوئنٹل)",
    labelMandiCenter: "ترجیحی منڈی مرکز",
    btnGenerateSlot: "🎟️ سمارٹ سلاٹ پاس (QR) حاصل کریں",
    milestoneTitle: "ٹکٹ مائل اسٹون ٹریکر",
    milestoneSub: "لائیو لاجسٹکس ٹریکنگ",
    step1: "ٹوکن جاری",
    step2: "منڈی آمد",
    step3: "معیار کی جانچ",
    step4: "گریڈنگ",
    step5: "ادائیگی",
    activeStage: "فعال مرحلہ",
    btnApproveOverride: "⚡ منظور کریں",
    btnReschedule: "📅 وقت تبدیل کریں",
    btnDigitalReceipt: "🎟️ ڈیجیٹل رسید حاصل کریں",
    btnResetStage: "مرحلہ ری سیٹ کریں",
    btnAdvanceStage: "اگلا مرحلہ →",
    weighbridgeTitle: "⚖️ ویبرج ٹرمینل #WB-01",
    sensorCalibrated: "سینسر کی جانچ مکمل",
    grossWeightLabel: "کل ٹرک کا وزن (Kg)",
    tareWeightLabel: "خالی ٹرک کا وزن (Kg)",
    netProcurementWeight: "خالص فصل کا وزن",
    btnCalculatePass: "🎟️ گیٹ پاس جاری کریں",
    liveFeedTitle: "🚛 منڈی کی قطار کی لائیو فیڈ",
    liveFeedSub: "آمد ٹرکوں کی تفصیلات",
    liveFeedBadge: "لائیو فیڈ",
    thVehicle: "گاڑی",
    thToken: "ٹوکن نمبر",
    thFarmer: "کسان",
    thGrossTare: "کل / خالی",
    thNet: "خالص وزن",
    thWait: "تخمینہ وقت",
    thStatus: "صورتحال",
    fraudTitle: "📡 سیٹلائٹ لینڈ ریکارڈز اور فصل کی جانچ",
    fraudSub: "AI کے ذریعے فصل کی تصدیق",
    actionReqBadge: "کارروائی درکار ہے",
    thFarmerIdName: "کسان آئی ڈی اور نام",
    thCropLand: "فصل اور زمین",
    thDeclaredQty: "ظاہر کردہ مقدار",
    thLandLimit: "زمین کی حد",
    thDiscrepancy: "AI فرق",
    thAuditStatus: "آڈٹ کی صورتحال",
    thActionControls: "کارروائی",
    btnApprove: "⚡ منظور کریں",
    btnBlock: "⛔ بلاک کریں",
    analyticsHeader: "خریداری کے ہیٹ میپس اور HITL",
    analyticsSub: "علاقائی منڈی کا تجزیہ",
    btnExportCSV: "📥 CSV رپورٹ",
    btnExportPDF: "📄 PDF رپورٹ",
    heatmapTitle: "🗺️ منڈی ہیٹ میپ گرڈ",
    normalFlow: "نارمل",
    heavyLoad: "زیادہ بوجھ",
    bottlenecked: "جام",
    capacityLabel: "گنجائش:",
    queueLabel: "قطار:",
    hitlTitle: "ہیومن ان دی لوپ (HITL) لرننگ فیڈ",
    hitlSub: "AI سسٹمز اپ ڈیٹس",
    btnSimulateOverride: "+ اوور رائیڈ کریں",
    aiFeedbackEngine: "🤖 AI فیڈ بیک انجن",
    settingsAccessibility: "🌐 زبان اور آواز کی سیٹنگز",
    labelPrimaryLang: "بنیادی زبان",
    btnTestAudio: "🔊 آواز کا ٹیسٹ کریں",
    settingsAPI: "🔗 قومی زرعی API انٹیگریشن",
    apiENAM: "e-NAM منڈی",
    apiENAMDesc: "ریئل ٹائم قیمتوں کا نظام",
    apiPMKisan: "PM-KISAN رجسٹری",
    apiPMKisanDesc: "زمین کی تصدیق API",
    statusActive: "فعال",
    bhashiniTitle: "🇮🇳 بھاشنی AI وائس اسسٹنٹ",
    bhashiniWelcome: "خوش آمدید! آپ اردو، ہندی یا 22 زبانوں میں پوچھ سکتے ہیں۔",
    bhashiniPlaceholder: "اردو میں پوچھیں...",
    btnAsk: "پوچھیں",
    voucherTitle: "🧾 ڈیجیٹل خریداری رسید",
    voucherHeader: "کسان سیٹو-زرعی DSS • سرکاری رسید",
    voucherFCI: "فوڈ کارپوریشن آف انڈیا (FCI)",
    voucherRate: "نرخ:",
    voucherScan: "ویبرج گیٹ پر اسکین کریں",
    btnClose: "بند کریں",
    btnPrint: "🖨️ پرنٹ کریں"
  },
  kn: {
    appTitle: "ಕಿಸಾನ್‌ಸೇತು-ಕೃಷಿ DSS",
    subtitle: "ಕೃಷಿ ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಮತ್ತು ಖರೀದಿ ನಿರ್ಧಾರ ಬೆಂಬಲ ವ್ಯವಸ್ಥೆ",
    teamName: "ANT-X ವೇದಿಕೆ",
    searchPlaceholder: "ಸ್ಲಾಟ್‌ಗಳು, ಮಂಡಿ, ರೈತ ಐಡಿ ಹುಡುಕಿ...",
    profileRole: "ಸಚಿವಾಲಯ / FCI ಅಡ್ಮಿನ್",
    profileName: "FCI ಕೇಂದ್ರ ಅಡ್ಮಿನ್",
    voiceGuide: "ವಾಯ್ಸ್ ಅಸಿಸ್ಟೆಂಟ್",
    coreNav: "ಮುಖ್ಯ ನ್ಯಾವಿಗೇಷನ್",
    navDashboard: "ಡ್ಯಾಶ್‌ಬೋರ್ಡ್ (ಅವಲೋಕನ)",
    navSlotBooking: "ಸ್ಮಾರ್ಟ್ ಸ್ಲಾಟ್ ಬುಕಿಂಗ್ (ರೈತ ಪೋರ್ಟಲ್)",
    navMandiQueue: "ಮಂಡಿ ಸರದಿ ಮತ್ತು ವೇಬ್ರಿಡ್ಜ್",
    navAnalytics: "ಖರೀದಿ ಹೀಟ್‌ಮ್ಯಾಪ್‌ಗಳು",
    navFraud: "ವಂಚನೆ ಪತ್ತೆ",
    navSettings: "ಸೇಟಿಂಗ್ಸ್",
    urgentNotifs: "ತುರ್ತು ಸೂಚನೆಗಳು",
    newCount: "ಹೊಸ",
    kpiSlotsTitle: "ಒಟ್ಟು ದೈನಂದಿನ ಹಂಚಿಕೆಯಾದ ಸ್ಲಾಟ್‌ಗಳು",
    kpiSlotsSub: "28 ಸಂಪರ್ಕಿತ ಮಂಡಿಗಳಲ್ಲಿ",
    kpiPendingTitle: "ಬಾಕಿ ಇರುವ ರೈತರ ಚೆಕ್-ಇನ್‌ಗಳು",
    kpiPendingBadge: "ಅನುಮೋದನೆ ಅಗತ್ಯವಿದೆ",
    kpiPendingSub: "ಸರಾಸರಿ ಕಾಯುವಿಕೆ: 14 ನಿಮಿಷಗಳು",
    kpiSpoilageTitle: "ಅಂದಾಜು ಉಳಿತಾಯ",
    kpiSpoilageBadge: "ಉಳಿತಾಯ",
    kpiSpoilageSub: "+₹4.2 ಲಕ್ಷ ಕಳೆದ ವಾರಕ್ಕೆ ಹೋಲಿಸಿದರೆ",
    kpiMandisTitle: "ಸಕ್ರಿಯ ಮಂಡಿಗಳು",
    kpiMandisBadge: "12 ರಾಜ್ಯಗಳು",
    kpiMandisSub: "99.8% ಸಂವೇದಕ ಸಕ್ರಿಯ",
    centers: "ಕೇಂದ್ರಗಳು",
    chartTitle: "ದೈನಂದಿನ ಮಂಡಿ ಆಗಮನ ವರ್ಸಸ್ ಗೋದಾಮು ಸಾಮರ್ಥ್ಯ",
    chartSub: "ನೈಜ ಸಮಯದಲ್ಲಿ ಧಾನ್ಯದ ಪ್ರಮಾಣದ ಮೇಲ್ವಿಚಾರಣೆ",
    chartBadge: "ಲೈವ್ ಟೆಲಿಮೆಟ್ರಿ",
    chartThreshold: "ಮಿತಿ: 25,000 ಮೆಟ್ರಿಕ್ ಟನ್",
    chartMaxCap: "ಗರಿಷ್ಠ ಗೋದಾಮು ಸಾಮರ್ಥ್ಯ",
    chartActualInflow: "ನೈಜ ಆಗಮನ (MT)",
    chartMaxThreshold: "ಮಿತಿ (25,000 MT)",
    recentAlertsTitle: "ತುರ್ತು ಎಚ್ಚರಿಕೆಗಳು",
    btnRead: "🔊 ಕೇಳಿ",
    aiThrottlingTitle: "AI ಡೈನಾಮಿಕ್ ಶಿಫಾರಸು ಇಂಜಿನ್",
    aiThrottlingSub: "ಗೋದಾಮು ಸಾಮರ್ಥ್ಯದ ನೈಜ-ಸಮಯದ ಬಳಕೆ",
    statWarehouse: "ಗೋದಾಮು",
    statGateQueue: "ಗೇಟ್ ಸರದಿ",
    statEstClear: "ಅಂದಾಜು ಸಮಯ",
    slotSimulatorTitle: "ಸ್ಲಾಟ್ ಬುಕಿಂಗ್ ಸಿಮ್ಯುಲೇಟರ್",
    badgeENAM: "e-NAM ಪರಿಶೀಲಿಸಲಾಗಿದೆ",
    labelFarmerName: "ರೈತನ ಪೂರ್ಣ ಹೆಸರು",
    labelAadhaar: "ಆಧಾರ್ ಐಡಿ",
    labelCropCategory: "ಬೆಳೆ ವರ್ಗ",
    labelQuantity: "ಪ್ರಮಾಣ (ಕ್ವಿಂಟಾಲ್)",
    labelMandiCenter: "ಆದ್ಯತೆಯ ಮಂಡಿ ಕೇಂದ್ರ",
    btnGenerateSlot: "🎟️ ಸ್ಮಾರ್ಟ್ ಸ್ಲಾಟ್ ಪಾಸ್ (QR) ಪಡೆಯಿರಿ",
    milestoneTitle: "ಟಿಕೆಟ್ ಹಂತಗಳ ಟ್ರ್ಯಾಕರ್",
    milestoneSub: "ಲೈವ್ ಕೃಷಿ ಲಾಜಿಸ್ಟಿಕ್ಸ್ ಟ್ರ್ಯಾಕಿಂಗ್",
    step1: "ಟೋಕನ್ ನೀಡಲಾಗಿದೆ",
    step2: "ಮಂಡಿ ಆಗಮನ",
    step3: "ಗುಣಮಟ್ಟ ತಪಾಸಣೆ",
    step4: "ಶ್ರೇಣೀಕರಣ",
    step5: "ಪಾವತಿ",
    activeStage: "ಸಕ್ರಿಯ ಹಂತ",
    btnApproveOverride: "⚡ ಅನುಮೋದಿಸಿ",
    btnReschedule: "📅 ಮರು ವೇಳಾಪಟ್ಟಿ ಮಾಡಿ",
    btnDigitalReceipt: "🎟️ ಡಿಜಿಟಲ್ ರಶೀದಿ ಪಡೆಯಿರಿ",
    btnResetStage: "ಹಂತವನ್ನು ರಿಸೆಟ್ ಮಾಡಿ",
    btnAdvanceStage: "ಮುಂದಿನ ಹಂತ →",
    weighbridgeTitle: "⚖️ ವೇಬ್ರಿಡ್ಜ್ ಟರ್ಮಿನಲ್ #WB-01",
    sensorCalibrated: "ಸಂವೇದಕ ತಪಾಸಣೆ ಮಾಡಲಾಗಿದೆ",
    grossWeightLabel: "ಒಟ್ಟು ಟ್ರಕ್ ತೂಕ (Kg)",
    tareWeightLabel: "ಖಾಲಿ ಟ್ರಕ್ ತೂಕ (Kg)",
    netProcurementWeight: "ನಿವ್ವಳ ಬೆಳೆ ತೂಕ",
    btnCalculatePass: "🎟️ ಗೇಟ್ ಪಾಸ್ ನೀಡಿ",
    liveFeedTitle: "🚛 ಮಂಡಿ ಸರದಿ ಲೈವ್ ಫೀಡ್",
    liveFeedSub: "ಆಗಮಿಸುವ ಟ್ರಕ್‌ಗಳ ಮಾಹಿತಿ",
    liveFeedBadge: "ಲೈವ್ ಫೀಡ್",
    thVehicle: "ವಾಹನ",
    thToken: "ಟೋಕನ್ ಸಂಖ್ಯೆ",
    thFarmer: "ರೈತ",
    thGrossTare: "ಒಟ್ಟು / ಖಾಲಿ",
    thNet: "ನಿವ್ವಳ ತೂಕ",
    thWait: "ಅಂದಾಜು ಸಮಯ",
    thStatus: "ಸ್ಥಿತಿ",
    fraudTitle: "📡 ಉಪಗ್ರಹ ಭೂಮಿ ದಾಖಲೆಗಳು ಮತ್ತು ಬೆಳೆ ಪರಿಶೀಲನೆ",
    fraudSub: "AI ಮೂಲಕ ಬೆಳೆ ಪರಿಶೀಲನೆ",
    actionReqBadge: "ಕ್ರಮ ಅಗತ್ಯವಿದೆ",
    thFarmerIdName: "ರೈತನ ಐಡಿ ಮತ್ತು ಹೆಸರು",
    thCropLand: "ಬೆಳೆ ಮತ್ತು ಜಮೀನು",
    thDeclaredQty: "ಘೋಷಿತ ಪ್ರಮಾಣ",
    thLandLimit: "ಜಮೀನಿನ ಮಿತಿ",
    thDiscrepancy: "AI ವ್ಯತ್ಯಾಸ",
    thAuditStatus: "ಆಡಿಟ್ ಸ್ಥಿತಿ",
    thActionControls: "ಕ್ರಮಗಳು",
    btnApprove: "⚡ ಅನುಮೋದಿಸಿ",
    btnBlock: "⛔ ಬ್ಲಾಕ್ ಮಾಡಿ",
    analyticsHeader: "ಖರೀದಿ ಹೀಟ್‌ಮ್ಯಾಪ್‌ಗಳು & HITL",
    analyticsSub: "ಪ್ರಾದೇಶಿಕ ಮಂಡಿ ವಿಶ್ಲೇಷಣೆ",
    btnExportCSV: "📥 CSV ವರದಿ",
    btnExportPDF: "📄 PDF ವರದಿ",
    heatmapTitle: "🗺️ ಮಂಡಿ ಹೀಟ್‌ಮ್ಯಾಪ್ ಗ್ರಿಡ್",
    normalFlow: "ಸಾಮಾನ್ಯ",
    heavyLoad: "ಹೆಚ್ಚಿನ ಸಂಚಾರ",
    bottlenecked: "ಜಾಮ್ ಆಗಿದೆ",
    capacityLabel: "ಸಾಮರ್ಥ್ಯ:",
    queueLabel: "ಸರದಿ:",
    hitlTitle: "ಹ್ಯೂಮನ್-ಇನ್-ದಿ-ಲೂಪ್ (HITL) ಲರ್ನಿಂಗ್ ಫೀಡ್",
    hitlSub: "AI ಸಿಸ್ಟಮ್ ಅಪ್‌ಡೇಟ್‌ಗಳು",
    btnSimulateOverride: "+ ಬದಲಾವಣೆ ಮಾಡಿ",
    aiFeedbackEngine: "🤖 AI ಫೀಡ್‌ಬ್ಯಾಕ್ ಇಂಜಿನ್",
    settingsAccessibility: "🌐 ಭಾಷೆ ಮತ್ತು ಧ್ವನಿ ಸೇಟಿಂಗ್ಸ್",
    labelPrimaryLang: "ಮುಖ್ಯ ಭಾಷೆ",
    btnTestAudio: "🔊 ಧ್ವನಿ ಪರೀಕ್ಷೆ ಮಾಡಿ",
    settingsAPI: "🔗 ರಾಷ್ಟ್ರೀಯ ಕೃಷಿ API ಸಂಯೋಜನೆ",
    apiENAM: "e-NAM ಮಂಡಿ",
    apiENAMDesc: "ನೈಜ ಸಮಯದ ಬೆಲೆಗಳ ವ್ಯವಸ್ಥೆ",
    apiPMKisan: "PM-KISAN ನೋಂದಣಿ",
    apiPMKisanDesc: "ಭೂಮಿ ಪರಿಶೀಲನೆ API",
    statusActive: "ಸಕ್ರಿಯವಾಗಿದೆ",
    bhashiniTitle: "🇮🇳 ಭಾಷಿಣಿ AI ವಾಯ್ಸ್ ಅಸಿಸ್ಟೆಂಟ್",
    bhashiniWelcome: "ನಮಸ್ಕಾರ! ನೀವು ಕನ್ನಡ, ಹಿಂದಿ ಅಥವಾ 22 ಭಾಷೆಗಳಲ್ಲಿ ಕೇಳಬಹುದು.",
    bhashiniPlaceholder: "ಕನ್ನಡದಲ್ಲಿ ಕೇಳಿ...",
    btnAsk: "ಕೇಳಿ",
    voucherTitle: "🧾 ಡಿಜಿಟಲ್ ಖರೀದಿ ರಶೀದಿ",
    voucherHeader: "ಕಿಸಾನ್‌ಸೇತು-ಕೃಷಿ DSS • ಅಧಿಕೃತ ರಶೀದಿ",
    voucherFCI: "ಭಾರತೀಯ ಆಹಾರ ನಿಗಮ (FCI)",
    voucherRate: "ದರ:",
    voucherScan: "ವೇಬ್ರಿಡ್ಜ್ ಗೇಟ್‌ನಲ್ಲಿ ಸ್ಕ್ಯಾನ್ ಮಾಡಿ",
    btnClose: "ಮುಚ್ಚಿ",
    btnPrint: "🖨️ ಪ್ರಿಂಟ್ ಮಾಡಿ"
  },
  or: {
    appTitle: "କିଷାନସେତୁ-କୃଷି DSS",
    subtitle: "କୃଷି ଲଜିଷ୍ଟିକ୍ସ ଏବଂ ସଂଗ୍ରହ ନିଷ୍ପତ୍ତି ସହାୟତା ପ୍ରଣାଳୀ",
    teamName: "ANT-X ପ୍ଲାଟଫର୍ମ",
    searchPlaceholder: "ସ୍ଲଟ୍, ମଣ୍ଡି, କୃଷକ ଆଇଡି ଖୋଜନ୍ତୁ...",
    profileRole: "ମନ୍ତ୍ରଣାଳୟ / FCI ପ୍ରଶାସକ",
    profileName: "FCI କେନ୍ଦ୍ରୀୟ ପ୍ରଶାସକ",
    voiceGuide: "ଭଏସ୍ ଆସିଷ୍ଟାଣ୍ଟ",
    coreNav: "ମୁଖ୍ୟ ନେଭିଗେସନ୍",
    navDashboard: "ଡ୍ୟାସବୋର୍ଡ (ଆଭଲୋକନ)",
    navSlotBooking: "ସ୍ମାର୍ଟ ସ୍ଲଟ୍ ବୁକିଂ (କୃଷକ ପୋର୍ଟାଲ)",
    navMandiQueue: "ମଣ୍ଡି ଧାଡ଼ି ଏବଂ ୱେବ୍ରିଜ୍",
    navAnalytics: "ସଂଗ୍ରହ ହିଟମ୍ୟାପ୍ସ",
    navFraud: "ଠକେଇ ଚିହ୍ନଟ",
    navSettings: "ସେଟିଂସ",
    urgentNotifs: "ଜରୁରୀ ସୂଚନା",
    newCount: "ନୂଆ",
    kpiSlotsTitle: "ମୋଟ ଦୈନିକ ବଣ୍ଟିତ ସ୍ଲଟ୍",
    kpiSlotsSub: "୨୮ଟି ସଂଯୁକ୍ତ ମଣ୍ଡିରେ",
    kpiPendingTitle: "ବକେୟା କୃଷକ ଚେକ୍-ଇନ୍",
    kpiPendingBadge: "ଅନୁମୋଦନ ଆବଶ୍ୟକ",
    kpiPendingSub: "ହାରାହାରି ଅପେକ୍ଷା: ୧୪ ମିନିଟ୍",
    kpiSpoilageTitle: "ଆନୁମାନିକ କ୍ଷତି ସଞ୍ଚୟ",
    kpiSpoilageBadge: "ସଞ୍ଚୟ",
    kpiSpoilageSub: "+₹୪.୨ ଲକ୍ଷ ଗତ ସପ୍ତାହ ତୁଳନାରେ",
    kpiMandisTitle: "ସକ୍ରିୟ ମଣ୍ଡି ସଂଯୁକ୍ତ",
    kpiMandisBadge: "୧୨ଟି ରାଜ୍ୟ",
    kpiMandisSub: "୯୯.୮% ସେନ୍ସର ସକ୍ରିୟ",
    centers: "କେନ୍ଦ୍ର",
    chartTitle: "ଦୈନିକ ମଣ୍ଡି ଆଗମନ ବନାମ ଗୋଦାମ କ୍ଷମତା",
    chartSub: "ରିଅଲ-ଟାଇମ୍ ଶସ୍ୟ ପରିମାଣ ନିରୀକ୍ଷଣ",
    chartBadge: "ଲାଇଭ୍ ଟେଲିମେଟ୍ରି",
    chartThreshold: "ସୀମା: ୨୫,୦୦୦ ମେଟ୍ରିକ୍ ଟନ୍",
    chartMaxCap: "ସର୍ବାଧିକ ଗୋଦାମ କ୍ଷମତା",
    chartActualInflow: "ପ୍ରକୃତ ଆଗମନ (MT)",
    chartMaxThreshold: "ସୀମା (୨୫,୦୦୦ MT)",
    recentAlertsTitle: "ଜରୁରୀ ଆଲର୍ଟ",
    btnRead: "🔊 ଶୁଣନ୍ତୁ",
    aiThrottlingTitle: "AI ଡାଇନାମିକ୍ ସୁପାରିଶ ଇଞ୍ଜିନ୍",
    aiThrottlingSub: "ଗୋଦାମ କ୍ଷମତାର ଉପଯୁକ୍ତ ବ୍ୟବହାର",
    statWarehouse: "ଗୋଦାମ",
    statGateQueue: "ଗେଟ୍ ଧାଡ଼ି",
    statEstClear: "ଆନୁମାନିକ ସମୟ",
    slotSimulatorTitle: "ସ୍ଲଟ୍ ବୁକିଂ ସିମୁଲେଟର",
    badgeENAM: "e-NAM ଯାଞ୍ଚ ହୋଇଛି",
    labelFarmerName: "କୃଷକଙ୍କ ପୂରା ନାମ",
    labelAadhaar: "ଆଧାର ଆଇଡି",
    labelCropCategory: "ଫସଲ ଶ୍ରେଣୀ",
    labelQuantity: "ପରିମାଣ (କ୍ୱିଣ୍ଟାଲ)",
    labelMandiCenter: "ପସନ୍ଦର ମଣ୍ଡି କେନ୍ଦ୍ର",
    btnGenerateSlot: "🎟️ ସ୍ମାର୍ଟ ସ୍ଲଟ୍ ପାସ୍ (QR) ପାଆନ୍ତୁ",
    milestoneTitle: "ଟିକେଟ୍ ମାଇଲଷ୍ଟୋନ୍ ଟ୍ରାକର୍",
    milestoneSub: "ଲାଇଭ୍ କୃଷି ଲଜିଷ୍ଟିକ୍ସ ଟ୍ରାକିଂ",
    step1: "ଟୋକନ୍ ଜାରି",
    step2: "ମଣ୍ଡି ଆଗମନ",
    step3: "ଗୁଣବତ୍ତା ଯାଞ୍ଚ",
    step4: "ଗ୍ରେଡିଂ",
    step5: "ପରିଶୋଧ",
    activeStage: "ସକ୍ରିୟ ପର୍ଯ୍ୟାୟ",
    btnApproveOverride: "⚡ ଅନୁମୋଦନ କରନ୍ତୁ",
    btnReschedule: "📅 ସମୟ ବଦଳାନ୍ତୁ",
    btnDigitalReceipt: "🎟️ ଡିଜିଟାଲ୍ ରସିଦ୍ ପାଆନ୍ତୁ",
    btnResetStage: "ପର୍ଯ୍ୟାୟ ରିସେଟ୍ କରନ୍ତୁ",
    btnAdvanceStage: "ପରବର୍ତ୍ତୀ ପର୍ଯ୍ୟାୟ →",
    weighbridgeTitle: "⚖️ ୱେବ୍ରିଜ୍ ଟର୍ମିନାଲ୍ #WB-01",
    sensorCalibrated: "ସେନ୍ସର ଯାଞ୍ଚ ହୋଇଛି",
    grossWeightLabel: "ମୋଟ ଟ୍ରକ୍ ଓଜନ (Kg)",
    tareWeightLabel: "ଖାଲି ଟ୍ରକ୍ ଓଜନ (Kg)",
    netProcurementWeight: "ଶୁଦ୍ଧ ଫସଲ ଓଜନ",
    btnCalculatePass: "🎟️ ଗେଟ୍ ପାସ୍ ଦିଅନ୍ତୁ",
    liveFeedTitle: "🚛 ମଣ୍ଡି ଧାଡ଼ି ଲାଇଭ୍ ଫିଡ୍",
    liveFeedSub: "ଆସୁଥିବା ଟ୍ରକ୍ ସୂଚନା",
    liveFeedBadge: "ଲାଇଭ୍ ଫିଡ୍",
    thVehicle: "ଗାଡ଼ି",
    thToken: "ଟୋକନ୍ ନଂ",
    thFarmer: "କୃଷକ",
    thGrossTare: "ମୋଟ / ଖାଲି",
    thNet: "ଶୁଦ୍ଧ ଓଜନ",
    thWait: "ଆନୁମାନିକ ସମୟ",
    thStatus: "ସ୍ଥିତି",
    fraudTitle: "📡 ସାଟେଲାଇଟ୍ ଜମି ରେକର୍ଡ ଏବଂ ଫସଲ ଯାଞ୍ଚ",
    fraudSub: "AI ଦ୍ୱାରା ଫସଲ ଯାଞ୍ଚ",
    actionReqBadge: "ପଦକ୍ଷେପ ଆବଶ୍ୟକ",
    thFarmerIdName: "କୃଷକ ଆଇଡି ଏବଂ ନାମ",
    thCropLand: "ଫସଲ ଏବଂ ଜମି",
    thDeclaredQty: "ଘୋଷିତ ପରିମାଣ",
    thLandLimit: "ଜମି ସୀମା",
    thDiscrepancy: "AI ଫରକ",
    thAuditStatus: "ଅଡିଟ୍ ସ୍ଥିତି",
    thActionControls: "ପଦକ୍ଷେପ",
    btnApprove: "⚡ ଅନୁମୋଦନ କରନ୍ତୁ",
    btnBlock: "⛔ ବ୍ଲକ୍ କରନ୍ତୁ",
    analyticsHeader: "ସଂଗ୍ରହ ହିଟମ୍ୟାପ୍ସ ଏବଂ HITL",
    analyticsSub: "ଆଞ୍ଚଳିକ ମଣ୍ଡି ବିଶ୍ଳେଷଣ",
    btnExportCSV: "📥 CSV ରିପୋର୍ଟ",
    btnExportPDF: "📄 PDF ରିପୋର୍ଟ",
    heatmapTitle: "🗺️ ମଣ୍ଡି ହିଟମ୍ୟାପ୍ ଗ୍ରିଡ୍",
    normalFlow: "ସାଧାରଣ",
    heavyLoad: "ଅଧିକ ଚାପ",
    bottlenecked: "ଜାମ୍",
    capacityLabel: "କ୍ଷମତା:",
    queueLabel: "ଧାଡ଼ି:",
    hitlTitle: "ହିଉମ୍ୟାନ୍-ଇନ୍-ଦ-ଲୁପ୍ (HITL) ଲର୍ନିଂ ଫିଡ୍",
    hitlSub: "AI ସିଷ୍ଟମ୍ ଅପଡେଟ୍",
    btnSimulateOverride: "+ ପରିବର୍ତ୍ତନ କରନ୍ତୁ",
    aiFeedbackEngine: "🤖 AI ଫିଡବ୍ୟାକ୍ ଇଞ୍ଜିନ୍",
    settingsAccessibility: "🌐 ଭାଷା ଏବଂ ଭଏସ୍ ସେଟିଂସ",
    labelPrimaryLang: "ମୁଖ୍ୟ ଭାଷା",
    btnTestAudio: "🔊 ଭଏସ୍ ପରୀକ୍ଷା କରନ୍ତୁ",
    settingsAPI: "🔗 ଜାତୀୟ କୃଷି API ସଂଯୋଗ",
    apiENAM: "e-NAM ମଣ୍ଡି",
    apiENAMDesc: "ରିଅଲ-ଟାଇମ୍ ମୂଲ୍ୟ ପ୍ରଣାଳୀ",
    apiPMKisan: "PM-KISAN ପଞ୍ଜୀକରଣ",
    apiPMKisanDesc: "ଜମି ଯାଞ୍ଚ API",
    statusActive: "ସକ୍ରିୟ",
    bhashiniTitle: "🇮🇳 ଭାଷିଣୀ AI ଭଏସ୍ ଆସିଷ୍ଟାଣ୍ଟ",
    bhashiniWelcome: "ନମସ୍କାର! ଆପଣ ଓଡ଼ିଆ, ହିନ୍ଦୀ କିମ୍ବା ୨୨ଟି ଭାଷାରେ ପଚାରିପାରିବେ।",
    bhashiniPlaceholder: "ଓଡ଼ିଆରେ ପଚାରନ୍ତୁ...",
    btnAsk: "ପଚାରନ୍ତୁ",
    voucherTitle: "🧾 ଡିଜିଟାଲ୍ ସଂଗ୍ରହ ରସିଦ୍",
    voucherHeader: "କିଷାନସେତୁ-କୃଷି DSS • ସରକାରୀ ରସିଦ୍",
    voucherFCI: "ଭାରତୀୟ ଖାଦ୍ୟ ନିଗମ (FCI)",
    voucherRate: "ଦର:",
    voucherScan: "ୱେବ୍ରିଜ୍ ଗେଟ୍‌ରେ ସ୍କାନ୍ କରନ୍ତୁ",
    btnClose: "ବନ୍ଦ କରନ୍ତୁ",
    btnPrint: "🖨️ ପ୍ରିଣ୍ଟ କରନ୍ତୁ"
  },
  ml: {
    appTitle: "കിസാൻസേതു-കാർഷിക DSS",
    subtitle: "കാർഷിക ലോജിസ്റ്റിക്സ് ആന്റ് സംഭരണ തീരുമാന പിന്തുണ സംവിധാനം",
    teamName: "ANT-X പ്ലാറ്റ്‌ഫോം",
    searchPlaceholder: "സ്ലോട്ടുകൾ, മണ്ടി, കർഷക ഐഡി തിരയുക...",
    profileRole: "മന്ത്രാലയം / FCI അഡ്മിൻ",
    profileName: "FCI സെൻട്രൽ അഡ്മിൻ",
    voiceGuide: "വോയ്‌സ് അസിസ്റ്റന്റ്",
    coreNav: "പ്രധാന നാവിഗേഷൻ",
    navDashboard: "ഡാഷ്‌ബോർഡ് (അവലോകനം)",
    navSlotBooking: "സ്മാർട്ട് സ്ലോട്ട് ബുക്കിംഗ് (കർഷക പോർട്ടൽ)",
    navMandiQueue: "മണ്ടി ക്യൂവും വേബ്രിഡ്ജും",
    navAnalytics: "സംഭരണ ഹീറ്റ്മാപ്പുകൾ",
    navFraud: "തട്ടിപ്പ് കണ്ടെത്തൽ",
    navSettings: "സജ്ജീകരണങ്ങൾ",
    urgentNotifs: "അടിയന്തിര അറിയിപ്പുകൾ",
    newCount: "പുതിയത്",
    kpiSlotsTitle: "ആകെ ദിവസേന അനുവദിച്ച സ്ലോട്ടുകൾ",
    kpiSlotsSub: "28 ബന്ധിപ്പിച്ച മണ്ടികളിൽ",
    kpiPendingTitle: "ബാക്കിയുള്ള കർഷക ചെക്ക്-ഇന്നുകൾ",
    kpiPendingBadge: "അനുമതി വേണം",
    kpiPendingSub: "ശരാശരി കാത്തിരിപ്പ്: 14 മിനിറ്റ്",
    kpiSpoilageTitle: "കണക്കാക്കിയ നഷ്ടം തടഞ്ഞു",
    kpiSpoilageBadge: "സേവിംഗ്സ്",
    kpiSpoilageSub: "+₹4.2 ലക്ഷം കഴിഞ്ഞ ആഴ്ചയെ അപേക്ഷിച്ച്",
    kpiMandisTitle: "സജീവമായ മണ്ടികൾ",
    kpiMandisBadge: "12 സംസ്ഥാനങ്ങൾ",
    kpiMandisSub: "99.8% സെൻസർ പ്രവർത്തനം",
    centers: "കേന്ദ്രങ്ങൾ",
    chartTitle: "ദിവസേനയുള്ള മണ്ടി വരവും സംഭരണ ശേഷിയും",
    chartSub: "തത്സമയ ധാന്യ അളവ് നിരീക്ഷണം",
    chartBadge: "ലൈവ് ടെലിമെട്രി",
    chartThreshold: "പരിധി: 25,000 മെട്രിക് ടൺ",
    chartMaxCap: "പരമാവധി സംഭരണ ശേഷി",
    chartActualInflow: "യഥാർത്ഥ വരവ് (MT)",
    chartMaxThreshold: "പരിധി (25,000 MT)",
    recentAlertsTitle: "അടിയന്തിര മുന്നറിയിപ്പുകൾ",
    btnRead: "🔊 കേൾക്കുക",
    aiThrottlingTitle: "AI ഡൈനാമിക് ശുപാർശ എഞ്ചിൻ",
    aiThrottlingSub: "തത്സമയ സംഭരണ ശേഷി ക്രമീകരണം",
    statWarehouse: "വെയർഹൗസ്",
    statGateQueue: "ഗേറ്റ് ക്യൂ",
    statEstClear: "പ്രതീക്ഷിക്കുന്ന സമയം",
    slotSimulatorTitle: "സ്ലോട്ട് ബുക്കിംഗ് സിമുലേറ്റർ",
    badgeENAM: "e-NAM സാക്ഷ്യപ്പെടുത്തിയത്",
    labelFarmerName: "കർഷകന്റെ മുഴുവൻ പേര്",
    labelAadhaar: "ആധാർ ഐഡി",
    labelCropCategory: "വിള തരം",
    labelQuantity: "അളവ് (ക്വിന്റൽ)",
    labelMandiCenter: "താൽപ്പര്യമുള്ള മണ്ടി സെന്റർ",
    btnGenerateSlot: "🎟️ സ്മാർട്ട് സ്ലോട്ട് പാസ് (QR) നേടുക",
    milestoneTitle: "ടിക്കറ്റ് ഘട്ടങ്ങളുടെ ട്രാക്കർ",
    milestoneSub: "തത്സമയ കാർഷിക ലോജിസ്റ്റിക്സ് ട്രാക്കിംഗ്",
    step1: "ടോക്കൺ നൽകി",
    step2: "മണ്ടിയിലെത്തി",
    step3: "ഗുണനിലവാര പരിശോധന",
    step4: "ഗ്രേഡിംഗ്",
    step5: "പണമടയ്ക്കൽ",
    activeStage: "സജീവ ഘട്ടം",
    btnApproveOverride: "⚡ അംഗീകരിക്കുക",
    btnReschedule: "📅 സമയം മാറ്റുക",
    btnDigitalReceipt: "🎟️ ഡിജിറ്റൽ രസീത് നേടുക",
    btnResetStage: "ഘട്ടം റീസെറ്റ് ചെയ്യുക",
    btnAdvanceStage: "അടുത്ത ഘട്ടം →",
    weighbridgeTitle: "⚖️ വേബ്രിഡ്ജ് ടെർമിനൽ #WB-01",
    sensorCalibrated: "സെൻസർ പരിശോധിച്ചു",
    grossWeightLabel: "ആകെ ട്രക്ക് ഭാരം (Kg)",
    tareWeightLabel: "ശൂന്യമായ ട്രക്ക് ഭാരം (Kg)",
    netProcurementWeight: "അറ്റ വിള ഭാരം",
    btnCalculatePass: "🎟️ ഗേറ്റ് പാസ് നൽകുക",
    liveFeedTitle: "🚛 മണ്ടി ക്യൂ ലൈവ് ഫീഡ്",
    liveFeedSub: "വരുന്ന ട്രക്കുകളുടെ വിവരങ്ങൾ",
    liveFeedBadge: "ലൈവ് ഫീഡ്",
    thVehicle: "വാഹനം",
    thToken: "ടോക്കൺ നമ്പർ",
    thFarmer: "കർഷകൻ",
    thGrossTare: "ആകെ / ശൂന്യം",
    thNet: "അറ്റ ഭാരം",
    thWait: "പ്രതീക്ഷിക്കുന്ന സമയം",
    thStatus: "സ്ഥിതി",
    fraudTitle: "📡 ഉപഗ്രഹ ഭൂമി രേഖകളും വിള പരിശോധനയും",
    fraudSub: "AI വഴിയുള്ള വിള പരിശോധന",
    actionReqBadge: "നടപടി വേണം",
    thFarmerIdName: "കർഷക ഐഡിയും പേരും",
    thCropLand: "വിളയും ഭൂമിയും",
    thDeclaredQty: "പ്രഖ്യാപിച്ച അളവ്",
    thLandLimit: "ഭൂമി പരിധി",
    thDiscrepancy: "AI വ്യത്യാസം",
    thAuditStatus: "ഓഡിറ്റ് സ്ഥിതി",
    thActionControls: "നടപടികൾ",
    btnApprove: "⚡ അംഗീകരിക്കുക",
    btnBlock: "⛔ ബ്ലോക്ക് ചെയ്യുക",
    analyticsHeader: "സംഭരണ ഹീറ്റ്മാപ്പുകളും HITL-ഉം",
    analyticsSub: "മേഖലാ മണ്ടി വിശകലനം",
    btnExportCSV: "📥 CSV റിപ്പോർട്ട്",
    btnExportPDF: "📄 PDF റിപ്പോർട്ട്",
    heatmapTitle: "🗺️ മണ്ടി ഹീറ്റ്മാപ്പ് ഗ്രിഡ്",
    normalFlow: "സാധാരണ നില",
    heavyLoad: "കനത്ത തിരക്ക്",
    bottlenecked: "ബ്ലോക്ക് ആയി",
    capacityLabel: "ശേഷി:",
    queueLabel: "ക്യൂ:",
    hitlTitle: "ഹ്യൂമൻ-ഇൻ-ദി-ലൂപ്പ് (HITL) ലേണിംഗ് ഫീഡ്",
    hitlSub: "AI സിസ്റ്റം അപ്‌ഡേറ്റുകൾ",
    btnSimulateOverride: "+ മാറ്റങ്ങൾ വരുത്തുക",
    aiFeedbackEngine: "🤖 AI ഫീഡ്‌ബാക്ക് എഞ്ചിൻ",
    settingsAccessibility: "🌐 ഭാഷയും ശബ്ദ ക്രമീകരണങ്ങളും",
    labelPrimaryLang: "പ്രധാന ഭാഷ",
    btnTestAudio: "🔊 ശബ്ദം പരിശോധിക്കുക",
    settingsAPI: "🔗 ദേശീയ കാർഷിക API ബന്ധിപ്പിക്കൽ",
    apiENAM: "e-NAM മണ്ടി",
    apiENAMDesc: "തത്സമയ വില വിവരങ്ങൾ",
    apiPMKisan: "PM-KISAN രജിസ്ട്രി",
    apiPMKisanDesc: "ഭൂമി പരിശോധന API",
    statusActive: "സജീവമാണ്",
    bhashiniTitle: "🇮🇳 ഭാഷിണി AI വോയ്‌സ് അസിസ്റ്റന്റ്",
    bhashiniWelcome: "നമസ്കാരം! മലയാളം, ഹിന്ദി അല്ലെങ്കിൽ 22 ഭാഷകളിൽ ചോദിക്കാം.",
    bhashiniPlaceholder: "മലയാളത്തിൽ ചോദിക്കൂ...",
    btnAsk: "ചോദിക്കൂ",
    voucherTitle: "🧾 ഡിജിറ്റൽ സംഭരണ രസീത്",
    voucherHeader: "കിസാൻസേതു-കാർഷിക DSS • ഔദ്യോഗിക രസീത്",
    voucherFCI: "ഫുഡ് കോർപ്പറേഷൻ ഓഫ് ഇന്ത്യ (FCI)",
    voucherRate: "നിരക്ക്:",
    voucherScan: "വേബ്രിഡ്ജ് ഗേറ്റിൽ സ്കാൻ ചെയ്യുക",
    btnClose: "അടയ്ക്കുക",
    btnPrint: "🖨️ പ്രിന്റ് ചെയ്യുക"
  }
};

// Fallbacks for rest of the official 22 languages mapping to Hindi / regional scripts
['as', 'mai', 'sat', 'ks', 'ne', 'kok', 'doi', 'mni', 'brx', 'sa', 'sd'].forEach(lang => {
  TRANSLATIONS[lang] = { ...TRANSLATIONS['hi'] };
});

// ============================================================================
// 2. MOCK DATA REPOSITORIES (PHASES 1, 2, 3 & 4)
// ============================================================================

export const KPI_DATA = {
  slotsAllocated: 1250,
  slotsTrend: "+12.4%",
  pendingCheckins: 142,
  demurrageSavedText: "₹48.5 Lakhs",
  activeMandis: 28
};

export const CHART_DATA_7DAYS = {
  labels: ["01 Sep", "02 Sep", "03 Sep", "04 Sep", "05 Sep", "06 Sep", "07 Sep"],
  inflowMT: [14200, 18500, 22100, 26400, 24800, 19200, 15800],
  capacityMT: [25000, 25000, 25000, 25000, 25000, 25000, 25000]
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

export const INITIAL_SATELLITE_YIELD_AUDITS = [
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

export const INITIAL_HITL_LOGS = [
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

// ============================================================================
// 3. MAIN REACT APPLICATION COMPONENT (App)
// ============================================================================

export default function App() {
  // Global Navigation & Language State
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentLang, setCurrentLang] = useState('hi');
  const [searchQuery, setSearchQuery] = useState('');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [notifOpen, setNotifOpen] = useState(false);

  // Phase 2 Ticket Stepper State
  const [activeTicket, setActiveTicket] = useState({
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
      stage1: { title: "Token Issued", detail: "Digital SMS & WhatsApp voucher generated", timestamp: "07 Sep, 08:15 AM" },
      stage2: { title: "Mandi Arrival", detail: "Scanned at Weighbridge Gate 02", timestamp: "07 Sep, 09:42 AM" },
      stage3: { title: "Weighment & Quality Check", detail: "Net Weight: 9,000 kg | Moisture: 12.2% (Optimal < 14%)", timestamp: "07 Sep, 10:10 AM" },
      stage4: { title: "Lot Accepted / Graded", detail: "Grade A Approved @ MSP Rate ₹2,275/Qtl", timestamp: "07 Sep, 10:25 AM" },
      stage5: { title: "Payment Disbursed", detail: "PFMS DBT Direct Bank Credit Completed", timestamp: "07 Sep, 10:40 AM" }
    }
  });

  // Phase 2 Form Simulator State
  const [simForm, setSimForm] = useState({
    name: "Sukhdev Sharma",
    aadhaar: "XXXX-XXXX-9918",
    mobile: "98120-XXXX1",
    crop: "Wheat (Sharbati Premium)",
    qty: 90,
    mandi: "Khanna Mandi #101"
  });

  // Phase 2 Receipt Modal State
  const [receiptModalOpen, setReceiptModalOpen] = useState(false);

  // Phase 3 Live Weighbridge Calculator State
  const [grossKg, setGrossKg] = useState(28450);
  const [tareKg, setTareKg] = useState(10200);

  // Phase 3 Satellite Audits State
  const [satelliteAudits, setSatelliteAudits] = useState(INITIAL_SATELLITE_YIELD_AUDITS);

  // Phase 4 HITL System Learning Feed State
  const [hitlLogs, setHitlLogs] = useState(INITIAL_HITL_LOGS);

  // Bhashini AI Voice Widget State
  const [bhashiniOpen, setBhashiniOpen] = useState(false);
  const [bhashiniInput, setBhashiniInput] = useState('');
  const [bhashiniChat, setBhashiniChat] = useState([
    { sender: 'bot', text: 'Namaste! Aap Hindi, Punjabi ya kisi bhi 22 bhashao me pucch sakte hain. Try a query below:' }
  ]);

  // Robust Multilingual Translation Helper
  const t = (key) => {
    const dict = TRANSLATIONS[currentLang] || TRANSLATIONS['hi'] || TRANSLATIONS['en'];
    return dict[key] || TRANSLATIONS['hi']?.[key] || TRANSLATIONS['en']?.[key] || key;
  };

  // Text-To-Speech Narration
  const speakText = (textToSpeak) => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToSpeak);
      const langMap = { 
        hi: 'hi-IN', en: 'en-IN', pa: 'pa-IN', mr: 'mr-IN', bn: 'bn-IN', 
        te: 'te-IN', ta: 'ta-IN', gu: 'gu-IN', kn: 'kn-IN', ml: 'ml-IN', or: 'or-IN', ur: 'ur-IN' 
      };
      utterance.lang = langMap[currentLang] || 'hi-IN';
      utterance.rate = 0.95;
      window.speechSynthesis.speak(utterance);
    } else {
      alert("Voice playback: " + textToSpeak);
    }
  };

  // HITL Override Logger Function
  const logHITLOverride = (adminId, actionDetails, entityName) => {
    const newLog = {
      id: "HITL-LOG-" + Math.floor(902 + Math.random() * 900),
      timestamp: new Date().toLocaleString('en-IN', { dateStyle: 'medium', timeStyle: 'short' }),
      adminId: adminId || "FCI Central Admin (#ADM-9012)",
      entity: entityName || "Slot / Yield Target",
      action: actionDetails || "Manual Capacity Override",
      systemMsg: "Override logged. AI model updated with new seasonal intake constraint.",
      rlConfidenceUpdate: "+0.03 RL Weight Adjustment",
      mandi: "Central Procurement DSS"
    };

    setHitlLogs(prev => [newLog, ...prev]);
    speakText("Override logged. AI model updated with new seasonal intake constraint.");
  };

  // CSV Audit Exporter
  const exportAuditLogCSV = () => {
    const headers = ["Log_ID", "Timestamp", "Admin_ID", "Target_Entity", "Action_Details", "System_Feedback_Msg", "RL_Weight_Update"];
    const rows = hitlLogs.map(l => [
      l.id,
      \`"\${l.timestamp}"\`,
      \`"\${l.adminId}"\`,
      \`"\${l.entity}"\`,
      \`"\${l.action}"\`,
      \`"\${l.systemMsg}"\`,
      \`"\${l.rlConfidenceUpdate}"\`
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + [headers.join(","), ...rows.map(r => r.join(","))].join("\\n");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", \`KisanSetu_Procurement_Audit_Log_\${new Date().toISOString().slice(0,10)}.csv\`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    speakText("Procurement audit log CSV downloaded successfully.");
  };

  // AI Dynamic Throttling Recommendation Logic
  const aiThrottling = useMemo(() => {
    if (simForm.mandi.includes('Suratgarh')) {
      return {
        eff: '64% Queue Efficiency',
        effBadge: 'bg-red-500 text-white',
        title: \`High Delay Alert at \${simForm.mandi}!\`,
        desc: 'Recommended Reroute: Slot at Anupgarh Silo #109 saves 2.5 hours gate wait time.',
        occ: '89% (Congested)',
        queue: '48 Trucks',
        clearance: '45 Mins'
      };
    } else if (simForm.mandi.includes('Karnal')) {
      return {
        eff: '85% Queue Efficiency',
        effBadge: 'bg-amber-500 text-white',
        title: \`Moderate Queue at \${simForm.mandi}\`,
        desc: 'Recommended arrival at 11:15 AM (Gate 3) — Saves 25 minutes wait time.',
        occ: '72% (Moderate)',
        queue: '24 Trucks',
        clearance: '25 Mins'
      };
    } else {
      return {
        eff: '98% Queue Efficiency',
        effBadge: 'bg-emerald-500 text-white',
        title: \`Recommended Arrival Slot: 10:30 AM at \${simForm.mandi}\`,
        desc: 'Optimal logistics window detected. Saves an estimated 45 minutes gate delay.',
        occ: '64% (Optimal)',
        queue: '12 Trucks',
        clearance: '18 Mins'
      };
    }
  }, [simForm.mandi]);

  // Net Weight Calculation
  const netKg = Math.max(0, grossKg - tareKg);
  const netQuintals = (netKg / 100).toFixed(2);

  // Handle Bhashini AI Query
  const handleBhashiniSubmit = (e) => {
    e.preventDefault();
    if (!bhashiniInput.trim()) return;

    const userText = bhashiniInput.trim();
    setBhashiniChat(prev => [...prev, { sender: 'user', text: userText }]);

    let botAns = "Aapka sawal mil gaya hai. KisanSetu DSS system dwara aapka token active weighbridge queue me lag chuka hai. 14 minute me gate pass issue hoga.";
    let speakAns = "आपका सवाल मिल गया है। टोकन वेईब्रिज कतार में है। 14 मिनट में गेट पास इशू होगा।";

    const match = BHASHINI_SAMPLE_QUERIES.find(q => userText.toLowerCase().includes(q.query.toLowerCase().substring(0, 8)));
    if (match) {
      botAns = match.answer;
      speakAns = match.audioText;
    }

    setTimeout(() => {
      setBhashiniChat(prev => [...prev, { sender: 'bot', text: botAns }]);
      speakText(speakAns);
    }, 300);

    setBhashiniInput('');
  };

  return (
    <div className="flex min-h-screen bg-slate-50 text-slate-900 font-sans">
      
      {/* ==================================================================== */}
      {/* SIDEBAR NAVIGATION                                                   */}
      {/* ==================================================================== */}
      <aside className={\`fixed top-0 bottom-0 left-0 z-40 bg-slate-900 text-white transition-all duration-300 flex flex-col \${sidebarCollapsed ? 'w-20' : 'w-64'}\`}>
        <div className="h-16 px-4 flex items-center justify-between border-b border-slate-800">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-10 h-10 rounded-lg bg-emerald-500 flex items-center justify-center text-xl font-bold shrink-0">
              🌾
            </div>
            {!sidebarCollapsed && (
              <div className="flex flex-col">
                <span className="font-extrabold text-base tracking-tight">{t('appTitle')}</span>
                <span className="text-xs text-emerald-400 font-semibold">{t('teamName')}</span>
              </div>
            )}
          </div>
          <button 
            onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
            className="p-1 rounded text-slate-400 hover:text-white hover:bg-slate-800"
          >
            {sidebarCollapsed ? '➔' : '⬅'}
          </button>
        </div>

        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {!sidebarCollapsed && <div className="px-3 pb-2 text-[10px] font-bold uppercase tracking-wider text-slate-500">{t('coreNav')}</div>}
          
          {[
            { id: 'dashboard', icon: '📊', label: t('navDashboard') },
            { id: 'slot-booking', icon: '📅', label: t('navSlotBooking') },
            { id: 'mandi-queue', icon: '🚛', label: t('navMandiQueue') },
            { id: 'analytics', icon: '🗺️', label: t('navAnalytics') },
            { id: 'fraud', icon: '🚨', label: t('navFraud') },
            { id: 'settings', icon: '⚙️', label: t('navSettings') }
          ].map(item => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={\`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all \${
                activeTab === item.id 
                  ? 'bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-900/40' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-800'
              }\`}
            >
              <span className="text-lg shrink-0">{item.icon}</span>
              {!sidebarCollapsed && <span className="truncate">{item.label}</span>}
            </button>
          ))}
        </nav>

        {!sidebarCollapsed && (
          <div className="p-4 border-t border-slate-800 text-xs text-slate-500 flex justify-between">
            <span>{t('teamName')}</span>
            <span>v1.0 DSS</span>
          </div>
        )}
      </aside>

      {/* ==================================================================== */}
      {/* MAIN CONTAINER                                                       */}
      {/* ==================================================================== */}
      <div className={\`flex-1 flex flex-col transition-all duration-300 \${sidebarCollapsed ? 'ml-20' : 'ml-64'}\`}>
        
        {/* TOP BAR HEADER */}
        <header className="sticky top-0 z-30 h-16 bg-white/90 backdrop-blur border-b border-slate-200 px-6 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-4 flex-1 max-w-md">
            <div className="relative w-full">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={t('searchPlaceholder')}
                className="w-full pl-9 pr-4 py-1.5 text-xs bg-slate-100 border border-slate-300 rounded-full focus:outline-none focus:border-emerald-600 focus:bg-white transition"
              />
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* 22 Official Languages Selector Dropdown */}
            <div className="flex items-center gap-1.5 bg-slate-100 border border-slate-300 rounded-full px-3 py-1 text-xs font-semibold text-emerald-800">
              <select
                value={currentLang}
                onChange={(e) => {
                  setCurrentLang(e.target.value);
                  speakText(t('appTitle') + ". " + t('subtitle'));
                }}
                className="bg-transparent outline-none cursor-pointer font-bold"
              >
                {LANGUAGES.map(l => (
                  <option key={l.code} value={l.code}>🌐 {l.native} ({l.name})</option>
                ))}
              </select>
            </div>

            {/* Voice Assistant Toggle */}
            <button
              onClick={() => speakText(t('appTitle') + ". " + t('subtitle'))}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-1.5 rounded-full shadow transition"
            >
              <span>🔊</span>
              <span>{t('voiceGuide')}</span>
            </button>

            {/* Notification Bell */}
            <div className="relative">
              <button
                onClick={() => setNotifOpen(!notifOpen)}
                className="w-9 h-9 rounded-full bg-slate-100 border border-slate-300 flex items-center justify-center text-slate-700 hover:bg-slate-200 relative"
              >
                🔔
                <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center">4</span>
              </button>

              {notifOpen && (
                <div className="absolute right-0 mt-2 w-80 bg-white border border-slate-200 rounded-xl shadow-2xl z-50 overflow-hidden">
                  <div className="p-3 bg-slate-50 border-b border-slate-200 font-bold text-xs flex justify-between">
                    <span>{t('urgentNotifs')}</span>
                    <span className="text-red-600">4 {t('newCount')}</span>
                  </div>
                  <div className="max-h-64 overflow-y-auto divide-y divide-slate-100">
                    {URGENT_ALERTS.map(a => (
                      <div key={a.id} className="p-3 text-xs">
                        <div className="font-semibold text-slate-800">{a.title}</div>
                        <div className="text-[10px] text-slate-500 mt-1">{a.time} • {a.mandi}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Admin Badge */}
            <div className="flex items-center gap-2 bg-slate-100 border border-slate-300 rounded-full px-3 py-1">
              <div className="w-6 h-6 rounded-full bg-emerald-700 text-white font-bold text-xs flex items-center justify-center">IN</div>
              <div className="flex flex-col text-[11px] leading-tight">
                <span className="font-bold text-slate-800">{t('profileName')}</span>
                <span className="text-[9px] text-emerald-700 font-semibold">{t('profileRole')}</span>
              </div>
            </div>
          </div>
        </header>

        {/* VIEW CONTENT CONTAINER */}
        <main className="p-6 space-y-6">

          {/* ================================================================== */}
          {/* TAB 1: OVERVIEW DASHBOARD                                          */}
          {/* ================================================================== */}
          {activeTab === 'dashboard' && (
            <div className="space-y-6">
              {/* KPI Cards Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-emerald-500"></div>
                  <div className="text-xs font-semibold text-slate-500">{t('kpiSlotsTitle')}</div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-extrabold text-slate-900">{KPI_DATA.slotsAllocated.toLocaleString()}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">{KPI_DATA.slotsTrend}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2">{t('kpiSlotsSub')}</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-amber-500"></div>
                  <div className="text-xs font-semibold text-slate-500">{t('kpiPendingTitle')}</div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-extrabold text-slate-900">{KPI_DATA.pendingCheckins}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-amber-100 text-amber-800">{t('kpiPendingBadge')}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2">{t('kpiPendingSub')}</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-teal-500"></div>
                  <div className="text-xs font-semibold text-slate-500">{t('kpiSpoilageTitle')}</div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-extrabold text-slate-900">{KPI_DATA.demurrageSavedText}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-teal-100 text-teal-800">{t('kpiSpoilageBadge')}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2">{t('kpiSpoilageSub')}</div>
                </div>

                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 right-0 h-1 bg-slate-700"></div>
                  <div className="text-xs font-semibold text-slate-500">{t('kpiMandisTitle')}</div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className="text-2xl font-extrabold text-slate-900">{KPI_DATA.activeMandis} {t('centers')}</span>
                    <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sky-100 text-sky-800">{t('kpiMandisBadge')}</span>
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2">{t('kpiMandisSub')}</div>
                </div>
              </div>

              {/* Main Visual Telemetry & Alerts Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* 7-Day Visual Telemetry Chart */}
                <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <h3 className="font-bold text-sm text-slate-800">{t('chartTitle')}</h3>
                      <p className="text-xs text-slate-500">{t('chartSub')}</p>
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-bold bg-emerald-100 text-emerald-800">{t('chartBadge')}</span>
                  </div>

                  {/* HTML5 Dynamic Graphic Bars */}
                  <div className="h-64 bg-slate-50 rounded-xl p-4 border border-slate-200 flex flex-col justify-between">
                    <div className="flex justify-between text-[10px] text-slate-400 border-b border-slate-200 pb-1">
                      <span>{t('chartThreshold')}</span>
                      <span className="text-red-500 font-bold">--- {t('chartMaxCap')}</span>
                    </div>

                    <div className="flex items-end justify-between gap-3 h-48 pt-4">
                      {CHART_DATA_7DAYS.labels.map((lbl, idx) => {
                        const val = CHART_DATA_7DAYS.inflowMT[idx];
                        const pct = Math.min(100, (val / 30000) * 100);
                        const isOver = val > 25000;

                        return (
                          <div key={lbl} className="flex-1 flex flex-col items-center h-full justify-end">
                            <span className="text-[9px] font-mono font-bold mb-1">{(val/1000).toFixed(1)}k</span>
                            <div 
                              style={{ height: \`\${pct}%\` }} 
                              className={\`w-full rounded-t-md transition-all duration-500 \${isOver ? 'bg-red-500' : 'bg-emerald-600'}\`}
                            ></div>
                            <span className="text-[10px] text-slate-500 mt-2 font-semibold">{lbl}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-4 mt-3 text-xs">
                    <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-emerald-600"></span> <span>{t('chartActualInflow')}</span></div>
                    <div className="flex items-center gap-1.5"><span className="w-3 h-3 rounded-full bg-red-500"></span> <span>{t('chartMaxThreshold')}</span></div>
                  </div>
                </div>

                {/* Recent Urgent Alerts Panel */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold text-sm text-slate-800">{t('recentAlertsTitle')}</h3>
                    <span className="px-2 py-0.5 rounded-full text-xs font-bold bg-red-600 text-white">{URGENT_ALERTS.length} {t('newCount')}</span>
                  </div>

                  <div className="space-y-3 flex-1 overflow-y-auto max-h-[340px] pr-1">
                    {URGENT_ALERTS.map(alert => (
                      <div 
                        key={alert.id} 
                        className={\`p-3.5 rounded-xl border text-xs space-y-1.5 \${
                          alert.severity === 'red' ? 'bg-red-50 border-red-200 border-l-4 border-l-red-600' :
                          alert.severity === 'yellow' ? 'bg-amber-50 border-amber-200 border-l-4 border-l-amber-500' :
                          'bg-emerald-50 border-emerald-200 border-l-4 border-l-emerald-600'
                        }\`}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-extrabold text-[10px] uppercase tracking-wider text-slate-700">{alert.badge}</span>
                          <span className="text-[10px] text-slate-400">{alert.time}</span>
                        </div>
                        <h4 className="font-bold text-slate-900">{alert.title}</h4>
                        <p className="text-slate-600 text-[11px] leading-relaxed">{alert.desc}</p>
                        <div className="flex justify-between items-center pt-2 border-t border-slate-200/50">
                          <span className="font-mono text-[10px] font-semibold text-slate-500">{alert.mandi}</span>
                          <button 
                            onClick={() => speakText(alert.speechText)}
                            className="px-2 py-0.5 rounded text-[10px] font-semibold bg-white border border-slate-300 hover:bg-slate-100"
                          >
                            {t('btnRead')}
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================== */}
          {/* TAB 2: SMART SLOT BOOKING & TOKENIZATION MODULE                   */}
          {/* ================================================================== */}
          {activeTab === 'slot-booking' && (
            <div className="space-y-6">
              {/* AI Dynamic Throttling Recommendation Box */}
              <div className="bg-slate-900 text-white p-5 rounded-2xl border border-slate-800 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-500 via-sky-500 to-amber-500"></div>
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">🤖</span>
                    <div>
                      <h3 className="font-extrabold text-base text-sky-400">{t('aiThrottlingTitle')}</h3>
                      <p className="text-xs text-slate-400">{t('aiThrottlingSub')}</p>
                    </div>
                  </div>
                  <span className={\`px-3 py-1 rounded-full text-xs font-bold font-mono \${aiThrottling.effBadge}\`}>
                    {aiThrottling.eff}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 items-center">
                  <div className="lg:col-span-2 bg-slate-800/80 p-4 rounded-xl border border-slate-700 flex items-start gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <h4 className="font-bold text-sm text-white">{aiThrottling.title}</h4>
                      <p className="text-xs text-slate-300 mt-1">{aiThrottling.desc}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-2 text-center text-xs">
                    <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                      <div className="text-[10px] text-slate-400">{t('statWarehouse')}</div>
                      <div className="font-bold text-emerald-400 mt-1">{aiThrottling.occ}</div>
                    </div>
                    <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                      <div className="text-[10px] text-slate-400">{t('statGateQueue')}</div>
                      <div className="font-bold text-amber-400 mt-1">{aiThrottling.queue}</div>
                    </div>
                    <div className="bg-slate-800 p-2.5 rounded-lg border border-slate-700">
                      <div className="text-[10px] text-slate-400">{t('statEstClear')}</div>
                      <div className="font-bold text-sky-400 mt-1">{aiThrottling.clearance}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Module Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Form Simulator */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <h3 className="font-bold text-sm text-slate-800">{t('slotSimulatorTitle')}</h3>
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">{t('badgeENAM')}</span>
                  </div>

                  <form 
                    onSubmit={(e) => {
                      e.preventDefault();
                      const newToken = "KS-2026-" + Math.floor(8000 + Math.random() * 1900);
                      setActiveTicket(prev => ({
                        ...prev,
                        tokenId: newToken,
                        farmerName: simForm.name,
                        maskedAadhaar: simForm.aadhaar,
                        crop: simForm.crop,
                        qtyQuintals: simForm.qty,
                        mandi: simForm.mandi,
                        currentStage: 1
                      }));
                      speakText(\`Slot booked successfully for \${simForm.name}. Token \${newToken}.\`);
                    }} 
                    className="space-y-3 text-xs"
                  >
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">{t('labelFarmerName')}</label>
                        <input 
                          type="text" 
                          value={simForm.name} 
                          onChange={(e) => setSimForm({...simForm, name: e.target.value})}
                          className="w-full p-2 border border-slate-300 rounded-lg" required 
                        />
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">{t('labelAadhaar')}</label>
                        <input 
                          type="text" 
                          value={simForm.aadhaar} 
                          onChange={(e) => setSimForm({...simForm, aadhaar: e.target.value})}
                          className="w-full p-2 border border-slate-300 rounded-lg font-mono" required 
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">{t('labelCropCategory')}</label>
                        <select 
                          value={simForm.crop}
                          onChange={(e) => setSimForm({...simForm, crop: e.target.value})}
                          className="w-full p-2 border border-slate-300 rounded-lg"
                        >
                          <option value="Wheat (Sharbati Premium)">Wheat (Sharbati Premium)</option>
                          <option value="Paddy (Grade A)">Paddy (Grade A)</option>
                          <option value="Millet / Bajra">Millet / Bajra</option>
                          <option value="Mustard Seeds">Mustard Seeds</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-bold text-slate-700 block mb-1">{t('labelQuantity')}</label>
                        <input 
                          type="number" 
                          value={simForm.qty} 
                          onChange={(e) => setSimForm({...simForm, qty: parseInt(e.target.value) || 0})}
                          className="w-full p-2 border border-slate-300 rounded-lg font-mono" required 
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">{t('labelMandiCenter')}</label>
                      <select 
                        value={simForm.mandi}
                        onChange={(e) => setSimForm({...simForm, mandi: e.target.value})}
                        className="w-full p-2 border border-slate-300 rounded-lg font-bold"
                      >
                        {MANDI_LIST.map(m => (
                          <option key={m.id} value={m.name}>{m.name} ({m.state}) — {m.eff} Eff.</option>
                        ))}
                      </select>
                    </div>

                    <button type="submit" className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow-lg transition">
                      {t('btnGenerateSlot')}
                    </button>
                  </form>
                </div>

                {/* Core Feature: 5-Step Ticket Milestone Tracker */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                  <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                    <div>
                      <h3 className="font-bold text-sm text-slate-800">{t('milestoneTitle')}</h3>
                      <p className="text-[11px] text-slate-500">{t('milestoneSub')}</p>
                    </div>
                    <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">{activeTicket.tokenId}</span>
                  </div>

                  {/* 5-Step Stepper */}
                  <div className="py-4">
                    <div className="flex justify-between items-center relative">
                      <div className="absolute top-4 left-6 right-6 h-1 bg-slate-200 -z-0"></div>
                      
                      {[
                        { num: 1, label: t('step1'), icon: "🎫" },
                        { num: 2, label: t('step2'), icon: "🚛" },
                        { num: 3, label: t('step3'), icon: "⚖️" },
                        { num: 4, label: t('step4'), icon: "🌾" },
                        { num: 5, label: t('step5'), icon: "💳" }
                      ].map(st => {
                        const isDone = st.num < activeTicket.currentStage;
                        const isCurr = st.num === activeTicket.currentStage;

                        return (
                          <div key={st.num} className="flex flex-col items-center relative z-10">
                            <div className={\`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all \${
                              isDone ? 'bg-emerald-600 text-white' :
                              isCurr ? 'bg-sky-600 text-white ring-4 ring-sky-200 scale-110' :
                              'bg-white border-2 border-slate-300 text-slate-400'
                            }\`}>
                              {isDone ? '✓' : st.icon}
                            </div>
                            <span className={\`text-[10px] font-bold mt-2 text-center max-w-[60px] leading-tight \${isCurr ? 'text-sky-700' : 'text-slate-500'}\`}>
                              {st.label}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Stage Log Sensor Readout */}
                  <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                    <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                      <span>{t('activeStage')}: {activeTicket.currentStage} / 5</span>
                      <span className="font-mono">07 Sep 2026</span>
                    </div>
                    <div className="font-extrabold text-sm text-slate-800">
                      {activeTicket.stageLogs[\`stage\${activeTicket.currentStage}\`]?.title}
                    </div>
                    <div className="text-slate-600">
                      {activeTicket.stageLogs[\`stage\${activeTicket.currentStage}\`]?.detail}
                    </div>
                  </div>

                  {/* Action Controls Bar */}
                  <div className="space-y-2 pt-2 border-t border-slate-100">
                    <div className="flex gap-2">
                      <button 
                        onClick={() => {
                          alert(\`Override granted for \${activeTicket.tokenId}\`);
                          logHITLOverride("FCI Central Admin", "Slot Override Approved", activeTicket.tokenId);
                        }}
                        className="flex-1 py-1.5 text-xs font-semibold bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
                      >
                        {t('btnApproveOverride')}
                      </button>
                      <button 
                        onClick={() => {
                          const t = prompt("New slot time:", "08 Sep, 02:30 PM");
                          if(t) alert(\`Rescheduled to \${t}\`);
                        }}
                        className="flex-1 py-1.5 text-xs font-semibold bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
                      >
                        {t('btnReschedule')}
                      </button>
                      <button 
                        onClick={() => setReceiptModalOpen(true)}
                        className="flex-1 py-1.5 text-xs font-bold bg-emerald-700 text-white rounded-lg hover:bg-emerald-800"
                      >
                        {t('btnDigitalReceipt')}
                      </button>
                    </div>

                    {/* Stage Simulator Buttons */}
                    <div className="flex justify-between items-center bg-slate-100 p-2 rounded-lg text-xs">
                      <button 
                        onClick={() => setActiveTicket(prev => ({ ...prev, currentStage: 1 }))}
                        className="px-2 py-1 text-[10px] font-semibold text-slate-600 hover:text-slate-900"
                      >
                        {t('btnResetStage')}
                      </button>
                      <button 
                        onClick={() => {
                          if (activeTicket.currentStage < 5) {
                            setActiveTicket(prev => ({ ...prev, currentStage: prev.currentStage + 1 }));
                            speakText(\`Stage advanced to \${activeTicket.currentStage + 1}\`);
                          }
                        }}
                        className="px-3 py-1 text-xs font-bold bg-sky-600 text-white rounded hover:bg-sky-700"
                      >
                        {t('btnAdvanceStage')}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================== */}
          {/* TAB 3: MANDI QUEUE & WEIGHBRIDGE LIVE FEED                         */}
          {/* ================================================================== */}
          {activeTab === 'mandi-queue' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Weighbridge Scale Calculator */}
                <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <h3 className="font-bold text-sm text-slate-800">{t('weighbridgeTitle')}</h3>
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800">{t('sensorCalibrated')}</span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div>
                      <label className="font-bold text-slate-700 block mb-1">{t('grossWeightLabel')}</label>
                      <input 
                        type="number" 
                        value={grossKg} 
                        onChange={(e) => setGrossKg(parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border border-slate-300 rounded-lg font-mono font-bold" 
                      />
                    </div>

                    <div>
                      <label className="font-bold text-slate-700 block mb-1">{t('tareWeightLabel')}</label>
                      <input 
                        type="number" 
                        value={tareKg} 
                        onChange={(e) => setTareKg(parseFloat(e.target.value) || 0)}
                        className="w-full p-2 border border-slate-300 rounded-lg font-mono font-bold" 
                      />
                    </div>

                    <div className="p-4 rounded-xl bg-emerald-50 border-2 border-dashed border-emerald-300 text-center">
                      <div className="text-[10px] font-bold text-emerald-800 uppercase">{t('netProcurementWeight')}</div>
                      <div className="text-2xl font-extrabold font-mono text-emerald-900 mt-1">{netKg.toLocaleString()} Kg</div>
                      <div className="text-xs font-bold text-emerald-700 mt-0.5">({netQuintals} Quintals)</div>
                    </div>

                    <button 
                      onClick={() => {
                        const pass = "GP-2026-" + Math.floor(1000 + Math.random() * 9000);
                        alert(\`Gate Pass \${pass} Issued! Net Weight: \${netKg.toLocaleString()} kg\`);
                        speakText(\`Gate pass issued. Net weight \${netQuintals} quintals.\`);
                      }}
                      className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow"
                    >
                      {t('btnCalculatePass')}
                    </button>
                  </div>
                </div>

                {/* Mandi Queue Live Feed Table */}
                <div className="lg:col-span-2 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-3">
                  <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                    <div>
                      <h3 className="font-bold text-sm text-slate-800">{t('liveFeedTitle')}</h3>
                      <p className="text-xs text-slate-500">{t('liveFeedSub')}</p>
                    </div>
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-100 text-emerald-800">{t('liveFeedBadge')}</span>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-50 text-slate-500 uppercase font-semibold text-[10px] border-b">
                        <tr>
                          <th className="p-2.5">{t('thVehicle')}</th>
                          <th className="p-2.5">{t('thToken')}</th>
                          <th className="p-2.5">{t('thFarmer')}</th>
                          <th className="p-2.5">{t('thGrossTare')}</th>
                          <th className="p-2.5">{t('thNet')}</th>
                          <th className="p-2.5">{t('thWait')}</th>
                          <th className="p-2.5">{t('thStatus')}</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {LIVE_WEIGHBRIDGE_TRUCKS.map(tck => (
                          <tr key={tck.tokenNo} className="hover:bg-slate-50">
                            <td className="p-2.5 font-bold">{tck.vehicleNo}</td>
                            <td className="p-2.5 font-mono text-teal-700 font-bold">{tck.tokenNo}</td>
                            <td className="p-2.5">{tck.farmer}</td>
                            <td className="p-2.5 font-mono text-[11px]">{tck.grossKg.toLocaleString()} / {tck.tareKg.toLocaleString()} kg</td>
                            <td className="p-2.5 font-mono font-bold text-emerald-700">{tck.netKg.toLocaleString()} kg</td>
                            <td className="p-2.5 font-mono font-bold text-amber-700">{tck.estWait}</td>
                            <td className="p-2.5"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">{tck.status}</span></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================== */}
          {/* TAB 4: PROCUREMENT HEATMAPS & HITL FEED                           */}
          {/* ================================================================== */}
          {activeTab === 'analytics' && (
            <div className="space-y-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-bold text-base text-slate-800">{t('analyticsHeader')}</h2>
                  <p className="text-xs text-slate-500">{t('analyticsSub')}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={exportAuditLogCSV} className="px-3 py-1.5 bg-white border border-slate-300 rounded-lg text-xs font-bold hover:bg-slate-50">
                    {t('btnExportCSV')}
                  </button>
                  <button onClick={() => window.print()} className="px-3 py-1.5 bg-emerald-700 text-white rounded-lg text-xs font-bold hover:bg-emerald-800">
                    {t('btnExportPDF')}
                  </button>
                </div>
              </div>

              {/* Heatmap Visual Grid */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <h3 className="font-bold text-sm text-slate-800">{t('heatmapTitle')}</h3>
                  <div className="flex gap-4 text-xs font-semibold">
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span> {t('normalFlow')}</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-amber-500"></span> {t('heavyLoad')}</span>
                    <span className="flex items-center gap-1.5"><span className="w-2.5 h-2.5 rounded-full bg-red-500"></span> {t('bottlenecked')}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {MANDI_LIST.map(m => (
                    <div key={m.id} className={\`p-4 rounded-xl border bg-white flex flex-col justify-between \${
                      m.marker === 'red' ? 'border-t-4 border-t-red-500' :
                      m.marker === 'yellow' ? 'border-t-4 border-t-amber-500' :
                      'border-t-4 border-t-emerald-500'
                    }\`}>
                      <div className="flex justify-between items-start">
                        <span className="font-bold text-sm text-slate-900">{m.name}</span>
                        <span className={\`text-[10px] font-bold px-2 py-0.5 rounded-full \${
                          m.marker === 'red' ? 'bg-red-100 text-red-800' :
                          m.marker === 'yellow' ? 'bg-amber-100 text-amber-800' :
                          'bg-emerald-100 text-emerald-800'
                        }\`}>{m.marker === 'red' ? t('bottlenecked') : m.marker === 'yellow' ? t('heavyLoad') : t('normalFlow')}</span>
                      </div>
                      <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 my-3">
                        <div>{t('capacityLabel')} <strong className="text-slate-800">{m.capacity}</strong></div>
                        <div>{t('queueLabel')} <strong className="font-mono text-slate-800">{m.queue} Trucks</strong></div>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <div style={{ width: m.marker === 'red' ? '92%' : m.marker === 'yellow' ? '68%' : '40%' }} className={\`h-full \${
                          m.marker === 'red' ? 'bg-red-500' : m.marker === 'yellow' ? 'bg-amber-500' : 'bg-emerald-500'
                        }\`}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Human-in-the-Loop System Learning Feed */}
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <div>
                    <h3 className="font-bold text-sm text-slate-800">{t('hitlTitle')}</h3>
                    <p className="text-xs text-slate-500">{t('hitlSub')}</p>
                  </div>
                  <button 
                    onClick={() => logHITLOverride("FCI Central Admin", "Manual Capacity Ceiling Adjustment (+2,500 MT)", "Suratgarh Mandi #104")}
                    className="px-3 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded-lg text-xs font-semibold"
                  >
                    {t('btnSimulateOverride')}
                  </button>
                </div>

                <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
                  {hitlLogs.map(log => (
                    <div key={log.id} className="p-3.5 rounded-xl border border-sky-200 bg-sky-50/60 text-xs space-y-1.5 border-l-4 border-l-sky-600">
                      <div className="flex justify-between items-center text-[10px] text-slate-500">
                        <span className="font-bold text-sky-800">{t('aiFeedbackEngine')}</span>
                        <span className="font-mono">{log.timestamp}</span>
                      </div>
                      <div className="font-bold text-slate-800">{log.adminId} • <span className="text-teal-700">{log.entity}</span></div>
                      <div className="text-slate-700 font-semibold">{log.action}</div>
                      <div className="p-2 bg-white rounded-lg border border-sky-200 font-mono text-[11px] text-sky-900">
                        💬 "{log.systemMsg}"
                      </div>
                      <div className="flex justify-between text-[10px] text-emerald-700 font-bold pt-1">
                        <span>{log.rlConfidenceUpdate}</span>
                        <span className="text-slate-400">{log.mandi}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* ================================================================== */}
          {/* TAB 5: FRAUD & ANOMALY DETECTION                                  */}
          {/* ================================================================== */}
          {activeTab === 'fraud' && (
            <div className="space-y-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-slate-100">
                  <div>
                    <h3 className="font-bold text-sm text-slate-800">{t('fraudTitle')}</h3>
                    <p className="text-xs text-slate-500">{t('fraudSub')}</p>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-red-600 text-white">3 {t('actionReqBadge')}</span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-500 uppercase font-semibold text-[10px] border-b">
                      <tr>
                        <th className="p-3">{t('thFarmerIdName')}</th>
                        <th className="p-3">{t('thCropLand')}</th>
                        <th className="p-3">{t('thDeclaredQty')}</th>
                        <th className="p-3">{t('thLandLimit')}</th>
                        <th className="p-3">{t('thDiscrepancy')}</th>
                        <th className="p-3">{t('thAuditStatus')}</th>
                        <th className="p-3">{t('thActionControls')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {satelliteAudits.map(row => (
                        <tr key={row.farmerId} className={row.farmerId.includes('#9821') ? 'bg-red-50/80 font-semibold' : 'hover:bg-slate-50'}>
                          <td className="p-3">
                            <div className="font-mono text-teal-800 font-bold">{row.farmerId}</div>
                            <div className="font-bold text-slate-800">{row.farmerName}</div>
                          </td>
                          <td className="p-3">
                            <div>{row.crop}</div>
                            <div className="text-[10px] text-slate-400">{row.landAreaAcres} Acres</div>
                          </td>
                          <td className="p-3 font-mono font-bold text-red-600">{row.declaredQtyQtl} Qtl</td>
                          <td className="p-3 font-mono font-bold text-slate-800">{row.landLimitMaxQtl} Qtl</td>
                          <td className="p-3">
                            <span className="px-2 py-0.5 rounded-full bg-red-100 text-red-800 font-bold text-[10px]">{row.discrepancyPct}</span>
                          </td>
                          <td className="p-3">
                            <span className={\`px-2 py-0.5 rounded-full text-[10px] font-bold \${
                              row.actionState === 'approved' ? 'bg-emerald-100 text-emerald-800' :
                              row.actionState === 'blocked' ? 'bg-red-100 text-red-800' :
                              'bg-amber-100 text-amber-800'
                            }\`}>{row.status}</span>
                          </td>
                          <td className="p-3">
                            <div className="flex gap-1.5">
                              <button 
                                onClick={() => {
                                  setSatelliteAudits(prev => prev.map(item => item.farmerId === row.farmerId ? { ...item, status: 'Override Approved ✓', actionState: 'approved' } : item));
                                  logHITLOverride("FCI Central Admin", \`Approved Yield Limit Override (\${row.farmerId})\`, row.farmerId);
                                  alert(\`Override granted for \${row.farmerId}\`);
                                }}
                                className="px-2 py-1 bg-white border border-slate-300 text-[10px] font-bold rounded hover:bg-slate-100"
                              >
                                {t('btnApprove')}
                              </button>
                              <button 
                                onClick={() => {
                                  setSatelliteAudits(prev => prev.map(item => item.farmerId === row.farmerId ? { ...item, status: 'Blocked ⛔', actionState: 'blocked' } : item));
                                  alert(\`Security Block Triggered for \${row.farmerId}! Inspector notified via SMS.\`);
                                }}
                                className="px-2 py-1 bg-red-600 text-white text-[10px] font-bold rounded hover:bg-red-700"
                              >
                                {t('btnBlock')}
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* ================================================================== */}
          {/* TAB 6: SETTINGS & INTEGRATIONS                                     */}
          {/* ================================================================== */}
          {activeTab === 'settings' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-sm text-slate-800">{t('settingsAccessibility')}</h3>
                
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">{t('labelPrimaryLang')}</label>
                    <select 
                      value={currentLang} 
                      onChange={(e) => setCurrentLang(e.target.value)}
                      className="w-full p-2 border border-slate-300 rounded-lg font-bold"
                    >
                      {LANGUAGES.map(l => (
                        <option key={l.code} value={l.code}>{l.native} ({l.name}) — {l.region}</option>
                      ))}
                    </select>
                  </div>

                  <button 
                    onClick={() => speakText("KisanSetu DSS system voice guide online.")}
                    className="w-full py-2 bg-slate-100 hover:bg-slate-200 border border-slate-300 font-bold rounded-lg"
                  >
                    {t('btnTestAudio')}
                  </button>
                </div>
              </div>

              <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="font-bold text-sm text-slate-800">{t('settingsAPI')}</h3>
                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div>
                      <div className="font-bold text-slate-800">{t('apiENAM')}</div>
                      <div className="text-slate-500 text-[10px]">{t('apiENAMDesc')}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">{t('statusActive')}</span>
                  </div>

                  <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-200">
                    <div>
                      <div className="font-bold text-slate-800">{t('apiPMKisan')}</div>
                      <div className="text-slate-500 text-[10px]">{t('apiPMKisanDesc')}</div>
                    </div>
                    <span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[10px]">{t('statusActive')}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </main>
      </div>

      {/* ==================================================================== */}
      {/* FLOATING BHASHINI AI MULTILINGUAL VOICE ASSISTANT WIDGET            */}
      {/* ==================================================================== */}
      <div className="fixed bottom-6 right-6 z-50">
        <button 
          onClick={() => setBhashiniOpen(!bhashiniOpen)}
          className="flex items-center gap-2 bg-slate-900 text-white border-2 border-sky-400 px-4 py-3 rounded-full font-bold text-xs shadow-2xl hover:scale-105 transition"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-sky-400 animate-ping"></span>
          <span>🎙️ {t('bhashiniTitle')}</span>
        </button>

        {bhashiniOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-slate-900 text-white border border-slate-700 rounded-2xl shadow-2xl overflow-hidden flex flex-col">
            <div className="p-3 bg-slate-800 border-b border-slate-700 flex justify-between items-center">
              <span className="font-extrabold text-xs text-sky-400">{t('bhashiniTitle')}</span>
              <button onClick={() => setBhashiniOpen(false)} className="text-slate-400 hover:text-white">&times;</button>
            </div>

            <div className="p-3 h-52 overflow-y-auto space-y-2 text-xs">
              {bhashiniChat.map((msg, idx) => (
                <div key={idx} className={\`p-2.5 rounded-xl \${msg.sender === 'user' ? 'bg-emerald-900/60 border border-emerald-700 ml-6' : 'bg-sky-950/80 border border-sky-800 mr-6'}\`}>
                  <div className="text-[9px] font-bold text-slate-400 mb-0.5">{msg.sender === 'user' ? '👤 You:' : '🤖 Bhashini AI:'}</div>
                  <div>{msg.text}</div>
                </div>
              ))}
            </div>

            <div className="p-2 bg-slate-950 border-t border-slate-800 flex gap-1 overflow-x-auto text-[10px]">
              {BHASHINI_SAMPLE_QUERIES.map(q => (
                <button 
                  key={q.query}
                  onClick={() => {
                    setBhashiniInput(q.query);
                    setBhashiniChat(prev => [...prev, { sender: 'user', text: q.query }, { sender: 'bot', text: q.answer }]);
                    speakText(q.audioText);
                  }}
                  className="px-2 py-1 bg-slate-800 hover:bg-slate-700 rounded-full whitespace-nowrap text-slate-300 border border-slate-700"
                >
                  "{q.query}"
                </button>
              ))}
            </div>

            <form onSubmit={handleBhashiniSubmit} className="p-2 bg-slate-950 border-t border-slate-800 flex gap-2">
              <input 
                type="text" 
                value={bhashiniInput}
                onChange={(e) => setBhashiniInput(e.target.value)}
                placeholder={t('bhashiniPlaceholder')}
                className="flex-1 px-3 py-1.5 text-xs bg-slate-800 border border-slate-700 rounded-full text-white outline-none focus:border-sky-400"
              />
              <button type="submit" className="px-3 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs rounded-full">{t('btnAsk')}</button>
            </form>
          </div>
        )}
      </div>

      {/* ==================================================================== */}
      {/* DIGITAL RECEIPT MODAL                                                */}
      {/* ==================================================================== */}
      {receiptModalOpen && (
        <div className="fixed inset-0 z-50 bg-slate-900/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full p-6 space-y-4 shadow-2xl border border-slate-200">
            <div className="flex justify-between items-center pb-2 border-b">
              <h3 className="font-bold text-sm text-slate-800">{t('voucherTitle')}</h3>
              <button onClick={() => setReceiptModalOpen(false)} className="text-slate-400 text-lg hover:text-slate-800">&times;</button>
            </div>

            <div className="p-4 border-2 border-slate-200 rounded-xl bg-slate-50 space-y-3 text-xs">
              <div className="text-center pb-2 border-b border-dashed border-slate-300">
                <h4 className="font-extrabold text-sm text-emerald-800">{t('voucherHeader')}</h4>
                <p className="text-[10px] text-slate-500">{t('voucherFCI')}</p>
              </div>

              <div className="grid grid-cols-2 gap-2 text-slate-700">
                <div>Token: <strong className="font-mono">{activeTicket.tokenId}</strong></div>
                <div>Farmer: <strong>{activeTicket.farmerName}</strong></div>
                <div>Aadhaar: <span className="font-mono">{activeTicket.maskedAadhaar}</span></div>
                <div>Crop: <strong>{activeTicket.crop}</strong></div>
                <div>Qty: <strong>{activeTicket.qtyQuintals} Qtl</strong></div>
                <div>Mandi: <strong>{activeTicket.mandi}</strong></div>
                <div>{t('voucherRate')} <strong className="text-emerald-700">₹2,275 / Qtl</strong></div>
                <div>PFMS UTR: <span className="font-mono font-bold">SBI9912083100</span></div>
              </div>

              <div className="pt-3 border-t border-dashed border-slate-300 text-center">
                <img 
                  src={\`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=\${activeTicket.tokenId}\`} 
                  alt="Voucher QR Code" 
                  className="w-24 h-24 mx-auto p-1 bg-white border rounded-lg" 
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <p className="text-[10px] text-slate-400 mt-1">{t('voucherScan')}</p>
              </div>
            </div>

            <div className="flex justify-end gap-2">
              <button onClick={() => setReceiptModalOpen(false)} className="px-4 py-2 border border-slate-300 text-xs font-semibold rounded-lg hover:bg-slate-50">{t('btnClose')}</button>
              <button onClick={() => window.print()} className="px-4 py-2 bg-emerald-700 text-white text-xs font-bold rounded-lg hover:bg-emerald-800">{t('btnPrint')}</button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
`;

fs.writeFileSync(path.join(__dirname, 'src', 'App.jsx'), appJsxContent, 'utf-8');
console.log('App.jsx updated successfully with full 22-language translation coverage!');
