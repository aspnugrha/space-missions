import CardImageBottomText from "../cards/CardImageBottomText";
import BaseSection from "../BaseSection";
import IconDescSection from "../IconDescSection";
import TitleDescSection from "../TitleDescSection";

const LaunchpadsDetailComponent = ({
  datas,
  dataDetails,
  condition,
  children,
}) => {
  return (
    <>
      <div className="">
        {datas?.images?.large
          ? datas.images.large.map((item, i) => (
              <img
                key={i}
                className="w-full h-full"
                src={item}
                alt={`Image landpads ${parseInt(i) + 1}`}
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
                icon: "mdi mdi-latitude",
                title: "Latitude",
                value: datas?.latitude ? datas.latitude : "Unknown",
              },
              {
                icon: "mdi mdi-longitude",
                title: "Longitude",
                value: datas?.longitude ? datas.longitude : "Unknown",
              },
              {
                icon: "mdi mdi-airplane-landing",
                title: "Landing Attemp",
                value: datas?.launch_attempts
                  ? datas.launch_attempts
                  : "Unknown",
              },
              {
                icon: "mdi mdi-check-decagram-outline",
                title: "Landing Successes",
                value:
                  datas?.launch_successes != null
                    ? datas.launch_successes
                    : "Unknown",
              },
            ]}
          />
        </div>

        {/* Launches */}
        <div className="pt-24">
          <TitleDescSection title="Launches" desc="Data informasi peluncuran" />
          {dataDetails?.launches ? (
            <CardImageBottomText
              datas={dataDetails.launches}
              condition={"launches"}
            />
          ) : null}
        </div>

        {/* Rockets */}
        <div className="pt-24">
          <TitleDescSection title="Rockets" desc="Data informasi roket" />
          {dataDetails?.rockets ? (
            <CardImageBottomText
              datas={dataDetails.rockets}
              condition={"rockets"}
            />
          ) : null}
        </div>
      </BaseSection>
    </>
  );
};

export default LaunchpadsDetailComponent;
