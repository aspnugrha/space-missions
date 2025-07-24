import CardImageBottomText from "../cards/CardImageBottomText";
import BaseSection from "../BaseSection";
import TitleDescSection from "../TitleDescSection";
import ArticleSection from "../ArticleSection";

const CrewDetailComponent = ({ datas, dataDetails, condition, children }) => {
  return (
    <>
      <div className="">
        {datas?.image ? (
          <img className="w-full h-full" src={datas.image} alt={`Image Crew`} />
        ) : null}
      </div>

      <BaseSection>
        {/* Launches */}
        <div className="pt-24">
          <TitleDescSection title="Launches" desc="Data informasi peluncuran" />
          {dataDetails ? (
            <CardImageBottomText datas={dataDetails} condition={"launches"} />
          ) : null}
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

export default CrewDetailComponent;
