import { useContext, useState } from "react";
import { TodoContext } from "../context/TodoContext";

function AddTodo() {
  const [todoItem, setTodoItem] = useState("");
  const { addTodoItem } = useContext(TodoContext);
  function handleAddItem() {
    addTodoItem(todoItem);
  }
  return (
    <div>
      <input
        type="text"
        placeholder="add to item"
        onChange={(e) => setTodoItem(e.target.value)}
        value={todoItem}
      />
      <button onClick={handleAddItem}>Add Item</button>
    </div>
  );
}

export default AddTodo;
