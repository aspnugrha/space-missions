import { Link } from "react-router-dom";

const CardImageBottomText = ({ datas, condition }) => {
  return (
    <>
      <div className="mt-8 pt-16 border-t border-blue-400">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4 lg:gap-6">
          {datas.length
            ? datas.map((item, i) => {
                let link = null;
                let image = null;
                let title = null;
                let desc = null;
                if (condition == "rockets") {
                  link = `/rockets/${item.id}`;
                  image = item.flickr_images[0];
                  title = item.name;
                  desc = item.country;
                } else if (condition == "crew") {
                  link = `/crew/${item.id}`;
                  image = item.image;
                  title = item.name;
                  desc = "Agency " + item.agency;
                } else if (condition == "dragons") {
                  link = `/dragons/${item.id}`;
                  image = item.flickr_images[0];
                  title = item.name;
                  desc = item.type;
                } else if (condition == "ships") {
                  link = `/ships/${item.id}`;
                  image = item.image ? item.image : "";
                  title = item.name;
                  desc = item.home_port;
                } else if (condition == "launches") {
                  link = `/launches/${item.id}`;
                  image = item.links.flickr.original
                    ? item.links.flickr.original[0]
                    : "";
                  title = item.name;
                  desc = item.success ? "Success" : "Failures";
                } else if (condition == "launches-crews") {
                  image = item.image;
                  title = item.name;
                  desc = item.role;
                } else if (condition == "landpads") {
                  link = `/landpads/${item.id}`;
                  image = item.images.large ? item.images.large[0] : "";
                  title = item.name;
                  desc = item.region;
                } else if (condition == "launchpads") {
                  link = `/launchpads/${item.id}`;
                  image = item.images.large ? item.images.large[0] : "";
                  title = item.name;
                  desc = item.region;
                }

                return (
                  <div
                    key={i}
                    className="max-w-sm rounded overflow-hidden border-2 border-transparent hover:border-blue-400"
                  >
                    <Link to={link ? link : " "} className="h-screen">
                      <img
                        className="w-full h-96 object-cover"
                        src={
                          image
                            ? image
                            : "https://fakeimg.pl/1000x1000/e6e6e6/d6d6d6?text=No+Image&font=bebas"
                        }
                        alt="Sunset in the mountains"
                      />
                      <div className="px-6 py-4 ">
                        <div className="font-bold text-xl text-slate-100 mb-2">
                          {title}
                        </div>
                        <p className="text-slate-400 text-base">{desc}</p>
                      </div>
                    </Link>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
};

export default CardImageBottomText;
