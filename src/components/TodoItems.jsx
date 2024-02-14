import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
import TodoItem from "./TodoItem";

function TodoItems() {
  const { todoItems } = useContext(TodoContext);
  return (
    <div>
      <TodoItem todoItems={todoItems} />
    </div>
  );
}

export default TodoItems;
