import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import "./search-name.scss";
import {setSearchFieldValueAction} from "../../store/actions";

const SearchName = ({searchFieldValue, setSearchFieldValue}) => {

  return (
    <form
      className="search-name"
      onSubmit={(evt) => evt.preventDefault()}
    >
      <label className="search-name__label" htmlFor="search-form">Search by name:</label>
      <input
        className="search-name__input"
        id="search-form"
        type="text"
        value={searchFieldValue}
        onChange={(evt) => {
          setSearchFieldValue(evt.target.value);
        }}
      />
    </form>
  );
};

const mapStateToProps = (state) => ({
  searchFieldValue: state.searchFieldValue
});

const mapDispatchToProps = (dispatch) => ({
  setSearchFieldValue(value) {
    dispatch(setSearchFieldValueAction(value));
  }
});

SearchName.propTypes = {
  searchFieldValue: PropTypes.string,
  setSearchFieldValue: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchName);
