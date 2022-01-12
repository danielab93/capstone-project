import styled from "styled-components";
import { useEffect, useState } from "react";
import { saveToLocal, loadFromLocal } from "./library/localStorage";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { restaurants, shops, beautyspots } from "./library/data.js";

import NewFirstScreen from "./pages/FirstScreen";
import MainPage from "./pages/MainPage";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      {loading ? (
        <NewFirstScreen />
      ) : (
        <div>
          <MainPage />
        </div>
      )}
    </div>
  );
}

export default App;
