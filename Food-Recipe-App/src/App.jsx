import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import Details from "./pages/Details/Details";
import Favourites from "./pages/Favourires/Favourites";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
        <Route path="/recipe-item/:id" element={<Details />} />
      </Routes>
    </>
  );
}

export default App;
