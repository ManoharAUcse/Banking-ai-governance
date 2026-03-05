from flask import Flask, request, jsonify
from sklearn.linear_model import LogisticRegression
import numpy as np

app = Flask(__name__)

# -----------------------------
# Training Dataset
# -----------------------------

X = np.array([
    [30000, 600],
    [40000, 620],
    [50000, 650],
    [60000, 680],
    [70000, 700],
    [80000, 720],
    [90000, 750],
    [100000, 780],
    [120000, 800]
])

y = np.array([
    0, 0, 0, 0, 1, 1, 1, 1, 1
])

# -----------------------------
# Train ML Model
# -----------------------------

model = LogisticRegression()
model.fit(X, y)

accuracy = model.score(X, y)

print("✅ ML Model trained successfully")
print("📊 Model Accuracy:", round(accuracy * 100, 2), "%")

# -----------------------------
# Prediction API
# -----------------------------

@app.route("/predict", methods=["POST"])
def predict():

    try:

        data = request.json

        income = float(data["income"])
        credit = float(data["creditScore"])

        prediction = model.predict([[income, credit]])[0]

        probability = model.predict_proba([[income, credit]])[0][1]

        decision = "Approved" if prediction == 1 else "Rejected"

        return jsonify({
            "decision": decision,
            "model_accuracy": round(accuracy * 100, 2),
            "approval_probability": round(probability * 100, 2)
        })

    except Exception as e:

        return jsonify({
            "error": str(e)
        }), 400


# -----------------------------
# Health Check API
# -----------------------------

@app.route("/")
def home():
    return "ML Loan Prediction API Running"


# -----------------------------
# Run Flask Server
# -----------------------------

if __name__ == "__main__":
    app.run(port=5001, debug=True)