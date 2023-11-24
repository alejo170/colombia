import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import Departments from "./pages/Departments/Departments";
import TouristicAttraction from "./pages/TouristicAttraction/TouristicAttraction";
import Presidents from "./pages/Presidents/Presidents";
import Maps from "./pages/Maps/maps";
import InvasiveSpecie from "./pages/InvasiveSpecie/InvasiveSpecie";
import NativeCommunity from "./pages/NativeCommunity/NativeCommunity";
import Error404 from "./pages/Error404/Error404";
import Footer from "./components/Footer/Footer";
import ScrollButton from "./components/ScrollButton/ScrollButton";
import Logo from "./assets/logo.png";

function App() {
  return (
    <BrowserRouter>
      <Header logo={Logo} alt="Logo" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/departments" element={<Departments />} />
        <Route path="/touristic" element={<TouristicAttraction />} />
        <Route path="/presidents" element={<Presidents />} />
        <Route path="/maps" element={<Maps />} />
        <Route path="/invasive" element={<InvasiveSpecie />} />
        <Route path="/community" element={<NativeCommunity />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
      <ScrollButton />
    </BrowserRouter>
  );
}

export default App;
