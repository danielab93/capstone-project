import styled from "styled-components";
import { css } from "@emotion/react";
import CircleLoader from "react-spinners/CircleLoader";
import { useEffect, useState } from "react";
import { saveToLocal, loadFromLocal } from "./library/localStorage";
import { Routes, Route, NavLink, Link } from "react-router-dom";
import { restaurants, shops, beautyspots } from "./library/data.js";

import logo from "./images/Logo_nacHHaltig.png";

import FirstScreen from "./components/Firstscreen";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div>
      {loading ? (
        <FirstScreen />
      ) : (
        <div>
          <header></header>
          <section>
            <h1>Amazing Restaurants</h1>
            {restaurants.map((restaurant) => (
              <p key={restaurant.id}>{restaurant.name}</p>
            ))}
            <img src={logo} alt="" />
          </section>

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

const MainContainer = styled.div`
  font-family: sans-serif;
  text-align: center;

  a {
    background: var(--first-color);
    color: var(--second-color);
    border-radius: 5px;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
  }

  a.active {
    background: var(--fourth-color);
    color: var(--second-color);
  }

  a:hover {
    background: var(--fourth-color);
  }
`;

const Header = styled.header`
  background: var(--third-color);
  padding: 1rem;
  margin-bottom: 0.5rem;
`;

const HeaderH1 = styled.h1`
  font-size: 1.5rem;
  margin-top: 0;
  header nav a {
    background: skyblue;
    color: white;
    border-radius: 5px;
    text-decoration: none;
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px;
  }
`;

const HeadlineH2 = styled.h2`
  background-color: var(--fourth-color);
  color: var(--second-color);
  border-radius: 10px;
  display: inline-block;
  padding: 1rem;
`;
