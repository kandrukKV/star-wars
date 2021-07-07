import React from "react";
import "./search-name.scss";

const SearchName = () => {
  return (
    <form className="search-name">
      <label className="search-name__label" htmlFor="search-form">Search by name:</label>
      <input className="search-name__input" id="search-form" type="text"/>
    </form>
  );
};

export default SearchName;
