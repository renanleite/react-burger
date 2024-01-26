import React from "react";

import { HashRouter as Router, Routes, Route } from "react-router-dom";

import { Home } from "./pages/home";
import { Stock } from "./pages/stock";
import { Layout } from "./Layout";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout/>}>
          <Route path="/" element={<Home />} />
          <Route path="/stock" element={<Stock />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
