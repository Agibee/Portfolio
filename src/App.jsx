import DataImage from "./data";

function App() {
  return (
    <>
      <div className="hero grid grid-cols-1 md:grid-cols-2 items-center pt-10 xl-gap-0 gap-6 ">
        <div>
          <div className="flex items-center gap-3 mb-6 bg-zinc-800 text-white w-fit p-4 rounded-2xl shadow-md">
            <img
              src={DataImage.HeroImage}
              alt="Hero Icon"
              className="w-10 h-10 rounded-md object-cover"
            />
            <q className="text-sm md:text-base opacity-90">
              Kode yang indah, lahir dari ketekunan 😁
            </q>
          </div>

          <h1 className="text-5xl/tight font-bold mb-6">
            Hi, Saya Agib Pratama Wadriansyah
          </h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya mempunyai ketertarikan dalam bidang Programing lorem ipsum
            dolor sit amet consectetur adipisicing elit. Quisquam, quod. lorem
            ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita,
            fuga asperiores ab minus cumque debitis magni laboriosam magnam
            dolorum! In maiores animi reiciendis culpa repudiandae, libero nihil
            voluptate quaerat omnis.
          </p>
          <div className="flex item-center sm:gap-4 gap-2npm">
            <a
              href="#"
              className="bg-cyan-700 p-4 rounded-2xl hover:bg-cyan-600"
            >
              Download CV <i className="ri-download-line ri-lg"></i>
            </a>
            <a
              href="#"
              className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"
            >
              Lihat Proyek <i class="ri-arrow-down-line ri-lg"></i>
            </a>
          </div>
        </div>
        <img
          src={DataImage.HeroImage}
          alt="Hero Image"
          className="w-[500px] md:ml-auto"
        />
      </div>
      {/* Tentang */}
      <div className="tentang mt-32 py10">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg">
          <img
            src={DataImage.HeroImage}
            alt="Image"
            className="w-12 rounded-md mb-10 sm:hidden"
          />
          <p className="text-base/loose mb-10 ">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam
            blanditiis velit laborum fugit sed! Quos asperiores adipisci
            exercitationem? Totam at molestias, incidunt perferendis fugiat vel!
            Fugit asperiores repudiandae quaerat facere! Lorem ipsum dolor sit,
            amet consectetur adipisicing elit. Voluptate ab, earum, repudiandae
            facere ut harum saepe ipsam architecto nesciunt ipsa deleniti, sit
            hic enim vitae iure corrupti doloremque atque impedit. Lorem ipsum
            dolor sit amet consectetur adipisicing elit. Consequuntur
            necessitatibus explicabo exercitationem, est omnis ex hic blanditiis
            ab magni recusandae incidunt quam, voluptas voluptate molestiae
            provident nobis. Perferendis, nisi quam?
          </p>
          <div className="flex items-center justify-between">
            <img
              src={DataImage.HeroImage}
              alt="Image"
              className="w-12 rounded-md sm:block hidden"
            />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  45 <span className="text-cyan-500">+</span>
                </h1>

                <p>Proyek Selesai</p>
              </div>
            </div>
            <div>
              <div flex items-center gap-6>
                <h1 className="text-4xl mb-1">
                  4 <span className="text-cyan-500">+</span>
                </h1>
                <p>Tahun Pengalaman</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
