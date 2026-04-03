import { useEffect } from "react";
import axios from "axios";
import Home from "./pages/Home";
const API_URL = process.env.REACT_APP_API_URL;
function App() {

  // useEffect(() => {
  //   // axios.get("http://localhost:5001")
  //   axios.get(`${API_URL}/api/diagnose`, data)
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err));
  // }, []);
  // axios.post(`${API_URL}/api/diagnose`, data);
  axios.post(`${API_URL}/api/diagnose`, data)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  return (
    <Home />
  );
}

export default App;