import React from "react";
import logo from "../assets/sante-logo.png";

const AppLoading = () => {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <img className="logo" src={logo} alt="logo" />
    </div>
  );
};

export default AppLoading;
