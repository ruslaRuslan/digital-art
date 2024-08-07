import { motion } from "framer-motion";
import Data from "../../Data.json";
import styles from "../../styles.module.css";
import Countdown from "../Oclock";
import TrendingCollections from "../TrendingCollections";

const HomeComponent = () => {
  const trendingItem = Data.TopCreators.find((item) => item.id === 7);
  return (
    <>
      <header className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8 ">
        <div className="flex items-center">
          <div className="grid md:grid-cols-2">
            <motion.div
              initial={{
                x: -100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="h-full pr-6"
            >
              <h1 className="text-7xl font-semibold">
                Discover Digital Art & Collect NFTs
              </h1>
              <p className="mt-8 text-xl">
                NFT marketplace UI created with Anima for Figma. Collect, buy,
                and sell art from more than 20k NFT artists.
              </p>
              <div className={styles.hideXsStylesModule}>
                <button className="flex items-center mt-7 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... p-3 rounded-2xl">
                  <img src="/images/rocketLaunch.svg" />
                  <p className="font-semibold">Get Started</p>
                </button>
                <div className="flex items-center gap-5 mt-8 ">
                  {Data.statistics.map(({ id, title, count }) => {
                    return (
                      <div key={id}>
                        <p className="font-bold">{count}</p>
                        <p>{title}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </motion.div>

            <motion.div
              className="card h-fit max-w-6xl p-5 md:p-12 flex md:justify-end justify-center"
              id="form"
              initial={{
                x: 100,
                opacity: 0,
              }}
              animate={{
                x: 0,
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="mx-0 mb-1 sm:mb-4 ">
                <div className="max-w-sm rounded-xl overflow-hidden shadow-lg">
                  <div className="relative overflow-hidden bg-cover ">
                    <img
                      src="/images/rocketLaunch2.svg"
                      className=" transition duration-300 ease-in-out hover:scale-110 "
                      alt="Louvre"
                    />
                  </div>

                  <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">
                      <p>Space Walking</p>
                    </div>
                  </div>
                  <div className="px-6 pt-4 pb-5 flex gap-2">
                    <img src="/images/animakid.svg" />
                    <p>Animakid</p>
                  </div>
                </div>
                <div className="lg:hidden md:hidden sm:hidden xs:block">
                  <button className="flex items-center justify-center w-full mt-7 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ... p-3 rounded-2xl ">
                    <img src="/images/rocketLaunch.svg" />
                    <p className="font-semibold">Get Started</p>
                  </button>
                  <div className="flex items-center justify-center gap-5 mt-8 ">
                    {Data.statistics.map(({ id, title, count }) => {
                      return (
                        <div key={id}>
                          <p className="font-bold">{count}</p>
                          <p>{title}</p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8 lg:py-20">
        <div className="mt-1 mb-9 pl-16">
          <h2 className="font-bold text-2xl">Trending Collection</h2>
          <p>Checkout our weekly updated trending collection.</p>
        </div>
        <TrendingCollections />
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="text-2xl font-semibold">Top creators</h2>
            <p className="mt-1">
              Checkout Top Rated Creators on the NFT Marketplace
            </p>
          </div>
          <button className="flex items-center gap-4 pl-8 pr-10 hover:pl-10 hover:pr-12 hover:bg-purple-700 mt-7 bg-transparent active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-2xl duration-500 border-2 border-purple-700 xs:hidden md:flex ">
            <img src="/images/rankings.svg" />
            <p className="font-semibold">View Rankings</p>
          </button>
        </div>

        <div className="container justify-center m-auto grid lg:grid-cols-4 lg:grid-rows-3 md:grid-cols-2 sm:grid-cols-2 xs:grid-cols-1 ">
          {Data.TopCreators.map(({ id, count, avatar, username, price }) => {
            return (
              <div
                key={id}
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="flex hover:scale-110 duration-500">
                  <div className="m-6 w=[100%] bg-[#3B3B3B] rounded-[17px]">
                    <div className="mt-4  relative">
                      <div className="absolute ml-2">
                        <span className="bg-[#2B2B2B] rounded-[50%] px-[16px] py-[6px] text-[#858584]">
                          <span className=" absolute left-[9px] text-[#858584]">
                            {count}
                          </span>
                        </span>
                      </div>
                      <div className="pb-5 px-10 text-center xs:w-[100%] xs:flex md:flex lg:block">
                        <div className="flex justify-center">
                          <img className="w-28" src={avatar} alt="" />
                        </div>
                        <div>
                          <p className="font-semibold	text-xl	mt-3">{username}</p>
                          <div className="flex items-center justify-center gap-3">
                            <p className={styles.custom}>
                              <span className="text-[#858584]">
                                Total Sales:{" "}
                              </span>
                              {price}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-center lg:hidden md:hidden xs:flex">
          <button className="flex items-center gap-4 pl-8 pr-10 hover:pl-10 hover:pr-12 hover:bg-purple-700 mt-7 bg-transparent active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-2xl duration-500 border-2 border-purple-700   ">
            <img src="/images/rankings.svg" />
            <p className="font-semibold">View Rankings</p>
          </button>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-4xl	font-semibold">Browse Categories</h2>
        <div className="container justify-center m-auto grid lg:grid-cols-4 lg:grid-rows-2 md:grid-cols-4 sm:grid-cols-2 xs:grid-cols-2 gap-4">
          {Data.categories.map(({ id, images, iconHover, title }) => {
            return (
              <div
                key={id}
                data-aos="zoom-in"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="mt-8 bg-[#3B3B3B] rounded-[25px]">
                  <div
                    key={id}
                    className="relative w-full  group  rounded-tl-[inherit] rounded-tr-[inherit]"
                  >
                    <img
                      src={images}
                      className="w-full object-cover rounded-tl-[inherit] rounded-tr-[inherit]"
                    />
                    <div className="absolute inset-0 flex justify-center items-center bg-black bg-opacity-50 text-white text-2xl font-bold opacity-0 group-hover:opacity-100  duration-1000   rounded-tl-[inherit] rounded-tr-[inherit] backdrop-blur-[5px]">
                      <img
                        className=" rounded-tl-[inherit] rounded-tr-[inherit]"
                        src={iconHover}
                      />
                    </div>
                  </div>
                  <p
                    className={`${styles.text16} text-[22px] font-bold p-[15px] `}
                  >
                    {title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8 lg:py-20">
        <div className="flex items-end justify-between mb-5">
          <div>
            <h2 className="font-bold text-4xl">Discover More NFTs</h2>
            <p className="mt-3 text-xl">Explore new trending NFTs</p>
          </div>

          <div
            data-aos="fade-down-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <button className="flex items-center gap-4 pl-8 pr-10 hover:pl-10 hover:pr-12 hover:bg-purple-700 mt-7 bg-transparent active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-2xl duration-500 border-2 border-purple-700 md:flex xs:hidden">
              <img src="/images/eye.svg" />
              <p className="font-semibold">See All</p>
            </button>
          </div>
        </div>
        <div className="container justify-center m-auto grid lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-16">
          {Data.discoverMore
            .slice(0, 3)
            .map(
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
                    data-aos-duration="2000"
                  >
                    <div className="mt-8 bg-[#3B3B3B] rounded-[20px]">
                      <img src={images} className="w-full object-cover" />
                      <div className="p-5">
                        <p className="text-xl	font-semibold">{title}</p>
                        <div className="flex items-end gap-3">
                          <img className="mt-4" src={icons} />
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
      </section>
      <section className="mt-16 relative">
        <div
          className=" bg-cover bg-center h-screen w-full flex items-end"
          style={{
            backgroundImage:
              "linear-gradient(to bottom, rgba(245, 246, 252, 0.1) 40%, rgba(117, 19, 93, 1)),url('images/gobelek.png')",
          }}
        >
          <div className="mx-auto w-full px-4 sm:px-6 lg:px-8 lg:py-20">
            <div
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <div className="mb-5 rounded-3xl	py-2 px-4 inline-flex items-center gap-2 bg-[#2B2B2B]">
                <img className="w-6 flex" src={trendingItem?.avatar} />
                <p className="">{trendingItem?.username}</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between">
              <div
                data-aos="fade-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className={styles.bottom1025}>
                  <h2 className="font-semibold	text-5xl">Magic Mashrooms</h2>
                  <button className="flex items-center gap-4 pl-8 pr-10 hover:pl-10 hover:pr-12  mt-7 bg-slate-100 active:bg-violet-800 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-2xl duration-500 border-2  xs:hidden md:flex ">
                    <img src="/images/eye.svg" />
                    <p className="font-semibold text-black">See All</p>
                  </button>
                </div>
              </div>

              <div>
                <div
                  data-aos="fade-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <Countdown endTime={new Date(2024, 7, 6)} />
                </div>
              </div>
              <div className="flex lg:hidden md:hidden xs:flex mb-6">
                <div
                  data-aos="flip-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <button className="flex items-center gap-4 text-black	 pl-8 pr-10 hover:pl-10 hover:pr-12 hover:bg-purple-700 mt-7 bg-slate-100 active:bg-violet-400 focus:outline-none focus:ring focus:ring-purple-700 ... p-3 rounded-2xl duration-500    ">
                    <img src="/images/eye.svg" />
                    <p className="font-semibold">See All</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-3xl	">How it works</h2>
        <p className="text-lg	">Find out how to get started</p>
        <div className="container justify-center m-auto grid lg:grid-cols-3 lg:grid-rows-1 md:grid-cols-3 sm:grid-cols-1 xs:grid-cols-1 gap-16 mt-8 ">
          {Data.howItWorksIcon.map(({ id, images, title, text }) => {
            return (
              <div
                key={id}
                data-aos="flip-up"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <div className="transform  transition duration-500 hover:scale-[1.1] flex justify-center items-center">
                  <div className="rounded-3xl lg:block md:block xs:flex lg:h-[420px] md:h-96 xs:h-auto bg-[#3B3B3B] ">
                    <div className="flex justify-center">
                      <img src={images} />
                    </div>
                    <div className="lg:px-10 md:px-10, xs:px-2 lg:pb-8 md:pb-2 xs:pb-5 lg:text-center md:text-center xs:text-start  ">
                      <h2 className="text-2xl font-semibold	 lg:mt-0 md:mt-0 xs:mt-9">
                        {title}
                      </h2>
                      <p>{text}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <footer className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8 lg:py-20 lg:mb-0 md:mb-10 sm:mb-0">
        <div className=" lg:bg-[#3B3B3B] md:bg-[#3B3B3B] xs:bg-transparent container p-8 rounded-2xl items-center justify-center m-auto grid lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 lg:gap-16 md:gap-12 xs:gap-3">
          <div
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
          >
            <div className="w-full flex items-center justify-center p-2">
              <div className="transform  transition duration-500 hover:scale-110 flex justify-center items-center">
                <img src="/images/photoInCosmos.svg" />
              </div>
            </div>
          </div>

          <div className=" relative max-w-[300px]">
            <div
              data-aos="zoom-in-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
            >
              <h2 className="text-4xl	font-semibold	">Join Our Weekly Digest</h2>
              <p className="text-lg	 mt-6">
                Get exclusive Eromotions & Updates Straight To Your Inbox.
              </p>
              <form className=" lg:flex md:block sm:block xs:block mt-6">
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="lg:px-12 lg:py-[20px] md:w-full md:py-[15px] md:px-5 sm:py-[15px] sm:w-full sm:pl-3 xs:pl-3 xs:w-full xs:py-[10px] bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-purple-700 focus:border-sky-100 block  dark:bg-white dark:border-gray-600 dark:placeholder-black dark:text-gray-900 dark:focus:ring-blue-500 dark:focus:border-blue-500  outline-none transition-all duration-500"
                  placeholder="Enter your email here"
                  required
                />

                <button
                  type="submit"
                  className="mt-5 lg:hidden md:flex md:justify-center md:gap-2 sm:flex gap-2 justify-center md:py-[15px]  md:w-full sm:py-[15px]  xs:flex xs:gap-2 xs:justify-center xs:py-[10px] rounded-3xl text-white bg-purple-600 hover:bg-purple-600 hover:px-[4.5rem]  focus:ring-4 focus:outline-none focus:ring-purple-700  text-sm w-full sm:w-full text-center dark:bg-purple-700 dark:hover:bg-purple-700 dark:focus:bg-purple-600 duration-500 "
                >
                  <img src="/images/messageIcon.svg" />
                  <p className="font-semibold	">Subscribe</p>
                </button>

                <button
                  type="submit"
                  className=" gap-2 absolute lg:flex md:hidden sm:hidden xs:hidden left-[12rem] rounded-3xl text-white bg-purple-600 hover:bg-purple-600 hover:px-[4.5rem]  focus:ring-4 focus:outline-none focus:ring-purple-700  text-sm w-full sm:w-auto px-16 py-[21px] text-center dark:bg-purple-700 dark:hover:bg-purple-700 dark:focus:bg-purple-600 duration-500 "
                >
                  <img src="/images/messageIcon.svg" />
                  <p className="font-semibold	">Subscribe</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default HomeComponent;
