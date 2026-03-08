from flask import Flask, request, jsonify
from sklearn.linear_model import LogisticRegression
import pandas as pd
import mysql.connector
from flask_cors import CORS

app = Flask(__name__)
CORS(app)


# -----------------------------
# Load dataset and train model
# -----------------------------
data = pd.read_csv("loan_dataset.csv")

X = data[["Income","CreditScore","LoanAmount"]]
y = data["Decision"]

model = LogisticRegression(max_iter=1000)
model.fit(X,y)

accuracy = model.score(X,y)

# -----------------------------
# Database connection
# -----------------------------
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="Manohar@123",
    database="loan_ai"
)

cursor = db.cursor()

# -----------------------------
# Loan Prediction API
# -----------------------------
@app.route("/predict", methods=["POST"])
def predict():

    req = request.json

    income = req.get("income")
    credit = req.get("creditScore")
    loan = req.get("loanAmount")
    employment = req.get("employment")

    prediction = model.predict([[income,credit,loan]])[0]
    probability = model.predict_proba([[income,credit,loan]])[0][1]

    decision = "Approved" if prediction == 1 else "Rejected"

    risk = "Low"
    if probability < 0.5:
        risk = "High"

    # Save prediction to database
    cursor.execute(
        """
        INSERT INTO loan_predictions
        (income, credit_score, loan_amount, employment, risk, decision)
        VALUES (%s,%s,%s,%s,%s,%s)
        """,
        (income,credit,loan,employment,risk,decision)
    )

    db.commit()

    loan_id = cursor.lastrowid

    return jsonify({
        "loan_id": loan_id,
        "decision":decision,
        "probability":round(probability*100,2),
        "model_accuracy":round(accuracy*100,2)
    })


# -----------------------------
# AI Decision Appeal System
# -----------------------------
@app.route("/appeal", methods=["POST"])
def appeal():

    data = request.json

    loan_id = data.get("loan_id")
    reason = data.get("reason")

    if not loan_id or not reason:
        return jsonify({"error":"loan_id and reason required"}),400

    cursor.execute(
        "INSERT INTO loan_appeals (loan_id, reason) VALUES (%s,%s)",
        (loan_id, reason)
    )

    db.commit()

    return jsonify({
        "message":"Appeal submitted successfully"
    })


# -----------------------------
# AI Loan Assistant Chatbot
# -----------------------------
@app.route("/chatbot", methods=["POST"])
def chatbot():

    message = request.json.get("message","").lower()

    if "loan" in message:
        reply = "You can apply for Home Loan, Personal Loan, Education Loan or Gold Loan."

    elif "credit score" in message:
        reply = "A credit score above 650 improves loan approval chances."

    elif "government scheme" in message or "scheme" in message:
        reply = "You can check schemes like PM Mudra Loan, PMAY Housing Scheme, or Stand-Up India."

    elif "eligibility" in message:
        reply = "Loan eligibility depends on income, credit score, employment type and loan amount."

    elif "documents" in message:
        reply = "Common documents required are Aadhaar Card, PAN Card, Income Proof and Bank Statements."

    else:
        reply = "Please ask about loans, credit score, eligibility or government schemes."

    return jsonify({
        "reply": reply
    })


# -----------------------------
# Run Flask Server
# -----------------------------
if __name__ == "__main__":
    app.run(port=5001)