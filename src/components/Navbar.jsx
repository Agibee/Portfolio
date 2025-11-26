import { useState, useEffect } from "react";

const Navbar = () => {
  const [_active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`fixed w-full top-0 left-0 z-50 transition-colors duration-300 bg-slate-700 flex flex-row justify-between items-center px-4 sm:px-6 py-3 sm:py-4`}
    >
      {/* Logo hanya muncul di sm ke atas */}
      <div className="hidden sm:block">
        <h1 className="text-3xl font-bold text-white p-1">Agibee</h1>
      </div>

      {/* Menu */}
      <ul className="flex flex-row gap-6 text-base whitespace-nowrap">
        <li>
          <a
            href="#beranda"
            className="font-medium hover:text-gray-300 transition-colors"
          >
            Beranda
          </a>
        </li>
        <li>
          <a
            href="#tentang"
            className="font-medium hover:text-gray-300 transition-colors"
          >
            Tentang
          </a>
        </li>
        <li>
          <a
            href="#proyek"
            className="font-medium hover:text-gray-300 transition-colors"
          >
            Proyek
          </a>
        </li>
        <li>
          <a
            href="#kontak"
            className="font-medium hover:text-gray-300 transition-colors"
          >
            Kontak
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
