const TableSection = ({ theadData, tbodyData }) => {
  return (
    <table className="w-full divide-y-2 divide-slate-100 bg-gray-950 border-2 border-slate-100">
      {theadData ? (
        <thead className="divide-y-2 divide-gray-200 bg-gray-950 text-slate-100">
          <tr className="divide-x-2 divide-gray-200">
            {theadData.map((item, i) => (
              <td
                key={i}
                className="px-2 md:px-4 lg:px-4 py-6 md:py-6 lg:py-6 text-xs md:text-base lg:text-base font-semibold"
              >
                {item}
              </td>
            ))}
          </tr>
        </thead>
      ) : null}
      <tbody className="divide-y-2 divide-gray-200 bg-gray-950 text-slate-100">
        {tbodyData
          ? tbodyData.map((item, i) => (
              <tr key={i} className="divide-x-2 divide-gray-200">
                {Object.keys(item).map((key, idx) => {
                  return (
                    <td
                      key={idx}
                      className="px-2 md:px-4 lg:px-4 py-6 md:py-6 lg:py-6 text-xs md:text-base lg:text-base"
                    >
                      {item[key]}
                    </td>
                  );
                })}
              </tr>
            ))
          : null}
      </tbody>
    </table>
  );
};

export default TableSection;
