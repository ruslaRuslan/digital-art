import { useEffect, useState } from "react";
import { getFooterLogo, getNft_Page } from "../../utils/url";
import Countdown from "../Oclock2";
interface IFooterLogo2 {
  id: number;
  icons: string;
}

interface INft_Page {
  id: number;
  images: string;
  title: string;
  icons: string;
  user: string;
  wordPrice: string;
  rates: string;
  price: number;
  wt: string;
}

const NftPageComponent = () => {
  const [footerLogo, setFooterLogo] = useState<IFooterLogo2[]>([]);
  const [nft_Page, setNft_Page] = useState<INft_Page[]>([]);

  useEffect(() => {
    getFooterLogo().then((data) => {
      setFooterLogo(data);
    });
    getNft_Page().then((data) => {
      setNft_Page(data);
    });
  }, []);

  return (
    <>
      <header>
        <img
          src="/images/nftPageComponent.svg"
          alt=""
          className="w-[100%] mt-2"
        />
      </header>
      <section className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8 mb-8 ">
        <div className="container justify-center m-auto grid lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1  gap-[1rem]">
          <div>
            <h1 className="text-[40px] font-semibold	">The Orbitians</h1>
            <p className="text-[#858584]">Minted on Sep 30, 2022</p>
            <div className=" sm:my-3 xs:my-3 lg:hidden md:hidden sm:block xs:block ">
              <Countdown endTime={new Date(2024, 8, 2)} />
            </div>

            <div className=" my-3 flex gap-2 items-center">
              <img
                src="/images/rankingsAvatar16.svg"
                alt=""
                className="w-[20px] "
              />
              <p className="text-[#fff]">Orbitian</p>
            </div>
            <p className=" my-3 text-[#858584] font-semibold	">Description</p>
            <p className=" lg:w-[480px]">
              The Orbitians is a collection of 10,000 unique NFTs on the
              Ethereum blockchain,
            </p>
            <p className="my-3  lg:w-[400px]">
              There are all sorts of beings in the NFT Universe. The most
              advanced and friendly of the bunch are Orbitians.
            </p>
            <p className=" lg:w-[400px]">
              They live in a metal space machines, high up in the sky and only
              have one foot on Earth. These Orbitians are a peaceful race, but
              they have been at war with a group of invaders for many
              generations. The invaders are called Upside-Downs, because of
              their inverted bodies that live on the ground, yet do not know any
              other way to be. Upside-Downs believe that they will be able to
              win this war if they could only get an eye into Orbitian
              territory, so they've taken to make human beings their target.
            </p>
            <div>
              <p className="mb-2 text-[#858584]">Details</p>
              {footerLogo.slice(0, 1).map(({ id, icons }) => {
                return (
                  <div key={id}>
                    <div className="flex items-center gap-3">
                      <img src={icons} alt="" />
                      <p>View on Etherscan </p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={icons} alt="" />
                      <p>View Original</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-5">
              <p className="text-[#858584] font-extrabold">Tags</p>

              <div className=" lg:flex md:block sm:block xs:block gap-2">
                <button className="flex items-center gap-4  px-10 hover:pl-12 hover:bg-purple-700 mt-7 bg-[#3B3B3B] active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-3xl  duration-500  border-purple-700 font-semibold ">
                  ANIMATION
                </button>
                <button className="flex items-center gap-4  px-10 hover:pl-12 hover:bg-purple-700 mt-7 bg-[#3B3B3B] active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-3xl  duration-500  border-purple-700 font-semibold ">
                  ILLUSTRATION
                </button>
                <button className="flex items-center gap-4  px-10 hover:pl-12 hover:bg-purple-700 mt-7 bg-[#3B3B3B] active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-3xl  duration-500  border-purple-700 font-semibold ">
                  MOON
                </button>
                <button className="flex items-center gap-4  px-10 hover:pl-12 hover:bg-purple-700 mt-7 bg-[#3B3B3B] active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-3xl  duration-500  border-purple-700 font-semibold ">
                  MOON
                </button>
              </div>
            </div>
          </div>
          <div className="lg:block md:block sm:hidden xs:hidden">
            <Countdown endTime={new Date(2024, 9, 2)} />
          </div>
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8 mb-8 ">
        <div className="flex items-end justify-between">
          <h2 className="text-[38px] font-semibold	">More from this artist</h2>
          <button className="flex items-center gap-4 pl-8 pr-10 hover:pl-10 hover:pr-12 hover:bg-purple-700 mt-7 bg-transparent active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-2xl duration-500 border-2 border-purple-700 xs:hidden md:flex ">
            <img src="/images/arrow-right1.svg" alt="" />
            <a href={`/artist-page/1`} className="font-semibold">
              Go To Artist Page
            </a>
          </button>
        </div>
        <div className="container justify-center m-auto grid lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-16">
          {nft_Page.map(
            ({
              id,
              images,
              title,
              icons,
              user,
              wordPrice,
              rates,
              price,
              wt,
            }) => {
              return (
                <div
                  key={id}
                  data-aos="zoom-out-down"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="1000"
                >
                  <div className="mt-8 bg-[#3B3B3B] rounded-[20px]">
                    <img src={images} alt="" className="w-full object-cover" />
                    <div className="p-5">
                      <p className="text-xl	font-semibold">{title}</p>
                      <div className="flex items-end gap-3">
                        <img className="mt-4" src={icons} alt="" />
                        <p>{user}</p>
                      </div>
                      <div className="flex items-center justify-between mt-3 text-[#858584]">
                        <p>{wordPrice}</p>
                        <p>{rates}</p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p>{price} ETH</p>
                        <p>{wt}</p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </footer>
    </>
  );
};

export default NftPageComponent;
