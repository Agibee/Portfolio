const Footer = () => {
  return (
    <footer className="w-full mt-32 py-10 border-t border-cyan-700/20 bg-slate-950">
      <div className="w-full px-6 flex flex-col md:flex-row gap-6 justify-between items-center text-center md:text-left">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-cyan-400">Agibee</h1>

        {/* Menu */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-7 text-slate-300">
          <a href="#beranda" className="hover:text-cyan-400 transition">
            Home
          </a>
          <a href="#tentang" className="hover:text-cyan-400 transition">
            About
          </a>
          <a href="#proyek" className="hover:text-cyan-400 transition">
            Projects
          </a>
        </div>

        {/* Social */}
        <div className="flex gap-5 text-slate-300">
          <a className="hover:text-purple-400 transition" href="#">
            <i className="ri-instagram-fill text-2xl"></i>
          </a>
          <a className="hover:text-cyan-400 transition" href="#">
            <i className="ri-linkedin-fill text-2xl"></i>
          </a>
          <a className="hover:text-white transition" href="#">
            <i className="ri-github-fill text-2xl"></i>
          </a>
        </div>
      </div>

      {/* Bottom text */}
      <p className="text-center text-slate-500 text-sm mt-8">
        © {new Date().getFullYear()} Agibee
      </p>
    </footer>
  );
};

export default Footer;
