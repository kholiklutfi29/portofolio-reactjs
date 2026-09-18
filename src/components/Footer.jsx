import { useNavigate, useLocation } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (section) => {
    if (location.pathname === "/") {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
      return;
    }

    navigate("/");

    setTimeout(() => {
      document.getElementById(section)?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
      <h1 className="text-2xl font-bold">
        Portofolio
      </h1>

      <div className="flex gap-7">
        <button
          onClick={() => handleNavigation("beranda")}
          className="cursor-pointer"
        >
          Beranda
        </button>

        <button
          onClick={() => handleNavigation("tentang")}
          className="cursor-pointer"
        >
          Tentang
        </button>

        <button
          onClick={() => handleNavigation("project")}
          className="cursor-pointer"
        >
          Project
        </button>
      </div>

      <div className="flex items-center gap-3">
        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-github-fill ri-2x"></i>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-instagram-fill ri-2x"></i>
        </a>

        <a
          href="#"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="ri-linkedin-fill ri-2x"></i>
        </a>

        <a href="#">
          <i className="ri-mail-fill ri-2x"></i>
        </a>
      </div>
    </div>
  );
};

export default Footer;