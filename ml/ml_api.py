from flask import Flask, request, jsonify
from sklearn.linear_model import LogisticRegression
import pandas as pd

app = Flask(__name__)

# Load dataset
data = pd.read_csv("loan_dataset.csv")

X = data[["Income","CreditScore","LoanAmount"]]
y = data["Decision"]

model = LogisticRegression(max_iter=1000)
model.fit(X,y)

accuracy = model.score(X,y)

@app.route("/predict", methods=["POST"])
def predict():

    req = request.json

    income = req.get("income")
    credit = req.get("creditScore")
    loan = req.get("loanAmount")

    prediction = model.predict([[income,credit,loan]])[0]
    probability = model.predict_proba([[income,credit,loan]])[0][1]

    decision = "Approved" if prediction == 1 else "Rejected"

    return jsonify({
        "decision":decision,
        "probability":round(probability*100,2),
        "model_accuracy":round(accuracy*100,2)
    })

if __name__ == "__main__":
    app.run(port=5001)