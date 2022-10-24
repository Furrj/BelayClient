import React from "react";

//VIEWS
import Main from "./views/Main";
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Main />
      <Footer />
    </div>
  );
};

export default App;
