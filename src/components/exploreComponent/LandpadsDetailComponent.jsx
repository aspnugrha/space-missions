import BaseSection from "../BaseSection";
import IconDescSection from "../IconDescSection";
import TitleDescSection from "../TitleDescSection";
import ArticleSection from "../ArticleSection";

const LandpadsDetailComponent = ({
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
            colLg={4}
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
                value: datas?.landing_attempts
                  ? datas.landing_attempts
                  : "Unknown",
              },
              {
                icon: "mdi mdi-check-decagram-outline",
                title: "Landing Successes",
                value:
                  datas?.landing_successes != null
                    ? datas.landing_successes
                    : "Unknown",
              },
            ]}
          />
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

export default LandpadsDetailComponent;
