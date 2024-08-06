import Data from "../../Data.json";

const Footer = () => {
  return (
    <>
      <section className="bg-[#3B3B3B]  md:pr-20 lg:p-0">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:py-20 ">
          <div className="container p-8 rounded-2xl items-start justify-center m-auto grid lg:grid-cols-3 lg:grid-rows-1 md:grid-cols- sm:grid-cols-1 sm:row-span-3 xs:grid-cols-1 lg:gap-16 md:gap-12 xs:gap-3">
            <div>
              <div className="flex gap-2 items-center">
                <img src={Data.imageMarketplease} />
                <p className="text-xl">{Data.MarketplaceTitle}</p>
              </div>
              <div className="mt-6 text-[#CCCCCC]">
                <h2 className="mb-3 w-[220px]">
                  NFT marketplace UI created with Anima for Figma.
                </h2>
                <p className="mt-3 mb-3">Join our community</p>
                <div className="flex items-center gap-2">
                  {Data.footerLogo.map((element) => {
                    return (
                      <a target="_blank" key={element.id} href={element.href}>
                        <img src={element.icons} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl">Explore</h2>
              <div className="flex flex-col gap-1">
                {Data.explore.map(({ id, title, href }) => {
                  return (
                    <a className="mt-3 text-[#CCCCCC]" key={id} href={href}>
                      {title}
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="">
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
                  className="mt-5 lg:hidden  md:hidden sm:flex gap-2 justify-center  sm:py-[15px] xs:flex xs:gap-2 xs:justify-center xs:py-[10px] rounded-3xl text-white bg-purple-600 hover:bg-purple-600 hover:px-[4.5rem]  focus:ring-4 focus:outline-none focus:ring-purple-700  text-sm w-[100%] sm:w-full text-center dark:bg-purple-700 dark:hover:bg-purple-700 dark:focus:bg-purple-600 duration-500 "
                >
                  <img src="/images/messageIcon.svg" />
                  <p className="font-semibold	">Subscribe</p>
                </button>

                <button
                  type="submit"
                  className=" gap-2 -ml-12    lg:flex lg:py-[21px]  md:flex   md:py-4   sm:hidden xs:hidden  rounded-3xl text-white bg-purple-600 hover:bg-purple-600 hover:px-[4.5rem] md:hover:px-[2.5rem]   focus:ring-4 focus:outline-none focus:ring-purple-700  text-sm  sm:w-auto lg:px-9  py-[21px] text-center dark:bg-purple-700 dark:hover:bg-purple-700 dark:focus:bg-purple-600 duration-500 md:px-8 md:pl-[2rem]"
                >
                  <img src="/images/messageIcon.svg" />
                  <p className="font-semibold	">Subscribe</p>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
