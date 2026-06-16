import { useState } from "react";
import { listTools, listProyek, listSertifikat } from "./data";
import TextType from "./components/TextType";
import Lanyard from "./components/Lanyard";
import Navbar from "./components/Navbar";
import ProfileCard from "./components/ProfileCard";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const itemsPerPage = 6;

  // Urutkan sertifikat dari id terbesar → terkecil
  const sortedItems = [...listSertifikat].sort((a, b) => b.id - a.id);

  // Pagination
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;

  const currentItems = sortedItems.slice(firstIndex, lastIndex);
  const totalPages = Math.ceil(sortedItems.length / itemsPerPage);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    try {
      await fetch("https://formsubmit.co/agibpratama732@gmail.com", {
        method: "POST",
        body: formData,
      });
      setSubmitted(true);
      e.target.reset();
      setTimeout(() => setSubmitted(false), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };
  return (
    <>
      <Navbar />
      {/* Hero Start */}
      <section id="home" className="pt-4">
        <div
          className="flex items-center gap-3 mb-6 
bg-slate-800/60 backdrop-blur-md 
border border-cyan-500/20
text-white w-fit p-4 rounded-2xl 
shadow-[0_0_15px_rgba(34,211,238,0.15)]"
        >
          {/* LEFT */}
          <div className="animate__animated animate__fadeInUp">
            {/* Quote Badge */}
            <div className="flex items-center gap-3 mb-6 bg-slate-800/80 backdrop-blur text-white w-fit p-4 rounded-2xl shadow-md">
              <img
                src="assets/photo.png"
                alt="Hero Icon"
                className="w-10 h-10 rounded-md object-cover shadow-lg shadow-cyan-400/50"
                loading="lazy"
              />
              <q className="text-sm md:text-base opacity-90">
                Stay curious, keep growing 😁
              </q>
            </div>

            {/* Heading */}
            <h1 className="text-xl/tight font-bold mb-4 sm:text-2xl md:text-4xl lg:text-5xl">
              Hi, Im{" "}
              <span className="text-cyan-400">Agib Pratama Wadriansyah</span>
            </h1>

            {/* Role */}
            <TextType
              className="text-lg font-semibold mb-6 text-slate-300 sm:text-xl md:text-3xl"
              text={[
                "Web Developer",
                "IT Enthusiast",
                "Data Analyst Enthusiast",
              ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />

            {/* Description */}
            <p className="text-base/relaxed mb-6 text-slate-400 max-w-xl">
              Fresh graduate in Informatics Engineering from Universitas Putra
              Indonesia YPTK Padang. Focused on web development, artificial
              intelligence, and data analysis.
            </p>

            {/* CTA */}
            <div className="flex items-center gap-3">
              <a
                href={`${
                  import.meta.env.BASE_URL
                }assets/CV_AgibPratamaWadriansyah.pdf`}
                download
                className="bg-cyan-600 px-6 py-4 rounded-2xl hover:bg-cyan-500 transition"
              >
                Download CV <i className="ri-download-line ri-lg"></i>
              </a>

              <a
                href="#projects"
                className="bg-slate-700 px-6 py-4 rounded-2xl hover:bg-slate-600 transition"
              >
                View Projects <i className="ri-arrow-down-line ri-lg"></i>
              </a>
            </div>

            {/* Divider */}
            <div className="w-24 h-px bg-slate-700 my-6"></div>

            {/* Quick Get in Touch */}
            <div className="flex items-center gap-6 text-slate-400 mt-4">
              <a
                href="https://www.linkedin.com/in/agib-pratama-wadriansyah-078a49258/"
                target="_blank"
                aria-label="LinkedIn"
                className="transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:text-cyan-400 hover:drop-shadow-[0_0_8px_rgba(34,211,238,0.6)]"
              >
                <i className="ri-linkedin-fill ri-xl"></i>
              </a>

              <a
                href="https://github.com/"
                target="_blank"
                aria-label="GitHub"
                className="transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
              >
                <i className="ri-github-fill ri-xl"></i>
              </a>

              <a
                href="mailto:agibpratama732@gmail.com"
                aria-label="Email"
                className="transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:text-green-400 hover:drop-shadow-[0_0_8px_rgba(74,222,128,0.6)]"
              >
                <i className="ri-mail-fill ri-xl"></i>
              </a>

              <a
                href="https://www.instagram.com/agprawaa19/"
                target="_blank"
                aria-label="Instagram"
                className="transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:text-pink-400 hover:drop-shadow-[0_0_8px_rgba(244,114,182,0.6)]"
              >
                <i className="ri-instagram-line ri-xl"></i>
              </a>

              {/* <a
                href="#"
                target="_blank"
                aria-label="Buy Me a Coffee"
                className="transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 hover:text-yellow-400 hover:drop-shadow-[0_0_8px_rgba(250,204,21,0.6)]"
              >
                <i className="ri-cup-fill ri-xl"></i>
              </a> */}
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="hidden md:flex justify-end">
            <ProfileCard
              name=""
              title=""
              handle=""
              status=""
              contactText="Contact Me"
              avatarUrl="assets/photoss.jpg"
              showUserInfo={false}
              enableTilt={true}
              enableMobileTilt={false}
              behindGlowEnabled={true}
              behindGlowColor="rgba(34,211,238,0.5)"
              onContactClick={() =>
                window.open("mailto:agibpratama732@gmail.com")
              }
            />
          </div>
        </div>
      </section>
      {/* Hero End */}

      {/* Stats Start */}
      <section id="stats" className="mt-20 border-y  border-slate-800 p-10">
        <div
          className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center max-w-4xl mx-auto"
          data-aos="fade-left"
          data-aos-duration="1000"
        >
          <div>
            <p className="text-3xl font-bold text-white">
              {listProyek.length}+
            </p>
            <p className="text-sm text-slate-400">Web Projects</p>
          </div>

          <div>
            <p className="text-3xl font-bold text-white">
              {listSertifikat.length}+
            </p>
            <p className="text-sm text-slate-400">Certificates</p>
          </div>

          <div className="hidden sm:block">
            <p className="text-3xl font-bold text-white">Active</p>
            <p className="text-sm text-slate-400">Learner</p>
          </div>
        </div>
      </section>
      {/* Stats End */}

      {/* Tentang Start */}
      <section
        id="about"
        className="min-h-screen overflow-x-hidden mt-32 relative"
      >
        {/* 🔥 Electric Glow Background */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div
            className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 
      bg-cyan-500/20 blur-[140px] rounded-full animate-pulse"
          ></div>

          <div
            className="absolute top-20 left-20 w-[300px] h-[300px] 
      bg-blue-500/10 blur-[120px] rounded-full"
          ></div>

          <div
            className="absolute bottom-20 right-20 w-[300px] h-[300px] 
      bg-cyan-400/10 blur-[120px] rounded-full"
          ></div>
        </div>

        {/* ⚡ Glow Border Wrapper */}
        <div className="relative p-px rounded-2xl bg-linear-to-r from-cyan-500/40 via-slate-700/40 to-cyan-500/40 shadow-[0_0_30px_rgba(34,211,238,0.15)]">
          {/* Glass Container */}
          <div className="min-h-screen overflow-x-hidden bg-slate-950/80 backdrop-blur-xl rounded-2xl p-6 md:p-10">
            {/* Title Section */}
            <div className="text-center mb-14">
              <h1
                className="text-4xl font-bold mb-3 text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]"
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-once="true"
              >
                About Me
              </h1>

              <p
                className="text-gray-400 max-w-xl mx-auto text-sm md:text-base"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                Web Developer focused on building modern web applications, with
                interests in artificial intelligence and data analysis.e
              </p>
            </div>

            {/* Content Grid */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
              {/* LEFT – Lanyard */}
              <div
                className="col-span-6 flex justify-center"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <div className="absolute w-[400px] h-[400px] bg-cyan-500/10 blur-[120px] rounded-full -z-10"></div>
                <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
              </div>

              {/* RIGHT – Bio Content */}
              <div
                className="col-span-6 px-5 md:px-10"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h2 className="text-2xl font-semibold mb-4 text-white">
                  Hi, I'm Agibee 👋
                </h2>

                <p className="text-gray-300 leading-relaxed mb-5">
                  I am Agib Pratama Wadriansyah, a Web Developer from West
                  Sumatra, Indonesia. I graduated in Informatics Engineering
                  from Universitas Putra Indonesia YPTK Padang, with interests
                  in web development, artificial intelligence, and data
                  analysis.
                </p>

                <p className="text-gray-300 leading-relaxed mb-5 italic">
                  “Building digital solutions that are not only functional, but
                  also meaningful.”
                </p>

                <p className="text-gray-300 leading-relaxed mb-6">
                  I focus on creating efficient and user-friendly web
                  applications that solve real problems and improve user
                  experience.
                </p>

                {/* Info Box */}
                {/* <div className="p-4 rounded-xl border border-cyan-500/20 bg-slate-900/30 backdrop-blur-md shadow-[0_0_20px_rgba(34,211,238,0.1)] text-sm text-gray-400 space-y-2">
                  <p>
                    <span className="text-white font-semibold">
                      Birth Date:
                    </span>{" "}
                    19 April 2002
                  </p>
                  <p>
                    <span className="text-white font-semibold">Location:</span>{" "}
                    Padang, West Sumatra
                  </p>
                  <p>
                    <span className="text-white font-semibold">Age:</span> 24
                    Years Old
                  </p>
                  <p>
                    <span className="text-white font-semibold">Education:</span>{" "}
                    Bachelor of Computer Science (Informatics Engineering)
                  </p>
                  <p>
                    <span className="text-white font-semibold">Email:</span>{" "}
                    agibpratama732@gmail.com
                  </p>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tentang End */}

      {/* Tools Start */}
      <section id="tools" className="tools mt-32 ">
        <div>
          {/* Title */}
          <h1
            className="text-4xl font-bold mb-3 text-white drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]"
            data-aos="fade-up"
            data-aos-duration="800"
            data-aos-once="true"
          >
            Tools
          </h1>

          {/* Description */}
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            A collection of tools and technologies I use to build modern web
            applications.
          </p>

          {/* Tools Grid */}
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                key={tool.nama}
                className="relative flex items-center gap-3 p-4 rounded-xl

          border border-cyan-500/20
          bg-slate-900/30 backdrop-blur-md

          shadow-[0_0_15px_rgba(34,211,238,0.08)]

          hover:shadow-[0_0_30px_rgba(34,211,238,0.25)]
          hover:border-cyan-400/40
          hover:-translate-y-1

          transition-all duration-300 group overflow-hidden"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                {/* Glow Background on Hover */}
                <div className="absolute -z-10 w-32 h-32 bg-cyan-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

                {/* Icon */}
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-slate-800 p-1 rounded-md group-hover:bg-slate-700 transition"
                  loading="lazy"
                />

                {/* Text */}
                <div>
                  <h4 className="font-bold text-white">{tool.nama}</h4>
                  <p className="opacity-50 text-sm">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tools End */}

      {/* Proyek Start */}
      <section
        id="projects"
        className="
    proyek mt-32 py-14

    relative

    border border-slate-800/50
    rounded-3xl

    bg-slate-950/20 backdrop-blur-md

    shadow-[0_0_40px_rgba(0,0,0,0.4)]
  "
      >
        {/* Glow Border Effect */}
        <div
          className="
      absolute inset-0 rounded-3xl

      bg-cyan-500/10
      blur-3xl
      opacity-40

      -z-10
    "
        />

        <div>
          {/* Title */}
          <h1
            className="text-center text-4xl font-bold mb-2 text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Projects
          </h1>

          {/* Subtitle */}
          <p
            className="text-base/loose text-center text-gray-400"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Here are some projects I have created.
          </p>

          {/* Grid */}
          <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="
            group relative p-4 rounded-2xl

            bg-slate-900/40 backdrop-blur-md

            border border-slate-700/40

            transition-all duration-300

            hover:-translate-y-2
            hover:border-cyan-400/60
            hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]
          "
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
                data-aos-once="true"
              >
                <div className="overflow-hidden rounded-xl">
                  <img
                    src={proyek.gambar}
                    alt="Proyek Image"
                    loading="lazy"
                    className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition duration-500"
                  />
                </div>

                <div className="mt-4">
                  <h1 className="text-xl font-bold text-white mb-2">
                    {proyek.nama}
                  </h1>

                  <p className="text-sm text-gray-400 mb-4 leading-relaxed">
                    {proyek.desk}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <span
                        key={index}
                        className="
                    text-xs px-3 py-1 rounded-full
                    bg-slate-800/60
                    border border-slate-600
                    text-gray-300
                    group-hover:border-cyan-400/50
                    group-hover:text-cyan-300
                  "
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Proyek End */}

      {/* Sertifikat Start*/}
      <section id="sertifikat" className="mt-32 py-10">
        {/* Title */}
        <h1
          className="text-4xl font-bold mb-3 text-white text-center drop-shadow-[0_0_10px_rgba(34,211,238,0.3)]"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-once="true"
        >
          Training & Certificates
        </h1>

        {/* Subtitle */}
        <p
          className="text-base text-center text-gray-400 max-w-xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
          data-aos-once="true"
        >
          Below are some of the training programs and certifications I have
          completed.
        </p>

        {/* Grid */}
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentItems.map((item, index) => (
            <div
              key={item.id}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={item.dad}
              data-aos-once="true"
              className={`
          group relative p-4 rounded-2xl

          bg-slate-900/40 backdrop-blur-md
          border border-slate-700/40

          transition-all duration-300

          hover:-translate-y-2
          hover:border-cyan-400/60
          hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]

          ${index % 2 === 0 ? "hover:rotate-1" : "hover:-rotate-1"}
        `}
            >
              {/* Glow background */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 bg-cyan-400/10 blur-2xl transition duration-500 -z-10" />

              {/* Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={item.gambar}
                  alt={item.nama}
                  className="w-full h-48 object-cover rounded-xl group-hover:scale-105 transition duration-500"
                  loading="lazy"
                />
              </div>

              {/* Content */}
              <div className="mt-4">
                <h2 className="text-lg font-bold text-white">{item.nama}</h2>

                <p className="text-sm text-gray-400 mt-1">
                  {item.penyelenggara}
                </p>

                <p className="text-xs text-gray-500 mt-1">{item.tahun}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-3 mt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-md bg-slate-800 text-white disabled:opacity-40 hover:bg-slate-700 transition"
          >
            Prev
          </button>

          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              className={`
          px-4 py-2 rounded-md transition
          ${
            currentPage === index + 1
              ? "bg-cyan-600 text-white shadow-[0_0_15px_rgba(34,211,238,0.4)]"
              : "bg-slate-800 text-gray-300 hover:bg-slate-700"
          }
        `}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-md bg-slate-800 text-white disabled:opacity-40 hover:bg-slate-700 transition"
          >
            Next
          </button>
        </div>
      </section>
      {/* Sertifikat End */}

      {/* Contact Start */}
      <section id="contact" className="contact mt-32 sm:p-10 p-4 relative">
        {/* Title */}
        <h1
          className="text-4xl mb-2 font-bold text-center text-white"
          data-aos="fade-up"
        >
          Contact
        </h1>

        {/* Subtitle */}
        <p
          className="text-base/loose text-center mb-10 text-gray-400"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          Let’s get in touch with me
        </p>

        {/* Glow Background */}
        <div className="absolute inset-0 -z-10 flex justify-center">
          <div className="w-[500px] h-[500px] bg-cyan-400/10 blur-[120px] rounded-full" />
        </div>

        {/* Form Container */}
        <div className="relative max-w-2xl mx-auto">
          <form
            action="https://formsubmit.co/agibpratama732@gmail.com"
            method="POST"
            onSubmit={handleSubmit}
            autoComplete="off"
            className="
        relative

        bg-slate-900/40 backdrop-blur-md

        border border-slate-700/50

        rounded-3xl

        p-8 sm:p-10

        shadow-[0_0_30px_rgba(0,0,0,0.4)]

        transition-all duration-300

        hover:border-cyan-400/40
        hover:shadow-[0_0_40px_rgba(34,211,238,0.25)]
      "
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="400"
          >
            <div className="flex flex-col gap-6">
              {/* Full Name */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-200">Full Name</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Enter your name..."
                  className="
              p-3 rounded-xl

              bg-slate-800/60
              border border-slate-600

              text-white

              outline-none

              focus:border-cyan-400
              focus:shadow-[0_0_10px_rgba(34,211,238,0.25)]

              transition
            "
                  required
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-200">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email..."
                  className="
              p-3 rounded-xl

              bg-slate-800/60
              border border-slate-600

              text-white

              outline-none

              focus:border-cyan-400
              focus:shadow-[0_0_10px_rgba(34,211,238,0.25)]

              transition
            "
                  required
                />
              </div>

              {/* Message */}
              <div className="flex flex-col gap-2">
                <label className="font-semibold text-gray-200">Message</label>
                <textarea
                  name="pesan"
                  rows="6"
                  placeholder="Write your message..."
                  className="
              p-3 rounded-xl

              bg-slate-800/60
              border border-slate-600

              text-white

              outline-none

              focus:border-cyan-400
              focus:shadow-[0_0_10px_rgba(34,211,238,0.25)]

              transition
            "
                  required
                />

                {/* Success message */}
                {submitted && (
                  <div
                    className="
              mt-2 p-3 rounded-xl

              bg-green-500/10
              border border-green-500/30

              text-green-300 text-center
              font-medium
            "
                  >
                    ✓ Your message has been sent successfully!
                  </div>
                )}
              </div>

              {/* Button */}
              <button
                type="submit"
                className="
            w-full py-3 rounded-xl

            bg-cyan-600

            font-semibold text-white

            hover:bg-cyan-500
            hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]

            active:scale-[0.98]

            transition
          "
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </section>
      {/* Kontak End */}
    </>
  );
}

export default App;
