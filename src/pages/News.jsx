function News() {
  const articles = [
    {
      title: "Tips Memilih Jurusan Sesuai Minat dan Bakat",
      summary:
        "Menentukan jurusan kuliah yang tepat bisa jadi penentu masa depan. Berikut tips agar tidak salah jurusan.",
      date: "17 Mei 2025",
      image: "https://source.unsplash.com/600x400/?education",
    },
    {
      title: "5 Jurusan Favorit dengan Peluang Kerja Tinggi",
      summary:
        "Simak daftar jurusan paling diminati yang menawarkan prospek kerja luas di era digital.",
      date: "15 Mei 2025",
      image: "https://source.unsplash.com/600x400/?university",
    },
    {
      title: "Mengapa Tes Minat Bakat Itu Penting?",
      summary:
        "Tes minat bakat membantu mengenali potensi dan arah karier yang cocok sejak dini.",
      date: "12 Mei 2025",
      image: "https://source.unsplash.com/600x400/?student",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
        Berita & Artikel Terbaru
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
          >
            <img
              src={article.image}
              alt={article.title}
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <p className="text-sm text-gray-500 mb-1">🗓 {article.date}</p>
              <h2 className="text-lg font-semibold text-gray-800 mb-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mb-4 flex-grow">
                {article.summary}
              </p>
              <a
                href="#"
                className="text-blue-600 text-sm font-medium hover:underline self-start"
              >
                Baca Selengkapnya →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;
