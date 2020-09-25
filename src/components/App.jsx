import React, { useState } from "react";
import TodoItem from "./TodoItem"

function App() {

    const [inputItem, setInputItem] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newItem= event.target.value;
        setInputItem(newItem);     
      }
      
      function addItem() {
        setItems(prevItems => {
          return [...prevItems, inputItem];
        });
        setInputItem("");
      }

  return (
    <div className="container">
      <div className="heading">
        <h1>Party Guest List</h1>
      </div>
      <div className="form">
        <input type="text" onChange={handleChange} name="item"
          value={inputItem} placeholder="Write a Name"/>
        <button>
          <span onClick={addItem}>Add</span>
        </button>
      </div>
      <div>
        <ul>
        {items.map(item => (
            <TodoItem
            text={item}/>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
