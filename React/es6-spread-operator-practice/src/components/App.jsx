import React, { useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [inputText, setInput] = useState([]);
  const [id, setId] = useState(1);

  function handleChange(event) {
    const newItem = event.target.value;
    setInput(newItem);
  }

  function addItem(event) {
    setId(id + 1);
    setItems([...items, { item: inputText, id: id }]);
    setInput("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {items.map((todo) => (
            <li key={todo.id}>{todo.item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
