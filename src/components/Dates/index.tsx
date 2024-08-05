const TodayComponent = ({ props }: any) => {
  return (
    <>
      <div>
        {props.map(
          ({ id, count, avatar, name, percent, sold, volume }: any) => {
            return (
              <div
                key={id}
                className=" mt-5 flex items-center justify-between bg-[#3B3B3B] py-2 lg:pr-16 md:pr-15 sm:pr-14 xs:pr-2 rounded-[18px]"
              >
                <div className="flex items-center gap-2 ">
                  <div className="relative mb-7 mr-2">
                    <div className="absolute ml-2">
                      <span className="bg-[#2B2B2B] rounded-[50%] px-[16px] py-[6px] text-[#858584]">
                        <span className=" absolute left-[9px] text-[#858584]">
                          {count}
                        </span>
                      </span>
                    </div>
                  </div>
                  <img className="ml-9 w-[65px]" src={avatar} />
                  <h2 className=" lg:font-semibold lg:text-[22px] sm:font-medium sm:text-[16px] xs:text-[16px] xs:font-medium">
                    {name}
                  </h2>
                </div>
                <p className="text-[#00AC4F] lg:block md:block sm:hidden xs:hidden">
                  {percent}
                </p>
                <p className="lg:block md:hidden sm:hidden xs:hidden ">
                  {sold}
                </p>
                <p className="max-w-[205px]">{volume} ETH</p>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default TodayComponent;
