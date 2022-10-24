import React from "react";

//VIEWS
import LoginPage from "./views/LoginPage";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <LoginPage />
      <Footer />
    </div>
  );
};

export default App;
