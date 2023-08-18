import { useEffect, useState } from "react";
import { useCountry } from "./context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import SingleCountry from "./components/SingleCountry";
import Home from "./components/Home";
function App() {
  return (
    <div className=" h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:country" element={<SingleCountry />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
