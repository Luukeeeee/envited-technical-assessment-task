import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import pages
import Home from "./pages/Home";
import Create from "./pages/Create";
import Event from "./pages/Event";

const Root = () => {
  return (
    <BrowserRouter basename={"/"}>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/event" element={<Event />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.render(<Root />, document.getElementById("root"));
