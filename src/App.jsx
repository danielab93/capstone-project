import { useEffect, useState } from "react";
import NewFirstScreen from "./pages/FirstScreen";
import MainPage from "./pages/MainPage";

function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 9000);
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
