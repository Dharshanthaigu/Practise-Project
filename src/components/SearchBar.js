import React from "react";
import Searchicon from "../assest/Searchicon.svg";

function SearchBar() {
  return (
    <div className="searchbar">
      <div className="searchtext">
        <input
          id="input"
          className="search_input"
          name="search"
          type="text"
          placeholder="Search a song of your choice"
        />
      </div>
      <button className="searchicon_box">
        <img src={Searchicon} alt="search" className="search" />
      </button>
    </div>
  );
}

export default SearchBar;
