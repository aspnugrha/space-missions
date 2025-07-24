const HeaderDetail = ({
  condition,
  icon,
  imgUrl,
  status,
  title,
  desc,
  dataBottoms,
}) => {
  return (
    // <div className="mx-auto max-w-2xl lg:max-w-7xl lg:mx-0">
    //   {/* <div className="mx-auto max-w-2xl lg:mx-0"> */}
    //   <div className="flex justify-between">
    //     <div className="w-1/3 md:w-1/4  flex justify-center">
    //       {condition == "launches" && imgUrl ? (
    //         <img
    //           src={imgUrl}
    //           className="w-10/12 h-24 md:h-32 lg:h-64 object-cover"
    //           alt="Patch Image"
    //         />
    //       ) : null}
    //       {condition == "crew" && imgUrl ? (
    //         <img
    //           src={imgUrl}
    //           className="w-10/12 h-24 md:h-32 lg:h-96 object-cover"
    //           alt="Patch Image"
    //         />
    //       ) : null}

    //       {imgUrl == null ? (
    //         <i
    //           className={`fa-solid ${icon} fa-5x text-slate-100 hover:text-blue-400 mt-6`}
    //         ></i>
    //       ) : null}
    //     </div>
    //     <div className="w-2/3 md:w-3/4">
    //       <span className="lg:w-full text-slate-400 text-md font-bold">
    //         {condition == "payloads" ? (
    //           <span>Reused : {status ? status : "-"}</span>
    //         ) : (
    //           <span>Status : {status ? status : "-"}</span>
    //         )}
    //       </span>
    //       <h2 className="lg:w-full mt-2 text-3xl lg:text-5xl font-bold tracking-tight text-slate-100 sm:text-md">
    //         {title}
    //       </h2>
    //       <p className="lg:w-full mt-4 text-xs lg:text-xl leading-8 text-slate-400">
    //         {condition == "payloads" ? <span>Type : {desc}</span> : <>{desc}</>}
    //       </p>
    //       {dataBottoms ? (
    //         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-20 w-full">
    //           {dataBottoms
    //             ? dataBottoms.map((item, i) => (
    //                 <div className="mb-6 lg:mb-14" key={i}>
    //                   <h2 className="tw-full text-xl lg:text-2xl text-start font-bold tracking-tight text-slate-100">
    //                     {item.value}
    //                   </h2>
    //                   <p className="mt-2 text-xs text-start lg:text-xl leading-8 text-slate-400">
    //                     {item.title}
    //                   </p>
    //                 </div>
    //               ))
    //             : null}
    //         </div>
    //       ) : null}
    //     </div>
    //   </div>
    // </div>
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="flex-wrap md:flex lg:flex justify-between py-10 lg:py-28">
        <div className="w-full lg:w-1/4 md:w-1/4 flex justify-center">
          {imgUrl ? (
            <>
              {condition == "launches" ? (
                <img
                  src={imgUrl}
                  className="w-full h-full md:h-48 lg:h-72 object-cover mb-10 lg:mb-0"
                  alt="Patch Image"
                />
              ) : null}
              {condition != "launches" && condition != "crew" ? (
                <img
                  src={imgUrl}
                  className="w-full lg:w-10/12 h-full md:h-60 lg:h-96 object-cover mb-10 lg:mb-0 pr-0 md:pr-4 lg:pr-0"
                  alt="Image"
                />
              ) : null}
            </>
          ) : null}

          {icon ? (
            <div className="mb-12 lg:mb-0 mt-0 md:mt-8">
              <i
                className={`${icon} fa-5x text-slate-100 hover:text-blue-400 ${
                  condition == "rockets" ? "-rotate-90 items-center pr-8" : ""
                }`}
              ></i>
            </div>
          ) : null}
        </div>
        <div className="w-full lg:w-3/4 md:w-3/4">
          <span className="lg:w-full text-slate-400 text-md font-bold">
            <span>{status ? status : "Status Unknown"}</span>
          </span>
          <h2 className="lg:w-full mt-2 text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-slate-100 sm:text-md">
            {title ? title : "Title Unknown"}
          </h2>
          <p className="lg:w-full mt-6 text-xs md:text-base lg:text-xl leading-8 text-slate-400">
            {desc ? desc : "Unknown"}
          </p>
          {dataBottoms ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 py-20 w-full">
              {dataBottoms.map((item, i) => (
                <div key={i} className="mb-6 lg:mb-14">
                  <h2 className="tw-full text-xl lg:text-2xl text-start font-bold tracking-tight text-slate-100">
                    {item.value}
                  </h2>
                  <p className="mt-2 text-xs text-start lg:text-xl leading-8 text-slate-400">
                    {item.title}
                  </p>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </div>
    // </div>
  );
};

export default HeaderDetail;
