"use client";
import Data from "../../Data.json";
import styles from "../../styles.module.css";
import { motion } from "framer-motion";
import TrendingCollections from "../TrendingCollections";
const HomeComponent = () => {
  return (
    <>
      <div className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8 ">
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
                  <img src="/images/rocketLaunch2.svg" />
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
      </div>

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
              <div key={id} className="flex hover:scale-110 duration-500">
                <div
                  className="m-6 xs:w-[100%] md:w-[100%]"
                  style={{
                    maxWidth: "100%",
                    background: "#3B3B3B",
                    borderRadius: 17,
                  }}
                >
                  <div className="mt-4  relative">
                    <div className="absolute ml-2">
                      <span
                        style={{
                          backgroundColor: "#2B2B2B",
                          borderRadius: "50%",
                          paddingRight: 16,
                          paddingLeft: 16,
                          paddingTop: 6,
                          paddingBottom: 6,
                          color: "#858584",
                        }}
                      >
                        <span
                          className=" absolute"
                          style={{
                            left: 9,
                            color: "#858584",
                          }}
                        >
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
                            <span style={{ color: "#858584" }}>
                              Total Sales:
                            </span>{" "}
                            {price}
                          </p>
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
    </>
  );
};
export default HomeComponent;
