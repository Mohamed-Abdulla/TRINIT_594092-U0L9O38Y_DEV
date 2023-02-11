import "./App.css";
import { Route, Routes } from "react-router-dom";
import Gvt_schemes from "./pages/Gvt_schemes";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/schemes" element={<Gvt_schemes />} />
    </Routes>
  );
}

export default App;
