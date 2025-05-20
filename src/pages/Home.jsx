// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative flex flex-col items-center justify-center text-center px-4 md:px-8 py-16 md:py-20 bg-gradient-to-b from-white to-blue-50 min-h-screen overflow-hidden"
    >
      {/* Background dekoratif */}
      <div className="absolute top-[-40px] left-[-60px] w-[300px] h-[300px] bg-blue-400 rounded-full opacity-25 blur-[100px] z-0" />
      <div className="absolute bottom-[-80px] right-[-40px] w-[300px] h-[300px] bg-purple-400 rounded-full opacity-25 blur-[100px] z-0" />

      {/* Konten utama */}
      <p className="text-sm text-blue-500 font-semibold tracking-wide uppercase mb-2 z-10">
        Capstone Project CC25-CF010
      </p>

      <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 z-10">
        Selamat Datang di ANSAJU 🎓
      </h1>

      <p className="text-gray-600 text-base md:text-xl max-w-2xl mb-8 z-10">
        Platform untuk membantumu menemukan jurusan kuliah yang paling sesuai dengan potensi dan minatmu — bebas dari salah jurusan!
      </p>

      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="z-10">
        <Link
          to="/test"
          className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-xl shadow-md transition"
        >
          Mulai Tes Potensi
        </Link>
      </motion.div>

      <motion.img
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        src="/vite.svg"
        alt="Ilustrasi ANSAJU"
        className="mt-12 w-48 md:w-64 opacity-80 z-10"
      />

      {/* Section fitur */}
      <section className="mt-16 max-w-5xl mx-auto px-4 grid gap-8 md:grid-cols-3 text-center z-10">
        <div>
          <div className="text-4xl mb-3">🧠</div>
          <h3 className="text-lg font-semibold text-gray-800">Tes Minat Interaktif</h3>
          <p className="text-sm text-gray-600">
            Jawab 12 pertanyaan sederhana untuk memahami minat dan kecenderunganmu.
          </p>
        </div>

        <div>
          <div className="text-4xl mb-3">🤖</div>
          <h3 className="text-lg font-semibold text-gray-800">Ditenagai Machine Learning</h3>
          <p className="text-sm text-gray-600">
            Sistem kami memprediksi jurusan ideal berdasarkan pola minat unikmu.
          </p>
        </div>

        <div>
          <div className="text-4xl mb-3">🎓</div>
          <h3 className="text-lg font-semibold text-gray-800">Bebas Salah Jurusan</h3>
          <p className="text-sm text-gray-600">
            Rekomendasi jurusan yang tepat sejak awal agar tidak menyesal di tengah jalan.
          </p>
        </div>
      </section>

      {/* Section kenapa ansaju */}
      <section className="mt-24 px-4 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Kenapa Harus ANSAJU?</h2>
        <p className="text-gray-600 text-base mb-10">
          ANSAJU dirancang khusus untuk membantumu mengambil keputusan yang tepat soal jurusan kuliah.
          Kami percaya bahwa setiap orang punya potensi unik — dan tidak ada yang lebih baik dari menemukan jurusan yang benar-benar sesuai sejak awal.
        </p>

        <div className="grid gap-6 md:grid-cols-2 text-left">
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold text-blue-600 mb-1">🔍 Rekomendasi Berdasarkan Data</h3>
            <p className="text-sm text-gray-700">
              Menggunakan pendekatan Machine Learning dari hasil ratusan responden simulasi untuk memetakan potensi kamu ke jurusan yang paling cocok.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold text-blue-600 mb-1">🕒 Tes Cepat & Tanpa Ribet</h3>
            <p className="text-sm text-gray-700">
              Hanya 12 pertanyaan dan kamu langsung dapat hasilnya — tidak perlu login atau isi data panjang.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold text-blue-600 mb-1">🎯 Fokus pada Minat & Potensi</h3>
            <p className="text-sm text-gray-700">
              Tidak hanya akademik — kami lebih peduli apakah kamu akan menikmati dan berkembang di jurusan yang kamu pilih.
            </p>
          </div>
          <div className="bg-white rounded-xl shadow p-5">
            <h3 className="font-semibold text-blue-600 mb-1">🧭 Membantu Pilihan Masa Depan</h3>
            <p className="text-sm text-gray-700">
              Cocok untuk siswa, guru BK, atau siapa pun yang ingin menghindari salah jurusan sejak awal.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
}
