import "../App.css";
import { useState } from "react";
import Hero from "../components/Hero";
import ExploreBook from "../components/ExploreBook";
import HighlightSections from "../components/HighlightSections";
import HighlightSectionTexts from "../components/HighlightSectionTexts";
import {
  get4Rockets,
  get4Crews,
  get3History,
  getExploreBooks,
} from "../api/api";
import { useEffect } from "react";
import { Helmet } from "react-helmet";

const HomePage = () => {
  const [exploreBookData, setExploreBookData] = useState([]);
  const [someHistoryData, setSomeHistoryData] = useState([]);
  const [someRocketData, setSomeRocketData] = useState([]);
  const [someCrewData, setSomeCrewData] = useState([]);

  useEffect(() => {
    const explodeData = async () => {
      setExploreBookData(await getExploreBooks());
    };
    const historyData = async () => {
      setSomeHistoryData(await get3History());
    };
    const rocketData = async () => {
      setSomeRocketData(await get4Rockets());
    };
    const crewData = async () => {
      setSomeCrewData(await get4Crews());
    };

    explodeData();
    historyData();
    rocketData();
    crewData();
  }, []);
  // console.log(exploreBookData, someHistoryData, someRocketData, someCrewData);

  return (
    <>
      <Helmet>
        <title>HOMEPAGE | Space Mission</title>
      </Helmet>
      <Hero></Hero>

      <ExploreBook
        title="Explore The Journey"
        desc="Jelajahi informasi Peluncuran, Roket, Crew dan lain-lain."
        datas={exploreBookData}
      ></ExploreBook>

      <HighlightSectionTexts
        title="Historical Moment"
        desc="Beberapa momen bersejarah."
        datas={someHistoryData}
        linkTo="/historical-moments"
      ></HighlightSectionTexts>

      <HighlightSections
        title="Rockets"
        desc="Informasi mengenai roket yang dipakai"
        datas={someRocketData}
        linkTo="/rockets"
        condition="rockets"
      ></HighlightSections>

      <HighlightSections
        title="Crews"
        desc="Beberapa kru yang menjalankan misi"
        datas={someCrewData}
        linkTo="/crews"
        condition="crew"
      ></HighlightSections>
    </>
  );
};

export default HomePage;
