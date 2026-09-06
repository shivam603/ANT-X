/**
 * KisanSetu-Agri DSS - Multilingual Engine
 * Supports all 22 official languages of India + English
 */

export const LANGUAGES = [
  { code: 'hi', name: 'Hindi', native: 'हिंदी', region: 'National / North India' },
  { code: 'en', name: 'English', native: 'English', region: 'Official / All India' },
  { code: 'bn', name: 'Bengali', native: 'বাংলা', region: 'West Bengal / Tripura' },
  { code: 'mr', name: 'Marathi', native: 'मराठी', region: 'Maharashtra' },
  { code: 'te', name: 'Telugu', native: 'తెలుగు', region: 'Andhra Pradesh / Telangana' },
  { code: 'ta', name: 'Tamil', native: 'தமிழ்', region: 'Tamil Nadu' },
  { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', region: 'Gujarat' },
  { code: 'ur', name: 'Urdu', native: 'اردو', region: 'Jammu & Kashmir / Telangana / UP' },
  { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', region: 'Karnataka' },
  { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ', region: 'Odisha' },
  { code: 'ml', name: 'Malayalam', native: 'മലയാളം', region: 'Kerala' },
  { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', region: 'Punjab / Haryana' },
  { code: 'as', name: 'Assamese', native: 'অসমীয়া', region: 'Assam' },
  { code: 'mai', name: 'Maithili', native: 'मैथिली', region: 'Bihar / Jharkhand' },
  { code: 'sat', name: 'Santali', native: 'ᱥᱟᱱᱛᱟᱲᱤ', region: 'Jharkhand / Odisha / WB' },
  { code: 'ks', name: 'Kashmiri', native: 'कॉशुर', region: 'Jammu & Kashmir' },
  { code: 'ne', name: 'Nepali', native: 'नेपाली', region: 'Sikkim / West Bengal' },
  { code: 'kok', name: 'Konkani', native: 'कोंकणी', region: 'Goa / Karnataka' },
  { code: 'doi', name: 'Dogri', native: 'डोगरी', region: 'Jammu & Kashmir' },
  { code: 'mni', name: 'Manipuri', native: 'মৈতৈলোন্', region: 'Manipur' },
  { code: 'brx', name: 'Bodo', native: 'बर\'', region: 'Assam (BTAD)' },
  { code: 'sa', name: 'Sanskrit', native: 'संस्कृतम्', region: 'National / Academic' },
  { code: 'sd', name: 'Sindhi', native: 'सिन्धी', region: 'Gujarat / Rajasthan' }
];

export const TRANSLATIONS = {
  en: {
    appTitle: "KisanSetu-Agri DSS",
    subtitle: "Decision Support System for Agricultural Logistics & Procurement",
    teamName: "ANT-X Platform",
    searchPlaceholder: "Search slots, Mandis, Farmer ID, tokens...",
    profileRole: "Ministry / FCI Admin",
    voiceGuide: "Voice Assistant",
    voiceActive: "Listening / Speaking",
    
    // Sidebar Tabs
    navDashboard: "Dashboard (Overview)",
    navSlotBooking: "Smart Slot Booking (Farmer Portal)",
    navMandiQueue: "Mandi Queue & Weighbridge",
    navAnalytics: "Procurement Heatmaps",
    navFraud: "Fraud & Anomaly Detection",
    navSettings: "Settings & Integrations",
    
    // Phase 2 Slot Booking
    slotSimulatorTitle: "Interactive Slot Booking Simulator",
    aiThrottlingTitle: "AI Dynamic Throttling Recommendation",
    milestoneTitle: "End-to-End Ticket Milestone Tracker",
    step1Title: "1. Token Issued",
    step2Title: "2. Mandi Arrival",
    step3Title: "3. Weighment & Quality Check",
    step4Title: "4. Lot Accepted / Graded",
    step5Title: "5. Payment Disbursed",
    
    // Controls
    btnApproveOverride: "Approve / Override Slot",
    btnReschedule: "Reschedule Slot",
    btnDigitalReceipt: "Issue Digital Receipt",
    btnAdvanceStage: "Simulate Next Stage →",
    btnResetStage: "Reset Ticket Stage",
    
    // Details
    farmerIdLabel: "Farmer Aadhaar ID (Masked)",
    moistureLabel: "Moisture Sensor Log",
    qualityGradingLabel: "MSP Grading & Pricing",
    paymentUtLabel: "PFMS / DBT UTR Reference",

    // KPI Cards
    kpiSlotsTitle: "Total Daily Slots Allocated",
    kpiSlotsSub: "+12.4% vs yesterday",
    kpiPendingTitle: "Pending Farmer Check-ins",
    kpiPendingSub: "Requires queue clearance",
    kpiSpoilageTitle: "Est. Demurrage/Spoilage Saved",
    kpiSpoilageSub: "Direct eco-financial savings",
    kpiMandisTitle: "Active Mandis Connected",
    kpiMandisSub: "Across 12 major states",
    
    // Common Actions
    bookSlotBtn: "Book New Farmer Slot",
    refreshData: "Refresh Live Feed",
    filterMandi: "All Mandi Centers",
    exportReport: "Export DSS Data",
    viewDetails: "View Details",
    resolveAlert: "Resolve Alert",
    
    farmerNameLabel: "Farmer Name",
    mobileNumberLabel: "Mobile Number",
    aadhaarLabel: "Aadhaar / Farmer ID",
    cropTypeLabel: "Crop Type",
    landAreaLabel: "Land Area (Acres)",
    estQtyLabel: "Est. Quantity (Quintals)",
    selectMandiLabel: "Preferred Mandi Center",
    selectDateLabel: "Slot Date & Time",
    generatePassBtn: "Generate Smart Slot Pass (QR)"
  },
  hi: {
    appTitle: "किसानसेतु-कृषि DSS",
    subtitle: "कृषि रसद और खरीद के लिए निर्णय सहायता प्रणाली",
    teamName: "ANT-X प्लेटफॉर्म",
    searchPlaceholder: "स्लॉट, मंडी, किसान आईडी, टोकन खोजें...",
    profileRole: "मंत्रालय / एफसीआई प्रशासक",
    voiceGuide: "ध्वनि सहायक (बोलकर सुनें)",
    voiceActive: "सक्रिय है...",
    
    navDashboard: "डैशबोर्ड (अवलोकन)",
    navSlotBooking: "स्मार्ट स्लॉट बुकिंग (किसान पोर्टल)",
    navMandiQueue: "मंडी कतार और वेब्रिज",
    navAnalytics: "खरीद हीटमैप और विश्लेषण",
    navFraud: "धोखाधड़ी और विसंगति पहचान",
    navSettings: "सेटिंग्स और एकीकरण",

    slotSimulatorTitle: "इंटरएक्टिव स्लॉट बुकिंग सिम्युलेटर",
    aiThrottlingTitle: "एआई डायनेमिक थ्रॉटलिंग अनुशंसा",
    milestoneTitle: "एंड-टू-एंड टिकट मील का पत्थर ट्रैकर",
    step1Title: "1. टोकन जारी",
    step2Title: "2. मंडी आगमन",
    step3Title: "3. वजन और गुणवत्ता जांच",
    step4Title: "4. लॉट स्वीकृत / ग्रेडिंग",
    step5Title: "5. भुगतान वितरित",
    
    btnApproveOverride: "अनुमोदन / ओवरराइड स्लॉट",
    btnReschedule: "पुनर्निर्धारित करें",
    btnDigitalReceipt: "डिजिटल रसीद जारी करें",
    btnAdvanceStage: "अगला चरण सिम्युलेट करें →",
    btnResetStage: "चरण रीसेट करें",
    
    farmerIdLabel: "किसान आधार आईडी (मास्क)",
    moistureLabel: "नमी सेंसर लॉग",
    qualityGradingLabel: "एमएसपी ग्रेडिंग और मूल्य निर्धारण",
    paymentUtLabel: "पीएफएमएस / डीबीटी यूटीआर संदर्भ",

    kpiSlotsTitle: "कुल दैनिक आवंटित स्लॉट",
    kpiSlotsSub: "+12.4% कल की तुलना में",
    kpiPendingTitle: "लंबित किसान चेक-इन",
    kpiPendingSub: "कतार निकासी की आवश्यकता",
    kpiSpoilageTitle: "अनुमानित नुकसान/डेमरेज बचत",
    kpiSpoilageSub: "प्रत्यक्ष वित्तीय और फसल बचत",
    kpiMandisTitle: "सक्रिय मंडियां कनेक्टेड",
    kpiMandisSub: "12 प्रमुख राज्यों में",
    
    bookSlotBtn: "नया किसान स्लॉट बुक करें",
    refreshData: "लाइव फीड ताज़ा करें",
    filterMandi: "सभी मंडी केंद्र",
    exportReport: "DSS डेटा निर्यात करें",
    viewDetails: "विवरण देखें",
    resolveAlert: "हल करें",
    
    farmerNameLabel: "किसान का नाम",
    mobileNumberLabel: "मोबाइल नंबर",
    aadhaarLabel: "आधार / किसान आईडी",
    cropTypeLabel: "फसल का प्रकार",
    landAreaLabel: "भूमि क्षेत्र (एकड़)",
    estQtyLabel: "अनुमानित मात्रा (क्विंटल)",
    selectMandiLabel: "पसंदीदा मंडी केंद्र",
    selectDateLabel: "स्लॉट तिथि और समय",
    generatePassBtn: "स्मार्ट स्लॉट पास (QR) बनाएं"
  },
  pa: {
    appTitle: "ਕਿਸਾਨਸੇਤੂ-ਖੇਤੀਬਾੜੀ DSS",
    subtitle: "ਖੇਤੀਬਾੜੀ ਲੌਜਿਸਟਿਕਸ ਅਤੇ ਖਰੀਦ ਲਈ ਫੈਸਲਾ ਸਹਾਇਤਾ ਪ੍ਰਣਾਲੀ",
    teamName: "ANT-X ਪਲੇਟਫਾਰਮ",
    searchPlaceholder: "ਸਲਾਟ, ਮੰਡੀ, ਕਿਸਾਨ ਆਈਡੀ ਖੋਜੋ...",
    profileRole: "ਮੰਤਰਾਲੇ / ਐਫ.ਸੀ.ਆਈ ਪ੍ਰਸ਼ਾਸਕ",
    voiceGuide: "ਆਵਾਜ਼ ਸਹਾਇਕ",
    navDashboard: "ਡੈਸ਼ਬੋਰਡ (ਓਵਰਵਿਊ)",
    navSlotBooking: "ਸਮਾਰਟ ਸਲਾਟ ਬੁਕਿੰਗ (ਕਿਸਾਨ ਪੋਰਟਲ)",
    slotSimulatorTitle: "ਇੰਟਰਐਕਟਿਵ ਸਲਾਟ ਬੁਕਿੰਗ ਸਿਮੂਲੇਟਰ",
    aiThrottlingTitle: "ਏਆਈ ਡਾਇਨਾਮਿਕ ਥ੍ਰੋਟਲਿੰਗ ਸਿਫਾਰਸ਼",
    milestoneTitle: "ਐਂਡ-ਟੂ-ਐਂਡ ਟਿਕਟ ਮੀਲ ਪੱਥਰ ਟਰੈਕਰ",
    step1Title: "1. ਟੋਕਨ ਜਾਰੀ",
    step2Title: "2. ਮੰਡੀ ਪਹੁੰਚ",
    step3Title: "3. ਤੋਲ ਅਤੇ ਗੁਣਵੱਤਾ ਜਾਂਚ",
    step4Title: "4. ਲੋਟ ਪ੍ਰਵਾਨਿਤ / ਗ੍ਰੇਡਿੰਗ",
    step5Title: "5. ਭੁਗਤਾਨ ਜਾਰੀ",
    btnApproveOverride: "ਮਨਜ਼ੂਰ / ਓਵਰਰਾਈਡ",
    btnReschedule: "ਰੀ-ਸ਼ਡਿਊਲ ਕਰੋ",
    btnDigitalReceipt: "ਡਿਜੀਟਲ ਰਸੀਦ ਜਾਰੀ ਕਰੋ"
  }
};

// Fallback lookup for unmapped keys in other languages
let currentLang = 'hi';

export function setLanguage(langCode) {
  if (TRANSLATIONS[langCode]) {
    currentLang = langCode;
  } else {
    currentLang = 'en'; // fallback
  }
  updateDOMTranslations();
  return currentLang;
}

export function getCurrentLanguage() {
  return currentLang;
}

export function t(key) {
  const dict = TRANSLATIONS[currentLang] || TRANSLATIONS['en'];
  return dict[key] || TRANSLATIONS['en'][key] || key;
}

export function updateDOMTranslations() {
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    const translation = t(key);
    if (el.tagName === 'INPUT' && el.getAttribute('placeholder')) {
      el.placeholder = translation;
    } else {
      el.textContent = translation;
    }
  });

  document.documentElement.lang = currentLang;
}
