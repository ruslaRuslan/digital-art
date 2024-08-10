import Data from "../../Data.json";

const NftPageComponent = () => {
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

            <img
              src="/images/gobelek.png"
              alt=""
              className=" sm:my-3 xs:my-3 lg:hidden md:hidden sm:block xs:block "
            />
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
              {Data.footerLogo.slice(0, 1).map((element) => {
                return (
                  <div key={element.id}>
                    <div className="flex items-center gap-3">
                      <img src={element.icons} alt="" />
                      <p>View on Etherscan</p>
                    </div>
                    <div className="flex items-center gap-3 mt-2">
                      <img src={element.icons} alt="" />
                      <p>View Original</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div className="mt-5">
              <p className="text-[#858584] font-extrabold		 ">Tags</p>

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
          <div>
            <img
              src="/images/gobelek.png"
              alt=""
              className="lg:block md:block sm:hidden xs:hidden"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default NftPageComponent;
