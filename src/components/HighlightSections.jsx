import { Link } from "react-router-dom";
import CardImageBottomText from "./cards/CardImageBottomText";
import TitleDescSection from "./TitleDescSection";
import BaseSection from "./BaseSection";

const HighlightSections = ({ title, desc, datas, linkTo, condition }) => {
  return (
    <>
      <BaseSection>
        <TitleDescSection title={title} desc={desc} />
        <CardImageBottomText
          datas={datas}
          condition={condition}
        ></CardImageBottomText>
        {linkTo ? (
          <div className="mt-10 flex justify-center items-center">
            <Link
              to={linkTo}
              className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Selengkapnya
            </Link>
          </div>
        ) : null}
      </BaseSection>
    </>
  );
};

export default HighlightSections;
