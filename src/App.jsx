import React, { useState, useEffect, useMemo, useRef } from 'react';


    export const LANGUAGES = [
      { code: 'hi', name: 'Hindi', native: 'हिंदी', region: 'National / North India' },
      { code: 'en', name: 'English', native: 'English', region: 'Official / All India' },
      { code: 'mr', name: 'Marathi', native: 'मराठी', region: 'Maharashtra' },
      { code: 'pa', name: 'Punjabi', native: 'ਪੰਜਾਬੀ', region: 'Punjab / Haryana' },
      { code: 'bn', name: 'Bengali', native: 'বাংলা', region: 'West Bengal / Tripura' },
      { code: 'te', name: 'Telugu', native: 'తెలుగు', region: 'Andhra Pradesh / Telangana' },
      { code: 'ta', name: 'Tamil', native: 'தமிழ்', region: 'Tamil Nadu' },
      { code: 'gu', name: 'Gujarati', native: 'ગુજરાતી', region: 'Gujarat' },
      { code: 'ur', name: 'Urdu', native: 'اردو', region: 'Jammu & Kashmir / UP' },
      { code: 'kn', name: 'Kannada', native: 'ಕನ್ನಡ', region: 'Karnataka' },
      { code: 'or', name: 'Odia', native: 'ଓଡ଼ିଆ', region: 'Odisha' },
      { code: 'ml', name: 'Malayalam', native: 'മലയാളം', region: 'Kerala' },
      { code: 'as', name: 'Assamese', native: 'অসমীয়া', region: 'Assam' },
      { code: 'mai', name: 'Maithili', native: 'मैथिली', region: 'Bihar / Jharkhand' },
      { code: 'sat', name: 'Santali', native: 'ᱥᱟᱱᱛᱟᱲᱤ', region: 'Jharkhand / WB' },
      { code: 'ks', name: 'Kashmiri', native: 'कॉशुर', region: 'Jammu & Kashmir' },
      { code: 'ne', name: 'Nepali', native: 'नेपाली', region: 'Sikkim / West Bengal' },
      { code: 'kok', name: 'Konkani', native: 'कोंकणी', region: 'Goa / Karnataka' },
      { code: 'doi', name: 'Dogri', native: 'डोगरी', region: 'Jammu & Kashmir' },
      { code: 'mni', name: 'Manipuri', native: 'মৈতৈলোন্', region: 'Manipur' },
      { code: 'brx', name: 'Bodo', native: 'बर\'', region: 'Assam (BTAD)' },
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
        statusWeighingNet: "Weighing Net",
        statusTarePending: "Tare Pending",
        statusGrossWeighed: "Gross Weighed",
        statusGateCheckin: "Gate Check-in",
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
        statusFlagged: "Flagged for Review",
        statusOptimalVerified: "Optimal Verified",
        statusBlocked: "Blocked & Inspector Notified",
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
      mr: {
        appTitle: "किसानसेतू-कृषी DSS",
        subtitle: "कृषी लॉजिस्टिक्स आणि खरेदीसाठी निर्णय समर्थन प्रणाली",
        teamName: "ANT-X प्लॅटफॉर्म",
        searchPlaceholder: "स्लॉट, मंडी, शेतकरी आयडी, टोकन शोधा...",
        profileRole: "मंत्रालय / FCI प्रशासक",
        profileName: "FCI केंद्रीय प्रशासक",
        voiceGuide: "ध्वनी सहाय्यक (बोलून ऐका)",
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
        kpiSpoilageBadge: "पर्यावरण बचत",
        kpiSpoilageSub: "+₹4.2 लाख मागील आठवड्याच्या तुलनेत",
        kpiMandisTitle: "सक्रिय मंड्या जोडल्या",
        kpiMandisBadge: "12 राज्ये",
        kpiMandisSub: "99.8% सेन्सर अपटाइम",
        centers: "केंद्रे",
        chartTitle: "दैनिक मंडी आवक विरुद्ध गोदाम क्षमता (गेले 7 दिवस)",
        chartSub: "धान्य प्रमाणाचे रिअल-टाइम टेलीमेट्री ट्रॅकिंग",
        chartBadge: "लाइव्ह टेलिमेट्री",
        chartThreshold: "मर्यादा दर: 25,000 मेट्रिक टन",
        chartMaxCap: "कमाल गोदाम क्षमता",
        chartActualInflow: "प्रत्यक्ष आवक (MT)",
        chartMaxThreshold: "कमाल मर्यादा दर (25,000 MT)",
        recentAlertsTitle: "तातडीचे ऑपरेशन्स इशारे",
        btnRead: "🔊 ऐका",
        aiThrottlingTitle: "AI डायनॅमिक थ्रॉटलिंग शिफारस इंजिन",
        aiThrottlingSub: "रिअल-टाइम गोदाम क्षमता आणि वेब्रिज थ्रूपुट ऑप्टिमायझेशन",
        statWarehouse: "गोदाम",
        statGateQueue: "गेट रांग",
        statEstClear: "अंदाजे वेळ",
        slotSimulatorTitle: "इंटरअॅक्टिव्ह स्लॉट बुकिंग सिम्युलेटर",
        badgeENAM: "e-NAM सत्यापित",
        labelFarmerName: "शेतकऱ्याचे पूर्ण नाव",
        labelAadhaar: "आधार आयडी (गोपनीय)",
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
        btnApproveOverride: "⚡ मंजूर / ओव्हरराइड स्लॉट",
        btnReschedule: "📅 वेळ पुनर्निर्धारित करा",
        btnDigitalReceipt: "🎟️ डिजिटल पावती द्या",
        btnResetStage: "टप्पा रीसेट करा",
        btnAdvanceStage: "पुढील टप्पा सिम्युलेट करा →",
        weighbridgeTitle: "⚖️ वेब्रिज टर्मिनल #WB-01",
        sensorCalibrated: "सेन्सर कॅलिब्रेटेड",
        grossWeightLabel: "एकूण ट्रक वजन (Kg)",
        tareWeightLabel: "रिकाम्या ट्रकचे वजन (Kg)",
        netProcurementWeight: "निव्वळ पीक खरेदी वजन",
        btnCalculatePass: "🎟️ गणना करा आणि गेट पास द्या",
        liveFeedTitle: "🚛 मंडी रांग आणि वेब्रिज लाइव्ह फीड",
        liveFeedSub: "येणाऱ्या ट्रक्सची माहिती आणि प्रतीक्षा वेळ",
        liveFeedBadge: "लाइव्ह फीड",
        thVehicle: "वाहन",
        thToken: "टोकन क्र.",
        thFarmer: "शेतकरी",
        thGrossTare: "एकूण / रिकामे",
        thNet: "निव्वळ वजन",
        thWait: "अंदाजे वेळ",
        thStatus: "स्थिती",
        statusWeighingNet: "निव्वळ वजन नोंदणी",
        statusTarePending: "रिकामे वजन प्रलंबित",
        statusGrossWeighed: "एकूण वजन पूर्ण",
        statusGateCheckin: "गेट नोंदणी",
        fraudTitle: "📡 सॅटेलाइट जमीन नोंद आणि उत्पन्न तपासणी तक्ता",
        fraudSub: "AI द्वारे पीक आणि उत्पन्न तपासणी",
        actionReqBadge: "कारवाई आवश्यक",
        thFarmerIdName: "शेतकरी आयडी व नाव",
        thCropLand: "पीक व जमीन क्षेत्र",
        thDeclaredQty: "घोषित प्रमाण",
        thLandLimit: "जमीन मर्यादा कमाल",
        thDiscrepancy: "AI तफावत",
        thAuditStatus: "ऑडिट स्थिती",
        thActionControls: "कारवाई नियंत्रणे",
        statusFlagged: "तपासणीसाठी चिन्हांकित",
        statusOptimalVerified: "सत्यापित",
        statusBlocked: "ब्लॉक आणि निरीक्षकांना सूचित",
        btnApprove: "⚡ मंजूर ओव्हरराइड",
        btnBlock: "⛔ ब्लॉक आणि सूचित करा",
        analyticsHeader: "खरेदी हीटमॅप्स आणि HITL इंजिन",
        analyticsSub: "प्रादेशिक मंडी विश्लेषण आणि शिक्षण लॉग",
        btnExportCSV: "📥 ऑडिट लॉग (CSV) डाउनलोड",
        btnExportPDF: "📄 पीडीएफ रिपोर्ट डाउनलोड",
        heatmapTitle: "🗺️ प्रादेशिक मंडी गर्दी हीटमॅप ग्रिड",
        normalFlow: "सामान्य प्रवाह",
        heavyLoad: "जड भार",
        bottlenecked: "वाहतूक कोंडी",
        capacityLabel: "क्षमता:",
        queueLabel: "रांग:",
        hitlTitle: "ह्युमन-इन-द-लूप (HITL) सिस्टम लर्निंग फीड",
        hitlSub: "AI सिस्टम अपडेट्सचे थेट फीड",
        btnSimulateOverride: "+ प्रशासक ओव्हरराइड सिम्युलेट करा",
        aiFeedbackEngine: "🤖 AI मॉडेल फीडबॅक इंजिन",
        settingsAccessibility: "🌐 भाषा आणि आवाज सेटिंग्ज",
        labelPrimaryLang: "प्राथमिक इंटरफेस भाषा",
        btnTestAudio: "🔊 आवाज चाचणी करा",
        settingsAPI: "🔗 राष्ट्रीय कृषी API एकत्रीकरण",
        apiENAM: "e-NAM राष्ट्रीय कृषी बाजार",
        apiENAMDesc: "रिअल-टाइम किंमत सिंक",
        apiPMKisan: "PM-KISAN आधार नोंदणी",
        apiPMKisanDesc: "जमीन पडताळणी API",
        statusActive: "सक्रिय",
        bhashiniTitle: "🇮🇳 भाषिणी AI व्हॉइस असिस्टंट",
        bhashiniWelcome: "नमस्कार! आपण मराठी, हिंदी किंवा 22 भाषांमध्ये विचारू शकता.",
        bhashiniPlaceholder: "मराठीत किंवा इतर भाषेत विचारा...",
        btnAsk: "विचारा",
        voucherTitle: "🧾 डिजिटल खरेदी पावती",
        voucherHeader: "किसानसेतू-कृषी DSS • अधिकृत पावती",
        voucherFCI: "भारतीय अन्न महामंडळ (FCI)",
        voucherRate: "दर:",
        voucherScan: "वेब्रिज गेटवर स्कॅन करा",
        btnClose: "बंद करा",
        btnPrint: "🖨️ प्रिंट / जतन करा"
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
        statusWeighingNet: "शुद्ध वजन दर्ज",
        statusTarePending: "खाली वजन लंबित",
        statusGrossWeighed: "सकल वजन पूर्ण",
        statusGateCheckin: "गेट चेक-इन",
        fraudTitle: "📡 उपग्रह भूमि रिकॉर्ड और फसल उपज सत्यापन तालिका",
        fraudSub: "एआई द्वारा घोषित फसल बनाम उपग्रह उत्पादकता सीमा का मिलान",
        actionReqBadge: "कारवाई आवश्यक",
        thFarmerIdName: "किसान आईडी और नाम",
        thCropLand: "फसल और भूमि क्षेत्र",
        thDeclaredQty: "घोषित मात्रा",
        thLandLimit: "भूमि सीमा अधिकतम",
        thDiscrepancy: "एआई विसंगति",
        thAuditStatus: "ऑडिट स्थिति",
        thActionControls: "कारवाई नियंत्रण",
        statusFlagged: "समीक्षा के लिए चिह्नित",
        statusOptimalVerified: "सत्यापित",
        statusBlocked: "अवरुद्ध एवं सूचित",
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
      }
    };

    ['pa', 'bn', 'te', 'ta', 'gu', 'ur', 'kn', 'or', 'ml', 'as', 'mai', 'sat', 'ks', 'ne', 'kok', 'doi', 'mni', 'brx', 'sa', 'sd'].forEach(lang => {
      if (!TRANSLATIONS[lang]) {
        TRANSLATIONS[lang] = { ...TRANSLATIONS['hi'] };
      }
    });

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

    function App() {
      const [activeTab, setActiveTab] = useState('dashboard');
      const [currentLang, setCurrentLang] = useState('mr');
      const [searchQuery, setSearchQuery] = useState('');
      const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
      const [notifOpen, setNotifOpen] = useState(false);

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

      const [simForm, setSimForm] = useState({
        name: "Sukhdev Sharma",
        aadhaar: "XXXX-XXXX-9918",
        mobile: "98120-XXXX1",
        crop: "Wheat (Sharbati Premium)",
        qty: 90,
        mandi: "Khanna Mandi #101"
      });

      const [receiptModalOpen, setReceiptModalOpen] = useState(false);
      const [grossKg, setGrossKg] = useState(28450);
      const [tareKg, setTareKg] = useState(10200);
      const [satelliteAudits, setSatelliteAudits] = useState(INITIAL_SATELLITE_YIELD_AUDITS);
      const [hitlLogs, setHitlLogs] = useState(INITIAL_HITL_LOGS);
      const [bhashiniOpen, setBhashiniOpen] = useState(false);
      const [bhashiniInput, setBhashiniInput] = useState('');
      const [bhashiniChat, setBhashiniChat] = useState([
        { sender: 'bot', text: 'Namaste! Aap Marathi, Hindi, Punjabi ya kisi bhi 22 bhashao me pucch sakte hain.' }
      ]);

      const t = (key) => {
        const dict = TRANSLATIONS[currentLang] || TRANSLATIONS['mr'] || TRANSLATIONS['hi'] || TRANSLATIONS['en'];
        return dict[key] || TRANSLATIONS['mr']?.[key] || TRANSLATIONS['hi']?.[key] || TRANSLATIONS['en']?.[key] || key;
      };

      const speakText = (textToSpeak) => {
        if ('speechSynthesis' in window) {
          window.speechSynthesis.cancel();
          const utterance = new SpeechSynthesisUtterance(textToSpeak);
          const langMap = { 
            hi: 'hi-IN', en: 'en-IN', mr: 'mr-IN', pa: 'pa-IN', bn: 'bn-IN', 
            te: 'te-IN', ta: 'ta-IN', gu: 'gu-IN', kn: 'kn-IN', ml: 'ml-IN', or: 'or-IN', ur: 'ur-IN' 
          };
          utterance.lang = langMap[currentLang] || 'mr-IN';
          utterance.rate = 0.95;
          window.speechSynthesis.speak(utterance);
        } else {
          alert("Voice playback: " + textToSpeak);
        }
      };

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

      const exportAuditLogCSV = () => {
        const headers = ["Log_ID", "Timestamp", "Admin_ID", "Target_Entity", "Action_Details", "System_Feedback_Msg", "RL_Weight_Update"];
        const rows = hitlLogs.map(l => [
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
      };

      const aiThrottling = useMemo(() => {
        if (simForm.mandi.includes('Suratgarh')) {
          return {
            eff: '64% Queue Efficiency',
            effBadge: 'bg-red-500 text-white',
            title: `High Delay Alert at ${simForm.mandi}!`,
            desc: 'Recommended Reroute: Slot at Anupgarh Silo #109 saves 2.5 hours gate wait time.',
            occ: '89% (Congested)',
            queue: '48 Trucks',
            clearance: '45 Mins'
          };
        } else if (simForm.mandi.includes('Karnal')) {
          return {
            eff: '85% Queue Efficiency',
            effBadge: 'bg-amber-500 text-white',
            title: `Moderate Queue at ${simForm.mandi}`,
            desc: 'Recommended arrival at 11:15 AM (Gate 3) — Saves 25 minutes wait time.',
            occ: '72% (Moderate)',
            queue: '24 Trucks',
            clearance: '25 Mins'
          };
        } else {
          return {
            eff: '98% Queue Efficiency',
            effBadge: 'bg-emerald-500 text-white',
            title: `Recommended Arrival Slot: 10:30 AM at ${simForm.mandi}`,
            desc: 'Optimal logistics window detected. Saves an estimated 45 minutes gate delay.',
            occ: '64% (Optimal)',
            queue: '12 Trucks',
            clearance: '18 Mins'
          };
        }
      }, [simForm.mandi]);

      const netKg = Math.max(0, grossKg - tareKg);
      const netQuintals = (netKg / 100).toFixed(2);

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
          
          {/* SIDEBAR NAVIGATION */}
          <aside className={`fixed top-0 bottom-0 left-0 z-40 bg-slate-900 text-white transition-all duration-300 flex flex-col ${sidebarCollapsed ? 'w-20' : 'w-64'}`}>
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
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg text-sm font-medium transition-all ${
                    activeTab === item.id 
                      ? 'bg-emerald-600 text-white font-semibold shadow-lg shadow-emerald-900/40' 
                      : 'text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
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

          {/* MAIN CONTAINER */}
          <div className={`flex-1 flex flex-col transition-all duration-300 ${sidebarCollapsed ? 'ml-20' : 'ml-64'}`}>
            
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

              {/* TAB 1: OVERVIEW DASHBOARD */}
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
                                  style={{ height: `${pct}%` }} 
                                  className={`w-full rounded-t-md transition-all duration-500 ${isOver ? 'bg-red-500' : 'bg-emerald-600'}`}
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
                            className={`p-3.5 rounded-xl border text-xs space-y-1.5 ${
                              alert.severity === 'red' ? 'bg-red-50 border-red-200 border-l-4 border-l-red-600' :
                              alert.severity === 'yellow' ? 'bg-amber-50 border-amber-200 border-l-4 border-l-amber-500' :
                              'bg-emerald-50 border-emerald-200 border-l-4 border-l-emerald-600'
                            }`}
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

              {/* TAB 2: SMART SLOT BOOKING */}
              {activeTab === 'slot-booking' && (
                <div className="space-y-6">
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
                      <span className={`px-3 py-1 rounded-full text-xs font-bold font-mono ${aiThrottling.effBadge}`}>
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
                          speakText(`Slot booked successfully for ${simForm.name}. Token ${newToken}.`);
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

                    {/* Stepper Tracker */}
                    <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
                      <div className="flex justify-between items-center pb-3 border-b border-slate-100">
                        <div>
                          <h3 className="font-bold text-sm text-slate-800">{t('milestoneTitle')}</h3>
                          <p className="text-[11px] text-slate-500">{t('milestoneSub')}</p>
                        </div>
                        <span className="font-mono font-bold text-xs px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800">{activeTicket.tokenId}</span>
                      </div>

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
                                <div className={`w-9 h-9 rounded-full flex items-center justify-center font-bold text-xs transition-all ${
                                  isDone ? 'bg-emerald-600 text-white' :
                                  isCurr ? 'bg-sky-600 text-white ring-4 ring-sky-200 scale-110' :
                                  'bg-white border-2 border-slate-300 text-slate-400'
                                }`}>
                                  {isDone ? '✓' : st.icon}
                                </div>
                                <span className={`text-[10px] font-bold mt-2 text-center max-w-[60px] leading-tight ${isCurr ? 'text-sky-700' : 'text-slate-500'}`}>
                                  {st.label}
                                </span>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                        <div className="flex justify-between text-[10px] text-slate-500 font-semibold">
                          <span>{t('activeStage')}: {activeTicket.currentStage} / 5</span>
                          <span className="font-mono">07 Sep 2026</span>
                        </div>
                        <div className="font-extrabold text-sm text-slate-800">
                          {activeTicket.stageLogs[`stage${activeTicket.currentStage}`]?.title}
                        </div>
                        <div className="text-slate-600">
                          {activeTicket.stageLogs[`stage${activeTicket.currentStage}`]?.detail}
                        </div>
                      </div>

                      <div className="space-y-2 pt-2 border-t border-slate-100">
                        <div className="flex gap-2">
                          <button 
                            onClick={() => {
                              alert(`Override granted for ${activeTicket.tokenId}`);
                              logHITLOverride("FCI Central Admin", "Slot Override Approved", activeTicket.tokenId);
                            }}
                            className="flex-1 py-1.5 text-xs font-semibold bg-white border border-slate-300 rounded-lg hover:bg-slate-50"
                          >
                            {t('btnApproveOverride')}
                          </button>
                          <button 
                            onClick={() => {
                              const t = prompt("New slot time:", "08 Sep, 02:30 PM");
                              if(t) alert(`Rescheduled to ${t}`);
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
                                speakText(`Stage advanced to ${activeTicket.currentStage + 1}`);
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

              {/* TAB 3: MANDI QUEUE & WEIGHBRIDGE */}
              {activeTab === 'mandi-queue' && (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
                            alert(`Gate Pass ${pass} Issued! Net Weight: ${netKg.toLocaleString()} kg`);
                            speakText(`Gate pass issued. Net weight ${netQuintals} quintals.`);
                          }}
                          className="w-full py-3 bg-emerald-700 hover:bg-emerald-800 text-white font-bold rounded-xl shadow"
                        >
                          {t('btnCalculatePass')}
                        </button>
                      </div>
                    </div>

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
                                <td className="p-2.5"><span className="px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 text-[10px] font-bold">{tck.status === 'Weighing Net' ? t('statusWeighingNet') : tck.status === 'Tare Pending' ? t('statusTarePending') : tck.status === 'Gross Weighed' ? t('statusGrossWeighed') : t('statusGateCheckin')}</span></td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* TAB 4: PROCUREMENT HEATMAPS & HITL FEED */}
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
                        <div key={m.id} className={`p-4 rounded-xl border bg-white flex flex-col justify-between ${
                          m.marker === 'red' ? 'border-t-4 border-t-red-500' :
                          m.marker === 'yellow' ? 'border-t-4 border-t-amber-500' :
                          'border-t-4 border-t-emerald-500'
                        }`}>
                          <div className="flex justify-between items-start">
                            <span className="font-bold text-sm text-slate-900">{m.name}</span>
                            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${
                              m.marker === 'red' ? 'bg-red-100 text-red-800' :
                              m.marker === 'yellow' ? 'bg-amber-100 text-amber-800' :
                              'bg-emerald-100 text-emerald-800'
                            }`}>{m.marker === 'red' ? t('bottlenecked') : m.marker === 'yellow' ? t('heavyLoad') : t('normalFlow')}</span>
                          </div>
                          <div className="grid grid-cols-2 gap-2 text-xs text-slate-500 my-3">
                            <div>{t('capacityLabel')} <strong className="text-slate-800">{m.capacity}</strong></div>
                            <div>{t('queueLabel')} <strong className="font-mono text-slate-800">{m.queue} Trucks</strong></div>
                          </div>
                          <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                            <div style={{ width: m.marker === 'red' ? '92%' : m.marker === 'yellow' ? '68%' : '40%' }} className={`h-full ${
                              m.marker === 'red' ? 'bg-red-500' : m.marker === 'yellow' ? 'bg-amber-500' : 'bg-emerald-500'
                            }`}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

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

              {/* TAB 5: FRAUD & ANOMALY DETECTION */}
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
                                <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  row.actionState === 'approved' ? 'bg-emerald-100 text-emerald-800' :
                                  row.actionState === 'blocked' ? 'bg-red-100 text-red-800' :
                                  'bg-amber-100 text-amber-800'
                                }`}>{row.actionState === 'approved' ? t('statusOptimalVerified') : row.actionState === 'blocked' ? t('statusBlocked') : t('statusFlagged')}</span>
                              </td>
                              <td className="p-3">
                                <div className="flex gap-1.5">
                                  <button 
                                    onClick={() => {
                                      setSatelliteAudits(prev => prev.map(item => item.farmerId === row.farmerId ? { ...item, status: 'Override Approved ✓', actionState: 'approved' } : item));
                                      logHITLOverride("FCI Central Admin", `Approved Yield Limit Override (${row.farmerId})`, row.farmerId);
                                      alert(`Override granted for ${row.farmerId}`);
                                    }}
                                    className="px-2 py-1 bg-white border border-slate-300 text-[10px] font-bold rounded hover:bg-slate-100"
                                  >
                                    {t('btnApprove')}
                                  </button>
                                  <button 
                                    onClick={() => {
                                      setSatelliteAudits(prev => prev.map(item => item.farmerId === row.farmerId ? { ...item, status: 'Blocked ⛔', actionState: 'blocked' } : item));
                                      alert(`Security Block Triggered for ${row.farmerId}! Inspector notified via SMS.`);
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

              {/* TAB 6: SETTINGS & INTEGRATIONS */}
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

          {/* FLOATING BHASHINI AI MULTILINGUAL VOICE ASSISTANT WIDGET */}
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
                    <div key={idx} className={`p-2.5 rounded-xl ${msg.sender === 'user' ? 'bg-emerald-900/60 border border-emerald-700 ml-6' : 'bg-sky-950/80 border border-sky-800 mr-6'}`}>
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

          {/* DIGITAL RECEIPT MODAL */}
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
                      src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${activeTicket.tokenId}`} 
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

export default App;
