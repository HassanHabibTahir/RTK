import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import BarSection from "./components/barSection/BarSection";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import WhitePaper from "./components/whitePaper/WhitePaper";
import Data from "./components/data/Data";
function App() {
  return (
    <>
        <Data/>
      {/* <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/Go to IDO launchpad" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/Whitepaper" element={<WhitePaper />} />
          <Route path="/Voting" element={<BarSection />} />
        </Routes>
      </BrowserRouter> */}
    </>
  );
}

export default App;
