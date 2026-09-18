import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleNavigation = (section) => {
    // Kalau sedang di halaman Home
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    // Kalau sedang di halaman Project Detail
    navigate("/");

    // Tunggu Home selesai dirender
    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="navbar py-7 flex items-center justify-between">
      <div className="logo">
        <h1 className="text-3xl font-bold bg-white text-black rounded-xl p-3 md:bg-transparent md:text-white md:p-0">
          Portofolio
        </h1>
      </div>

      <ul
        className={`menu flex items-center sm:gap-10 gap-4 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 bg-white/30 backdrop-blur-md p-4 rounded-br-2xl rounded-bl-2xl md:bg-transparent transition-all md:transition-none z-40 ${
          active
            ? "top-0 opacity-100"
            : "-top-10 opacity-10"
        }`}
      >
        <li>
          <button
            onClick={() => handleNavigation("beranda")}
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            Beranda
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNavigation("tentang")}
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            Tentang
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNavigation("project")}
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            Proyek
          </button>
        </li>

        <li>
          <button
            onClick={() => handleNavigation("kontak")}
            className="sm:text-lg text-base font-medium cursor-pointer"
          >
            Kontak
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;