const Hero = () => {
  const mulaiJelajah = () =>
    document
      .getElementById("explore-book")
      .scrollIntoView({ behavior: "smooth" });

  return (
    <div className="relative isolate px-6 pt-14 lg:px-8 bg-gray-950">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden 
        blur-3xl
        sm:-top-80 "
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ffdb80] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-full w-4/5 py-36 sm:py-20 lg:py-36 ">
        <div className="sm:mb-8 sm:flex sm:justify-center">
          <div className="relative rounded-full mb-4 lg:mb-1 px-3 py-1 text-xs lg:text-sm leading-6 text-slate-400 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Bagian dari portofolio{" "}
            <a href="#" className="font-semibold text-blue-400">
              <span aria-hidden="true" className="absolute inset-0" />
              Asep Nugraha <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-balance text-2xl font-bold tracking-tight text-slate-100 sm:text-6xl">
            Eksplorasi Perjalanan SpaceX
          </h1>
          <p className="mt-6 text-xs lg:text-lg leading-8 text-slate-400">
            Web ini menampilkan beberapa informasi perjalanan luar angkasa
            SpaceX. Yang merupakan perusahaan dibidang transportasi luar
            angkasa. Seperti informasi peluncuran, roket, astronot dan
            lain-lain.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <button
              type="button"
              onClick={mulaiJelajah}
              className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Mulai Eksplorasi
            </button>
            {/* <a
              href="#"
              className="text-sm font-semibold leading-6 text-slate-100"
            >
              Learn more <span aria-hidden="true">→</span>
            </a> */}
          </div>
        </div>
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden 
        blur-3xl
        sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#692594] to-[#24ffd0] opacity-40 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
};

export default Hero;
