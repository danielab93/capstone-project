import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate("/");
      // Redirect auf die Home
    }, 5000);
  }, []);

  return <img src="https://http.cat/404" />;
}

export default NotFound;
