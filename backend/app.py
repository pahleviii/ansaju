from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import numpy as np
import os

app = Flask(__name__)
CORS(app)

# Load model
MODEL_PATH = os.path.join("..", "ml", "models", "model_ansaju.pkl")
FEATURE_PATH = os.path.join("..", "ml", "models", "fitur_model.pkl")

model = joblib.load(MODEL_PATH)
fitur = joblib.load(FEATURE_PATH)

@app.route("/")
def home():
    return "Welcome to ANSAJU API"

@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()
    input_array = np.array([data])
    hasil = model.predict(input_array)
    return jsonify({"recommended_major": hasil[0]})

if __name__ == "__main__":
    app.run(debug=True)
