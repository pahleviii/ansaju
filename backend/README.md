# 🌐 Backend — ANSAJU

Backend server ANSAJU dibangun dengan Flask. Bertugas melayani prediksi jurusan berdasarkan data hasil tes minat dari frontend.

## Struktur

- `app.py` — Flask API endpoint `/predict`
- `model.joblib` — Model hasil training (salin dari folder ml/)
- `requirements.txt` — Daftar dependensi Python

## Menjalankan Server

```bash
cd backend
pip install -r requirements.txt
python app.py
API tersedia di http://localhost:5000/predict dan menerima POST berupa array 12 angka.