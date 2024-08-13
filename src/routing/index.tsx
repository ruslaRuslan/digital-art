import { Route, Routes } from "react-router";
import Home from "../pages/home/page";
import Connect from "../pages/connect/page";
import Rankings from "../pages/rankings/page";
import SignUp from "../pages/sign-up/page";
import ArtistPage from "../pages/artist-page/page";
import MarketPlease from "../pages/market-please/page";
import NftPage from "../pages/nft-page/page";
import NotFound404 from "../pages/not-found/page";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/connect" element={<Connect />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/artist-page/:id" element={<ArtistPage />} />
        <Route path="/market-please" element={<MarketPlease />} />
        <Route path="/nft-page" element={<NftPage />} />
        <Route path="/*" element={<NotFound404 />} />
      </Routes>
    </>
  );
};
export default Routing;
