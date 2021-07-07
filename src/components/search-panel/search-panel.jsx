import React from "react";
import "./search-panel.scss";
import Select from "../select/select";
import {SearchOptions} from "../../const";
import SearchName from "../search-name/search-name";

const SearchPanel = () => {


  return (
    <div className="search-panel">
      <SearchName/>
      <Select options={SearchOptions}/>
    </div>
  );
};

export default SearchPanel;
