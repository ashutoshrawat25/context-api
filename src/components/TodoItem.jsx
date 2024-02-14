import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";

/* eslint-disable react/prop-types */
function TodoItem({ todoItems }) {
  const { deleteTodoItem } = useContext(TodoContext);
  return (
    <div>
      <ul>
        {todoItems.map((todo) => (
          <li key={todo.id}>
            {todo.todo}
            <button onClick={() => deleteTodoItem(todo.id)}>delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoItem;
