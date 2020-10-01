import React, { useState } from "react";
import TodoItem from "./TodoItem";
import InputArea from "./InputArea";

function App() {
  const [items, setItems] = useState([]);

  function addItem(inputItem) {
    setItems((prevItems) => {
      return [...prevItems, inputItem];
    });
  }
  function deleteItem(id) {
    setItems((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>Party Guest List</h1>
      </div>

      <InputArea type="text" placeholder="Write a Name" onAdd={addItem} />

      <div>
        <ul>
          {items.map((item, index) => (
            <TodoItem
              text={item}
              onChecked={deleteItem}
              key={index}
              id={index}
            />
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
