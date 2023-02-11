import "./App.css";
import { Route, Routes } from "react-router-dom";
import Gvt_schemes from "./pages/Gvt_schemes";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import FarmingTech from "./pages/FarmingTech";
import Hybrid from "./pages/Hybrid";
import CropsInfo from "./pages/CropsInfo";
import HowToPlant from "./pages/HowToPlant";
import { Kharif, RABI } from "./utils/crops";

function App() {
  return (
    <div className="px-16  ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/schemes" element={<Gvt_schemes />} />
        <Route path="/farmingtech" element={<FarmingTech />} />
        <Route path="/hybrid" element={<Hybrid />} />
        <Route path="/cropsknowledge" element={<CropsInfo />} />
        {RABI.map((crop) => (
          <Route path={`/${crop.title}`} element={<HowToPlant />} />
        ))}
        {Kharif.map((crop) => (
          <Route path={`/${crop.title}`} element={<HowToPlant />} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
