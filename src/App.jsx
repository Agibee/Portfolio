import DataImage from "./data";
import { listTools, listProyek } from "./data";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-10 xl-gap-0 gap-6">
        <div className="animate__animated animate__fadeInUp animate__delay-2s">
          <div className="flex items-center gap-3 mb-6 bg-slate-800 text-white w-fit p-4 rounded-2xl shadow-md">
            <img
              src={DataImage.HeroImage}
              alt="Hero Icon"
              className="w-10 h-10 rounded-md object-cover"
              loading="lazy"
            />
            <q className="text-sm md:text-base opacity-90">
              Kode yang indah, lahir dari ketekunan 😁
            </q>
          </div>

          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Agib Pratama Wadriansyah
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya Agib Pratama Wadriansyah, seorang Junior Web Developer asal
            Sumatera Barat, Indonesia. Saya adalah lulusan Sarjana Teknik
            Informatika dari Universitas Putra Indonesia YPTK Padang dengan
            minat dalam pengembangan sistem berbasis web, kecerdasan buatan, dan
            analisis data.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a
              href="#"
              className="bg-cyan-700 p-4 rounded-2xl hover:bg-cyan-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#proyek"
              className="bg-slate-700 p-4 rounded-2xl hover:bg-slate-600"
            >
              Lihat Proyek <i className="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto animate__animated animate__fadeInUp animate__delay-3s"
          loading="lazy"
        />
      </div>

      {/* Tentang */}
      <div className="tentang mt-32 " id="tentang">
        <div
          className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-slate-800 rounded-lg"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10">
            Saya percaya bahwa teknologi bukan hanya tentang kode, tetapi
            tentang bagaimana solusi digital dapat membantu mempermudah
            kehidupan manusia. Karena itu, setiap proyek yang saya kerjakan
            selalu berfokus pada fungsionalitas, efisiensi, dan kemudahan bagi
            pengguna.
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
              loading="lazy"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  3 <span className="text-cyan-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-6">
                <h1 className="text-4xl mb-1">
                  4 <span className="text-cyan-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
        {/* Tentang */}

        {/* Tools */}
        <div className="tools mt-32">
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

        {/* Proyek */}
        <div className="proyek mt-32 py-10" id="proyek">
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
                  <div className="mt-8 text-center">
                    <a
                      href="#"
                      className="bg-cyan-700 p-3 rounded-lg block border-slate-600 hover:bg-cyan-600"
                    >
                      Lihat Website
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kontak Start */}
        <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
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
      </div>
    </>
  );
}

export default App;
