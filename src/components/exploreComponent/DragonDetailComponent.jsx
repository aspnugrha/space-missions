import BaseSection from "../BaseSection";
import IconDescSection from "../IconDescSection";
import TitleDescSection from "../TitleDescSection";
import TableSection from "../TableSection";
import ArticleSection from "../ArticleSection";

const DragonDetailComponent = ({ datas }) => {
  return (
    <>
      <div className="">
        {datas?.flickr_images
          ? datas?.flickr_images.map((item, i) => (
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
                icon: "mdi mdi-rotate-orbit",
                title: "Orbit Duration YR",
                value: datas?.orbit_duration_yr
                  ? datas.orbit_duration_yr
                  : "Unknown",
              },
              {
                icon: "mdi mdi-scale",
                title: "Dry Mass kg",
                value: datas?.dry_mass_kg
                  ? datas?.dry_mass_kg.toLocaleString()
                  : "Unknown",
              },
              {
                icon: "mdi mdi-scale",
                title: "Dry Mass lb",
                value: datas?.dry_mass_lb
                  ? datas?.dry_mass_lb.toLocaleString()
                  : "Unknown",
              },
            ]}
          />
        </div>

        {/* Size Section */}
        <div className="pt-24">
          <TitleDescSection title="Size" desc="Data informasi ukuran" />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <TableSection
              tbodyData={[
                Object.assign({}, [
                  "Height With Trunk",
                  `${
                    datas?.height_w_trunk.meters
                      ? datas.height_w_trunk.meters
                      : "Unknown"
                  } m`,
                  `${
                    datas?.height_w_trunk.feet
                      ? datas.height_w_trunk.feet
                      : "Unknown"
                  } ft`,
                ]),
                Object.assign({}, [
                  "Diameter",
                  `${
                    datas?.diameter.meters ? datas.diameter.meters : "Unknown"
                  } m`,
                  `${
                    datas?.diameter.feet ? datas.diameter.feet : "Unknown"
                  } ft`,
                ]),
                Object.assign({}, [
                  "Dry Mass",
                  `${
                    datas?.dry_mass_kg
                      ? datas.dry_mass_kg.toLocaleString()
                      : "Unknown"
                  } kg`,
                  `${
                    datas?.dry_mass_lb
                      ? datas.dry_mass_lb.toLocaleString()
                      : "Unknown"
                  } lb`,
                ]),
              ]}
            />
          </div>
        </div>

        {/* Launch and return payload mass */}
        <div className="pt-24">
          <TitleDescSection
            title="Launch And Return Payload Mass"
            desc="Data informasi berat muatan peluncuran dan kembali"
          />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <TableSection
              tbodyData={[
                Object.assign({}, [
                  "Launch Payload Mass",
                  `${
                    datas?.launch_payload_mass.kg
                      ? datas.launch_payload_mass.kg.toLocaleString()
                      : "Unknown"
                  } kg`,
                  `${
                    datas?.launch_payload_mass.lb
                      ? datas.launch_payload_mass.lb.toLocaleString()
                      : "Unknown"
                  } lb`,
                ]),
                Object.assign({}, [
                  "Launch payload Vol",
                  `${
                    datas?.launch_payload_vol.cubic_meters
                      ? datas.launch_payload_vol.cubic_meters.toLocaleString()
                      : "Unknown"
                  } m\u00B3`,
                  `${
                    datas?.launch_payload_vol.cubic_feet
                      ? datas.launch_payload_vol.cubic_feet.toLocaleString()
                      : "Unknown"
                  } ft\u00B3`,
                ]),
                Object.assign({}, [
                  "Return Payload Mass",
                  `${
                    datas?.return_payload_mass.kg
                      ? datas.return_payload_mass.kg.toLocaleString()
                      : "Unknown"
                  } kg`,
                  `${
                    datas?.return_payload_mass.lb
                      ? datas.return_payload_mass.lb.toLocaleString()
                      : "Unknown"
                  } lb`,
                ]),
                Object.assign({}, [
                  "Return Payload Vol",
                  `${
                    datas?.return_payload_vol.cubic_meters
                      ? datas.return_payload_vol.cubic_meters.toLocaleString()
                      : 0
                  } m\u00B3`,
                  `${
                    datas?.return_payload_vol.cubic_feet
                      ? datas.return_payload_vol.cubic_feet.toLocaleString()
                      : 0
                  } ft\u00B3`,
                ]),
              ]}
            />
          </div>
        </div>

        {/* Trunk */}
        <div className="pt-24">
          <TitleDescSection title="Trunk" desc="Data informasi bagasi" />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <IconDescSection
              colSm={1}
              colMd={2}
              colLg={2}
              datas={[
                {
                  icon: "mdi mdi-gas-station-outline",
                  title: "Solar",
                  value: datas?.trunk?.cargo.solar_array
                    ? datas.trunk.cargo.solar_array
                    : "Unknown",
                },
                {
                  icon: "mdi mdi-waves",
                  title: "Unpressurized Cargo",
                  value: datas?.trunk?.cargo.unpressurized_cargo ? "Yes" : "No",
                },
              ]}
            />

            <div className="mt-8">
              <TableSection
                tbodyData={[
                  Object.assign({}, [
                    "Trunk Volume",
                    `${
                      datas?.trunk?.trunk_volume.cubic_meters
                        ? datas.trunk.trunk_volume.cubic_meters.toLocaleString()
                        : "Unknown"
                    } m\u00B3`,
                    `${
                      datas?.trunk?.trunk_volume.cubic_feet
                        ? datas.trunk.trunk_volume.cubic_feet.toLocaleString()
                        : "Unknown"
                    } ft\u00B3`,
                  ]),
                ]}
              />
            </div>
          </div>
        </div>

        <div className="pt-24">
          <TitleDescSection
            title="Pressurized Capsule"
            desc="Data informasi kapsul bertekanan"
          />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <TableSection
              tbodyData={[
                Object.assign({}, [
                  "Payload Volume",
                  `${
                    datas?.pressurized_capsule?.payload_volume.cubic_meters
                      ? datas.pressurized_capsule.payload_volume.cubic_meters.toLocaleString()
                      : "Unknown"
                  } m\u00B3`,
                  `${
                    datas?.pressurized_capsule?.payload_volume.cubic_feet
                      ? datas.pressurized_capsule.payload_volume.cubic_feet.toLocaleString()
                      : "Unknown"
                  } ft\u00B3`,
                ]),
              ]}
            />
          </div>
        </div>

        {/* Heat Shield */}
        <div className="pt-24">
          <TitleDescSection
            title="Heat Shield"
            desc="Data informasi pelindung panas"
          />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <IconDescSection
              colSm={1}
              colMd={2}
              colLg={4}
              datas={[
                {
                  icon: "mdi mdi-cards-variant",
                  title: "Material",
                  value: datas?.heat_shield?.material
                    ? datas.heat_shield.material
                    : "Unknown",
                },
                {
                  icon: "mdi mdi-handshake-outline",
                  title: "Dev Partner",
                  value: datas?.heat_shield?.dev_partner
                    ? datas.heat_shield.dev_partner
                    : "Unknown",
                },
                {
                  icon: "mdi mdi-resize",
                  title: "Size",
                  value: `${
                    datas?.heat_shield?.size_meters
                      ? datas.heat_shield.size_meters
                      : "Unknown"
                  } m`,
                },
                {
                  icon: "mdi mdi-coolant-temperature",
                  title: "Temp Degrees",
                  value: `${
                    datas?.heat_shield?.temp_degrees
                      ? datas.heat_shield.temp_degrees
                      : "Unknown"
                  } \u00B0`,
                },
              ]}
            />
          </div>
        </div>

        {/* Thrusters */}
        <div className="pt-24">
          <TitleDescSection
            title="Thrusters"
            desc="Data informasi bantuan pendorong"
          />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
              {datas?.thrusters ? (
                datas.thrusters.map((item, i) => (
                  <article
                    key={i}
                    className="flex max-w-xl flex-col items-start justify-start mb-10"
                  >
                    <div className="group relative">
                      <h3 className="text-xl lg:text-3xl font-bold leading-6 text-slate-100 group-hover:text-blue-400">
                        {item.type}
                      </h3>
                      <p className="mt-4 line-clamp-3 text-base leading-6 text-slate-400">
                        Amount : {item.amount}
                      </p>
                    </div>
                    <div className="mt-8 lg:mt-14 w-full">
                      <IconDescSection
                        colSm={1}
                        colMd={1}
                        colLg={1}
                        datas={[
                          {
                            icon: "mdi mdi-gas-station-outline",
                            title: "Fuel 1",
                            value: item.fuel_1 ? item.fuel_1 : "Unknown",
                          },
                          {
                            icon: "mdi mdi-gas-station-outline",
                            title: "Fuel 2",
                            value: item.fuel_2 ? item.fuel_2 : "Unknown",
                          },
                          {
                            icon: "mdi mdi-hexagon-multiple-outline",
                            title: "Pods",
                            value: item.pods ? item.pods : "Unknown",
                          },
                          {
                            icon: "mdi mdi-clock-fast",
                            title: "ISP",
                            value: item.isp ? item.isp : "Unknown",
                          },
                        ]}
                      />
                    </div>
                  </article>
                ))
              ) : (
                <h3 className="text-slate-400 text-base">No Data</h3>
              )}
            </div>
          </div>
        </div>
        <div className="pt-24">
          <TitleDescSection
            title="Articles"
            desc="Data informasi article lengkap"
          />
          <div className="mt-10 pt-20 border-t border-blue-400">
            <ArticleSection
              colSm={1}
              colMd={2}
              colLg={2}
              datas={
                datas?.wikipedia
                  ? [{ link: datas?.wikipedia, title: "Wikipedia Articles" }]
                  : null
              }
            />
          </div>
        </div>
      </BaseSection>
    </>
  );
};

export default DragonDetailComponent;
