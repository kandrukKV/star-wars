import React, {useState} from "react";
import PropTypes from "prop-types";
import "./select.scss";

const Select = ({options}) => {
  const [isSelectOpen, setIsSelectOpen] = useState(false);

  return (
    <div
      className={`select${isSelectOpen ? ` select--open` : ``}`}
      onClick={() => setIsSelectOpen((current) => !current)}
    >
      <div className="select__label">Sex filter:</div>
      <div className="select__value">
        {options[2].label}
        <button className="select__btn">
          <span className="visually-hidden">Кнопка</span>
        </button>
      </div>
      <ul className="select__list">
        {
          options.map((item) => <li key={item.label} className="select__item">{item.label}</li>)
        }
      </ul>
    </div>
  );
};

export default Select;

Select.propTypes = {
  options: PropTypes.array
};
