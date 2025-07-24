import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getData, getDataWithDetail } from "../api/list-api";
import HeaderDetail from "../components/cards/HeaderDetail";
import CoreDetailComponent from "../components/exploreComponent/CoreDetailComponent";
import HeaderDetailWithImage from "../components/cards/HeaderDetailWithImage";
import RocketDetailComponent from "../components/exploreComponent/RocketDetailComponent";
import DragonDetailComponent from "../components/exploreComponent/DragonDetailComponent";
import ShipDetailComponent from "../components/exploreComponent/ShipDetailComponent";
import LaunchesDetailComponent from "../components/exploreComponent/LaunchesDetailComponent";
import LandpadsDetailComponent from "../components/exploreComponent/LandpadsDetailComponent";
import LaunchpadsDetailComponent from "../components/exploreComponent/LaunchpadsDetailComponent";
import CrewDetailComponent from "../components/exploreComponent/CrewDetailComponent";
import PayloadDetailComponent from "../components/exploreComponent/PayloadDetailComponent";
import SectionSparkleBackground from "../components/SectionSparkleBackground";
import BaseSection from "../components/BaseSection";
import TitleDescSection from "../components/TitleDescSection";
import RoadsterDetailComponent from "../components/exploreComponent/RoadsterDetailComponent";
import { Helmet } from "react-helmet";

const DetailPage = ({ title, desc, condition }) => {
  const { id } = useParams();

  const [titleHeader, setTitleHeader] = useState(null);
  const [data, setData] = useState(null);
  const [dataDetail, setDataDetail] = useState([]);
  const [url, setUrl] = useState(() => {
    if (condition == "cores") {
      return `/v4/cores/${id}`;
    } else if (condition == "rockets") {
      return `/v4/rockets/${id}`;
    } else if (condition == "capsules") {
      return `/v4/capsules/${id}`;
    } else if (condition == "dragons") {
      return `/v4/dragons/${id}`;
    } else if (condition == "ships") {
      return `/v4/ships/${id}`;
    } else if (condition == "launches") {
      return `/v5/launches/${id}`;
    } else if (condition == "landpads") {
      return `/v4/landpads/${id}`;
    } else if (condition == "launchpads") {
      return `/v4/launchpads/${id}`;
    } else if (condition == "crew") {
      return `/v4/crew/${id}`;
    } else if (condition == "payloads") {
      return `/v4/payloads/${id}`;
    } else if (condition == "roadster") {
      return `/v4/roadster`;
    }
  });

  useEffect(() => {
    const abortController = new AbortController();

    const getDetail = async () => {
      const get = await getData(url, condition, abortController.signal);
      setData(get);
      if (condition == "cores" || condition == "capsules") {
        setTitleHeader(get.serial);
      } else if (
        condition == "rockets" ||
        condition == "dragons" ||
        condition == "ships" ||
        condition == "launches" ||
        condition == "roadster" ||
        condition == "crew" ||
        condition == "payloads"
      ) {
        setTitleHeader(get.name);
      } else if (condition == "landpads" || condition == "launchpads") {
        setTitleHeader(`${get.full_name}(${get.name})`);
      }

      if (
        condition == "cores" ||
        condition == "capsules" ||
        condition == "ships" ||
        condition == "landpads" ||
        condition == "crew"
      ) {
        if (get && get.launches) {
          get.launches.map(async (id) => {
            const getDetail = await getData(
              `/v5/launches/${id}`,
              abortController.signal
            );
            setDataDetail((prevValue) =>
              prevValue ? [...prevValue, getDetail] : [getDetail]
            );
          });
        }
      } else if (condition == "launches") {
        if (get && (get.rocket || get.launchpad || get.crew)) {
          const getRocketData = async () => {
            const getRocket = await getData(
              `/v4/rockets/${get.rocket}`,
              condition,
              abortController.signal
            );
            const getLaunchpad = await getData(
              `/v4/launchpads/${get.launchpad}`,
              condition,
              abortController.signal
            );

            setDataDetail({
              rocket: get.rocket ? getRocket : null,
              launchpad: get.launchpad ? getLaunchpad : null,
              crews: [],
              capsules: [],
              payloads: [],
              ships: [],
              cores: [],
            });

            get.crew
              ? get.crew.map(async (item) => {
                  const getCrew = await getData(
                    `/v4/crew/${item.crew}`,
                    condition,
                    abortController.signal
                  );

                  getCrew.role = item.role;

                  setDataDetail((prevValue) => ({
                    rocket: prevValue.rocket,
                    launchpad: prevValue.launchpad,
                    crews: [...prevValue.crews, getCrew],
                    capsules: prevValue.capsules,
                    payloads: prevValue.payloads,
                    ships: prevValue.ships,
                    cores: prevValue.cores,
                  }));
                })
              : null;

            get.capsules
              ? get.capsules.map(async (item) => {
                  const getCapsule = await getData(
                    `/v4/capsules/${item}`,
                    condition,
                    abortController.signal
                  );

                  setDataDetail((prevValue) => ({
                    rocket: prevValue.rocket,
                    launchpad: prevValue.launchpad,
                    crews: prevValue.crews,
                    capsules: [...prevValue.capsules, getCapsule],
                    payloads: prevValue.payloads,
                    ships: prevValue.ships,
                    cores: prevValue.cores,
                  }));
                })
              : null;

            get.payloads
              ? get.payloads.map(async (item) => {
                  const getPayload = await getData(
                    `/v4/payloads/${item}`,
                    condition,
                    abortController.signal
                  );

                  setDataDetail((prevValue) => ({
                    rocket: prevValue.rocket,
                    launchpad: prevValue.launchpad,
                    crews: prevValue.crews,
                    capsules: prevValue.capsules,
                    payloads: [...prevValue.payloads, getPayload],
                    ships: prevValue.ships,
                    cores: prevValue.cores,
                  }));
                })
              : null;

            get.ships
              ? get.ships.map(async (item) => {
                  const getShip = await getData(
                    `/v4/ships/${item}`,
                    condition,
                    abortController.signal
                  );

                  setDataDetail((prevValue) => ({
                    rocket: prevValue.rocket,
                    launchpad: prevValue.launchpad,
                    crews: prevValue.crews,
                    capsules: prevValue.capsules,
                    payloads: prevValue.payloads,
                    ships: [...prevValue.ships, getShip],
                    cores: prevValue.cores,
                  }));
                })
              : null;

            get.cores
              ? get.cores.map(async (item) => {
                  const getCore = await getData(
                    `/v4/cores/${item.core}`,
                    condition,
                    abortController.signal
                  );

                  setDataDetail((prevValue) => ({
                    rocket: prevValue.rocket,
                    launchpad: prevValue.launchpad,
                    crews: prevValue.crews,
                    capsules: prevValue.capsules,
                    payloads: prevValue.payloads,
                    ships: prevValue.ships,
                    cores: [...prevValue.cores, getCore],
                  }));
                })
              : null;
          };

          getRocketData();
        }
      } else if (condition == "launchpads") {
        setDataDetail({
          rockets: [],
          launches: [],
        });

        if (get && get.rockets) {
          get.rockets.map(async (id) => {
            const getRocket = await getData(
              `/v4/rockets/${id}`,
              abortController.signal
            );
            setDataDetail((prevValue) => ({
              rockets: [...prevValue.rockets, getRocket],
              launches: prevValue.launches,
            }));
          });
        }

        if (get && get.launches) {
          get.launches.map(async (id) => {
            const getLaunch = await getData(
              `/v5/launches/${id}`,
              abortController.signal
            );
            setDataDetail((prevValue) => ({
              rockets: prevValue.rockets,
              launches: [...prevValue.launches, getLaunch],
            }));
          });
        }
      } else if (condition == "payloads") {
        setDataDetail({
          capsule: null,
          launch: null,
        });
        if (get.dragon.capsule) {
          const getCapsule = await getData(
            `/v4/capsules/${get.dragon.capsule}`,
            condition,
            abortController.signal
          );

          setDataDetail((prevValue) => ({
            capsule: getCapsule,
            launch: prevValue.launch,
          }));
        }
        if (get.launch) {
          const getLaunch = await getData(
            `/v4/launches/${get.launch}`,
            condition,
            abortController.signal
          );
          setDataDetail((prevValue) => ({
            capsule: prevValue.capsule,
            launch: getLaunch,
          }));
        }
      }
    };
    getDetail();

    return () => {
      // setDataDetail([]);
      abortController.abort();
    };
  }, []);

  // console.log(url);
  console.log(data);
  console.log(dataDetail);

  const loadHeader = () => {
    if (condition == "cores") {
      return (
        <SectionSparkleBackground topSparkle={true} bottomSparkle={false}>
          <HeaderDetail
            condition={condition}
            icon="fa-solid fa-radiation"
            status={
              `Status : ` +
              data?.status.charAt(0).toUpperCase() +
              data?.status.slice(1)
            }
            title={data?.serial}
            desc={data?.last_update}
          ></HeaderDetail>
        </SectionSparkleBackground>
      );
    } else if (condition == "rockets") {
      return (
        <SectionSparkleBackground topSparkle={true} bottomSparkle={true}>
          <HeaderDetail
            condition={condition}
            icon="fa-solid fa-shuttle-space"
            status={
              `Type : ` +
              data?.type.charAt(0).toUpperCase() +
              data?.type.slice(1)
            }
            title={data?.name}
            desc={data?.description}
            dataBottoms={[
              {
                title: "Firt Flight",
                value: data?.first_flight ? (
                  <>
                    <p>
                      {new Date(data.first_flight).toLocaleDateString([], {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p>{new Date(data.first_flight).toLocaleTimeString()}</p>
                  </>
                ) : (
                  "Unknown"
                ),
              },
              {
                title: "Company",
                value: data?.company ? data?.company : "Unknown",
              },
              {
                title: "Country",
                value: data?.country ? data?.country : "Unknown",
              },
              {
                title: "Cost Per Launch",
                value: data?.cost_per_launch
                  ? data.cost_per_launch.toLocaleString()
                  : "Unknown",
              },
            ]}
          ></HeaderDetail>
        </SectionSparkleBackground>
      );
    } else if (condition == "capsules") {
      return (
        <SectionSparkleBackground topSparkle={true} bottomSparkle={true}>
          <HeaderDetail
            condition={condition}
            icon="fa-brands fa-opera"
            status={
              "Status : " +
              data?.status.charAt(0).toUpperCase() +
              data?.status.slice(1)
            }
            title={data?.serial}
            desc={data?.last_update}
            dataBottoms={[
              { title: "Type", value: data?.type ? data?.type : "Unknown" },
              {
                title: "Reuse Count",
                value: data?.reuse_count ? data?.reuse_count : "Unknown",
              },
              {
                title: "Water Landings",
                value: data?.water_landings ? data?.water_landings : "Unknown",
              },
              {
                title: "Land Landings",
                value: data?.land_landings ? data?.land_landings : "Unknown",
              },
            ]}
          ></HeaderDetail>
        </SectionSparkleBackground>
      );
    } else if (condition == "dragons") {
      return (
        <SectionSparkleBackground topSparkle={true} bottomSparkle={true}>
          <HeaderDetail
            condition={condition}
            icon="fa-solid fa-dragon"
            status={`Status : ` + (data?.active ? `Active` : `Inactive`)}
            title={data?.name}
            desc={data?.description}
            dataBottoms={[
              {
                title: "Type",
                value: data?.type
                  ? data.type.charAt(0).toUpperCase() + data.type.slice(1)
                  : "No Type",
              },
              {
                title: "Capacity",
                value: data?.crew_capacity + " Crew",
              },
              {
                title: "Sidewall Angle",
                value: data?.sidewall_angle_deg + " Deg",
              },
              {
                title: "First Flight",
                value: data?.first_flight ? (
                  <>
                    <p>
                      {new Date(data.first_flight).toLocaleDateString([], {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                    <p>{new Date(data.first_flight).toLocaleTimeString()}</p>
                  </>
                ) : (
                  "Unknown"
                ),
              },
            ]}
          ></HeaderDetail>
        </SectionSparkleBackground>
      );
    } else if (condition == "ships") {
      return (
        <SectionSparkleBackground topSparkle={true} bottomSparkle={true}>
          <HeaderDetail
            condition={condition}
            icon="fa-solid fa-ship"
            status={`Status : ` + (data?.active ? `Active` : `Inactive`)}
            title={data?.name}
            desc={data?.home_port}
            dataBottoms={[
              { title: "Type", value: data?.type ? data?.type : "Unknown" },
              { title: "Model", value: data?.model ? data.model : "Unknown" },
              {
                title: "Legacy",
                value: data?.legacy_id ? data?.legacy_id : "Unknown",
              },
              {
                title: "Status",
                value: data?.status ? data.status : "Unknown",
              },
            ]}
          ></HeaderDetail>
        </SectionSparkleBackground>
      );
    } else if (condition == "launches") {
      return (
        <SectionSparkleBackground topSparkle={true} bottomSparkle={true}>
          <HeaderDetail
            condition={condition}
            imgUrl={data?.links?.patch?.small ? data.links.patch.small : null}
            status={`Status : ` + (data?.success ? `Success` : `Failure`)}
            title={data?.name}
            desc={data?.details}
            dataBottoms={[
              {
                title: "Flight Number",
                value: data?.flight_number ? data?.flight_number : "Unknown",
              },
              {
                title: "Date",
                value: data?.date_utc
                  ? new Date(data.date_utc).toLocaleDateString([], {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Unknown",
              },
              { title: "Crew", value: data?.crew ? data.crew.length : 0 },
              {
                title: "Payload",
                value: data?.payloads ? data.payloads.length : 0,
              },
            ]}
          ></HeaderDetail>
        </SectionSparkleBackground>
      );
    } else if (condition == "landpads") {
      return (
        <SectionSparkleBackground topSparkle={true} bottomSparkle={true}>
          <HeaderDetail
            condition={condition}
            icon="fa-solid fa-mountain"
            status={
              `Status : ` + (data?.status == `active` ? `Active` : `Inactive`)
            }
            title={
              data?.full_name
                ? data.full_name + "(" + data?.name + ")"
                : "No Name"
            }
            desc={data?.details}
            dataBottoms={[
              { title: "Type", value: data?.type ? data?.type : "Unknown" },
              {
                title: "Region",
                value: data?.region ? data.region : "Unknown",
              },
              {
                title: "Locality",
                value: data?.locality ? data?.locality : "Unknown",
              },
            ]}
          ></HeaderDetail>
        </SectionSparkleBackground>
      );
    } else if (condition == "launchpads") {
      return (
        <SectionSparkleBackground topSparkle={true} bottomSparkle={true}>
          <HeaderDetail
            condition={condition}
            icon="fa-solid fa-hill-avalanche"
            status={
              `Status : ` + (data?.status == `active` ? `Active` : `Inactive`)
            }
            title={
              data?.full_name ? data.full_name + "(" + data?.name + ")" : null
            }
            desc={data?.details}
            dataBottoms={[
              {
                title: "Region",
                value: data?.region ? data.region : "Unknown",
              },
              {
                title: "Locality",
                value: data?.locality ? data?.locality : "Unknown",
              },
            ]}
          ></HeaderDetail>
        </SectionSparkleBackground>
      );
    } else if (condition == "crew") {
      return (
        <SectionSparkleBackground topSparkle={true} bottomSparkle={true}>
          <HeaderDetail
            condition={condition}
            icon="fa-solid fa-user-astronaut"
            status={
              `Status : ` + (data?.status == `active` ? `Active` : `Inactive`)
            }
            title={data?.name}
            desc={data?.agency}
            // dataBottoms={[]}
          ></HeaderDetail>
        </SectionSparkleBackground>
      );
    } else if (condition == "payloads") {
      return (
        <SectionSparkleBackground topSparkle={true} bottomSparkle={true}>
          <HeaderDetail
            condition={condition}
            icon="fa-solid fa-cart-flatbed-suitcase"
            status={`Reused : ` + (data?.reused ? `Yes` : `No`)}
            title={data?.name}
            desc={data?.type}
            dataBottoms={[
              { title: "Orbit", value: data?.orbit ? data.orbit : "unknown" },
              {
                title: "Reference System",
                value: data?.reference_system
                  ? data.reference_system
                  : "unknown",
              },
              {
                title: "Regime",
                value: data?.regime ? data.regime : "unknown",
              },
              {
                title: "Longitude",
                value: data?.longitude ? data.longitude : "unknown",
              },
            ]}
          ></HeaderDetail>
        </SectionSparkleBackground>
      );
    } else if (condition == "roadster") {
      return (
        <SectionSparkleBackground topSparkle={true} bottomSparkle={true}>
          <HeaderDetail
            condition={condition}
            icon="fa-solid fa-user-astronaut"
            status={
              `Orbit Type : ` +
              (data?.orbit_type
                ? data.orbit_type.charAt(0).toUpperCase() +
                  data?.orbit_type.slice(1)
                : `Unknown`)
            }
            title={data?.name}
            desc={data?.details}
            dataBottoms={[
              {
                title: "Launch Date",
                value: data?.launch_date_utc
                  ? new Date(data.launch_date_utc).toLocaleDateString([], {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    }) +
                    " " +
                    new Date(data.launch_date_utc).toLocaleTimeString()
                  : "Unknown",
              },
              {
                title: "Norad",
                value: data?.norad_id ? data.norad_id : "Unknown",
              },
              {
                title: "Epoch",
                value: data?.epoch_jd ? data.epoch_jd : "Unknown",
              },
            ]}
          ></HeaderDetail>
        </SectionSparkleBackground>
      );
    }
  };

  const loadBody = () => {
    if (condition == "cores") {
      return (
        <BaseSection>
          <div className="w-full">
            <h2 className="text-2xl font-bold tracking-tight text-slate-100 sm:text-md">
              Launches
            </h2>
            <p className="mt-2 text-xs lg:text-xl leading-8 text-slate-400">
              Data riwayat peluncuran
            </p>
          </div>
          {dataDetail ? (
            <CoreDetailComponent datas={dataDetail} condition={condition} />
          ) : null}
        </BaseSection>
      );
    } else if (condition == "rockets") {
      return <RocketDetailComponent datas={data} />;
    } else if (condition == "capsules") {
      return (
        <BaseSection>
          <TitleDescSection title="Launches" desc="Data riwayat peluncuran" />
          {dataDetail ? (
            <CoreDetailComponent datas={dataDetail} condition={condition} />
          ) : null}
        </BaseSection>
      );
    } else if (condition == "dragons") {
      return <DragonDetailComponent datas={data} />;
    } else if (condition == "ships") {
      return (
        <ShipDetailComponent datas={data}>
          <CoreDetailComponent datas={dataDetail} condition={condition} />
        </ShipDetailComponent>
      );
    } else if (condition == "launches") {
      return (
        <LaunchesDetailComponent
          datas={data}
          dataDetails={dataDetail}
          condition={condition}
        />
      );
    } else if (condition == "landpads") {
      return (
        <LandpadsDetailComponent
          datas={data}
          dataDetails={dataDetail}
          condition={condition}
        >
          <CoreDetailComponent datas={dataDetail} condition={condition} />
        </LandpadsDetailComponent>
      );
    } else if (condition == "launchpads") {
      return (
        <LaunchpadsDetailComponent
          datas={data}
          dataDetails={dataDetail}
          condition={condition}
        ></LaunchpadsDetailComponent>
      );
    } else if (condition == "crew") {
      return (
        <CrewDetailComponent
          datas={data}
          dataDetails={dataDetail}
          condition={condition}
        ></CrewDetailComponent>
      );
    } else if (condition == "payloads") {
      return (
        <PayloadDetailComponent
          datas={data}
          dataDetails={dataDetail}
          condition={condition}
        ></PayloadDetailComponent>
      );
    } else if (condition == "roadster") {
      return (
        <RoadsterDetailComponent
          datas={data}
          dataDetails={dataDetail}
          condition={condition}
        ></RoadsterDetailComponent>
      );
    }
  };

  return (
    <>
      <Helmet>
        <title>
          {titleHeader ? titleHeader.toUpperCase() : condition.toUpperCase()} |
          Space Mission
        </title>
      </Helmet>
      {loadHeader()}
      {loadBody()}
    </>
  );
};

export default DetailPage;
