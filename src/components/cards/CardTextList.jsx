import { Link } from "react-router-dom";

const CardTextList = ({ datas, condition }) => {
  return (
    <>
      <div className="mt-8 pt-16 border-t border-blue-400">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16">
          {datas.length
            ? datas.map((item, i) => {
                let statusData = "";
                let linkIE = "";
                let linkDetail = "";
                let title = "";
                let desc = "";
                if (condition == "cores") {
                  statusData = item.status
                    ? item.status.charAt(0).toUpperCase() + item.status.slice(1)
                    : "No Status";
                  linkIE = "i";
                  linkDetail = `/cores/${item.id}`;
                  title = item.serial;
                  desc = item.last_update ? item.last_update : "No Update";
                } else if (condition == "capsules") {
                  statusData = item.status
                    ? item.status.charAt(0).toUpperCase() + item.status.slice(1)
                    : "No Status";
                  linkIE = "i";
                  linkDetail = `/capsules/${item.id}`;
                  title = item.serial;
                  desc = item.last_update ? item.last_update : "No Update";
                } else if (condition == "launches-capsule") {
                  statusData = item.status
                    ? item.status.charAt(0).toUpperCase() + item.status.slice(1)
                    : "No Status";
                  linkIE = "i";
                  linkDetail = `/capsules/${item.id}`;
                  title = item.serial;
                  desc = item.last_update ? item.last_update : "No Update";
                } else if (condition == "payloads") {
                  statusData = item.orbit;
                  linkIE = "i";
                  linkDetail = `/payloads/${item.id}`;
                  title = item.name;
                  desc = item.type ? item.type : "No Type";
                }
                return (
                  <article
                    key={i}
                    className="flex max-w-xl flex-col items-start justify-start"
                  >
                    <div className="flex items-center gap-x-4 text-xs">
                      {/* <time dateTime={date} className="text-gray-500">
                      {formatingDate}
                    </time> */}
                      <span className="text-gray-500">{statusData}</span>
                      {/* <a
                href={item.links.article}
                className="relative z-10 rounded-full bg-blue-400 px-3 py-1.5 font-medium text-slate-100 hover:bg-blue-500"
              >
                {item.title}
              </a> */}
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-xl font-bold leading-6 text-slate-100 group-hover:text-blue-400">
                        {linkIE == "i" ? (
                          <Link to={linkDetail}>
                            <span className="absolute inset-0" />
                            {title}
                          </Link>
                        ) : (
                          <a href={linkDetail} target="_blank">
                            <span className="absolute inset-0" />
                            {title}
                          </a>
                        )}
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-400">
                        {desc}
                      </p>
                    </div>
                    {/* <div className="relative mt-8 flex items-center gap-x-4">
              <img
                alt=""
                src={item.author.imageUrl}
                className="h-10 w-10 rounded-full bg-gray-50"
              />
              <div className="text-sm leading-6">
                <p className="font-semibold text-slate-100">
                  <a href={item.author.href}>
                    <span className="absolute inset-0" />
                    {item.author.name}
                  </a>
                </p>
                <p className="text-slate-400">{item.author.role}</p>
              </div>
            </div> */}
                  </article>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default CardTextList;
