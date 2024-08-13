import { useState } from "react";
import { TabsDefaultComponent3 } from "../TabsDefaultComponent3";
const MarketPleaseComponent = () => {
  const [search, setSearch] = useState<string>();

  return (
    <>
      <header className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 ">
        <h1 className="font-semibold text-[40px]">Browse Marketplace</h1>
        <p className="text-[18px]">
          Browse through more than 50k NFTs on the NFT Marketplace.
        </p>

        <form>
          <div className="flex">
            <div className="relative w-full mt-6">
              <input
                onChange={(event) => {
                  setSearch(event.target.value.toLowerCase());
                }}
                type="text"
                id="text"
                className="block p-2.5 w-full dark:border-[#3B3B3B]  text-sm text-gray-[#fff] bg-[transparent] rounded-[1rem]   border border-[#3B3B3B]  dark:placeholder-[#858584]           
               sm:w-full sm:pl-3 xs:pl-3 xs:w-full xs:py-[10px] bg-gray-50  text-[#fff]   focus:border-sky-100   dark:bg-[transparent] dark:text-[#fff] dark:focus:ring-blue-500 dark:focus:border-[#3B3B3B]  outline-none transition-all duration-500"
                placeholder="Search your favourite NFTs"
                required
              />
              <button
                type="submit"
                className="
                
                
                absolute rounded-r-[1rem] top-0 end-0 p-2.5 h-full text-sm font-medium text-white  rounded-e-lg border border-r-[#3B3B3B] border-b-[#3B3B3B] border-t-[#3B3B3B] border-l-[transparent] focus:outline-none "
              >
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </form>
      </header>
      <TabsDefaultComponent3 search={search as string} />
    </>
  );
};

export default MarketPleaseComponent;
