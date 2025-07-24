import { Link } from "react-router-dom";
import CardText from "./cards/CardText";
import BaseSection from "./BaseSection";
import TitleDescSection from "./TitleDescSection";
import SectionSparkleBackground from "./SectionSparkleBackground";

const ListSections = ({ title, desc, datas, children }) => {
  return (
    <>
      <BaseSection>
        <SectionSparkleBackground
          topSparkle={true}
          bottomSparkle={true}
        ></SectionSparkleBackground>
        <TitleDescSection title={title} desc={desc} />
        {children}
      </BaseSection>
    </>
  );
};

export default ListSections;
