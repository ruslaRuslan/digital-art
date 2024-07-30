import { Route, Routes } from "react-router";
import Home from "../pages/home/page";
import About from "../pages/about/page";
import Connect from "../pages/connect/page";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>
    </>
  );
};

export default Routing;
