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
  type,
}) => {
  const items = ["America", "London", "India", "brazil", "korea", "china"];
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(activeItemIndex);
  const [selectedItems, setSelectedItems] = useState([]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handeSelect = (index) => {
    if (type === "Multi") {
      const newSelectedItems = selectedItems.includes(items[index])
        ? selectedItems.filter((item) => item !== items[index])
        : [...selectedItems, items[index]];
      setSelectedItems(newSelectedItems);
      onSelect(newSelectedItems);
    } else {
      setSelectedIndex(index);
      onSelect(items[index]);
      setIsOpen(false);
    }
  };

  return (
    <div className="dropdown">
      {/*   ======================
            Label and clear
            ======================     */}

      <div className="upperOfInput">
        <div className="clear" onClick={() => setSelectedItems([])}>
          clear
        </div>
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
          className="inputbox"
          type="text"
          placeholder={text}
          value={
            type === "Multi"
              ? selectedItems.join(",")
              : selectedIndex !== -1
                ? items[selectedIndex]
                : text
          }
          readOnly
        />
        <CaretRight className="right-icon" size={24} />
      </div>
      {helperText && <div className="helper-text">{helperText}</div>}
      {isOpen && (
        <div className="dropdown-list">
          {items.map((item, index) => (
            <label
              key={index}
              className={index === selectedIndex ? "active" : ""}
            >
              {type === "SingleNoIcon" && (
                <input
                  className="SingleNoIcon"
                  type="radio"
                  name="dropdown"
                  checked={selectedIndex === index}
                  onChange={() => handeSelect(index)}
                />
              )}
              {type === "SingleRadio" && (
                <input
                  type="radio"
                  name="dropdown"
                  checked={selectedIndex === index}
                  onChange={() => handeSelect(index)}
                />
              )}
              {type === "Multi" && (
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item)}
                  onChange={() => handeSelect(index)}
                />
              )}
              {item}
            </label>
          ))}
        </div>
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
  type: PropTypes.oneOf(["SingleNoIcon", "SingleRadio", "Multi"]),
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
  type: "SingleNoIcon",
};

export default Dropdown;
