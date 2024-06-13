import React, { useState } from "react";
import PropTypes from "prop-types";
import { UserCircle, CaretRight, Info } from "@phosphor-icons/react";
import "./dropdown.css";
const Dropdown = ({
  label,
  labelVisibility,
  labelIconVisibility,
  leftIconVisiblity,
  required,
  helperText,
  text,
  activeItemIndex,
  onSelect,
}) => {
  const items = ["America", "London", "India", "brazil", "korea", "china"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(activeItemIndex);

  const toggleDropdown = () => setIsOpen(!isOpen);
  const handeSelect = (index) => {
    setSelectedIndex(index);
    onSelect(items[index]);
    setIsOpen(false);
  };

  return (
    <div className="dropdown">
      {/*   ======================
            Label and clear
            ======================     */}

      <div className="upperOfInput">
        <div className="clear">clear</div>
        {labelVisibility === "Visible" && (
          <label className="label">
            {label}
            {labelIconVisibility === "Visible" && <Info />}
            {required && <sup>*</sup>}
          </label>
        )}
      </div>

      {/*   ======================
            Input Box
            ======================     */}

      <div className="input-wrapper" onClick={toggleDropdown}>
        {leftIconVisiblity === "Visible" && (
          <UserCircle className="left-icon" size={24} />
        )}

        <input
          type="text"
          value={selectedIndex !== -1 ? items[selectedIndex] : text}
          readOnly
        />
        <CaretRight className="right-icon" size={24} />
      </div>
      {helperText && <div className="helper-text">{helperText}</div>}
      {isOpen && (
        <ul className="dropdown-list">
          {items.map((item, index) => (
            <li
              key={index}
              className={index === selectedIndex ? "active" : ""}
              onClick={() => handeSelect(index)}
            >
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.PropTypes = {
  label: PropTypes.string,
  labelVisibility: PropTypes.oneOf(["Visible", "Hidden"]),
  labelIconVisibility: PropTypes.oneOf(["Visible", "Hidden"]),
  required: PropTypes.bool,
  leftIconVisiblity: PropTypes.oneOf(["Visible", "Hidden"]),
  helperText: PropTypes.string,
  text: PropTypes.string,
  activeItemIndex: PropTypes.number,
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  onSelect: PropTypes.func,
};

Dropdown.defaultProps = {
  label: "",
  labelVisibility: "Visible",
  labelIconVisibility: "Hidden",
  required: false,
  leftIconVisiblity: "Visible",
  helperText: "",
  text: "",
  activeItemIndex: -1,
  onSelect: () => {},
};

export default Dropdown;
