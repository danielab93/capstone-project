import styled from "styled-components";
import { useEffect, useState } from "react";
import { saveToLocal, loadFromLocal } from "./library/localStorage";

import NewFirstScreen from "./pages/NewFirstScreen";
import MainMenu from "./components/MainPage";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
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
