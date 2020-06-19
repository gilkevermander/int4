import React from "react";

import style from "./TextInputGroupApp.module.css";

const TextInputGroup = ({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  max
}) => {
  return (
    <>
      <label htmlFor={name} className="visually-hidden ">
        {label}
      </label>
      <input
        noValidate
        className={style.input}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        // maxLength={maxLength}
        onChange={onChange}
        required="required"
        autoComplete="off"
        max={max}
        
      />
    </>
  );
};

export default TextInputGroup;
