import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 ${
        active ? "bg-transparent backdrop-blur-md shadow-md" : "bg-slate-700"
      } flex justify-between items-center px-6 py-4`}
    >
      <div className="logo">
        <h1 className="text-3xl font-bold p-1 md:bg-transparent md:text-white">
          Portfolio
        </h1>
      </div>

      <ul className="flex gap-8">
        <li>
          <a href="#beranda" className="sm:text-lg text-base font-medium">
            Beranda
          </a>
        </li>
        <li>
          <a href="#tentang" className="sm:text-lg text-base font-medium">
            Tentang
          </a>
        </li>
        <li>
          <a href="#proyek" className="sm:text-lg text-base font-medium">
            Proyek
          </a>
        </li>
        <li>
          <a href="#kontak" className="sm:text-lg text-base font-medium">
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
