import { FaFacebookF, FaTwitter, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-white px-6 pt-10 pb-6">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 text-sm">
        {/* Bagian Atas: Konten utama */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Kiri */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold mb-1">ANSAJU</h3>
            <p className="text-white/80 max-w-xs">
              Platform rekomendasi jurusan berbasis potensi minat. Bantu kamu temukan arah studi yang sesuai sejak awal.
            </p>
          </div>

          {/* Kanan: Sosial media */}
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white/90" title="Facebook">
              <FaFacebookF size={18} />
            </a>
            <a href="#" className="hover:text-white/90" title="Twitter">
              <FaTwitter size={18} />
            </a>
            <a href="#" className="hover:text-white/90" title="GitHub">
              <FaGithub size={18} />
            </a>
          </div>
        </div>

        {/* Bagian Bawah: Copyright */}
        <div className="text-center text-white/70 text-xs pt-4 border-t border-white/20">
          © {new Date().getFullYear()} ANSAJU. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
