import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashBoard from "./Pages/DashBoard";

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={Login} exact path="/" />
      </Routes>
      <Routes>
        <Route Component={DashBoard} exact path="/dash-board" />
      </Routes>
    </Router>
  );
}

export default App;
