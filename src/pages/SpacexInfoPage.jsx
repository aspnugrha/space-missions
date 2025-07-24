import { useEffect } from "react";
import { useState } from "react";
import { getSpacexInfo } from "../api/api";
import Icon from "@mdi/react";
import { mdiWeb } from "@mdi/js";
import { mdiImageMultipleOutline } from "@mdi/js";
import { Helmet } from "react-helmet";

const SpacexInfo = () => {
  const [spacexDataInfo, setSpacexDataInfo] = useState(null);

  useEffect(() => {
    const spacexData = async () => {
      setSpacexDataInfo(await getSpacexInfo());
    };

    spacexData();
  }, []);

  return (
    <>
      <Helmet>
        <title>SPACEX INFORMATIONS | Space Missions</title>
      </Helmet>
      <div className="w-full bg-gray-950">
        {/* Section 1 */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div className="py-24 lg:py-36 px-6 lg:px-8 mb-10 lg:mb-0">
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
              <div className="mx-auto max-w-full w-full py-6 sm:py-20 lg:py-4 ">
                <div className="text-start">
                  <h1 className="text-balance text-2xl font-bold tracking-tight text-slate-100 sm:text-6xl">
                    {spacexDataInfo?.name}
                  </h1>
                  <p className="mt-6 text-xs lg:text-lg leading-8 text-slate-400">
                    {spacexDataInfo?.summary}
                  </p>
                </div>
                <div className="mt-16">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                    <div className="mb-8 lg:mb-14">
                      <h2 className="w-full text-2xl text-start font-bold tracking-tight text-slate-100 sm:text-md">
                        {spacexDataInfo?.founded}
                      </h2>
                      <p className="mt-2 text-xs text-start lg:text-xl leading-8 text-slate-400">
                        Founded
                      </p>
                    </div>
                    <div className="mb-8 lg:mb-14">
                      <h2 className="w-full text-2xl text-start font-bold tracking-tight text-slate-100 sm:text-md">
                        {spacexDataInfo?.founder}
                      </h2>
                      <p className="mt-2 text-xs text-start lg:text-xl leading-8 text-slate-400">
                        Founder
                      </p>
                    </div>
                    <div className="mb-8 lg:mb-14">
                      <h2 className="w-full text-2xl text-start font-bold tracking-tight text-slate-100 sm:text-md">
                        {spacexDataInfo
                          ? spacexDataInfo?.employees.toLocaleString()
                          : null}
                      </h2>
                      <p className="mt-2 text-xs text-start lg:text-xl leading-8 text-slate-400">
                        Employees
                      </p>
                    </div>
                    <div className="mb-8 lg:mb-14">
                      <h2 className="w-full text-2xl text-start font-bold tracking-tight text-slate-100 sm:text-md">
                        {spacexDataInfo
                          ? spacexDataInfo?.valuation.toLocaleString()
                          : null}
                      </h2>
                      <p className="mt-2 text-xs text-start lg:text-xl leading-8 text-slate-400">
                        Valuation
                      </p>
                    </div>
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
          </div>
          <div>
            <img
              className="w-full h-96 lg:h-full object-cover bg-left"
              src="https://live.staticflickr.com/65535/52753511659_8fa0e524aa_k.jpg"
              alt=""
            />
          </div>
        </div>
        {/* End Section 1 */}

        {/* Social Media */}
        <div className="py-20 relative z-50">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-center font-bold tracking-tight text-slate-100 sm:text-md pt-20">
              Find Out More
            </h2>
            <p className="mt-2 text-xs text-center lg:text-xl leading-8 text-slate-400">
              Visit SpaceX social media below
            </p>
            <div className="w-full py-20">
              <div className="grid grid-cols-2 lg:grid-cols-4">
                <a
                  href={spacexDataInfo?.links.website}
                  target="_blank"
                  className="grid grid-cols-1 py-6 lg:py-2"
                >
                  <span className="text-center flex justify-center">
                    <Icon
                      path={mdiWeb}
                      className="text-slate-100 hover:text-blue-400"
                      size={2}
                    />
                  </span>
                  <span className="text-center text-slate-400 py-3">
                    Website
                  </span>
                </a>
                <a
                  href={spacexDataInfo?.links.flickr}
                  target="_blank"
                  className="grid grid-cols-1 py-6 lg:py-2"
                >
                  <span className="text-center flex justify-center">
                    <Icon
                      path={mdiImageMultipleOutline}
                      className="text-slate-100 hover:text-blue-400"
                      size={2}
                    />
                  </span>
                  <span className="text-center text-slate-400 py-3">
                    Flickr
                  </span>
                </a>
                <a
                  href={spacexDataInfo?.links.twitter}
                  target="_blank"
                  className="grid grid-cols-1 py-6 lg:py-2"
                >
                  <span className="text-center flex justify-center">
                    {/* <Icon
                      path={mdiTwitter}
                      className="text-slate-100 hover:text-blue-400"
                      size={2}
                    /> */}
                    <i className="fa-solid fa-brands fa-x-twitter fa-3x text-slate-100 hover:text-blue-400"></i>
                  </span>
                  <span className="text-center text-slate-400 py-3">X</span>
                </a>
                <a
                  href={spacexDataInfo?.links.elon_twitter}
                  target="_blank"
                  className="grid grid-cols-1 py-6 lg:py-2"
                >
                  <span className="text-center flex justify-center">
                    <i className="fa-solid fa-brands fa-x-twitter fa-3x text-slate-100 hover:text-blue-400"></i>
                  </span>
                  <span className="text-center text-slate-400 py-3">
                    Elon Musk X
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* End Sosial Media */}

        {/* Section 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <div>
            <img
              className="w-full h-96 lg:h-full object-cover bg-left"
              src="https://live.staticflickr.com/65535/52528174905_73a22d0b88_k.jpg"
              alt=""
            />
          </div>
          <div className="py-14 lg:py-18 px-6 lg:px-8 ">
            <div className="relative isolate px-6 py-14 lg:px-8 bg-gray-950">
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
              <div className="mx-auto max-w-full w-full py-10 sm:py-10 lg:py-16 ">
                <h2 className="text-2xl text-start font-bold tracking-tight text-slate-100 sm:text-md">
                  The Man Behind
                </h2>
                <p className="mt-2 text-xs text-start lg:text-xl leading-8 text-slate-400">
                  Some people with important roles
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-1 mt-20">
                  <div className="mb-14 lg:mb-8 text-start">
                    <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-100 sm:text-2xl">
                      {spacexDataInfo?.ceo}
                    </h2>
                    <p className="mt-2 text-xs lg:text-md italic leading-8 text-slate-400">
                      CEO
                    </p>
                  </div>
                  <div className="mb-14 lg:mb-8 text-start">
                    <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-100 sm:text-2xl">
                      {spacexDataInfo?.coo}
                    </h2>
                    <p className="mt-2 text-xs lg:text-md italic leading-8 text-slate-400">
                      COO
                    </p>
                  </div>
                  <div className="mb-14 lg:mb-8 text-start">
                    <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-100 sm:text-2xl">
                      {spacexDataInfo?.cto}
                    </h2>
                    <p className="mt-2 text-xs lg:text-md italic leading-8 text-slate-400">
                      CTO
                    </p>
                  </div>
                  <div className="mb-14 lg:mb-8 text-start">
                    <h2 className="text-balance text-2xl font-bold tracking-tight text-slate-100 sm:text-2xl">
                      {spacexDataInfo?.cto_propulsion}
                    </h2>
                    <p className="mt-2 text-xs lg:text-md italic leading-8 text-slate-400">
                      CTO PROPULSION
                    </p>
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
          </div>
        </div>
        {/* End Section 2 */}

        {/* Headquarters */}
        <div className="pt-1 lg:pt-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl text-center font-bold tracking-tight text-slate-100 sm:text-md pt-20">
              Headquarters
            </h2>
            <p className="mt-2 text-xs text-center lg:text-xl leading-8 text-slate-400">
              SpaceX headquarters location
            </p>
            <div className="w-full py-20">
              <p className="text-2xl lg:text-4xl text-center font-bold tracking-tight text-slate-100 sm:text-md">
                {spacexDataInfo?.headquarters.state} &nbsp;
                {spacexDataInfo?.headquarters.city} &nbsp;
                {spacexDataInfo?.headquarters.address} &nbsp;
              </p>

              <div className="mt-0 lg:mt-10 mx-auto max-w-full w-full py-20 sm:py-0 lg:py-16 ">
                <div className="flex justify-center items-start">
                  <div className="w-1/3 p-6 text-center">
                    <h2 className="w-full text-4xl text-center font-bold tracking-tight text-slate-100 sm:text-md">
                      {spacexDataInfo?.launch_sites}
                    </h2>
                    <p className="mt-2 text-xs text-center lg:text-xl leading-8 text-slate-400">
                      Launch Sites
                    </p>
                  </div>
                  <div className="w-1/3 p-6 text-center">
                    <h2 className="w-full text-4xl text-center font-bold tracking-tight text-slate-100 sm:text-md">
                      {spacexDataInfo?.test_sites}
                    </h2>
                    <p className="mt-2 text-xs text-center lg:text-xl leading-8 text-slate-400">
                      Test Sites
                    </p>
                  </div>
                  <div className="w-1/3 p-6 text-center">
                    <h2 className="w-full text-4xl text-center font-bold tracking-tight text-slate-100 sm:text-md">
                      {spacexDataInfo?.vehicles}
                    </h2>
                    <p className="mt-2 text-xs text-center lg:text-xl leading-8 text-slate-400">
                      Vehicle
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Headquarters */}
      </div>
    </>
  );
};

export default SpacexInfo;
