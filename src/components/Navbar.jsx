import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={`
        fixed w-full top-0 left-0 z-50

        flex justify-between items-center

        px-4 sm:px-6 py-3

        transition-all duration-300

        /* BASE STYLE (SEBELUM SCROLL UDAH BAGUS) */
        bg-slate-900/40 backdrop-blur-md
        border-b border-slate-800/40

        ${active ? "shadow-lg border-slate-700/60 bg-slate-900/70" : ""}
      `}
    >
      {/* Logo */}
      <h1 className="hidden sm:block text-2xl font-bold text-white">Agibee</h1>

      {/* Menu */}
      <ul className="flex gap-6 text-sm sm:text-base text-gray-300">
        {["home", "about", "projects", "contact"].map((item) => (
          <li key={item}>
            <a
              href={`#${item}`}
              className="
                relative

                hover:text-cyan-400
                transition

                after:content-['']
                after:absolute
                after:left-0
                after:-bottom-1
                after:w-0
                after:h-0.5
                after:bg-cyan-400
                after:transition-all

                hover:after:w-full
              "
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
