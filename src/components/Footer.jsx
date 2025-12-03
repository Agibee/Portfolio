const Footer = () => {
  return (
    <footer className="w-full bg-slate-600 mt-32 py-6">
      <div className="w-full px-6 flex flex-col md:flex-row gap-4 md:gap-6 justify-between items-center text-center md:text-left">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold text-slate-900">Agibee</h1>

        {/* Menu */}
        <div className="flex flex-col md:flex-row gap-3 md:gap-7 mt-3 md:mt-0">
          <a href="#beranda" className="hover:text-white transition-colors">
            Beranda
          </a>
          <a href="#tentang" className="hover:text-white transition-colors">
            Tentang
          </a>
          <a href="#proyek" className="hover:text-white transition-colors">
            Proyek
          </a>
        </div>

        {/* Social Icons */}
        <div className="flex gap-4 mt-3 md:mt-0">
          <a
            href="https://www.instagram.com/agprawaa19/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-instagram-fill text-xl md:text-2xl"></i>
          </a>

          <a
            href="https://www.linkedin.com/in/agib-pratama-wadriansyah-078a49258/?isSelfProfile=true"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-linkedin-fill text-xl md:text-2xl"></i>
          </a>

          <a
            href="https://github.com/Agibee"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="ri-github-fill text-xl md:text-2xl"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
