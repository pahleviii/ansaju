import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

function Profile() {
  const [result, setResult] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("ansaju_result");
    if (stored) setResult(stored);
  }, []);

  const handleReset = () => {
    localStorage.removeItem("ansaju_result");
    setResult(null);
  };

  return (
    <div className="flex flex-col items-center justify-start min-h-screen px-4 py-16 bg-gradient-to-b from-white to-blue-50">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl text-center"
      >
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Profil Kamu</h1>

        {result ? (
          <div className="bg-white border border-green-200 shadow-xl rounded-2xl p-6">
            <p className="text-gray-600 text-sm mb-2">
              Hasil Rekomendasi Jurusan Terakhir Kamu:
            </p>
            <div className="flex flex-col items-center justify-center">
              <GraduationCap className="w-10 h-10 text-green-600 mb-2" />
              <h2 className="text-2xl font-semibold text-green-700 mb-4">
                {result}
              </h2>
              <button
                onClick={handleReset}
                className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-lg text-sm transition"
              >
                Reset Hasil
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">Kamu belum pernah mengisi tes.</p>
        )}
      </motion.div>
    </div>
  );
}

export default Profile;
