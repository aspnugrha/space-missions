import { Link } from "react-router-dom";
import BaseSection from "./BaseSection";
import TitleDescSection from "./TitleDescSection";

const ExploreBook = ({ title, desc, datas }) => {
  return (
    <div id="explore-book">
      <BaseSection>
        <TitleDescSection title={title} desc={desc} />
        <div className="mt-8 pt-16 border-t border-blue-400">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6 justify-items-center items-center">
            {datas.length
              ? datas.map((item, i) => (
                  <Link
                    key={i}
                    to={item.to}
                    className="flex-shrink-0 relative overflow-hidden w-full h-96 lg:h-96 bg-center"
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                    }}
                  >
                    <div className=" text-white px-5 pb-6 mt-6 bottom-0">
                      <div className=" justify-between bg-gray-900 bg-opacity-20 px-1">
                        <span className="block font-semibold text-xl">
                          {item.title}
                        </span>
                      </div>
                      <span className="text-sm block opacity-75 bg-gray-900 bg-opacity-30 px-1">
                        Sub
                      </span>
                    </div>
                  </Link>
                ))
              : null}
          </div>
        </div>
      </BaseSection>
    </div>
  );
};

export default ExploreBook;
