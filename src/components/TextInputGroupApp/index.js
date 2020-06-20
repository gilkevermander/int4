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

  // const [clear, setClearState] = useState("");

//  const clear = (e) => {
//   e.preventDefault()
//     const value = [{name}].value 
//     console.log(value)
//     [{name}].value = "" // reset the value of the "fullname" text input
//     window.render() // redraw UI here
//   } 
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
      {/* <button onClick={clear} value="" > x </button> */}
    </>
  );
};

export default TextInputGroup;
