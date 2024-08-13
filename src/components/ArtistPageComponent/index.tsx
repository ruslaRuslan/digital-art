import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getArtist_page, getArtistById, getFooterLogo } from "../../utils/url";
import CopyLinkComponent from "../CopyLinkComponent";
import { TabsDefaultComponent2 } from "../TabsDefaultComponent2";

interface IFooterLogo {
  id: number;
  href: string;
  icons: string;
}
interface IArtistPage {
  id: number;
  k: string;
  title: string;
}
interface IArtist {
  id: number;
  count: number;
  avatar: string;
  name: string;
  percent: string;
  sold: number;
  volume: number;
}
const ArtistPageComponent = () => {
  const { id } = useParams();
  const [footerLogo, setFooterLogo] = useState<IFooterLogo[]>([]);
  const [artistPage, setArtistPage] = useState<IArtistPage[]>([]);

  const [info, setInfo] = useState<IArtist>({} as IArtist);
  const navigate = useNavigate();

  useEffect(() => {
    getArtistById(id as string).then((data) => {
      if (!data?.id) {
        return navigate("/not-found-404");
      }
      setInfo(data);
    });
    getFooterLogo().then((data) => {
      setFooterLogo(data);
    });
    getArtist_page().then((data) => {
      setArtistPage(data);
    });
  }, []);
  return (
    <>
      <div
        className="bg-cover bg-center h-[80vh] w-full flex items-end"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, rgba(245, 246, 252, 0.1) 40%, rgba(117, 19, 93, 1)),url('/images/ImagePlaceHolder.svg')",
        }}
      ></div>

      <section className="mx-auto max-w-7xl mt-14 px-4 sm:px-6 lg:px-16 relative top-[-10rem]">
        <div className="container justify-center lg:block md:block sm:justify-center xs:justify-center m-auto grid lg:grid-cols-1 lg:grid-rows-1 md:grid-cols-1 sm:grid-cols-1 xs:grid-cols-1 ">
          <div>
            <div className="flex lg:block md:block sm:justify-center xs:justify-center">
              <img src={info.avatar} alt="" className="w-[13rem]" />
            </div>
            <div className=" lg:items-end lg:flex lg:justify-between md:block sm:flex sm:justify-center xs:justify-center xs:flex-col md:flex-row lg:ml-0 md:ml-0 sm:ml-0 xs:ml-12 xs:items-center  ">
              <h1 className="text-[52px] font-semibold ">{info.name}</h1>
              <div className="xs:w-[80%] sm:w-[unset] gap-3 pt-[1rem] lg:flex md:flex mb-4">
                <div className="flex-1">
                  <CopyLinkComponent />
                </div>
                <div className="flex-1">
                  <button className="w-[100%] flex items-center gap-4 pl-8 pr-10 hover:pl-10 hover:pr-12 hover:bg-purple-700 mt-7 bg-transparent active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-2xl duration-500 border-2 border-purple-700 md:flex ">
                    <img src="/images/plus1.svg" alt="" />
                    <p className="font-semibold">Follow</p>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex gap-16">
              {artistPage.map(({ id, k, title }) => {
                return (
                  <div key={id}>
                    <h2 className="text-[22px] font-bold">{k}</h2>
                    <p className="text-[18px]">{title}</p>
                  </div>
                );
              })}
            </div>
            <p className=" my-5 text-[#858584] font-semibold text-[22px]">
              Bio
            </p>
            <p className="lg:text-[20px] md:text-[20px] sm:text-[20px] xs:text-[18px] mt-2">
              The internet's friendliest designer kid.
            </p>
            <div className="mt-5">
              <p className="text-[#858584] text-[20px] font-semibold">Links</p>
              <div className="flex gap-2 mt-2">
                {footerLogo.map(({ id, href, icons }) => {
                  return (
                    <div key={id}>
                      <a href={href} target="_blank">
                        <img src={icons} alt="" />
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <TabsDefaultComponent2 />
    </>
  );
};

export default ArtistPageComponent;
