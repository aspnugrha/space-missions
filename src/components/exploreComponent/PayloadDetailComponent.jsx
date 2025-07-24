import { mdiClockFast } from "@mdi/js";
import { mdiHammerScrewdriver } from "@mdi/js";
import { mdiShieldSwordOutline } from "@mdi/js";
import { mdiPodiumGold } from "@mdi/js";
import { mdiLongitude } from "@mdi/js";
import { mdiOrbit } from "@mdi/js";
import { mdiCheckbook } from "@mdi/js";
import { mdiOrbitVariant } from "@mdi/js";
import { mdiRotateOrbit } from "@mdi/js";
import { mdiTimelapse } from "@mdi/js";
import { mdiAsterisk } from "@mdi/js";
import { mdiRobotVacuum } from "@mdi/js";
import { mdiBroadcast } from "@mdi/js";
import { mdiTransition } from "@mdi/js";
import { mdiCheckNetworkOutline } from "@mdi/js";
import { mdiFormatRotate90 } from "@mdi/js";
import { mdiAxis } from "@mdi/js";
import { mdiAbacus } from "@mdi/js";
import { mdiLatitude } from "@mdi/js";
import { mdiStarFourPointsCircleOutline } from "@mdi/js";
import { mdiLifebuoy } from "@mdi/js";
import { mdiAccessPointNetwork } from "@mdi/js";
import { mdiSunAngleOutline } from "@mdi/js";
import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";
import CardImageBottomText from "../cards/CardImageBottomText";
import { mdiAirplaneClock } from "@mdi/js";
import { mdiMagnifyExpand } from "@mdi/js";
import { mdiWaves } from "@mdi/js";
import { mdiAirplaneLanding } from "@mdi/js";
import CardTextList from "../cards/CardTextList";
import { mdiEarth } from "@mdi/js";
import { mdiAccountGroupOutline } from "@mdi/js";
import { mdiFactory } from "@mdi/js";
import { mdiOfficeBuildingMarkerOutline } from "@mdi/js";
import BaseSection from "../BaseSection";
import IconDescSection from "../IconDescSection";
import TitleDescSection from "../TitleDescSection";
import TableSection from "../TableSection";

const PayloadDetailComponent = ({ datas, dataDetails }) => {
  return (
    <>
      <BaseSection>
        <div className="pt-24">
          <IconDescSection
            colSm={1}
            colMd={2}
            colLg={3}
            datas={[
              {
                icon: "mdi mdi-axis",
                title: "Semi Major Axis",
                value: datas?.semi_major_axis_km
                  ? datas.semi_major_axis_km + " km"
                  : "Unknown",
              },
              {
                icon: "mdi mdi-abacus",
                title: "Eccentricity",
                value: datas?.eccentricity ? datas.eccentricity : "Unknown",
              },
              {
                icon: "mdi mdi-orbit-variant",
                title: "Periapsis",
                value: datas?.periapsis_km
                  ? datas.periapsis_km + " km"
                  : "Unknown",
              },
              {
                icon: "mdi mdi-orbit",
                title: "Apoapsis",
                value: datas?.apoapsis_km
                  ? datas.apoapsis_km + " km"
                  : "Unknown",
              },
              {
                icon: "mdi mdi-format-rotate-90",
                title: "Inclination",
                value: datas?.inclination_deg
                  ? datas.inclination_deg
                  : "Unknown",
              },
              {
                icon: "mdi mdi-rotate-orbit",
                title: "Period Min",
                value: datas?.period_min ? datas.period_min + " km" : "Unknown",
              },
              {
                icon: "mdi mdi-check-network-outline",
                title: "Lifespan",
                value: datas?.lifespan_years
                  ? datas.lifespan_years + " Years"
                  : "Unknown",
              },
              {
                icon: "mdi mdi-timelapse",
                title: "Epoch",
                value: datas?.epoch
                  ? new Date(datas.epoch).toLocaleDateString([], {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }) +
                    " " +
                    new Date(datas.epoch).toLocaleTimeString()
                  : "Unknown",
              },
              {
                icon: "mdi mdi-transition",
                title: "Mean Motion",
                value: datas?.mean_motion ? datas.mean_motion : "Unknown",
              },
              {
                icon: "mdi mdi-asterisk",
                title: "Raan",
                value: datas?.raan ? datas.raan : "Unknown",
              },
              {
                icon: "mdi mdi-broadcast",
                title: "Arg Of Pericenter",
                value: datas?.arg_of_pericenter
                  ? datas.arg_of_pericenter
                  : "Unknown",
              },
              {
                icon: "mdi mdi-robot-vacuum",
                title: "Mean Anomaly",
                value: datas?.mean_anomaly ? datas.mean_anomaly : "Unknown",
              },
            ]}
          />
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

        {/* Launches */}
        <div className="pt-24">
          <TitleDescSection title="Launches" desc="Data informasi peluncuran" />
          {dataDetails?.launch ? (
            <CardImageBottomText
              datas={[dataDetails.launch]}
              condition={"launches"}
            />
          ) : null}
        </div>

        {/* Dragon */}
        <div className="pt-24">
          <TitleDescSection title="Dragon" desc="Data informasi dragon" />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <IconDescSection
              colSm={1}
              colMd={2}
              colLg={4}
              datas={[
                {
                  icon: "mdi mdi-airplane-clock",
                  title: "Flight Time",
                  value: datas?.flight_time_sec
                    ? datas.flight_time_sec + " sec"
                    : "Unknown",
                },
                {
                  icon: "mdi mdi-magnify-expand",
                  title: "Manifest",
                  value: datas?.manifest ? datas.manifest : "Unknown",
                },
                {
                  icon: "mdi mdi-waves",
                  title: "Water Landing",
                  value: datas?.water_landing ? "Yes" : "No",
                },
                {
                  icon: "mdi mdi-airplane-landing",
                  title: "Land Landing",
                  value: datas?.land_landing ? "Yes" : "No",
                },
              ]}
            />
          </div>
        </div>

        {/* Capsules Section */}
        <div className="pt-24">
          <TitleDescSection title="Capsules" desc="Data informasi capsul" />
          {dataDetails?.capsule ? (
            <CardTextList
              datas={[dataDetails.capsule]}
              condition={"launches-capsule"}
            ></CardTextList>
          ) : (
            <div className="mt-8 pt-16 border-t border-blue-400">No Crew</div>
          )}
        </div>

        {/* Nationalities */}
        <div className="pt-24">
          <TitleDescSection
            title="Nationalities"
            desc="Data informasi kebangsaan"
          />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <IconDescSection
              colSm={1}
              colMd={2}
              colLg={3}
              datas={
                datas?.nationalities
                  ? datas.nationalities.map((item) => ({
                      icon: "mdi mdi-earth",
                      title: "",
                      value: item,
                    }))
                  : null
              }
            />
          </div>
        </div>

        {/* Customers */}
        <div className="pt-24">
          <TitleDescSection title="Customers" desc="Data informasi customer" />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <IconDescSection
              colSm={1}
              colMd={2}
              colLg={3}
              datas={
                datas?.customers
                  ? datas.customers.map((item) => ({
                      icon: "mdi mdi-account-group-outline",
                      title: "",
                      value: item,
                    }))
                  : null
              }
            />
          </div>
        </div>

        {/* Manufacturers */}
        <div className="pt-24">
          <TitleDescSection
            title="Manufacturers"
            desc="Data informasi manufaktur"
          />
          <div className="mt-8 pt-16 border-t border-blue-400">
            <IconDescSection
              colSm={1}
              colMd={2}
              colLg={3}
              datas={
                datas?.manufacturers
                  ? datas.manufacturers.map((item) => ({
                      icon: "mdi mdi-office-building-marker-outline",
                      title: "",
                      value: item,
                    }))
                  : null
              }
            />
          </div>
        </div>
      </BaseSection>
    </>
  );
};

export default PayloadDetailComponent;
