import React from "react";
import Headphone from "../assest/vibrating-headphone 1 (1).png";

function HeroSection() {
  return (
    <div className="navbar" id="body">
      <div className="navText">
        <p className="text">100 Thousand Songs, ad-free</p>
        <p className="text">Over thousands podcast episodes</p>
      </div>
      <div className="navImage">
        <img src={Headphone} alt="Headphone" />
      </div>
    </div>
  );
}

export default HeroSection;
