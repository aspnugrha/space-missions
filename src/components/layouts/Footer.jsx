import Icon from "@mdi/react";
import { mdiWhatsapp, mdiGithub, mdiEmailOutline } from "@mdi/js";

const Footer = () => {
  return (
    <>
      <div className="relative isolate bg-gray-950">
        <div
          aria-hidden="true"
          className=" inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden 
        blur-3xl
        sm:top-[calc(100%-30rem)]"
        >
          <div
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
            className="relative left-[calc(50%+3rem)] aspect-[1155/100] -translate-x-1/2 bg-gradient-to-tr from-[#a024ff] to-[#24ffa7] opacity-80 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          />
        </div>
        <div className="pt-10 py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:flex md:flex flex-wrap justify-between items-center">
              <div>
                <h4 className="text-xl lg:text-2xl text-slate-100 font-bold">
                  Space Missions
                </h4>
                <div className="text-xs lg:text-sm text-gray-600 py-2">
                  Bagian dari portofolio{" "}
                  <a href="#" className="font-semibold text-blue-400">
                    {/* <span aria-hidden="true" className="absolute inset-0" /> */}
                    Asep Nugraha <span aria-hidden="true">&rarr;</span>
                  </a>
                </div>
              </div>
              <div className="flex gap-4 justify-center items-center lg:justify-end mt-9 md:mt-0 lg:mt-0">
                <a
                  href={`https://wa.me/${import.meta.env.VITE_APP_SOSMED_WA}`}
                  target="_blank"
                >
                  <Icon
                    className="text-slate-400"
                    path={mdiWhatsapp}
                    size={2}
                  />
                </a>
                <a href={`mailto:${import.meta.env.VITE_APP_SOSMED_EMAIL}`}>
                  <Icon
                    className="text-slate-400"
                    path={mdiEmailOutline}
                    size={2}
                  />
                </a>
                <a
                  href={import.meta.env.VITE_APP_SOSMED_GITHUB}
                  target="_blank"
                >
                  <Icon className="text-slate-400" path={mdiGithub} size={2} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
