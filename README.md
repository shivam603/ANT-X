# 🌾 KisanSetu-Agri DSS — Decision Support System
### Team ANT-X | Multilingual Procurement, Logistics & Fraud Detection Platform

[![React](https://img.shields.io/badge/React-18.2-61DAFB?logo=react)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.1-646CFF?logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38BDF8?logo=tailwindcss)](https://tailwindcss.com/)
[![Render Ready](https://img.shields.io/badge/Deploy-Render-46E3B7?logo=render)](https://render.com)
[![Languages](https://img.shields.io/badge/Languages-22%20Official%20Indian-FF9933)](#-supported-languages-all-22-official-languages-of-india)

---

## 📌 Project Overview

**KisanSetu-Agri DSS** is a comprehensive **Agricultural Decision Support System** built by **Team ANT-X** to streamline crop procurement, warehouse logistics, mandi queue management, and yield verification for farmers and government administrators across India.

The platform provides seamless digital tokenization, real-time weighbridge telematics, satellite land record verification for fraud detection, and an AI-driven slot allocation engine—all available in **all 22 official languages of India**.

---

## ✨ Core Features & Modules

### 1. 📊 Phase 1: Dashboard & Telemetry Overview
- **Real-Time KPI Cards**: Monitor total daily slots allocated, pending farmer check-ins, estimated demurrage/spoilage savings, and connected mandi status.
- **Inflow vs. Storage Telemetry**: Graphical visualizer showing 7-day crop inflow trends against max warehouse capacity limits.
- **Urgent Notification Center**: Instant alert system flagging moisture threshold breaches, weighbridge sensor offline events, and capacity bottlenecks.

### 2. 🎟️ Phase 2: Smart Slot Booking & Tokenization Module
- **AI-Powered Slot Simulator**: Dynamic recommendation engine matching farmer location, crop type (Wheat, Paddy, Millet), and quintals with optimal mandi queue efficiency.
- **End-to-End 5-Step Milestone Tracker**:
  1. *Token Issued* (Digital SMS/WhatsApp code generated)
  2. *Mandi Arrival* (Scanned via QR code)
  3. *Weighment & Quality Check* (Automated moisture & tare scale log)
  4. *Lot Accepted / Graded* (Dynamic pricing & MSP calculation)
  5. *Payment Disbursed* (Instant PFMS / DBT status indicator)
- **Digital Voucher Modal**: Downloadable/printable digital token receipt with dynamic QR code.

### 3. ⚖️ Phase 3: Mandi Queue, Weighbridge & Fraud Detection Engine
- **Live Weighbridge Feed**: Real-time incoming tractor/truck queue, Gross Weight vs. Tare Weight reading, net crop yield, and estimated wait duration.
- **AI Fraud & Anomaly Audit Engine**: Cross-references declared farmer yield against satellite land record data. Automatically flags suspicious yield over-declarations for administrative override or inspector blocking.
- **Bhashini AI Voice Assistant Mock**: Floating interactive voice assistant simulation supporting voice queries in Hindi, Punjabi, Marathi, etc. ("*Mera token kab aayega?*").

### 4. 🗺️ Phase 4: Procurement Heatmaps & HITL Override Log
- **Congestion Heatmap Grid**: Visual spatial indicator displaying regional mandis with color-coded congestion markers (*Green = Normal, Yellow = Heavy Load, Red = Bottlenecked*).
- **Human-in-the-Loop (HITL) Feed**: Live audit log capturing administrative overrides (e.g., yield limit overrides or slot capacity expansions) to update AI model parameters.
- **CSV Audit Export**: Instant export of daily procurement logs for compliance auditing.

---

## 🌐 Supported Languages (All 22 Official Languages of India)

Selecting any language dynamically translates **100% of the website UI**:

| Language | Native Name | Code | Region |
| :--- | :--- | :--- | :--- |
| **Hindi** | हिंदी | `hi` | National / North India |
| **English** | English | `en` | Official / All India |
| **Marathi** | मराठी | `mr` | Maharashtra |
| **Punjabi** | ਪੰਜਾਬੀ | `pa` | Punjab / Haryana |
| **Bengali** | বাংলা | `bn` | West Bengal / Tripura |
| **Telugu** | తెలుగు | `te` | Andhra Pradesh / Telangana |
| **Tamil** | தமிழ் | `ta` | Tamil Nadu |
| **Gujarati** | ગુજરાતી | `gu` | Gujarat |
| **Urdu** | اردو | `ur` | Jammu & Kashmir / UP |
| **Kannada** | ಕನ್ನಡ | `kn` | Karnataka |
| **Odia** | ଓଡ଼ିଆ | `or` | Odisha |
| **Malayalam** | മലയാളം | `ml` | Kerala |
| **Assamese** | অসমীয়া | `as` | Assam |
| **Maithili** | मैथिली | `mai` | Bihar / Jharkhand |
| **Santali** | ᱥᱟᱱᱛᱟᱲᱤ | `sat` | Jharkhand / WB |
| **Kashmiri** | कॉशुर | `ks` | Jammu & Kashmir |
| **Nepali** | नेपाली | `ne` | Sikkim / West Bengal |
| **Konkani** | कोंकणी | `kok` | Goa / Karnataka |
| **Dogri** | डोगरी | `doi` | Jammu & Kashmir |
| **Manipuri** | মৈতৈলোন্ | `mni` | Manipur |
| **Bodo** | बर' | `brx` | Assam (BTAD) |
| **Sanskrit** | संस्कृतम् | `sa` | Academic / National |
| **Sindhi** | सिन्धी | `sd` | Gujarat / Rajasthan |

---

## 🚀 Quick Start & Local Setup

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- `npm` (v9 or higher)

### Installation
```bash
# Clone the repository
git clone https://github.com/shivam603/ANT-X.git
cd ANT-X

# Install dependencies
npm install
```

### Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build & Production Server
```bash
# Build production bundle
npm run build

# Start production server
node server.js
```

---

## ☁️ Deploying on Render

### Option A: Static Site (Recommended)
1. Go to [Render Dashboard](https://dashboard.render.com/) → **New +** → **Static Site**.
2. Connect repo `shivam603/ANT-X`.
3. Set **Build Command**: `npm run build`
4. Set **Publish Directory**: `dist`
5. Click **Create Static Site**.

### Option B: Web Service
1. Go to [Render Dashboard](https://dashboard.render.com/) → **New +** → **Web Service**.
2. Connect repo `shivam603/ANT-X`.
3. Set **Build Command**: `npm install && npm run build`
4. Set **Start Command**: `npm start`
5. Click **Create Web Service**.

---

## 👥 Team ANT-X
Developed for Indian Agricultural Infrastructure & Logistics Modernization.
