import React from "react";
import PropTypes from "prop-types";
import { UserCircle, CaretRight, Info } from "@phosphor-icons/react";
import "./dropdown.css";
// import { useState, useRef } from "react";
const Dropdown = ({
  label,
  labelVisibility,
  labelIconVisibility,
  leftIconVisiblity,
  required,
}) => {
  return (
    <div className="dropdown">
      {/*   ======================
            Label and clear
            ======================     */}

      <div className="upperOfInput">
        {labelVisibility === "Visible" && (
          <label className="label">
            {label}
            {labelIconVisibility === "Visible" && <Info />}
            {required && <sup>*</sup>}
          </label>
        )}
        <div className="clear">clear</div>
      </div>

      {/*   ======================
            Input Box
            ======================     */}

      <div className="input-wrapper">
        {leftIconVisiblity === "Visible" && (
          <UserCircle className="left-icon" size={24} />
        )}

        <input className="w-full" type="text" placeholder="Lorem Ipsum"></input>
        <CaretRight className="right-icon" size={24} />
      </div>
    </div>
  );
};

Dropdown.PropTypes = {
  label: PropTypes.string,
  labelVisibility: PropTypes.oneOf(["Visible", "Hidden"]),
  labelIconVisibility: PropTypes.oneOf(["Visible", "Hidden"]),
  required: PropTypes.bool,
  leftIconVisiblity: PropTypes.oneOf(["Visible", "Hidden"]),
};

Dropdown.defaultProps = {
  label: "",
  labelVisibility: "Visible",
  labelIconVisibility: "Hidden",
  required: false,
  leftIconVisiblity: "Visible",
};

export default Dropdown;
