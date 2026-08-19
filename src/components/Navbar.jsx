import { useState, useEffect } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 z-50 w-full border-b transition-all duration-300 ${
        active
          ? "border-cyan-400/20 bg-slate-950/85 shadow-lg shadow-cyan-950/20 backdrop-blur-xl"
          : "border-white/10 bg-slate-950/50 backdrop-blur-md"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a
          href="#home"
          className="group text-2xl font-extrabold tracking-tight text-white"
        >
          Agi
          <span className="text-cyan-400 transition-colors group-hover:text-fuchsia-400">
            bee
          </span>
        </a>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg border border-white/10 p-2 text-gray-300 transition hover:border-cyan-400/50 hover:text-cyan-400 sm:hidden"
        >
          <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
        </button>

        <ul
          className={`${menuOpen ? "flex" : "hidden"} absolute left-4 right-4 top-[calc(100%+0.5rem)] flex-col gap-2 rounded-2xl border border-white/10 bg-slate-950/95 p-3 shadow-2xl backdrop-blur-xl sm:static sm:flex sm:flex-row sm:items-center sm:gap-2 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none`}
        >
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setMenuOpen(false)}
                className="block rounded-full px-4 py-2 text-sm capitalize text-gray-300 transition hover:bg-cyan-400/10 hover:text-cyan-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`h-px bg-linear-to-r from-transparent via-cyan-400 to-transparent transition-opacity ${active ? "opacity-100" : "opacity-0"}`}
      />
    </nav>
  );
};

export default Navbar;
