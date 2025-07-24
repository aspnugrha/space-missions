import { mdiImageMultipleOutline } from "@mdi/js";
import { mdiReact } from "@mdi/js";
import { mdiVectorSquare } from "@mdi/js";
import { mdiFontAwesome } from "@mdi/js";
import { mdiApi } from "@mdi/js";
import { mdiTailwind } from "@mdi/js";
import { mdiWeb } from "@mdi/js";
import Icon from "@mdi/react";
import { Helmet } from "react-helmet";

const AboutWeb = () => {
  return (
    <>
      <Helmet>
        <title>ABOUT THIS WEB | Space Missions</title>
      </Helmet>
      <div className="relative isolate px-6 pt-2 md:pt-60 lg:pt-14 lg:px-8 bg-gray-950">
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
        <div className="mx-auto max-w-full w-4/5 py-36 sm:py-10 lg:py-40 mt-20">
          <div className="text-center">
            <h1 className="text-balance text-2xl font-bold tracking-tight text-slate-100 sm:text-6xl">
              Space Mission
            </h1>
            <p className="text-slate-300 text-xl lg:text-2xl mt-6">
              Eksplorasi Perjalanan SpaceX
            </p>
            <p className="mt-6 text-xs lg:text-lg leading-8 text-slate-400">
              Web ini merupakan bagian portofolio{" "}
              <a href="#" className="font-semibold text-blue-400">
                <span aria-hidden="true" className="absolute inset-0" />
                Asep Nugraha
              </a>
              , yang menampilkan perjalanan dan informasi perusahaan SpaceX yang
              bergerak dibidang transportasi luar angkasa.
            </p>
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
      <div className="bg-gray-950">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl text-center font-bold tracking-tight text-slate-100 sm:text-md pt-20">
            Tools
          </h2>
          <p className="mt-2 text-xs text-center lg:text-xl leading-8 text-slate-400">
            Bahasa dan plugin yang digunakan
          </p>
          <div className="w-full py-20">
            <div className="grid grid-cols-2 lg:grid-cols-3">
              <a
                href="https://tailwindcss.com"
                target="_blank"
                className="grid grid-cols-1 py-8 lg:py-8"
              >
                <span className="text-center flex justify-center">
                  <Icon
                    path={mdiTailwind}
                    className="text-slate-100 hover:text-blue-400"
                    size={2}
                  />
                </span>
                <span className="text-center text-slate-400 py-3">
                  Tailwind
                </span>
              </a>
              <a
                href="https://vite.dev"
                target="_blank"
                className="grid grid-cols-1 py-8 lg:py-8"
              >
                <span className="text-center flex justify-center">
                  <Icon
                    path={mdiReact}
                    className="text-slate-100 hover:text-blue-400"
                    size={2}
                  />
                </span>
                <span className="text-center text-slate-400 py-3">React</span>
              </a>
              <a
                href="https://github.com/r-spacex/SpaceX-API"
                target="_blank"
                className="grid grid-cols-1 py-8 lg:py-8"
              >
                <span className="text-center flex justify-center">
                  <Icon
                    path={mdiApi}
                    className="text-slate-100 hover:text-blue-400"
                    size={2}
                  />
                </span>
                <span className="text-center text-slate-400 py-3">API</span>
              </a>
              <a
                href="https://www.flickr.com/photos/spacex"
                target="_blank"
                className="grid grid-cols-1 py-8 lg:py-8"
              >
                <span className="text-center flex justify-center">
                  <Icon
                    path={mdiImageMultipleOutline}
                    className="text-slate-100 hover:text-blue-400"
                    size={2}
                  />
                </span>
                <span className="text-center text-slate-400 py-3">Flickr</span>
              </a>
              <a
                href="https://pictogrammers.com/library/mdi"
                target="_blank"
                className="grid grid-cols-1 py-8 lg:py-8"
              >
                <span className="text-center flex justify-center">
                  <Icon
                    path={mdiVectorSquare}
                    className="text-slate-100 hover:text-blue-400"
                    size={2}
                  />
                </span>
                <span className="text-center text-slate-400 py-3">
                  MDI Icons
                </span>
              </a>
              <a
                href="https://fontawesome.com"
                target="_blank"
                className="grid grid-cols-1 py-8 lg:py-8"
              >
                <span className="text-center flex justify-center">
                  <Icon
                    path={mdiFontAwesome}
                    className="text-slate-100 hover:text-blue-400"
                    size={2}
                  />
                </span>
                <span className="text-center text-slate-400 py-3">
                  Font Awesome
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutWeb;
