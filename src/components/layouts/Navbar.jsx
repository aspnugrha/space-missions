import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import Footer from "./Footer";
import Icon from "@mdi/react";
import { mdiEmailOutline } from "@mdi/js";
import { mdiGithub } from "@mdi/js";
import { mdiWhatsapp } from "@mdi/js";

const navigation = [
  { name: "SpaceX", to: "/spacex-info" },
  { name: "About", to: "/about-web" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <Link
              to="/"
              className="-m-1.5 p-1.5 text-2xl font-bold text-slate-100"
            >
              <span className="sr-only">Your Company</span>
              {/* <img
                alt=""
                src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              /> */}
              SM
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.to}
                className="text-xs font-semibold leading-6 text-slate-100"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </nav>
        <Dialog
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
          className="lg:hidden"
        >
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-950 bg-opacity-90 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-1.5 p-1.5 text-xl font-bold text-slate-100"
              >
                <span className="sr-only">Your Company</span>
                {/* <img
                  alt=""
                  src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                  className="h-8 w-auto"
                /> */}
                Space Missions
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-slate-100"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon aria-hidden="true" className="h-6 w-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-slate-100/10">
                <div className="flex flex-col h-screen justify-between">
                  <div className="space-y-2 py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.to}
                        onClick={() => setMobileMenuOpen(false)}
                        className="-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 text-slate-400 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <footer className="h-36">
                    <div className="flex gap-4 justify-center items-center lg:justify-end mt-9 md:mt-0 lg:mt-0">
                      <a
                        href={`https://wa.me/${
                          import.meta.env.VITE_APP_SOSMED_WA
                        }`}
                        target="_blank"
                      >
                        <Icon
                          className="text-slate-400"
                          path={mdiWhatsapp}
                          size={2}
                        />
                      </a>
                      <a
                        href={`mailto:${import.meta.env.VITE_APP_SOSMED_EMAIL}`}
                      >
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
                        <Icon
                          className="text-slate-400"
                          path={mdiGithub}
                          size={2}
                        />
                      </a>
                    </div>
                  </footer>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </>
  );
};
export default Navbar;
