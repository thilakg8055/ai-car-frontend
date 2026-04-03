import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
function App() {

  useEffect(() => {
    // axios.get("http://localhost:5001")
    axios.get(`${API_URL}/api/diagnose`)
      .then(res => console.log(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <Home />
  );
}

export default App;