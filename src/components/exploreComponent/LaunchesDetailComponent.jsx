import CardImageBottomText from "../cards/CardImageBottomText";
import YouTube from "react-youtube";
import CardTextList from "../cards/CardTextList";
import IconDescSection from "../IconDescSection";
import BaseSection from "../BaseSection";
import TitleDescSection from "../TitleDescSection";
import ArticleSection from "../ArticleSection";

const LaunchesDetailComponent = ({ datas, dataDetails, condition }) => {
  return (
    <>
      <div className="">
        {datas?.links?.flickr?.original
          ? datas?.links?.flickr?.original.map((item, i) => (
              <img
                key={i}
                className="w-full h-full"
                src={item}
                alt={`Image ${parseInt(i) + 1}`}
              />
            ))
          : null}
      </div>

      <BaseSection>
        <div className="pt-0 lg:pt-20 pb-10">
          <IconDescSection
            colSm={1}
            colMd={2}
            colLg={3}
            datas={[
              {
                icon: "mdi mdi-timer-play-outline",
                title: "Static Fire Date",
                value: datas?.static_fire_date_utc ? (
                  <>
                    <p>
                      {new Date(datas.static_fire_date_utc).toLocaleDateString(
                        [],
                        {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        }
                      )}
                    </p>
                    <p>
                      {new Date(
                        datas.static_fire_date_utc
                      ).toLocaleTimeString()}
                    </p>
                  </>
                ) : (
                  "Unknown"
                ),
              },
              {
                icon: "mdi mdi-layers-outline",
                title: "NET",
                value: datas?.net ? "Yes" : "No",
              },
              {
                icon: "mdi mdi-window-closed",
                title: "Window",
                value: datas?.window ? datas?.window : "Unknown",
              },
              {
                icon: "mdi mdi-timeline-clock-outline",
                title: "TBD",
                value: datas?.tbd ? "Yes" : "No",
              },
            ]}
          />
        </div>

        {/* Rocket Section */}
        <div className="pt-24">
          <TitleDescSection title="Rocket" desc="Data informasi roket" />

          {dataDetails?.rocket ? (
            <CardImageBottomText
              datas={[dataDetails.rocket]}
              condition={"rockets"}
            ></CardImageBottomText>
          ) : (
            <div className="mt-8 pt-16 border-t border-blue-400">No Data</div>
          )}
        </div>

        {/* Launchpad Section */}
        <div className="pt-24">
          <TitleDescSection title="Launchpad" desc="Data informasi launchpad" />

          {dataDetails?.launchpad ? (
            <CardImageBottomText
              datas={[dataDetails.launchpad]}
              condition={"launchpads"}
            ></CardImageBottomText>
          ) : (
            <div className="mt-8 pt-16 border-t border-blue-400">No Data</div>
          )}
        </div>

        {/* Video Section */}
        <div className="pt-24">
          <TitleDescSection
            title="Videos"
            desc="Data informasi dokumentasi video"
          />

          <div className="mt-8 pt-16 border-t border-blue-400">
            {datas?.links.youtube_id ? (
              <div className="w-full">
                <YouTube
                  videoId={datas.links.youtube_id}
                  opts={{ width: "100%", height: "350px" }}
                ></YouTube>
              </div>
            ) : (
              "No Videos Found"
            )}
          </div>
        </div>

        {/* Crew Section */}
        <div className="pt-24">
          <TitleDescSection title="Crews" desc="Data informasi crew" />

          {dataDetails?.crews ? (
            <CardImageBottomText
              datas={dataDetails.crews}
              condition={"launches-crews"}
            ></CardImageBottomText>
          ) : (
            <div className="mt-8 pt-16 border-t border-blue-400">No Crew</div>
          )}
        </div>

        {/* Capsules Section */}
        <div className="pt-24">
          <TitleDescSection title="Capsules" desc="Data informasi capsul" />

          {dataDetails?.capsules ? (
            <CardTextList
              datas={dataDetails.capsules}
              condition={"launches-capsule"}
            ></CardTextList>
          ) : (
            <div className="mt-8 pt-16 border-t border-blue-400">No Crew</div>
          )}
        </div>

        {/* Payloads Section */}
        <div className="pt-24">
          <TitleDescSection title="Payloads" desc="Data informasi payload" />

          {dataDetails?.payloads ? (
            <CardTextList
              datas={dataDetails.payloads}
              condition={"payloads"}
            ></CardTextList>
          ) : (
            <div className="mt-8 pt-16 border-t border-blue-400">No Crew</div>
          )}
        </div>

        {/* Ships Section */}
        <div className="pt-24">
          <TitleDescSection
            title="Ships"
            desc="Data informasi perahu bantuan"
          />

          {dataDetails?.ships ? (
            <CardImageBottomText
              datas={dataDetails.ships}
              condition={"ships"}
            ></CardImageBottomText>
          ) : (
            <div className="mt-8 pt-16 border-t border-blue-400">No Ships</div>
          )}
        </div>

        {/* Failures Section */}
        <div className="pt-24">
          <TitleDescSection title="Failures" desc="Data informasi failures" />

          <div className="mt-8 pt-16 border-t border-blue-400">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {datas?.failures ? (
                datas.failures.map((item, i) => (
                  <article
                    key={i}
                    className="flex max-w-xl flex-col items-start justify-start"
                  >
                    <div className="flex items-center gap-x-4 text-base">
                      <span className="text-gray-500">Time : {item.time}</span>
                      <span className="text-gray-500">
                        Altitude : {item.altitude}
                      </span>
                    </div>
                    <div className="group relative">
                      <p className="mt-3 line-clamp-3 text-lg leading-6 text-slate-200">
                        {item.reason}
                      </p>
                    </div>
                  </article>
                ))
              ) : (
                <p className="text-slate-100">No Failures</p>
              )}
            </div>
          </div>
        </div>

        {/* Cores Section */}
        <div className="pt-24">
          <TitleDescSection title="Cores" desc="Data informasi cores" />

          {dataDetails?.cores ? (
            <CardTextList
              datas={dataDetails.cores}
              condition={"cores"}
            ></CardTextList>
          ) : (
            <div className="mt-8 pt-16 border-t border-blue-400">No Cores</div>
          )}
        </div>

        {/* Fairings Section */}
        <div className="pt-24">
          <TitleDescSection title="Fairings" desc="Data informasi fairings" />

          <div className="mt-8 pt-16 border-t border-blue-400">
            <IconDescSection
              colSm={1}
              colMd={2}
              colLg={3}
              datas={[
                {
                  icon: "mdi mdi-sync",
                  title: "Reuse",
                  value: datas?.reuse ? "Yes" : "No",
                },
                {
                  icon: "mdi mdi-timer-sync-outline",
                  title: "Recovery Attempt",
                  value: datas?.recovery_attempt ? "Yes" : "No",
                },
                {
                  icon: "mdi mdi-battery-sync-outline",
                  title: "Recovered",
                  value: datas?.recovered ? "Yes" : "No",
                },
              ]}
            />
          </div>
        </div>

        {/* Presskit */}
        <div className="pt-24">
          <TitleDescSection
            title="Presskit"
            desc="Data informasi perlengkapan pers"
          />

          <div className="mt-8 pt-16 border-t border-blue-400">
            <ArticleSection
              colSm={1}
              colMd={2}
              colLg={2}
              datas={
                datas?.links?.presskit
                  ? [{ link: datas.links.presskit, title: "Check Presskit" }]
                  : null
              }
            />
          </div>
        </div>

        <div className="pt-24">
          <TitleDescSection
            title="Articles"
            desc="Data informasi article lengkap"
          />

          <div className="mt-8 pt-16 border-t border-blue-400">
            <div className="grid grid-cols-1 grid-cols-2">
              <ArticleSection
                colSm={1}
                colMd={2}
                colLg={2}
                datas={
                  datas?.links?.wikipedia || datas?.links?.article
                    ? [
                        datas?.links?.article
                          ? {
                              link: datas.links.article,
                              title: "Check Articles",
                            }
                          : null,
                        datas?.links?.wikipedia
                          ? {
                              link: datas.links.wikipedia,
                              title: "Wikipedia Articles",
                            }
                          : null,
                      ]
                    : null
                }
              />
            </div>
          </div>
        </div>
      </BaseSection>
    </>
  );
};

export default LaunchesDetailComponent;
