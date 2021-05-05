import React, { useState } from "react";
import PropTypes from "prop-types";

export default function AddCategory({ setCategorias }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputValue = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    //Para evitar que se envie todo el formulario y se recargue la pagina
    e.preventDefault();
    if (inputValue.trim().length > 2) {
      setCategorias((c) => [inputValue, ...c]);
      setInputValue("");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* <h1>{ inputValue }</h1> */}
        <h2>Add Category</h2>
        <input type="text" value={inputValue} onChange={handleInputValue} />
      </form>
    </>
  );
}

AddCategory.propTypes = {
  setCategorias: PropTypes.func.isRequired,
};
