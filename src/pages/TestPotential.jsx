import { useState, useEffect } from "react";
import { motion } from "framer-motion";

function TestPotential() {
  const questions = [
    "Saya senang memecahkan masalah logika dan hitungan.",
    "Saya tertarik dengan cara kerja komputer atau teknologi.",
    "Saya menikmati membaca buku tentang manusia atau psikologi.",
    "Saya ingin membantu orang lain secara langsung, seperti di bidang kesehatan.",
    "Saya suka bekerja dengan data atau statistik.",
    "Saya tertarik pada seni atau desain visual.",
    "Saya ingin membangun atau merancang sesuatu secara fisik.",
    "Saya suka berbicara atau menyampaikan ide di depan umum.",
    "Saya menikmati menganalisis kejadian sosial atau politik.",
    "Saya senang belajar tentang alam, tumbuhan, atau hewan.",
    "Saya ingin mengembangkan bisnis atau produk.",
    "Saya tertarik mengajar dan berbagi pengetahuan."
  ];

  const [answers, setAnswers] = useState(Array(12).fill(0));
  const [result, setResult] = useState(null);
  const [lastDate, setLastDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(Array(12).fill(false));

  useEffect(() => {
    const saved = localStorage.getItem("ansaju_result");
    const savedDate = localStorage.getItem("ansaju_date");
    if (saved) setResult(saved);
    if (savedDate) setLastDate(savedDate);
  }, []);

  const handleChange = (index, value) => {
    const updated = [...answers];
    updated[index] = Number(value);
    setAnswers(updated);

    const errorFlags = [...errors];
    errorFlags[index] = false;
    setErrors(errorFlags);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = answers.map((a) => a === 0);
    setErrors(newErrors);
    if (newErrors.includes(true)) return alert("Semua pertanyaan harus dijawab.");

    try {
      setLoading(true);
      const res = await fetch("https://ansaju-backend-production.up.railway.app/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(answers)
      });
      const data = await res.json();
      const today = new Date().toLocaleDateString("id-ID", {
        day: "numeric",
        month: "long",
        year: "numeric"
      });

      setResult(data.recommended_major);
      setLastDate(today);

      localStorage.setItem("ansaju_result", data.recommended_major);
      localStorage.setItem("ansaju_date", today);
    } catch (err) {
      console.error(err);
      alert("Gagal terhubung ke server.");
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    localStorage.removeItem("ansaju_result");
    localStorage.removeItem("ansaju_date");
    setResult(null);
    setLastDate(null);
    setAnswers(Array(12).fill(0));
    setErrors(Array(12).fill(false));
  };

  const progress = (answers.filter((a) => a !== 0).length / questions.length) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-6 text-gray-800">Tes Potensi Jurusan</h1>

      {/* Progress Bar */}
      <div className="mb-8">
        <div className="w-full bg-gray-200 rounded-full h-4 overflow-hidden">
          <div
            className="bg-blue-600 h-4 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        <p className="text-right text-sm text-gray-500 mt-1">{Math.round(progress)}% terisi</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-8">
        {questions.map((question, i) => (
          <div key={i} className="bg-white border shadow-sm rounded-lg p-5">
            <label className="block font-medium text-gray-800 mb-2">
              {i + 1}. {question}
            </label>
            <div className="flex flex-wrap gap-3">
              {[1, 2, 3, 4, 5].map((num) => (
                <label
                  key={num}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg border cursor-pointer transition
                    ${
                      answers[i] === num
                        ? "bg-blue-600 text-white border-blue-600"
                        : "bg-gray-50 text-gray-800 border-gray-300 hover:bg-blue-50"
                    }`}
                >
                  <input
                    type="radio"
                    name={`q${i}`}
                    value={num}
                    checked={answers[i] === num}
                    onChange={() => handleChange(i, num)}
                    className="hidden"
                  />
                  {num}
                </label>
              ))}
            </div>
            {errors[i] && (
              <p className="text-red-500 text-sm mt-2">Pertanyaan ini belum dijawab.</p>
            )}
          </div>
        ))}

        <div className="text-center">
          <button
            type="submit"
            disabled={loading}
            className="bg-green-600 hover:bg-green-700 text-white font-semibold px-8 py-3 rounded-xl transition disabled:opacity-50"
          >
            {loading ? "⏳ Menghitung..." : "Kirim Jawaban"}
          </button>
        </div>
      </form>

      {result && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-10 text-center bg-white p-6 rounded-xl shadow max-w-xl mx-auto"
        >
          <h2 className="text-2xl font-semibold text-blue-700 mb-2">
            🎓 Jurusan yang Cocok Untukmu:
          </h2>
          <p className="text-3xl font-bold text-green-700 mb-2">{result}</p>
          {lastDate && (
            <p className="text-sm text-gray-500 mb-4">Tes terakhir: {lastDate}</p>
          )}

          <button
            onClick={handleReset}
            className="mt-4 bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl transition"
          >
            Ulangi Tes
          </button>
        </motion.div>
      )}
    </div>
  );
}

export default TestPotential;
