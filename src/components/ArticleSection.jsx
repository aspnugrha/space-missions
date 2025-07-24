import { mdiOpenInNew } from "@mdi/js";
import Icon from "@mdi/react";

const ArticleSection = ({ colSm, colMd, colLg, datas }) => {
  return (
    <div
      className={`grid grid-cols-${colSm} md:grid-cols-${colMd} lg:grid-cols-${colLg}`}
    >
      {datas
        ? datas.map((item, i) => (
            <a
              key={i}
              href={item.link}
              className="text-slate-100 text-base font-base flex"
              target="_blank"
            >
              <Icon
                path={mdiOpenInNew}
                className="text-slate-100 hover:text-blue-400"
                size={1}
              />
              &nbsp; {item.title}
            </a>
          ))
        : null}
    </div>
  );
};

export default ArticleSection;
