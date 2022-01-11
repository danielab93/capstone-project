import styled from "styled-components";
import { useEffect, useState } from "react";
import { saveToLocal, loadFromLocal } from "./library/localStorage";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { restaurants, shops, beautyspots } from "./library/data.js";

import NewFirstScreen from "./pages/FirstScreen";
import MainMenu from "./components/MainPage";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <div>
      {loading ? (
        <NewFirstScreen />
      ) : (
        <div>
          <MainMenu />
        </div>
      )}
    </div>
  );
}

export default App;

/* --- STYLING --- */
