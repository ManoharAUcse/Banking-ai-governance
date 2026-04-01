
# 🏦 AI Governance & Compliance System for Banking

An AI-powered governance platform designed to ensure **fairness, transparency, fraud detection, and regulatory compliance** in AI-driven banking systems.

This project integrates **Machine Learning, Full-Stack Development, and AI APIs** to build a real-world solution for responsible AI decision-making in financial institutions.

---

## 📌 Problem Statement

Modern banking systems increasingly rely on AI for loan approvals and risk analysis. However:

- AI models may become biased  
- Decisions lack transparency  
- Fraud detection is complex  
- Regulatory compliance is difficult to track  

👉 This project solves these issues by building a **centralized AI governance platform**.

---

## 🚀 Key Features

### 📊 Governance Dashboard
- Loan analytics  
- Governance insights  
- Risk monitoring  
- Compliance tracking  

---

### ⚖️ Loan Bias Detection
Detects unfair AI decisions in loan approvals based on:
- Gender  
- Income  
- Employment type  
- Credit score  

**Example Output:**
Male Approval Rate: 72%
Female Approval Rate: 48%
⚠ Potential Bias Detected


---

### 🔍 Fraud Monitoring
- Detects suspicious applications  
- Identifies abnormal loan patterns  
- Improves financial security  

---

### 📄 AI Policy Analyzer
- Upload PDF/Image policies  
- Extract risks & compliance issues  
- Generate safety score  

---

### 🤖 AI Chatbot
- Answers banking queries  
- Explains EMI, eligibility, documents  
- Uses AI API for responses  

---

### 🌐 Multilingual Support
- English  
- Telugu  

---

### 🏛 Government Schemes
- PM Mudra Loan  
- PMAY Housing  
- Stand‑Up India  

---

### 📊 Risk Analytics
- Loan approval insights  
- Risk probability  
- ML predictions  

---

## 👥 Role-Based Access Control

### 👑 Admin
- Full access to all modules  
- Dashboard, Fraud, Bias, Policies  

### 🔍 Auditor
- Access only:
  - Loan Bias  
  - Fraud Monitoring  

---

## 🎨 UI/UX (LATEST UPDATES 🔥)

- 📱 Fully responsive (mobile + desktop)  
- 🎬 Animated login page (Framer Motion)  
- ✨ Glassmorphism UI  
- 📂 Centralized layout (no repetition)  
- ☰ Mobile sidebar toggle  
- ⚡ Smooth animations  

---

## 🧠 Machine Learning

- Loan Prediction Model  
- Bias Detection  
- Policy Analysis AI  
- Dataset Generator  

---

## 🛠 Tech Stack

### Frontend
- React (Vite)
- CSS (Responsive + Flexbox)
- Framer Motion

### Backend
- Node.js
- Express.js

### ML API
- Python (Flask)
- Scikit-learn
- Pandas, NumPy

### Database
- MongoDB

---

## 🌐 Deployment

- Frontend → Vercel  
- Backend → Render  
- ML API → Render  

---

## 🔗 Live Links

- Frontend: https://your-vercel-link.vercel.app  
- Backend: https://banking-ai-governance-1.onrender.com  
- ML API: https://banking-ai-governance-ml.onrender.com  

---

## 📂 Project Structure
├── backend/
├── ml/
├── src/
│ ├── components/
│ ├── layouts/
│ ├── App.jsx
│ └── index.css
└── README.md


---

## ⚙️ Setup

```bash
git clone https://github.com/yourusername/ai-governance.git
cd ai-governance

npm install
npm run dev

cd backend
npm install
node server.js

cd ml
pip install -r requirements.txt
python mlapi.py
```
---

🔐 Environment Variables
Create .env in ml folder:
OPENROUTER_KEY=your_api_key

🎯 Objective
To build a Responsible AI Governance System that ensures:

Fairness

Transparency

Fraud detection

Regulatory compliance

🚀 Future Scope
Advanced ML models

Real-time alerts

Notification system

Cloud scaling

👨‍💻 Author
Bhoopathi Manohar
Final Year Project

⭐ Conclusion
A complete AI-powered banking governance system combining:

✔ Machine Learning
✔ Full-stack development
✔ Responsible AI principles

Designed for real-world financial transparency and compliance.


---

# 🚀 NEXT STEP

```bash
git add README.md
git commit -m "final updated readme"
git push origin main
```

---
list of all dependencies to download:

frontend:

npm create vite@latest
cd your-project
npm install

✅ 🔹 CORE FRONTEND DEPENDENCIES

npm install react-router-dom
npm install axios

👉 Used for:
Routing
API calls

🎨 🔹 UI & ANIMATION
npm install framer-motion

👉 Used for:
Animated login
Smooth UI transitions

🌐 🔹 ENV VARIABLES
npm install dotenv

👉 Used for:
API URLs (no hardcoding)

🎯 🔹 OPTIONAL (UI IMPROVEMENT)
npm install react-icons

👉 Used for:
Sidebar icons
Better UI

🧠 🔹 FORM HANDLING (OPTIONAL)
npm install react-hook-form

👉 Used for:
Clean form validation

📊 🔹 CHARTS (IF USED)
npm install chart.js react-chartjs-2

👉 Used for:
Dashboard graphs

🔥 🔹 LOADING / UX (OPTIONAL)
npm install react-spinners

👉 Used for:
Loading animations

🧪 🔹 DEV TOOLS (OPTIONAL)
npm install -D nodemon
👉 Backend auto-restart

🚀 BACKEND (Node.js)
cd backend
npm init -y

✅ BACKEND DEPENDENCIES
npm install express
npm install cors
npm install body-parser
npm install dotenv

🔥 DATABASE
npm install mongoose
👉 MongoDB connection

🔐 OPTIONAL SECURITY
npm install jsonwebtoken bcryptjs
👉 If auth added

🧠 ML SIDE (PYTHON — NOT NPM)
pip install flask
pip install scikit-learn pandas numpy
pip install flask-cors
🎯 FINAL MINIMAL REQUIRED (IMPORTANT)
👉 If you want only what you actually used, this is enough:

Frontend:
npm install react-router-dom axios framer-motion
Backend:
npm install express cors dotenv mongoose


💥 PRO TIP
👉 Check what you installed:

npm list --depth=0
🎯 FINAL SUMMARY
✔ Routing → react-router-dom
✔ API → axios
✔ Animation → framer-motion
✔ Backend → express
✔ DB → mongoose
