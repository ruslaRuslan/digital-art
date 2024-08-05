import { Route, Routes } from "react-router";
import Home from "../pages/home/page";
import Connect from "../pages/connect/page";
import Rankings from "../pages/rankings/page";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </>
  );
};
export default Routing;
