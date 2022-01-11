import { Routes, Route, NavLink, Link } from "react-router-dom";
import MainMenu from "../components/MainMenu";

import Restaurants from "../pages/Restaurants";
import Shopping from "../pages/Shopping";
import Beauty from "../pages/Beauty";
import Favourites from "../pages/Favourites";
import Calculator from "../pages/Calculator";
import NotFound from "../pages/NotFound";

function MainPage() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainMenu />
            </>
          }
        />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/shopping" element={<Shopping />} />
        <Route path="/beauty" element={<Beauty />} />
        <Route path="/favoriten" element={<Favourites />} />
        <Route path="/co2-rechner" element={<Calculator />} />

        <Route path="/*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default MainPage;
