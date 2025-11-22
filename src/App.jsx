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
          <div className="flex item-center sm:gap-4 gap-2">
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
    </>
  );
}

export default App;
