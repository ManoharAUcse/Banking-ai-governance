🏦 AI Governance & Compliance System for Banking
An AI‑powered governance platform designed to monitor fairness, fraud risk, regulatory compliance, and policy analysis in banking systems.

This system integrates Artificial Intelligence, Machine Learning, and Full‑Stack Web Development to ensure responsible and transparent AI decision‑making in financial institutions.

🚀 Key Features
📊 Governance Dashboard
A centralized dashboard for monitoring AI activities in banking.

Loan analytics

Governance insights

Risk monitoring

Compliance tracking

⚖️ Loan Bias Detection
Detects unfair AI decisions in loan approvals.

The system evaluates approval patterns across:

Gender

Income

Employment type

Credit score

Example output:

Male Approval Rate: 72%
Female Approval Rate: 48%

⚠ Potential Bias Detected
This helps ensure fair and ethical AI usage.

🔍 Fraud Monitoring
Identifies suspicious loan applications and potential fraud patterns.

The fraud detection module analyzes:

unusual application behavior

abnormal loan values

risky applicant profiles

This improves financial security and risk prevention.

📄 AI Policy Analyzer
Allows users to upload loan or insurance policy documents and analyze them using AI.

The system extracts:

document type

safety score

policy risks

compliance issues

This helps banks maintain regulatory compliance.

🤖 AI Banking Chatbot
An AI‑powered chatbot assistant integrated with the platform.

Users can ask questions such as:

What is EMI?
What documents are required for a home loan?
Explain loan eligibility
The chatbot uses an AI language model API to generate intelligent responses.

🌐 Multilingual Support
The platform supports bilingual interaction.

Languages supported:

English

Telugu

Users can switch languages using the language toggle.

🏛 Government Schemes Module
Displays important government financial schemes.

Examples include:

PM Mudra Loan

PMAY Housing Scheme

Stand‑Up India Scheme

📊 Risk Analytics
Analyzes loan risk and visualizes insights through dashboards.

The system evaluates:

loan approval patterns

risk probability

AI model predictions

👥 Role‑Based Access Control
The system provides two user roles.

👑 Admin
Admin has full system access.

Admin can:

Access dashboard

Run loan bias analysis

Monitor fraud detection

Upload and analyze policies

View loan regulations

Manage governance modules

🔍 Auditor
Auditors monitor system fairness and compliance.

Auditors can:

Review loan bias results

Monitor fraud reports

Audit AI decision transparency

Check regulatory compliance

Auditors cannot modify system configurations.

🧠 Machine Learning Module
The system includes ML models for loan analysis.

Key components:

Loan prediction model

Dataset generator

Policy analysis AI

Model inference API

Model files include:

loanmodel.pkl
loanmodel.py
generatedataset.py
policyanalysis.py
mlapi.py
🛠 Tech Stack
Frontend
React.js

Vite

JavaScript

CSS

Backend
Node.js

Express.js

Machine Learning
Python

Flask

Scikit‑learn

AI Integration
AI Language Model API

Policy document analysis

Database
MongoDB (via db.js)

Version Control
Git

GitHub

📂 Project Structure
ai-governance/
│
├── backend/
│   ├── controllers/
│   │   ├── fraudController.js
│   │   └── loanController.js
│   │
│   ├── routes/
│   │   ├── fraudRoute.js
│   │   └── loanRoute.js
│   │
│   ├── db.js
│   └── server.js
│
├── ml/
│   ├── generatedataset.py
│   ├── loanmodel.pkl
│   ├── loanmodel.py
│   ├── mlapi.py
│   ├── policyanalysis.py
│   ├── uploads/
│   └── .env
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── components/
│   │   ├── Architecture.jsx
│   │   ├── AuditLogs.jsx
│   │   ├── Chatbot.jsx
│   │   ├── ComplianceCard.jsx
│   │   ├── Dashboard.jsx
│   │   ├── FileUpload.jsx
│   │   ├── FraudMonitor.jsx
│   │   ├── GovernmentSchemes.jsx
│   │   ├── LoanBias.jsx
│   │   ├── Login.jsx
│   │   ├── Navbar.jsx
│   │   ├── PolicyAnalyzer.jsx
│   │   ├── PredictionHistory.jsx
│   │   ├── ProtectedRoutes.jsx
│   │   ├── ResultsDashboard.jsx
│   │   ├── RiskAnalytics.jsx
│   │   ├── RiskForm.jsx
│   │   └── Sidebar.jsx
│   │
│   ├── App.jsx
│   ├── main.jsx
│   ├── i18n.js
│   ├── translations.js
│   └── index.css
│
└── README.md
⚙️ Installation & Setup
1️⃣ Clone Repository
git clone https://github.com/yourusername/ai-governance.git
2️⃣ Install Frontend Dependencies
npm install
3️⃣ Start Frontend
npm run dev
Frontend runs on:

http://localhost:5173
4️⃣ Start Backend
cd backend
node server.js
5️⃣ Start ML API
cd ml
python mlapi.py
ML API runs on:

http://localhost:5001
🔐 Environment Variables
Create a .env file inside the ml folder.

Example:

OPENROUTER_KEY=your_api_key
⚠️ .env should be added to .gitignore for security.

🎯 Project Objective
The goal of this project is to develop a Responsible AI Governance System for Banking that ensures:

fairness in loan approval

fraud detection

regulatory compliance

transparency in AI decision making

👨‍💻 Author
Bhoopathi Manohar
Final Year Project
AI Governance and Compliance for Banking Systems
