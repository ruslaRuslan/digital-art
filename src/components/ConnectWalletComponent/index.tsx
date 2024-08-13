import { useState } from "react";
import { getConnect_wallet } from "../../utils/url";
interface IConnect_wallet {
  id: number;
  avatar: string;
  title: string;
}
const ConnectWalletComponent = () => {
  const [connect_wallet, setConnect_wallet] = useState<IConnect_wallet[]>([]);
  getConnect_wallet().then((data) => {
    setConnect_wallet(data);
  });
  return (
    <>
      <div className=" lg:mb-10 xs:mb-6 h-[100%] container justify-center m-auto grid lg:grid-cols-2 lg:grid-rows-1 md:grid-cols-2 md:grid-rows-1 sm:grid-cols-1 sm:grid-rows-2 xs:grid-cols-1 xs:grid-rows-1 gap-16 mt-8 ">
        <div data-aos="fade-right" data-aos-duration="2000">
          <img
            className="w-[100%] lg:h-auto md:h-[500px] overflow-auto"
            src="/images/connet.svg"
            alt=""
          />
        </div>
        <div className="lg:pt-12 md:pt-0">
          <div data-aos="fade-down" data-aos-duration="2000">
            <h1 className=" lg:text-[51px] md:text-[40px] sm:text-[40px] xs:text-[40px]  font-semibold">
              Connect wallet
            </h1>
          </div>
          <div data-aos="zoom-in-right" data-aos-duration="2000">
            <p className="lg:text-[22px] md:text-[18px] sm:text-[18px] xs:text-[18px] font-normal max-w-[380px]">
              Choose a wallet you want to connect. There are several wallet
              providers.
            </p>
          </div>
          <div>
            {connect_wallet.map(({ id, avatar, title }) => {
              return (
                <div key={id} data-aos="fade-up" data-aos-duration="2000">
                  <div className="mt-8 bg-[#3B3B3B] lg:w-[330px] md:w-[330px] sm:w-[330px] flex items-center gap-3 lg:p-4 md:p-3 sm:p-2 xs:p-2 xs:w-[100%] border-[1px] border-[#A259FF] rounded-[15px]">
                    <img src={avatar} alt="" />
                    <p className="text-[18px] font-semibold">{title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ConnectWalletComponent;
