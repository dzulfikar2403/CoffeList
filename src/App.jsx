import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllProducts from "./pages/AllProducts";
import AvailableProducts from "./pages/AvailableProducts";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<AllProducts />}/>
          <Route path="/available" element={<AvailableProducts />}/>
        </Routes>
      </Router>
    </>
  );
};

export default App;
