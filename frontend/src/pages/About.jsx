const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Tentang Edu Bloom Zone</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Platform pembelajaran online yang berkomitmen untuk memberikan pendidikan berkualitas tinggi 
          dan aksesibel untuk semua kalangan.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Visi Kami</h2>
          <p className="text-lg text-gray-600 mb-6">
            Menjadi platform pembelajaran online terdepan di Indonesia yang memungkinkan setiap individu 
            untuk mengembangkan potensi dan keterampilan mereka tanpa batasan geografis atau waktu.
          </p>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Misi Kami</h2>
          <ul className="space-y-4 text-lg text-gray-600">
            <li className="flex items-start">
              <span className="text-primary-600 mr-3">•</span>
              Menyediakan konten pembelajaran berkualitas tinggi dari instruktur berpengalaman
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-3">•</span>
              Membangun komunitas pembelajar yang saling mendukung dan berbagi pengetahuan
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-3">•</span>
              Menggunakan teknologi terdepan untuk memberikan pengalaman belajar yang optimal
            </li>
            <li className="flex items-start">
              <span className="text-primary-600 mr-3">•</span>
              Memastikan aksesibilitas pembelajaran untuk semua kalangan masyarakat
            </li>
          </ul>
        </div>
        <div className="bg-primary-50 rounded-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Statistik Kami</h3>
          <div className="grid grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">10K+</div>
              <div className="text-gray-600">Siswa Aktif</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600">Kursus Tersedia</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
              <div className="text-gray-600">Instruktur Ahli</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">95%</div>
              <div className="text-gray-600">Tingkat Kepuasan</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-8 mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Tim Kami</h2>
        <p className="text-lg text-gray-600 text-center max-w-3xl mx-auto mb-8">
          Tim Edu Bloom Zone terdiri dari para profesional berpengalaman di bidang pendidikan, 
          teknologi, dan pengembangan konten yang berdedikasi untuk memberikan pengalaman belajar terbaik.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-primary-100 w-24 h-24 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tim Pendidikan</h3>
            <p className="text-gray-600">
              Ahli kurikulum dan pedagogi yang memastikan kualitas konten pembelajaran
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 w-24 h-24 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tim Teknologi</h3>
            <p className="text-gray-600">
              Developer dan engineer yang membangun platform yang user-friendly dan reliable
            </p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 w-24 h-24 rounded-full mx-auto mb-4"></div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Tim Konten</h3>
            <p className="text-gray-600">
              Content creator dan video editor yang menghasilkan materi pembelajaran menarik
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Bergabunglah dengan Kami</h2>
        <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
          Apakah Anda ingin menjadi bagian dari perjalanan transformasi pendidikan di Indonesia? 
          Mari bergabung dengan komunitas Edu Bloom Zone dan mulai perjalanan belajar Anda hari ini.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="/register"
            className="btn-primary"
          >
            Daftar Sekarang
          </a>
          <a
            href="/contact"
            className="btn-secondary"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </div>
  )
}

export default About
