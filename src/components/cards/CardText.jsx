const CardText = ({ datas }) => {
  return (
    <>
      <div className="mt-8 pt-16 border-t border-blue-400">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-16">
          {datas.length
            ? datas.map((item, i) => {
                let date = item.event_date_utc.substring(0, 10);
                let formatingDate = new Date(
                  item.event_date_utc
                ).toLocaleDateString([], {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                });
                let articleLink = item.links.article;
                let title = item.title;
                let desc = item.details;
                return (
                  <article
                    key={i}
                    className="flex max-w-xl flex-col items-start justify-start"
                  >
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={date} className="text-gray-500">
                        {formatingDate}
                      </time>
                    </div>
                    <div className="group relative">
                      <h3 className="mt-3 text-xl font-bold leading-6 text-slate-100 group-hover:text-blue-400">
                        <a href={articleLink} target="_blank">
                          <span className="absolute inset-0" />
                          {title}
                        </a>
                      </h3>
                      <p className="mt-5 line-clamp-3 text-sm leading-6 text-slate-400">
                        {desc}
                      </p>
                    </div>
                  </article>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default CardText;
