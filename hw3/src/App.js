import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./style.css";

import Home from "./components/Home.js";
import List from "./components/List.js";
import Population from "./components/Population.js";
import Area from "./components/Area.js";

export default function App() {
  return (
    <Router>
      <nav className="navbar navbar-dark bg-dark navbar-expand">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/list">
              List
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/population">
              Population
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/area">
              Area
            </Link>
          </li>
        </ul>
      </nav>

      <Routes>
        <Route exact path="/" element={<Home title="Home" />} />
        <Route exact path="/list" element={<List title="List" />} />
        <Route
          exact
          path="/population"
          element={<Population title="Population" />}
        />
        <Route exact path="/area" element={<Area title="Area" />} />
      </Routes>
    </Router>
  );
}
