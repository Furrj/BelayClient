import React, { useState } from "react";

//VIEWS
import LoginPage from "./views/LoginPage";
import RegisterPage from "./views/RegisterPage";
import HomePage from "./views/HomePage";

//LAYOUTS
import Navbar from "./layouts/Navbar";
import Footer from "./layouts/Footer";

interface IState {
  homePage: boolean;
  registerPage: boolean;
  loginPage: boolean;
}

const initState: IState = {
  homePage: true,
  registerPage: false,
  loginPage: false,
};

const resetState: IState = {
  homePage: false,
  registerPage: false,
  loginPage: false,
};

const App: React.FC = () => {
  const [views, setViews] = useState<IState>(initState);

  const openPage = (page: string): void => {
    const newViews: any = { ...resetState };
    newViews[page] = true;
    setViews(newViews);
  };

  return (
    <div>
      <Navbar clickRegister={openPage} />
      {views.homePage && <HomePage />}
      {views.loginPage && <LoginPage />}
      {views.registerPage && <RegisterPage />}
      <Footer />
    </div>
  );
};

export default App;
