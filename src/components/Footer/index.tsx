import { useEffect, useState } from "react";
import {
  getExplore,
  getFooterLogo,
  getImageMarketplease,
} from "../../utils/url";

interface IGetImageMarketplease {
  id: number;
  image: string;
}
interface IExplore {
  id: number;
  title: string;
  href: string;
  images: string;
}
interface IFooterLogo {
  id: number;
  href: string;
  icons: string;
}

const Footer = () => {
  const [imageMarketplease, setImageMarketplease] = useState<
    IGetImageMarketplease[]
  >([]);
  const [explore, setExplore] = useState<IExplore[]>([]);
  const [footerLogo, setFooterLogo] = useState<IFooterLogo[]>([]);

  useEffect(() => {
    getImageMarketplease().then((data) => {
      setImageMarketplease(data);
    });
    getExplore().then((data) => {
      setExplore(data);
    });
    getFooterLogo().then((data) => {
      setFooterLogo(data);
    });
  }, []);
  return (
    <>
      <section className="bg-[#3B3B3B]  md:pr-20 lg:p-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-20 ">
          <div className="container p-8 rounded-2xl items-start justify-center m-auto grid lg:grid-cols-3 lg:grid-rows-1 md:grid-cols- sm:grid-cols-1 sm:row-span-3 xs:grid-cols-1 lg:gap-16 md:gap-12 xs:gap-3">
            <div>
              <div className="flex gap-2 items-center">
                {imageMarketplease.map(({ id, image }) => {
                  return (
                    <img key={id} src={image} alt="" className="h-[45px]" />
                  );
                })}
                {explore.slice(0, 1).map(({ id, title, href }) => {
                  return (
                    <div key={id}>
                      <a href={href}>{title}</a>
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 text-[#CCCCCC]">
                <h2 className="mb-3 w-[220px]">
                  NFT marketplace UI created with Anima for Figma.
                </h2>
                <p className="mt-3 mb-3">Join our community</p>
                <div className="flex items-center gap-2">
                  {footerLogo.slice(1).map(({ id, href, icons }) => {
                    return (
                      <a target="_blank" key={id} href={href}>
                        <img src={icons} alt="" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl">Explore</h2>
              <div className="flex flex-col gap-1">
                {explore.slice(1).map(({ id, title, href }) => {
                  return (
                    <a className="mt-3 text-[#CCCCCC]" key={id} href={href}>
                      {title}
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-semibold">Join Our Weekly Digest</h2>
              <p className="my-7">
                Get exclusive promotions & updates straight to your inbox.
              </p>

              <form className=" w-[100%]   md:flex sm:block ">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="lg:px-6 lg:py-[20px] md:w-[220px] md:py-[15px] md:px-5 sm:py-[15px] sm:w-full sm:pl-3 xs:pl-3 xs:w-full xs:py-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-purple-700 focus:border-sky-100 block  dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500  outline-none transition-all duration-500"
                  placeholder="Enter your email here"
                  required
                />

                <button
                  type="submit"
                  className=" lg:mt-0 md:mt-0 sm:mt-2 xs:mt-2  sm:py-[15px]  xs:gap-2 xs:justify-center xs:py-[10px] gap-2 lg:-ml-12 md:-ml-12 sm:ml-0 lg:flex lg:py-[21px]  md:flex   md:py-4   sm:flex sm:w-full xs:flex lg:w-auto md:w-auto xs:w-full  rounded-3xl text-white bg-purple-600 hover:bg-purple-600 hover:px-[4.5rem] md:hover:px-[2.5rem]   focus:ring-4 focus:outline-none focus:ring-purple-700  text-sm   lg:px-9  py-[21px] text-center dark:bg-purple-700 dark:hover:bg-purple-700 dark:focus:bg-purple-600 duration-500 md:px-8 md:pl-[2rem]"
                >
                  <img src="/images/messageIcon.svg" alt="" />
                  <p className="font-semibold	">Subscribe</p>
                </button>
              </form>
            </div>
          </div>
          <p className="border-t-2 border-[#858584] lg:pt-1 lg:pb-9 md:pt-2 md:pb-5 sm:pt-1 sm:pb-3 xs:pb-5"></p>
          <p className="pb-5">Ⓒ NFT Market. Use this template freely.</p>
        </div>
      </section>
    </>
  );
};

export default Footer;
