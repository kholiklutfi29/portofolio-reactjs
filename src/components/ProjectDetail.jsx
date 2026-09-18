import { Link, useParams } from "react-router-dom";
import { listProyek } from "../data";

function ProjectDetail() {
  const { slug } = useParams();

  const proyek = listProyek.find((item) => item.slug === slug);

  if (!proyek) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl font-bold mb-4">Project tidak ditemukan</h1>

        <p className="opacity-60 mb-6">
          Project yang kamu cari tidak tersedia.
        </p>

        <Link
          to="/"
          className="bg-violet-700 px-5 py-3 rounded-lg hover:bg-violet-600"
        >
          Kembali ke Home
        </Link>
      </div>
    );
  }

  return (
    <div className="py-12 md:py-16">
      {/* Back */}
      <Link
        to="/#project"
        className="inline-flex items-center gap-2 opacity-70 hover:opacity-100 mb-8"
      >
        <i className="ri-arrow-left-line"></i>
        Kembali ke Project
      </Link>

      {/* Header */}
      <section
        className="grid lg:grid-cols-[1.4fr_1fr] gap-10 items-center"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div>
          <p className="text-violet-400 font-semibold mb-3">
            {proyek.kategori}
          </p>

          <h1 className="text-4xl md:text-5xl font-bold mb-5">{proyek.nama}</h1>

          <p className="text-lg leading-relaxed opacity-70 max-w-2xl">
            {proyek.desk}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2 mt-6">
            {proyek.tools.map((tool, index) => (
              <span
                key={index}
                className="px-3 py-1.5 bg-zinc-800 border border-zinc-700 rounded-md text-sm"
              >
                {tool}
              </span>
            ))}
          </div>

          {/* Button */}
          <div className="flex flex-wrap gap-3 mt-8">
            {proyek.github && proyek.github !== "https://github.com/..." && (
              <a
                href={proyek.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-violet-700 px-5 py-3 rounded-lg hover:bg-violet-600"
              >
                <i className="ri-github-fill"></i>
                GitHub
              </a>
            )}

            {proyek.demo && proyek.demo !== "..." && (
              <a
                href={proyek.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-zinc-700 px-5 py-3 rounded-lg hover:bg-zinc-600"
              >
                <i className="ri-external-link-line"></i>
                Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Banner */}
        <div>
          <img
            src={proyek.gambar}
            alt={`${proyek.nama} banner`}
            className="w-full rounded-2xl shadow-xl"
          />
        </div>
      </section>

      {/* Features */}
      <section className="mt-20" data-aos="fade-up" data-aos-duration="800">
        <h2 className="text-3xl font-bold mb-3">Fitur Utama</h2>

        <p className="opacity-60 mb-8">
          Beberapa fitur yang tersedia dalam project ini.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {proyek.fitur.map((fitur, index) => (
            <div
              key={index}
              className="bg-zinc-800 border border-zinc-700 rounded-xl p-5 hover:border-violet-500 transition"
            >
              <div className="w-10 h-10 flex items-center justify-center bg-violet-700/20 text-violet-400 rounded-lg mb-4">
                <i className="ri-check-line ri-lg"></i>
              </div>

              <h3 className="font-semibold">{fitur}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Screenshots */}
      <section className="mt-24" data-aos="fade-up" data-aos-duration="800">
        <div className="mb-10">
          <h2 className="text-3xl font-bold mb-3">Tampilan Aplikasi</h2>

          <p className="opacity-60">
            Beberapa tampilan antarmuka dari {proyek.nama}.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {proyek.screenshots.map((screenshot, index) => (
            <div
              key={index}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                bg-zinc-900
                border border-zinc-800
                shadow-lg
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-violet-500/60
                hover:shadow-violet-500/10
                "
            >
              <img
                src={screenshot}
                alt={`${proyek.nama} screenshot ${index + 1}`}
                className="
                    w-full
                    aspect-9/20.5
                    object-cover
                    transition-transform
                    duration-500
                    group-hover:scale-[1.03]
                "
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className="
                    absolute
                    inset-0
                    bg-linear-to-t
                    from-black/50
                    via-transparent
                    to-transparent
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                "
              />

              {/* Nomor screenshot */}
              <span
                className="
                    absolute
                    bottom-3
                    left-3
                    px-2.5
                    py-1
                    rounded-full
                    bg-black/60
                    backdrop-blur-sm
                    text-xs
                    text-white
                    opacity-0
                    group-hover:opacity-100
                    transition-opacity
                    duration-300
                "
              >
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Backend Section */}
      {proyek.backend && (
        <section className="mt-20" data-aos="fade-up" data-aos-duration="800">
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-3">Backend & API</h2>

            <p className="opacity-60 max-w-3xl leading-relaxed">
              {proyek.backend.description}
            </p>
          </div>

          {/* Architecture */}
          <div className="bg-zinc-800 border border-zinc-700 rounded-2xl p-6 md:p-8">
            <h3 className="text-xl font-bold mb-6">Architecture</h3>

            <div className="flex flex-col md:flex-row items-center justify-center gap-3">
              {proyek.backend.architecture.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="px-4 py-3 bg-zinc-700 border border-zinc-600 rounded-lg text-center">
                    <span className="font-semibold">{item}</span>
                  </div>

                  {index !== proyek.backend.architecture.length - 1 && (
                    <i className="ri-arrow-right-line hidden md:block text-violet-400"></i>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Responsibilities */}
          <div className="mt-6">
            <h3 className="text-xl font-bold mb-5">Backend Responsibilities</h3>

            <div className="grid md:grid-cols-2 gap-4">
              {proyek.backend.responsibilities.map((item, index) => (
                <div
                  key={index}
                  className="flex gap-3 bg-zinc-800 border border-zinc-700 rounded-xl p-5"
                >
                  <div className="w-9 h-9 shrink-0 flex items-center justify-center bg-violet-700/20 text-violet-400 rounded-lg">
                    <i className="ri-server-line"></i>
                  </div>

                  <p className="leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* API Endpoints */}
          <div className="mt-12">
            <div className="mb-5">
              <h3 className="text-xl font-bold mb-2">API Endpoints</h3>
              <p className="text-sm opacity-60">
                Beberapa endpoint yang digunakan dalam backend {proyek.nama}.
              </p>
            </div>

            <div className="space-y-3">
              {proyek.backend.endpoints.map((item, index) => (
                <details
                  key={index}
                  className="group bg-zinc-800 border border-zinc-700 rounded-xl overflow-hidden"
                >
                  <summary className="list-none cursor-pointer">
                    <div className="flex items-center gap-3 px-5 py-4">
                      {/* Method */}
                      <span
                        className={`
                            min-w-16.25 text-center px-2.5 py-1.5
                            rounded-md text-xs font-bold
                            ${
                              item.method === "GET"
                                ? "bg-green-500/15 text-green-400"
                                : item.method === "POST"
                                  ? "bg-blue-500/15 text-blue-400"
                                  : item.method === "PATCH"
                                    ? "bg-yellow-500/15 text-yellow-400"
                                    : item.method === "DELETE"
                                      ? "bg-red-500/15 text-red-400"
                                      : "bg-zinc-500/15 text-zinc-400"
                            }
                        `}
                      >
                        {item.method}
                      </span>

                      {/* Endpoint */}
                      <code className="text-sm md:text-base text-zinc-200 font-mono break-all">
                        {item.endpoint}
                      </code>

                      {/* Description */}
                      <span className="hidden md:block ml-auto text-sm opacity-50">
                        {item.description}
                      </span>

                      {/* Arrow */}
                      <i className="ri-arrow-down-s-line ml-auto md:ml-3 opacity-50 transition-transform duration-300 group-open:rotate-180"></i>
                    </div>
                  </summary>

                  {/* Endpoint Detail */}
                  <div className="border-t border-zinc-700 bg-zinc-900/50 px-5 py-5">
                    <p className="text-sm text-zinc-400 mb-4">
                      {item.description}
                    </p>

                    <div className="flex items-center gap-3">
                      <span
                        className={`
                            px-3 py-1.5 rounded-md text-xs font-bold
                            ${
                              item.method === "GET"
                                ? "bg-green-500/15 text-green-400"
                                : item.method === "POST"
                                  ? "bg-blue-500/15 text-blue-400"
                                  : item.method === "PATCH"
                                    ? "bg-yellow-500/15 text-yellow-400"
                                    : item.method === "DELETE"
                                      ? "bg-red-500/15 text-red-400"
                                      : "bg-zinc-500/15 text-zinc-400"
                            }
                        `}
                      >
                        {item.method}
                      </span>

                      <code className="text-sm text-zinc-300 font-mono">
                        {item.endpoint}
                      </code>
                    </div>
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Bottom navigation */}
      <div className="mt-20 pt-8 border-t border-zinc-800 flex justify-between">
        <Link
          to="/#project"
          className="inline-flex items-center gap-2 opacity-70 hover:opacity-100"
        >
          <i className="ri-arrow-left-line"></i>
          Semua Project
        </Link>

        <Link
          to="/#kontak"
          className="inline-flex items-center gap-2 bg-violet-700 px-5 py-3 rounded-lg hover:bg-violet-600"
        >
          Hubungi Saya
          <i className="ri-arrow-right-line"></i>
        </Link>
      </div>
    </div>
  );
}

export default ProjectDetail;
