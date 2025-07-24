import BaseSection from "../BaseSection";
import IconDescSection from "../IconDescSection";
import TitleDescSection from "../TitleDescSection";
import TableSection from "../TableSection";
import ArticleSection from "../ArticleSection";

const ShipDetailComponent = ({ datas, children }) => {
  return (
    <>
      <div className="">
        {datas?.image ? (
          <img className="w-full h-full" src={datas.image} alt={`Image Ship`} />
        ) : null}
      </div>

      <BaseSection>
        <div className="pt-0 lg:pt-20 pb-10">
          <IconDescSection
            colSm={1}
            colMd={2}
            colLg={3}
            datas={[
              {
                icon: "mdi mdi-hammer-screwdriver",
                title: "Year Built",
                value: datas?.year_built ? datas.year_built : "unknown",
              },
              {
                icon: "mdi mdi-clock-fast",
                title: "Speed KN",
                value: datas?.speed_kn ? datas.speed_kn : "unknown",
              },
              {
                icon: "mdi mdi-sun-angle-outline",
                title: "Course Deg",
                value: datas?.course_deg ? datas.course_deg : "unknown",
              },
              {
                icon: "mdi mdi-shield-sword-outline",
                title: "IMO",
                value: datas?.imo ? datas.imo : "unknown",
              },
              {
                icon: "mdi mdi-access-point-network",
                title: "MMSI",
                value: datas?.mmsi ? datas.mmsi : "unknown",
              },
              {
                icon: "mdi mdi-lifebuoy",
                title: "ABS",
                value: datas?.abs ? datas.abs : "unknown",
              },
              {
                icon: "mdi mdi-podium-gold",
                title: "Class",
                value: datas?.class ? datas.class : "unknown",
              },
            ]}
          />
        </div>

        {/* AIS update */}
        <div className="pt-24">
          <TitleDescSection
            title="AIS Update"
            desc="Data informasi update AIS terakhir"
          />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <h2 className="w-full text-base md:text-xl lg:text-2xl text-start font-bold tracking-tight text-slate-100">
              {datas?.last_ais_update ? datas.last_ais_update : "No Update"}
            </h2>
          </div>
        </div>

        {/* Size Section */}
        <div className="pt-24">
          <TitleDescSection title="Mass Info" desc="Data informasi berat" />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <TableSection
              tbodyData={[
                Object.assign({}, [
                  "Mass",
                  `${
                    datas?.mass_kg ? datas.mass_kg.toLocaleString() : "Unknown"
                  } kg`,
                  `${
                    datas?.mass_lbs
                      ? datas.mass_lbs.toLocaleString()
                      : "Unknown"
                  } lbs`,
                ]),
              ]}
            />
          </div>
        </div>

        {/* Roles */}
        <div className="pt-24">
          <TitleDescSection title="Roles" desc="Data informasi peran" />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <IconDescSection
              colSm={1}
              colMd={2}
              colLg={4}
              datas={
                datas?.roles
                  ? datas.roles.map((item) => {
                      return {
                        icon: "mdi mdi-star-four-points-circle-outline",
                        title: "asd",
                        value: item,
                      };
                    })
                  : null
              }
            />
          </div>
        </div>

        {/* Roles */}
        <div className="pt-24">
          <TitleDescSection title="Locations" desc="Data informasi lokasi" />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <IconDescSection
              colSm={1}
              colMd={2}
              colLg={2}
              datas={[
                {
                  icon: "mdi mdi-latitude",
                  title: "Latitude",
                  value: datas?.latitude ? datas.latitude : "Unknown",
                },
                {
                  icon: "mdi mdi-longitude",
                  title: "Longitude",
                  value: datas?.longitude ? datas.longitude : "Unknown",
                },
              ]}
            />
          </div>
        </div>

        {/* Launches */}
        <div className="pt-24">
          <TitleDescSection title="Launches" desc="Data informasi peluncuran" />
          {children}
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
                datas?.link
                  ? [{ link: datas.link, title: "Check Articles" }]
                  : null
              }
            />
          </div>
        </div>
      </BaseSection>
    </>
  );
};

export default ShipDetailComponent;
