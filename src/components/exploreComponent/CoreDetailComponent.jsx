import { mdiAccountGroupOutline } from "@mdi/js";
import { mdiAlertOutline } from "@mdi/js";
import { mdiPackageVariantClosed } from "@mdi/js";
import { mdiRocketOutline } from "@mdi/js";
import Icon from "@mdi/react";
import { Link } from "react-router-dom";

const CoreDetailComponent = ({ datas, condition }) => {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16 border-t border-blue-400 mt-8 pt-16">
        {datas.length
          ? datas.map((item, i) => {
              if (
                condition == "cores" ||
                condition == "capsules" ||
                condition == "ships" ||
                condition == "landpads"
              ) {
                return (
                  <article
                    key={i}
                    className="flex max-w-xl flex-col items-start justify-start"
                  >
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={item.date_utc} className="text-gray-500">
                        {new Date(item.date_utc).toLocaleDateString([], {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      {/* <span className="text-gray-500">{statusData}</span> */}
                      <span
                        className="relative z-10 rounded-full bg-blue-400 px-3 py-1.5 font-medium text-slate-100 hover:bg-blue-500"
                        title="Flight Number"
                      >
                        {item.flight_number}
                      </span>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-xl font-bold leading-6 text-slate-100 group-hover:text-blue-400">
                        <Link to={`/launches/${item.id}`}>
                          <span className="absolute inset-0" />
                          {item.name}
                        </Link>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-400">
                        {item.detail ? item.detail : "No Detail"}
                      </p>
                    </div>
                    <div className="mt-8 w-full grid grid-cols-2 gap-x-4">
                      <div className="flex justify-start items-center mb-2">
                        {/* <Icon
                          path={mdiRocketOutline}
                          className="text-slate-400"
                          size={1}
                        /> */}
                        <div>
                          <p className="w-full text-slate-400 text-sm">
                            <b>{item.capsules.length}</b> Capsules
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start items-center mb-2">
                        {/* <Icon
                          path={mdiAccountGroupOutline}
                          className="text-slate-400"
                          size={1}
                        /> */}
                        <div>
                          <p className="w-full text-slate-400 text-sm">
                            <b>{item.crew.length}</b> Crew
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start items-center mb-2">
                        {/* <Icon
                          path={mdiAlertOutline}
                          className="text-slate-400"
                          size={1}
                        /> */}
                        <div>
                          <p className="w-full text-slate-400 text-sm">
                            <b>{item.failures.length}</b> Failures
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-start items-center mb-2">
                        {/* <Icon
                          path={mdiPackageVariantClosed}
                          className="text-slate-400"
                          size={1}
                        /> */}
                        <div>
                          <p className="w-full text-slate-400 text-sm">
                            <b>{item.payloads.length}</b> Payloads
                          </p>
                        </div>
                      </div>
                    </div>
                  </article>
                );
              }
            })
          : null}
      </div>
    </>
  );
};

export default CoreDetailComponent;
