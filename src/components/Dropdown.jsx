import React from "react";
import PropTypes from "prop-types";
import { UserCircle, CaretRight } from "@phosphor-icons/react";
import "./dropdown.css";
// import { useState, useRef } from "react";
const Dropdown = ({ label, labelVisibility }) => {
  return (
    <div className="dropdown">
      {/*   ======================
            Label and clear
            ======================     */}

      <div className="flex justify-between">
        {labelVisibility === "Visible" && <label>{label}</label>}
        <div>clear</div>
      </div>

      {/*   ======================
            Input Box
            ======================     */}

      <div className="input-wrapper">
        <UserCircle className="left-icon" size={24} />
        <input className="w-full" type="text" placeholder="Lorem Ipsum"></input>
        <CaretRight className="right-icon" size={24} />
      </div>
    </div>
  );
};

Dropdown.PropTypes = {
  label: PropTypes.string,
  labelVisibility: PropTypes.oneOf(["Visible", "Hidden"]),
};

Dropdown.defaultProps = {
  label: "",
  labelVisibility: "Visible",
};

export default Dropdown;
