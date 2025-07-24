import { useEffect } from "react";
import { useState } from "react";
import { getList } from "../api/list-api";
import ListSections from "../components/ListSections";
import CardText from "../components/cards/CardText";
import CardTextList from "../components/cards/CardTextList";
import CardImageBottomText from "../components/cards/CardImageBottomText";
import { Helmet } from "react-helmet";

const ListPage = ({ title, desc, condition }) => {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(() => {
    if (
      condition == "history" ||
      condition == "cores" ||
      condition == "capsules" ||
      condition == "payloads"
    ) {
      return 9;
    } else if (
      condition == "rockets" ||
      condition == "dragons" ||
      condition == "ships" ||
      condition == "launches" ||
      condition == "landpads" ||
      condition == "launchpads" ||
      condition == "crew"
    ) {
      return 12;
    }
    return 0;
  });
  const [url, setUrl] = useState(() => {
    if (condition == "history") {
      return "/v4/history";
    } else if (condition == "cores") {
      return "/v4/cores";
    } else if (condition == "rockets") {
      return "/v4/rockets";
    } else if (condition == "capsules") {
      return "/v4/capsules";
    } else if (condition == "dragons") {
      return "/v4/dragons";
    } else if (condition == "ships") {
      return "/v4/ships";
    } else if (condition == "launches") {
      return "/v5/launches";
    } else if (condition == "landpads") {
      return "/v4/landpads";
    } else if (condition == "launchpads") {
      return "/v4/launchpads";
    } else if (condition == "crew") {
      return "/v4/crew";
    } else if (condition == "payloads") {
      return "/v4/payloads";
    }
    return "";
  });
  const [lengthOpt, setLengthOpt] = useState(() => {
    if (
      condition == "history" ||
      condition == "cores" ||
      condition == "capsules" ||
      condition == "payloads"
    ) {
      return 9;
    } else if (
      condition == "rockets" ||
      condition == "dragons" ||
      condition == "ships" ||
      condition == "launches" ||
      condition == "landpads" ||
      condition == "launchpads" ||
      condition == "crew"
    ) {
      return 12;
    }
    return 0;
  });
  const [lengthData, setLengthData] = useState(0);
  const [listData, setListData] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();

    const list = async () => {
      const get = await getList(start, end, url, abortController.signal);
      setListData(get?.data);
      setLengthData(get?.length_data);
    };

    list();

    return () => {
      abortController.abort();
    };
  }, []);
  console.log(start, end, url, title, desc, condition, listData);

  const children = () => {
    if (condition == "history") {
      return <CardText datas={listData}></CardText>;
    } else if (
      condition == "cores" ||
      condition == "capsules" ||
      condition == "payloads"
    ) {
      return (
        <CardTextList datas={listData} condition={condition}></CardTextList>
      );
    } else if (
      condition == "rockets" ||
      condition == "dragons" ||
      condition == "ships" ||
      condition == "launches" ||
      condition == "landpads" ||
      condition == "launchpads" ||
      condition == "crew"
    ) {
      return (
        <CardImageBottomText
          datas={listData}
          condition={condition}
        ></CardImageBottomText>
      );
    }
  };

  const loadMoreData = async () => {
    const newStart = end;
    const newEnd = end + lengthOpt;
    setStart(newStart);
    setEnd(newEnd);

    const getNew = await getList(newStart, newEnd, url);
    let newListData = [...listData];
    getNew?.data.map((item) => {
      newListData = [...newListData, item];
    });
    setListData(newListData);
  };

  return (
    <>
      <Helmet>
        <title>{title.toUpperCase()} | Space Mission</title>
      </Helmet>
      <ListSections title={title} desc={desc}>
        {children()}
        {listData.length < lengthData ? (
          <div className="flex justify-center items-center mt-20">
            <button
              type="button"
              className="rounded-md bg-blue-400 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={() => loadMoreData()}
            >
              Load More
            </button>
          </div>
        ) : null}
      </ListSections>
    </>
  );
};

export default ListPage;
