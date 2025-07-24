const HeaderDetailWithImage = ({
  icon,
  status,
  title,
  desc,
  condition,
  firstFlight,
  company,
  country,
  cost,
}) => {
  return (
    <>
      <div className="mx-auto max-w-2xl lg:max-w-7xl lg:mx-0">
        <div className="flex justify-between">
          <div className="w-1/3 md:w-1/4 flex justify-center">
            <div>
              <i
                className={`fa-solid ${icon} fa-5x text-slate-100 hover:text-blue-400 ${
                  condition == "rockets" ? "-rotate-90 items-center pr-20" : ""
                }`}
              ></i>
            </div>
          </div>
          <div className="w-2/3 md:w-3/4">
            <span className="lg:w-full text-slate-400 text-md font-bold">
              {condition == "rockets" ? "Tipe" : "Status"} :{" "}
              {status ? status.charAt(0).toUpperCase() + status.slice(1) : "-"}
            </span>
            <h2 className="lg:w-full mt-2 text-5xl font-bold tracking-tight text-slate-100 sm:text-md">
              {title}
            </h2>
            <p className="lg:w-full mt-4 text-xs lg:text-xl leading-8 text-slate-400">
              {desc}
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-20 w-full">
              <div className="mb-6 lg:mb-14">
                <h2 className="tw-full text-xl lg:text-2xl text-start font-bold tracking-tight text-slate-100">
                  {company}
                </h2>
                <p className="mt-2 text-xs text-start lg:text-xl leading-8 text-slate-400">
                  Company
                </p>
              </div>
              <div className="mb-6 lg:mb-14">
                <h2 className="tw-full text-xl lg:text-2xl text-start font-bold tracking-tight text-slate-100">
                  {firstFlight
                    ? new Date(firstFlight).toLocaleDateString([], {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })
                    : "No Date"}
                </h2>
                <p className="mt-2 text-xs text-start lg:text-xl leading-8 text-slate-400">
                  First Flight
                </p>
              </div>
              <div className="mb-6 lg:mb-14">
                <h2 className="tw-full text-xl lg:text-2xl text-start font-bold tracking-tight text-slate-100">
                  {country}
                </h2>
                <p className="mt-2 text-xs text-start lg:text-xl leading-8 text-slate-400">
                  Country
                </p>
              </div>
              <div className="mb-6 lg:mb-14">
                <h2 className="tw-full text-xl lg:text-2xl text-start font-bold tracking-tight text-slate-100">
                  {cost}
                </h2>
                <p className="mt-2 text-xs text-start lg:text-xl leading-8 text-slate-400">
                  Cost Per Launch
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeaderDetailWithImage;
