import { TabsDefaultComponent } from "../../components/TabsDefaultComponent";
const RankingsComponent = () => {
  return (
    <>
      <header className="mx-auto max-w-7xl px-4 mt-8 sm:px-6 lg:px-8 mb-8 ">
        <h1 className="text-[27px] font-bold	">Top Creators</h1>
        <p className="text-[16px] mt-2 mb-12">
          Check out top ranking NFT artists on the NFT Marketplace.
        </p>

        <TabsDefaultComponent />
      </header>
    </>
  );
};

export default RankingsComponent;
