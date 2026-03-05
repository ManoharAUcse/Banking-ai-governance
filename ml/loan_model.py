import pandas as pd
from sklearn.linear_model import LogisticRegression
import pickle

# Sample training data
data = {
    "income":[30000,50000,80000,40000,90000],
    "credit_score":[600,650,750,580,800],
    "loan_amount":[200000,300000,500000,150000,600000],
    "approved":[0,1,1,0,1]
}

df = pd.DataFrame(data)

X = df[["income","credit_score","loan_amount"]]
y = df["approved"]

model = LogisticRegression()
model.fit(X,y)

pickle.dump(model, open("loan_model.pkl","wb"))

print("Model trained and saved")