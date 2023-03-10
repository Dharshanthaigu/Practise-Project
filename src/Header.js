import React from "react";
import SearchBar from "./SearchBar";

const Title = () => {
  return (
    <div className="title">
      <span className="title">
        {/* <img src="../Images/headphone.png" className="logo" alt="Logo" /> */}
        <h4 className="logoname">Qtify</h4>
      </span>
    </div>
  );
};

const Header = () => {
  return (
    <div id="header" className="header">
      <div className="header_comp">
        <Title />
        <SearchBar />
        <div className="feedback">
          <button className="feedback_button">Give Feedback</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
