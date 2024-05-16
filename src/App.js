import logo from "./logo.svg";
import "./App.css";
import Login from "./Pages/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route Component={Login} exact path="/" />
      </Routes>
    </Router>
  );
}

export default App;
