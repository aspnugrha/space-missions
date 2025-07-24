import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import BaseSection from "../BaseSection";
import TableSection from "../TableSection";
import TitleDescSection from "../TitleDescSection";
import IconDescSection from "../IconDescSection";
import ArticleSection from "../ArticleSection";

const RocketDetailComponent = ({ datas }) => {
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
            colLg={4}
            datas={[
              {
                icon: "mdi mdi-fire",
                title: "Status",
                value: datas?.active ? "Active" : "Inactive",
              },
              {
                icon: "mdi mdi-check-decagram-outline",
                title: "Success Rate PCT",
                value: datas?.success_rate_pct,
              },
              {
                icon: "mdi mdi-layers-triple-outline",
                title: "Stage",
                value: datas?.stages ? datas.stages : 0,
              },
              {
                icon: "mdi mdi-chevron-triple-up",
                title: "Boosters",
                value: datas?.boosters ? datas.boosters : 0,
              },
            ]}
          />
        </div>

        <div className="pt-24">
          <TitleDescSection title="Size" desc="Data informasi ukuran" />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <TableSection
              tbodyData={[
                Object.assign({}, [
                  "Height",
                  `${
                    datas?.height.meters
                      ? datas?.height.meters.toLocaleString()
                      : 0
                  } m`,
                  `${
                    datas?.height.feet ? datas?.height.feet.toLocaleString() : 0
                  } ft`,
                ]),
                Object.assign({}, [
                  "Diameter",
                  `${
                    datas?.diameter.meters
                      ? datas?.diameter.meters.toLocaleString()
                      : 0
                  } m`,
                  `${
                    datas?.diameter.feet
                      ? datas?.diameter.feet.toLocaleString()
                      : 0
                  } ft`,
                ]),
                Object.assign({}, [
                  "Mass",
                  `${datas?.mass.kg ? datas?.mass.kg.toLocaleString() : 0} kg`,
                  `${datas?.mass.lb ? datas?.mass.lb.toLocaleString() : 0} lb`,
                ]),
              ]}
            />
          </div>
        </div>

        {datas?.stages && datas?.first_stage ? (
          <div className="pt-24">
            <TitleDescSection
              title="First Stage"
              desc="Data informasi Stage Pertama"
            />
            <div className="mt-8 pt-16 border-t border-blue-400">
              <IconDescSection
                colSm={1}
                colMd={2}
                colLg={4}
                datas={[
                  {
                    icon: "mdi mdi-fire-alert",
                    title: "Burn Time Second",
                    value: datas?.first_stage?.burn_time_sec
                      ? datas.first_stage.burn_time_sec
                      : "Unknown",
                  },
                  {
                    icon: "mdi mdi-engine-outline",
                    title: "Burn Time Second",
                    value: datas?.first_stage?.engines
                      ? datas.first_stage.engines
                      : "Unknown",
                  },
                  {
                    icon: "mdi mdi-gas-station-outline",
                    title: "Fuel Amount Tons",
                    value: datas?.first_stage?.fuel_amount_tons
                      ? datas.first_stage.fuel_amount_tons
                      : "Unknown",
                  },
                  {
                    icon: "mdi mdi-archive-sync-outline",
                    title: "Reusable",
                    value: datas?.first_stage?.reusable ? "Yes" : "No",
                  },
                ]}
              />

              <div className="mt-8">
                <TableSection
                  tbodyData={[
                    Object.assign({}, [
                      "Thrust Sea Level",
                      `${
                        datas?.first_stage?.thrust_sea_level.kN
                          ? datas?.first_stage?.thrust_sea_level.kN.toLocaleString()
                          : 0
                      } kN`,
                      `${
                        datas?.first_stage?.thrust_sea_level.lbf
                          ? datas?.first_stage?.thrust_sea_level.lbf.toLocaleString()
                          : 0
                      } lbf`,
                    ]),
                    Object.assign({}, [
                      "Thrust Vacuum",
                      `${
                        datas?.first_stage?.thrust_vacuum?.kN
                          ? datas?.first_stage?.thrust_vacuum?.kN.toLocaleString()
                          : 0
                      } kn`,
                      `${
                        datas?.first_stage?.thrust_vacuum?.lbf
                          ? datas?.first_stage?.thrust_vacuum?.lbf.toLocaleString()
                          : 0
                      } lbf`,
                    ]),
                  ]}
                />
              </div>
            </div>
          </div>
        ) : null}

        {datas?.stages && datas?.second_stage ? (
          <div className="pt-24">
            <TitleDescSection
              title="Second Stage"
              desc="Data informasi Stage Kedua"
            />
            <div className="mt-8 pt-16 border-t border-blue-400">
              <IconDescSection
                colSm={1}
                colMd={2}
                colLg={4}
                datas={[
                  {
                    icon: "mdi mdi-fire-alert",
                    title: "Burn Time Second",
                    value: datas?.second_stage?.burn_time_sec
                      ? datas.second_stage.burn_time_sec
                      : "Unknown",
                  },
                  {
                    icon: "mdi mdi-engine-outline",
                    title: "Engines",
                    value: datas?.second_stage?.engines
                      ? datas.second_stage.engines
                      : "Unknown",
                  },
                  {
                    icon: "mdi mdi-gas-station-outline",
                    title: "Fuel Amount Tons",
                    value: datas?.second_stage?.fuel_amount_tons
                      ? datas.second_stage.fuel_amount_tons
                      : "Unknown",
                  },
                  {
                    icon: "mdi mdi-archive-sync-outline",
                    title: "Reusable",
                    value: datas?.second_stage?.reusable ? "Yes" : "No",
                  },
                ]}
              />

              <div className="mt-8">
                <TableSection
                  tbodyData={[
                    Object.assign({}, [
                      "Thrust Sea Level",
                      `${
                        datas?.second_stage?.thrust.kN
                          ? datas?.second_stage?.thrust.kN.toLocaleString()
                          : 0
                      } kN`,
                      `${
                        datas?.second_stage?.thrust.lbf
                          ? datas?.second_stage?.thrust.lbf.toLocaleString()
                          : 0
                      } lbf`,
                    ]),
                  ]}
                />
              </div>

              <div className="mt-8">
                <TableSection
                  theadData={["Payloads", "Meters", "Feet"]}
                  tbodyData={[
                    Object.assign({}, [
                      "Composite Fairing Diameter",
                      `${
                        datas?.second_stage?.payloads?.composite_fairing
                          ?.diameter.meters
                          ? datas.second_stage.payloads.composite_fairing.diameter.meters.toLocaleString()
                          : 0
                      }`,
                      `${
                        datas?.second_stage?.payloads?.composite_fairing
                          ?.diameter.feet
                          ? datas.second_stage.payloads.composite_fairing.diameter.feet.toLocaleString()
                          : 0
                      }`,
                    ]),
                    Object.assign({}, [
                      "Composite Fairing Height",
                      `${
                        datas?.second_stage?.payloads?.composite_fairing?.height
                          .meters
                          ? datas.second_stage.payloads.composite_fairing.height.meters.toLocaleString()
                          : 0
                      }`,
                      `${
                        datas?.second_stage?.payloads?.composite_fairing?.height
                          .feet
                          ? datas.second_stage.payloads.composite_fairing.height.feet.toLocaleString()
                          : 0
                      }`,
                    ]),
                  ]}
                />
              </div>
            </div>
          </div>
        ) : null}

        {/* engine */}
        <div className="pt-24">
          <TitleDescSection title="Engines" desc="Data informasi mesin" />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <IconDescSection
              colSm={1}
              colMd={2}
              colLg={4}
              datas={[
                {
                  icon: "mdi mdi-layers-outline",
                  title: "Version",
                  value: datas?.engines?.version
                    ? datas.engines.version
                    : "Unknown",
                },
                {
                  icon: "mdi mdi-format-list-checkbox",
                  title: "Type",
                  value: datas?.engines?.type ? datas.engines.type : "Unknown",
                },
                {
                  icon: "mdi mdi-view-grid-outline",
                  title: "Layout",
                  value: datas?.engines?.layout
                    ? datas.engines.layout
                    : "Unknown",
                },
                {
                  icon: "mdi mdi-numeric",
                  title: "Number",
                  value: datas?.engines?.number
                    ? datas.engines.number
                    : "Unknown",
                },
                {
                  icon: "mdi mdi-engine-off-outline",
                  title: "Engine Loss Max",
                  value: datas?.engines?.engine_loss_max
                    ? datas.engines.engine_loss_max
                    : "Unknown",
                },
                {
                  icon: "mdi mdi-chevron-double-up",
                  title: "Thrust To Weight",
                  value: datas?.engines?.thrust_to_weight
                    ? datas.engines.thrust_to_weight
                    : "Unknown",
                },
                {
                  icon: "mdi mdi-gas-station-outline",
                  title: "Propellant 1",
                  value: datas?.engines?.propellant_1
                    ? datas.engines.propellant_1
                    : "Unknown",
                },
                {
                  icon: "mdi mdi-gas-station-outline",
                  title: "Propellant 2",
                  value: datas?.engines?.propellant_2
                    ? datas.engines.propellant_2
                    : "Unknown",
                },
              ]}
            />

            <div className="mt-8">
              <TableSection
                tbodyData={[
                  Object.assign({}, [
                    "ISP",
                    `${
                      datas?.engines?.isp.sea_level
                        ? datas.engines.isp.sea_level
                        : "Unknown"
                    } Sea Level`,
                    `${
                      datas?.engines?.isp.vacuum
                        ? datas.engines.isp.vacuum
                        : "Unknown"
                    } Vacuum`,
                  ]),
                  Object.assign({}, [
                    "Thrust Sea Level",
                    `${
                      datas?.engines?.thrust_sea_level?.kN
                        ? datas.engines.thrust_sea_level.kN.toLocaleString()
                        : "Unknown"
                    } kN`,
                    `${
                      datas?.engines?.thrust_sea_level?.lbf
                        ? datas.engines.thrust_sea_level.lbf.toLocaleString()
                        : "Unknown"
                    } lbf`,
                  ]),
                  Object.assign({}, [
                    "Thrust Vacuum",
                    `${
                      datas?.engines?.thrust_vacuum?.kN
                        ? datas.engines.thrust_vacuum.kN.toLocaleString()
                        : "Unknown"
                    } kN`,
                    `${
                      datas?.engines?.thrust_vacuum?.lbf
                        ? datas.engines.thrust_vacuum.lbf.toLocaleString()
                        : "Unknown"
                    } lbf`,
                  ]),
                ]}
              />
            </div>
          </div>
        </div>

        <div className="pt-24">
          <TitleDescSection
            title="Landing Legs"
            desc="Data informasi kaki rocket untuk landing"
          />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <IconDescSection
              colSm={1}
              colMd={2}
              colLg={2}
              datas={[
                {
                  icon: "mdi mdi-cards-variant",
                  title: "Material",
                  value: datas?.landing_legs?.material
                    ? datas.landing_legs.material
                    : "Unknown",
                },
                {
                  icon: "mdi mdi-format-list-numbered",
                  title: "Number",
                  value: datas?.landing_legs?.number
                    ? datas.landing_legs.number
                    : "Unknown",
                },
              ]}
            />
          </div>
        </div>

        <div className="pt-24">
          <TitleDescSection
            title="Payload Weights"
            desc="Data informasi berat muatan"
          />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {datas?.payload_weights
                ? datas.payload_weights.map((item, i) => (
                    <div key={i} className="w-3/4 mb-8">
                      <span className="text-blue-400">{item.id}</span>
                      <h2 className="w-full text-2xl text-start font-bold tracking-tight text-slate-100 sm:text-md">
                        {item.name}
                      </h2>
                      <div className="grid grid-cols-2">
                        <span className="text-start text-slate-400 py-3">
                          {item.kg ? item.kg.toLocaleString() : 0} kg
                        </span>
                        <span className="text-start text-slate-400 py-3">
                          {item.lb ? item.lb.toLocaleString() : 0} lb
                        </span>
                      </div>
                    </div>
                  ))
                : null}
            </div>
          </div>
        </div>

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
                  ? [{ link: datas.wikipedia, title: "Wikipedia Articles" }]
                  : null
              }
            />
          </div>
        </div>
      </BaseSection>
    </>
  );
};

export default RocketDetailComponent;
