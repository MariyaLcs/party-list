import React, { useState } from "react";

function InputArea(props) {
  const [inputItem, setInputItem] = useState("");

  function handleChange(event) {
    const newItem = event.target.value;
    setInputItem(newItem);
  }

  return (
    <div className="form">
      <input onChange={handleChange} type="text" value={inputItem} />
      <button
        onClick={() => {
          props.onAdd(inputItem);
          setInputItem("");
        }}
      >
        <span>Add</span>
      </button>
    </div>
  );
}

export default InputArea;
