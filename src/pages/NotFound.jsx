import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/", { message: "Ups, hier geht es wohl nicht weiter" });
      // Redirect auf die Home
    }, 4000);
  }, []);

  return <img src="https://http.cat/404" />;
}

export default NotFound;
