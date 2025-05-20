# 🤖 Machine Learning — ANSAJU

Folder ini berisi seluruh skrip dan model Machine Learning yang digunakan untuk memprediksi jurusan berdasarkan hasil tes minat.

## Struktur Folder

- `dataset_dummy.csv` — Data dummy (hasil 100 responden x 30 jurusan)
- `train_model.py` — Script untuk melatih model
- `predict.py` — Script untuk melakukan prediksi
- `model.joblib` — Model yang telah dilatih

## Cara Menjalankan

1. Jalankan `train_model.py` untuk membuat model:
`bash
python train_model.py

2. untuk menguji model :
'bash
python predict.py

## Catatan
Model dilatih dengan Random Forest menggunakan data dummy.
Hasil bersifat simulatif. Perlu update jika tersedia data aktual.