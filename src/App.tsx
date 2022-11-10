import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//VIEWS
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import HomePage from "./views/HomePage";

//LAYOUTS
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
