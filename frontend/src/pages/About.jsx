import { motion } from "framer-motion";

function About() {
  const team = [
    {
      name: "Reza Pahlevi",
      role: "Machine Learning Engineer",
      img: "/team-placeholder.png",
      linkedin: "https://www.linkedin.com/in/rezapahlevi",
    },
    {
      name: "Alvi Setya Kurnia Dewi",
      role: "Machine Learning Engineer",
      img: "/team-placeholder.png",
      linkedin: "https://www.linkedin.com/in/alvisetya",
    },
    {
      name: "Nabila Neva Rahmawati",
      role: "Machine Learning Engineer",
      img: "/team-placeholder.png",
      linkedin: "https://www.linkedin.com/in/nabilaneva",
    },
    {
      name: "Dwi Oktaviane",
      role: "Frontend & Backend",
      img: "/team-placeholder.png",
      linkedin: "https://www.linkedin.com/in/dwiokta",
    },
    {
      name: "Ikhlash Mulyanurahman",
      role: "Frontend & Backend",
      img: "/team-placeholder.png",
      linkedin: "https://www.linkedin.com/in/ikhlashm",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-6xl mx-auto px-6 py-16"
    >
      {/* Ilustrasi */}
      <img
        src="https://images.unsplash.com/photo-1600195077075-7c815be9c181?auto=format&fit=crop&w=1200&q=80"
        alt="Ilustrasi belajar"
        className="rounded-xl shadow mb-12 w-full max-h-72 object-cover"
      />

      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Tentang ANSAJU
      </h1>

      <div className="space-y-6 text-gray-700 leading-relaxed">
        <p>
          <span className="font-semibold text-blue-600">ANSAJU</span> (Anti Salah Jurusan) adalah aplikasi berbasis web yang dirancang untuk membantu siswa dan calon mahasiswa menemukan jurusan kuliah yang paling sesuai dengan minat dan potensi mereka.
        </p>
        <p>
          Melalui serangkaian pertanyaan sederhana, ANSAJU akan menganalisis pola preferensi pengguna dan memberikan rekomendasi jurusan yang relevan — semuanya dilakukan secara instan dan tanpa ribet.
        </p>

        <hr className="my-6 border-gray-300" />

        <h2 className="text-xl font-semibold text-gray-800">🎯 Tujuan & Latar Belakang</h2>
        <p>
          Salah jurusan masih menjadi masalah umum di dunia pendidikan tinggi. Banyak siswa memilih jurusan berdasarkan tren, tekanan orang tua, atau kurangnya pemahaman diri sendiri. Akibatnya, banyak yang kehilangan semangat belajar dan merasa tidak cocok di bidangnya.
        </p>
        <p>
          ANSAJU hadir untuk meminimalisir hal itu — dengan pendekatan yang praktis, gratis, dan berbasis data.
        </p>

        <h2 className="text-xl font-semibold text-gray-800 mt-8">🧠 Teknologi di Balik Layar</h2>
        <ul className="list-disc list-inside ml-4">
          <li>Model Machine Learning untuk memetakan minat ke jurusan</li>
          <li>Backend API sebagai jembatan komunikasi data</li>
          <li>Frontend interaktif dan responsif dengan React & Tailwind</li>
        </ul>

        <p className="mt-6">
          Aplikasi ini dikembangkan sebagai bagian dari <strong>Capstone Project CC25-CF010</strong>. Kami percaya bahwa keputusan jurusan kuliah harus didasarkan pada pemahaman diri yang lebih dalam — dan ANSAJU hadir untuk membantu itu.
        </p>
      </div>

      {/* Tim Pengembang */}
      <div className="mt-20">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-10">
          👨‍💻 Tim Pengembang
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center transition hover:shadow-lg"
            >
              <div className="w-28 h-28 mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-full border-4 border-blue-200"
                />
              </div>
              <h3 className="font-semibold text-lg text-gray-800">{member.name}</h3>
              <p className="text-sm text-gray-500 mb-2">{member.role}</p>

              {member.linkedin && (
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 text-blue-600 text-sm hover:underline"
                >
                  <svg
                    className="w-5 h-5 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.762 2.239 5 5 5h14c2.762 0 5-2.238 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.791-1.75-1.764s.784-1.764 1.75-1.764 1.75.791 1.75 1.764-.784 1.764-1.75 1.764zm13.5 11.268h-3v-5.604c0-1.337-.027-3.061-1.867-3.061-1.868 0-2.154 1.459-2.154 2.967v5.698h-3v-10h2.881v1.367h.041c.401-.757 1.38-1.553 2.841-1.553 3.038 0 3.6 2.001 3.6 4.6v5.586z" />
                  </svg>
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default About;
