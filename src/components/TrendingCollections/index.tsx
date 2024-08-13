import { useEffect, useState } from "react";
import { getTrendingCollection } from "../../utils/url";

interface ITrendingCollection {
  id: number;
  collections: string;
  title: string;
  avatar: string;
  avatarName: string;
}

export default function TrendingCollections() {
  const [trendingCollection, setTrendingCollection] = useState<
    ITrendingCollection[]
  >([]);
  useEffect(() => {
    getTrendingCollection().then((data) => {
      setTrendingCollection(data);
    });
  }, []);
  return (
    <>
      <div className="flex flex-wrap justify-center gap-8">
        {trendingCollection.map(
          ({ id, collections, title, avatar, avatarName }) => {
            return (
              <div key={id} className="max-w-sm ">
                <div
                  data-aos="flip-up"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                >
                  <div className="flex rounded-lg h-full flex-col">
                    <div className="flex flex-col justify-between flex-grow">
                      <img src={collections} alt={title} />
                      <p className="font-semibold mt-1">{title}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-3">
                      <img src={avatar} alt={avatarName} className="w-8" />
                      <p>{avatarName}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </>
  );
}
