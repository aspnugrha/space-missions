import BaseSection from "../BaseSection";
import TitleDescSection from "../TitleDescSection";
import ArticleSection from "../ArticleSection";
import IconDescSection from "../IconDescSection";
import TableSection from "../TableSection";

const RoadsterDetailComponent = ({
  datas,
  dataDetails,
  condition,
  children,
}) => {
  return (
    <>
      <div className="">
        {datas?.flickr_images
          ? datas.flickr_images.map((item, i) => (
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
            colLg={2}
            datas={[
              {
                icon: "mdi mdi-orbit",
                title: "Apoapsis AU",
                value: datas?.apoapsis_au ? datas.apoapsis_au : "Unknown",
              },
              {
                icon: "mdi mdi-orbit-variant",
                title: "Periapsis AU",
                value: datas?.periapsis_au ? datas.periapsis_au : "Unknown",
              },
              {
                icon: "mdi mdi-axis",
                title: "Semi Major Axis AU",
                value: datas?.semi_major_axis_au
                  ? datas.semi_major_axis_au
                  : "Unknown",
              },
              {
                icon: "mdi mdi-abacus",
                title: "Eccentricity",
                value: datas?.eccentricity ? datas.eccentricity : "Unknown",
              },
              {
                icon: "mdi mdi-format-rotate-90",
                title: "Inclination",
                value: datas?.inclination ? datas.inclination : "Unknown",
              },
              {
                icon: "mdi mdi-longitude",
                title: "Longitude",
                value: datas?.longitude ? datas.longitude : "Unknown",
              },
              {
                icon: "mdi mdi-orbit-variant",
                title: "Periapsis ARG",
                value: datas?.periapsis_arg ? datas.periapsis_arg : "Unknown",
              },
              {
                icon: "mdi mdi-rotate-orbit",
                title: "Period Days",
                value: datas?.period_days
                  ? datas.period_days + " km"
                  : "Unknown",
              },
            ]}
          />
        </div>

        {/* Speed */}
        <div className="pt-24">
          <TitleDescSection title="Speed" desc="Data informasi kecepatan" />

          <div className="mt-8 pt-16 border-t border-blue-400">
            <TableSection
              tbodyData={[
                Object.assign({}, [
                  "Speed",
                  `${datas?.speed_kph} kph`,
                  `${datas?.speed_mph} mph`,
                ]),
              ]}
            />
          </div>
        </div>

        {/* Mass */}
        <div className="pt-24">
          <TitleDescSection title="Mass" desc="Data informasi berat" />

          <div className="mt-8 pt-16 border-t border-blue-400">
            <TableSection
              tbodyData={[
                Object.assign({}, [
                  "Launch Mass",
                  `${datas?.launch_mass_kg} kg`,
                  `${datas?.launch_mass_lbs} lbs`,
                ]),
              ]}
            />
          </div>
        </div>

        {/* Distance */}
        <div className="pt-24">
          <TitleDescSection title="Distance" desc="Data informasi jarak" />

          <div className="mt-8 pt-16 border-t border-blue-400">
            <TableSection
              tbodyData={[
                Object.assign({}, [
                  "Earth",
                  `${datas?.earth_distance_km} km`,
                  `${datas?.earth_distance_mi} mi`,
                ]),
                Object.assign({}, [
                  "Mars",
                  `${datas?.mars_distance_km} km`,
                  `${datas?.mars_distance_mi} mi`,
                ]),
              ]}
            />
          </div>
        </div>

        {/* Video Section */}
        <div className="pt-24">
          <TitleDescSection
            title="Videos"
            desc="Data informasi dokumentasi video"
          />

          <div className="mt-8 pt-16 border-t border-blue-400">
            <ArticleSection
              colSm={1}
              colMd={2}
              colLg={2}
              datas={
                datas?.video
                  ? [{ link: datas.video, title: "Check this Youtube" }]
                  : null
              }
            />
          </div>
        </div>

        {/* Article */}
        <div className="pt-24">
          <TitleDescSection
            title="Articles"
            desc="Data informasi article lengkap"
          />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <ArticleSection
              colSm={1}
              colMd={2}
              colLg={2}
              datas={
                datas?.wikipedia
                  ? [{ link: datas.wikipedia, title: "Check Articles" }]
                  : null
              }
            />
          </div>
        </div>
      </BaseSection>
    </>
  );
};

export default RoadsterDetailComponent;
