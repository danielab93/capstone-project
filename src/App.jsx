import styled from "styled-components";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { saveToLocal, loadFromLocal } from "./library/localStorage";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { restaurants, shops, beautyspots } from "./library/data.js";

import NewFirstScreen from "./components/NewFirstScreen";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 6000);
  }, []);

  return (
    <div>
      {loading ? (
        <NewFirstScreen />
      ) : (
        <div>
          <header>Test Test</header>

          <footer></footer>
        </div>
      )}
    </div>
  );
}

export default App;

/* --- STYLING --- */

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
