import React, {useState} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import "./select.scss";
import {setSexFilterValueAction} from "../../store/actions";

const Select = ({options, sexFilterValue, setSexFilterValue}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <div
      className={`select${isSelectOpen ? ` select--open` : ``}`}
      onClick={() => setIsSelectOpen((current) => !current)}
    >
      <div className="select__label">Gender filter:</div>
      <div className="select__value">
        {sexFilterValue}
        <button className="select__btn">
          <span className="visually-hidden">Кнопка</span>
        </button>
      </div>
      <ul className="select__list">
        {
          options.map((item) => <li
            key={item.label}
            className="select__item"
            onClick={() => setSexFilterValue(item.value)}
          >{item.label}</li>)
        }
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sexFilterValue: state.sexFilterValue
});

const mapDispatchToProps = (dispatch) => ({
  setSexFilterValue(value) {
    dispatch(setSexFilterValueAction(value));
  },
});

Select.propTypes = {
  options: PropTypes.array.isRequired,
  sexFilterValue: PropTypes.string,
  setSexFilterValue: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Select);
