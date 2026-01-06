import { useState } from "react";
import { listTools, listProyek, listSertifikat } from "./data";
import TextType from "./components/TextType";
import Lanyard from "./components/Lanyard";

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
      {/* Hero Start */}
      <section id="hero" className="pt-10">
        <div className="hero grid grid-cols-1 md:grid-cols-2 items-center gap-6">
          {/* LEFT */}
          <div className="animate__animated animate__fadeInUp">
            {/* Quote Badge */}
            <div className="flex items-center gap-3 mb-6 bg-slate-800/80 backdrop-blur text-white w-fit p-4 rounded-2xl shadow-md">
              <img
                src="assets/photo.png"
                alt="Hero Icon"
                className="w-10 h-10 rounded-md object-cover"
                loading="lazy"
              />
              <q className="text-sm md:text-base opacity-90">
                Selalu ingin tahu, selalu ingin berkembang 😁
              </q>
            </div>

            {/* Heading */}
            <h1 className="text-xl/tight font-bold mb-4 sm:text-2xl md:text-4xl lg:text-5xl">
              Hi, Saya{" "}
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
              Fresh graduate Teknik Informatika dari Universitas Putra Indonesia
              YPTK Padang. Berfokus pada pengembangan web, kecerdasan buatan,
              dan analisis data.
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
                href="#proyek"
                className="bg-slate-700 px-6 py-4 rounded-2xl hover:bg-slate-600 transition"
              >
                Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
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
          <img
            src="assets/photoss.jpg"
            alt="Hero Image"
            className="w-[380px] hidden md:block md:ml-auto animate__animated animate__fadeInUp animate__delay-1s"
            loading="lazy"
          />
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
      <section id="tentang" className="min-h-screen overflow-x-hidden mt-32">
        <div className="min-h-screen overflow-x-hidden ">
          <div className="text-center mb-14">
            <h1
              className="text-4xl font-bold mb-3"
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
              Seorang Web Developer dengan ketertarikan pada web development,
              kecerdasan buatan, dan analisis data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
            {/* LEFT – Lanyard */}
            <div
              className="col-span-6 flex justify-center"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <Lanyard position={[0, 0, 10]} gravity={[0, -40, 0]} />
            </div>

            {/* RIGHT – Bio Content */}
            <div
              className="col-span-6 px-5 md:px-10"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h2 className="text-2xl font-semibold mb-4">Hi, I'm Agibee 👋</h2>

              <p className="text-gray-300 leading-relaxed mb-5">
                Saya Agib Pratama Wadriansyah, seorang Web Developer asal
                Sumatera Barat, Indonesia. Lulusan Sarjana Teknik Informatika
                dari Universitas Putra Indonesia YPTK Padang, saya memiliki
                minat dalam pengembangan sistem berbasis web, kecerdasan buatan,
                dan analisis data.
              </p>

              <p className="text-gray-300 leading-relaxed mb-5 italic">
                “Membangun solusi digital yang tidak hanya berfungsi, tapi juga
                bermakna.”
              </p>

              <p className="text-gray-300 leading-relaxed mb-5">
                Saya percaya bahwa teknologi bukan hanya tentang kode, tetapi
                tentang bagaimana solusi digital dapat membantu mempermudah
                kehidupan manusia. Karena itu, setiap proyek yang saya kerjakan
                selalu berfokus pada fungsionalitas, efisiensi, dan kemudahan
                bagi pengguna.
              </p>

              <div className="gap-4 text-gray-400 text-sm mb-6">
                <div>
                  <p>
                    <strong>Tanggal Lahir:</strong> 19 April 2002
                  </p>
                  <p>
                    <strong>Kota:</strong> Padang, Sumatera Barat
                  </p>
                  <p>
                    <strong>Usia:</strong> 23 Tahun
                  </p>
                  <p>
                    <strong>Pendidikan:</strong> Sarjana Teknik Informatika
                  </p>
                  <p>
                    <strong>Email:</strong> agibpratama732@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Tentang End */}

      {/* Tools Start */}
      <section id="tools" className="tools mt-32">
        <div>
          <h1
            className="text-4xl/snug font-bold mb-4"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Tools yang dipakai
          </h1>
          <p
            className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut ini beberapa tools yang biasa yang saya pakai dalam
            pembuatan website
          </p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map((tool) => (
              <div
                className="flex items-center gap-2 p-3 border border-slate-600 rounded-md hover:bg-slate-800 group"
                key={tool.id}
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={tool.dad}
                data-aos-once="true"
              >
                <img
                  src={tool.gambar}
                  alt="Tools Image"
                  className="w-14 bg-slate-800 p-1 group-hover:bg-slate-900"
                  loading="lazy"
                />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Tools End */}

      {/* Proyek Start */}
      <section id="proyek" className="proyek mt-32 py-10">
        <div>
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Proyek
          </h1>
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Berikut ini beberapa proyek yang telah saya buat
          </p>
          <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listProyek.map((proyek) => (
              <div
                key={proyek.id}
                className="p-4 bg-slate-800 rounded-md"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={proyek.dad}
                data-aos-once="true"
              >
                <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
                <div>
                  <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                  <p className="text-base/loose mb-4">{proyek.desk}</p>
                  <div className="flex flex-wrap gap-2">
                    {proyek.tools.map((tool, index) => (
                      <p
                        className="py-1 px-3 border-slate-500 rounded-md bg-slate-600 font-semibold"
                        key={index}
                      >
                        {tool}
                      </p>
                    ))}
                  </div>
                  {/* <div className="mt-8 text-center">
                  <a
                    href="#"
                    className="bg-cyan-700 p-3 rounded-lg block border-slate-600 hover:bg-cyan-600"
                  >
                    Lihat Website
                  </a>
                </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Proyek End */}

      {/* Sertifikat Start*/}
      <section id="sertifikat" className="pelatihan mt-32 py-10">
        <div>
          {" "}
          <h1
            className="text-center text-4xl font-bold mb-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            {" "}
            Pelatihan & Sertifikat{" "}
          </h1>{" "}
          <p
            className="text-base/loose text-center opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            {" "}
            Berikut beberapa pelatihan & sertifikasi yang telah saya ikuti{" "}
          </p>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 gap-4">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="p-4  border rounded-md hover:bg-slate-700 transition-all duration-300"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={item.dad}
                data-aos-once="true"
              >
                <img
                  src={item.gambar}
                  alt="Sertifikat"
                  className="rounded-md w-full object-cover"
                />
                <h2 className="text-xl font-bold mt-4">{item.nama}</h2>
                <p className="opacity-60 mt-1">{item.penyelenggara}</p>
                <p className="text-sm opacity-50 mt-1">{item.tahun}</p>
              </div>
            ))}
          </div>
          {/* Pagination */}
          <div className="flex justify-center items-center gap-3 mt-10">
            <button
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 rounded-md bg-slate-700 disabled:bg-slate-900 disabled:opacity-40 hover:bg-slate-600"
            >
              Prev
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentPage(index + 1)}
                className={`px-4 py-2 rounded-md transition-all duration-200 ${
                  currentPage === index + 1
                    ? "bg-cyan-700"
                    : "bg-slate-700 hover:bg-slate-600"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="px-4 py-2 rounded-md bg-slate-700 disabled:bg-slate-900 disabled:opacity-40 hover:bg-slate-600"
            >
              Next
            </button>
          </div>
        </div>
      </section>
      {/* Sertifikat End */}

      {/* Kontak Start */}
      <section id="kontak" className="kontak mt-32 sm:p-10 p-0">
        <div>
          <h1
            className="text-4xl mb-2 font-bold text-center"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            Kontak
          </h1>
          <p
            className="text-base/loose text-center mb-10 opacity-50"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            data-aos-once="true"
          >
            Mari Terhubung dengan Saya
          </p>
          <form
            action="https://formsubmit.co/agibpratama732@gmail.com"
            method="POST"
            className="bg-slate-800 p-10 sm:w-fit w-full mx-auto rounded-md"
            onSubmit={handleSubmit}
            autoComplete="off"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="500"
            data-aos-once="true"
          >
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-semibold">Nama Lengkap</label>
                <input
                  type="text"
                  name="nama"
                  placeholder="Masukkan Nama Anda..."
                  className="border border-slate-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-semibold">E-mail</label>
                <input
                  type="text"
                  name="email"
                  placeholder="Masukkan E-Mail Anda...."
                  className="border border-slate-500 p-2 rounded-md"
                  required
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="pesan" className="font-semibold">
                  Pesan
                </label>
                <textarea
                  name="pesan"
                  id="pesan"
                  cols="45"
                  rows="7"
                  placeholder="Pesan..."
                  className="border border-slate-500 p-2 rounded-md"
                  required
                ></textarea>
                {submitted && (
                  <div className="bg-green-600 text-white p-3 rounded-md text-center font-semibold">
                    ✓ Pesan Anda telah terkirim! Terima kasih telah menghubungi
                    saya.
                  </div>
                )}
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-cyan-700 p-3 rounded-lg w-full cursor-pointer border-slate-600 hover:bg-cyan-600"
                >
                  Kirim Pesan
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
      {/* Kontak End */}
    </>
  );
}

export default App;
