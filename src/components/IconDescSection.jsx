const IconDescSection = ({ colSm, colMd, colLg, datas }) => {
  return (
    <div
      className={`grid grid-cols-${colSm} md:grid-cols-${colMd} lg:grid-cols-${colLg}`}
    >
      {datas
        ? datas.map((item, i) => (
            <div key={i} className="flex justify-center gap-4 mb-6">
              <span className="w-1/4 text-center flex justify-center">
                <span
                  className={`${item.icon} text-slate-100 hover:text-blue-400 text-5xl`}
                />
              </span>
              <div className="w-3/4">
                <h2 className="w-full text-xl md:text-2xl lg:text-3xl text-start font-bold tracking-tight text-slate-100">
                  {item.value}
                </h2>
                <span className="text-start text-slate-400 py-3">
                  {item.title}
                </span>
              </div>
            </div>
          ))
        : null}
    </div>
  );
};

export default IconDescSection;
