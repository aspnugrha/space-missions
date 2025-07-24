import { Link } from "react-router-dom";
import CardText from "./cards/CardText";
import BaseSection from "./BaseSection";
import TitleDescSection from "./TitleDescSection";

const HighlightSectionTexts = ({ title, desc, datas, linkTo }) => {
  return (
    <>
      <BaseSection>
        <TitleDescSection title={title} desc={desc} />
        <CardText datas={datas} linkTo={linkTo}></CardText>
        {linkTo ? (
          <div className="mt-20 flex justify-center items-center">
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

export default HighlightSectionTexts;
