import React from "react";
import Button from "./Button";
import SearchBar from "./SearchBar";
import LogoImage from "../assest/logo.png";

const Title = () => {
  return (
    <div className="title">
      <img src={LogoImage} alt="Logo" id="logoImage" />
    </div>
  );
};

function Header() {
  return (
    <div className="Header">
      <div className="Heading">
        <Title />
        <SearchBar />
        <Button />
      </div>
    </div>
  );
}

export default Header;
