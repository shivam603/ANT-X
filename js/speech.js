/**
 * KisanSetu-Agri DSS - Voice & Speech Synthesis Engine
 * Provides audio readout accessibility for farmers in multiple Indian accents/languages
 */

import { getCurrentLanguage, t } from './i18n.js';

let isSpeaking = false;
let synth = window.speechSynthesis || null;

export function initSpeechEngine() {
  if (!synth) {
    console.warn("Speech Synthesis not supported in this browser environment.");
  }
}

export function speakText(textToSpeak, customLang = null) {
  if (!synth) {
    alert("Voice playback: " + textToSpeak);
    return;
  }

  // Cancel any ongoing speech
  synth.cancel();

  const targetLang = customLang || getCurrentLanguage();
  const utterance = new SpeechSynthesisUtterance(textToSpeak);

  // Map app lang codes to speech synthesis BCP-47 codes
  const langMap = {
    hi: 'hi-IN',
    en: 'en-IN',
    bn: 'bn-IN',
    mr: 'mr-IN',
    te: 'te-IN',
    ta: 'ta-IN',
    gu: 'gu-IN',
    ur: 'ur-PK',
    kn: 'kn-IN',
    or: 'or-IN',
    ml: 'ml-IN',
    pa: 'pa-IN',
    as: 'as-IN',
    mai: 'hi-IN',
    sat: 'hi-IN',
    ks: 'ur-IN',
    ne: 'ne-NP',
    kok: 'mr-IN',
    doi: 'hi-IN',
    mni: 'bn-IN',
    brx: 'hi-IN',
    sa: 'hi-IN',
    sd: 'sd-IN'
  };

  utterance.lang = langMap[targetLang] || 'hi-IN';
  utterance.rate = 0.95; // Slightly slower for clear rural comprehension
  utterance.pitch = 1.0;

  // Visual feedback update
  const voiceBtn = document.getElementById('voiceGuideBtn');
  if (voiceBtn) {
    voiceBtn.classList.add('speaking-active');
  }

  utterance.onend = () => {
    isSpeaking = false;
    if (voiceBtn) {
      voiceBtn.classList.remove('speaking-active');
    }
  };

  utterance.onerror = () => {
    isSpeaking = false;
    if (voiceBtn) {
      voiceBtn.classList.remove('speaking-active');
    }
  };

  isSpeaking = true;
  synth.speak(utterance);
}

export function stopSpeech() {
  if (synth) {
    synth.cancel();
    isSpeaking = false;
    const voiceBtn = document.getElementById('voiceGuideBtn');
    if (voiceBtn) {
      voiceBtn.classList.remove('speaking-active');
    }
  }
}

export function toggleVoiceGuide() {
  if (isSpeaking) {
    stopSpeech();
  } else {
    const welcomeMsg = t('appTitle') + ". " + t('subtitle') + ". " + t('kpiSlotsTitle') + ": 1,250 slots.";
    speakText(welcomeMsg);
  }
}
