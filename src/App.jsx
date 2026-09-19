import DataImage from "./data";
import { listTools, listProyek } from "./data";

import { Routes, Route, Link } from "react-router-dom";
import ProjectDetail from "./components/ProjectDetail";

function Home() {
  const handleNavigation = (section) => {
    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* Hero Section */}
      <div className="hero grid md:grid-cols-2 pt-10 items-center xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 w-fit p-4 rounded-2xl">
            <img
              src={DataImage.ProfileImage}
              alt="Hero Image"
              className="w-10 rounded-md"
              loading="lazy"
            />
            <q>Kode yang indah, lahir dari trial dan error.🧐</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Kholik Al Lutfi 👋
          </h1>
          <p className="text-base/loose mb-6 opacity-80 text-justify">
            Seorang Informatics Graduate yang sedang mengembangkan diri di
            bidang software development. Saya membuat berbagai project sebagai
            bagian dari proses belajar dan membangun pengalaman dalam
            mengembangkan software.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href={`${import.meta.env.BASE_URL}CV-Kholik-Al-Lutfi.pdf`}
              download="CV-Kholik-Lutfi.pdf"
              className="flex items-center bg-violet-700 gap-1 p-4 rounded-2xl hover:bg-violet-600"
            >
              Download CV
              <i className="ri-download-line ri-lg"></i>
            </a>
            <button
              onClick={() => handleNavigation("project")}
              className="flex items-center bg-zinc-700 gap-1 p-4 rounded-2xl hover:bg-zinc-600 cursor-pointer"
            >
              Lihat Proyek
              <i className="ri-arrow-right-up-box-line ri-lg"></i>
            </button>
          </div>
        </div>
        <div
          className="
              relative
              flex
              justify-center
              md:justify-end
              items-end
              w-full
            "
        >
          {/* Glow background */}
          <div
            className="
                absolute
                w-56 h-56
                sm:w-64 sm:h-64
                md:w-72 md:h-72
                lg:w-80 lg:h-80
                rounded-full
                bg-violet-500/20
                blur-3xl
              "
          ></div>
          {/* Secondary glow */}
          <div
            className="
                absolute
                w-32 h-32
                sm:w-40 sm:h-40
                md:w-48 md:h-48
                lg:w-56 lg:h-56
                rounded-full
                bg-purple-400/10
                blur-2xl
                translate-x-10
                -translate-y-10
              "
          ></div>
          <img
            src={DataImage.ProfileImage}
            alt="Hero Image"
            className="
                relative
                z-10
                w-52
                sm:w-60
                md:w-72
                lg:w-80
                xl:w-96
                h-auto
                object-contain
                mx-auto
                md:ml-auto
                md:mr-4
                lg:mr-8
                drop-shadow-[0_15px_35px_rgba(0,0,0,0.5)]
                animate__animated
                animate__fadeInUp
                animate__delay-2s
              "
            loading="lazy"
          />
        </div>
      </div>
      {/* Hero Section */}

      {/* Tentang Section */}
      <div className="tentang mt-32 py-10">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 md:p-10 bg-zinc-800 rounded-2xl"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <div className="grid md:grid-cols-[180px_1fr] gap-8 md:gap-10 items-center">
            {/* Image */}
            <div className="flex justify-center md:justify-start">
              <img
                src={DataImage.ProfileImage}
                alt="Kholik Al Lutfi"
                className="w-36 h-50 md:w-40 md:h-50 object-cover rounded-2xl"
                loading="lazy"
              />
            </div>

            {/* About */}
            <div>
              <p className="text-base/loose text-justify">
                Sebagai lulusan S1 Informatika, saya memiliki minat pada
                pengembangan aplikasi mobile dan backend. Saya mengembangkan
                berbagai project menggunakan Flutter, Android, Go, dan Node.js,
                sekaligus mempelajari database, REST API, autentikasi, dan
                arsitektur software. Saya menggunakan project sebagai sarana
                untuk menerapkan apa yang dipelajari sekaligus mengembangkan
                kemampuan dalam software development.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="mt-10 pt-8 border-t border-zinc-700 grid grid-cols-2 gap-6">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-1">
                10<span className="text-violet-500">+</span>
              </h1>
              <p className="text-sm md:text-base opacity-60">
                Project yang dikerjakan
              </p>
            </div>

            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-1">
                3<span className="text-violet-500">+</span>
              </h1>
              <p className="text-sm md:text-base opacity-60">
                Tahun belajar software development
              </p>
            </div>
          </div>
        </div>

        <div className="tools mt-32" id="tentang">
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>

          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-60"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut ini beberapa tools dan teknologi yang saya gunakan dalam
            proses pengembangan software.
          </p>

          {/* Programming Languages */}
          <h2
            className="text-xl font-bold mt-14 mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Programming Languages
          </h2>

          <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.languages.map((tool) => (
              <div
                className="group flex gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 items-center"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-zinc-800 p-2 group-hover:bg-zinc-900 rounded-md">
                  <img
                    src={tool.gambar}
                    alt={`${tool.nama} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-60">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Development */}
          <h2
            className="text-xl font-bold mt-14 mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Mobile Development
          </h2>

          <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.mobile.map((tool) => (
              <div
                className="group flex gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 items-center"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-zinc-800 p-2 group-hover:bg-zinc-900 rounded-md">
                  <img
                    src={tool.gambar}
                    alt={`${tool.nama} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-60">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Backend & Web */}
          <h2
            className="text-xl font-bold mt-14 mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Backend & Web
          </h2>

          <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.backendWeb.map((tool) => (
              <div
                className="group flex gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 items-center"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-zinc-800 p-2 group-hover:bg-zinc-900 rounded-md">
                  <img
                    src={tool.gambar}
                    alt={`${tool.nama} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-60">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Database & Services */}
          <h2
            className="text-xl font-bold mt-14 mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Database & Services
          </h2>

          <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.database.map((tool) => (
              <div
                className="group flex gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 items-center"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-zinc-800 p-2 group-hover:bg-zinc-900 rounded-md">
                  <img
                    src={tool.gambar}
                    alt={`${tool.nama} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-60">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Development Tools */}
          <h2
            className="text-xl font-bold mt-14 mb-5"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Development Tools
          </h2>

          <div className="tools-box grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.tools.map((tool) => (
              <div
                className="group flex gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 items-center"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <div className="w-14 h-14 shrink-0 flex items-center justify-center bg-zinc-800 p-2 group-hover:bg-zinc-900 rounded-md">
                  <img
                    src={tool.gambar}
                    alt={`${tool.nama} logo`}
                    className="w-full h-full object-contain"
                    loading="lazy"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-60">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Tentang Section */}

      {/* Project Section */}
      <div className="proyek mt-32 py-10" id="project">
        <h1
          className="text-center text-4xl font-bold mb-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Project
        </h1>
        <p
          className="text-base/loose text-center opacity-60"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Berikut ini beberapa project yang telah saya buat
        </p>
        <div className="proyek-box mt-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="p-4 bg-zinc-800 rounded-md h-full flex flex-col"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={proyek.dad}
              data-aos-once="true"
            >
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div className="flex flex-col flex-1">
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p
                      key={index}
                      className="py-1 px-3 border bg-zinc-600 border-zinc-500 rounded-md font-semibold"
                    >
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-auto pt-8 text-center">
                  <Link
                    to={`/projects/${proyek.slug}`}
                    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600"
                  >
                    Lihat Project
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Project Section */}

      {/* Contact Section */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1
          className="text-4xl mb-2 font-bold text-center"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Kontak
        </h1>
        <p
          className="text-base/loose text-center mb-10 opacity-60"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Mari terhubung dengan saya
        </p>
        <form
          action="https://formsubmit.co/1df8953de739249069cd8150ecf7dc4e"
          method="POST"
          className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
          autoComplete="off"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
          data-aos-once="true"
        >
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap 2">
              <label className="font-semibold pb-1">Nama Lengkap</label>
              <input
                type="text"
                name="Nama"
                placeholder="Masukkan Nama..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap 2">
              <label className="font-semibold pb-1">Email</label>
              <input
                type="email"
                name="Email"
                placeholder="Masukkan Email..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              />
            </div>
            <div className="flex flex-col gap 2">
              <label htmlFor="Pesan" className="font-semibold pb-1">
                Pesan
              </label>
              <textarea
                name="Pesan"
                id="Pesan"
                cols="45"
                rows="7"
                placeholder="Pesan..."
                className="border border-zinc-500 p-2 rounded-md"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button
                type="submit"
                className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-violet-600"
              >
                Kirim Pesan
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Contact Section */}
    </>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects/:slug" element={<ProjectDetail />} />
    </Routes>
  );
}

export default App;
