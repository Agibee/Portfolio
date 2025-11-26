const Footer = () => {
  return (
    <footer className="w-full bg-slate-600 mt-32 py-4">
      <div className="w-full px-6 flex md:flex-row flex-col gap-6 justify-between items-center">
        <h1 className="text-2xl font-bold">Agibee</h1>

        <div className="flex gap-7">
          <a href="#beranda">Beranda</a>
          <a href="#tentang">Tentang</a>
          <a href="#proyek">Proyek</a>
        </div>

        <div className="flex items-center gap-3">
          <a href="https://www.instagram.com/agprawaa19/">
            <i className="ri-instagram-fill ri-2x"></i>
          </a>
          <a href="https://www.linkedin.com/in/agib-pratama-wadriansyah-078a49258/?isSelfProfile=true">
            <i className="ri-linkedin-fill ri-2x"></i>
          </a>
          <a href="https://github.com/Agibee">
            <i className="ri-github-fill ri-2x"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
