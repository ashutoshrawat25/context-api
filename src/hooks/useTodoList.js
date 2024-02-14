import { useState } from "react";

const useTodoList = () => {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = (todo) => {
    const newTodo = { id: Date.now(), todo: todo };
    setTodoItems([...todoItems, newTodo]);
  };

  const deleteTodoItem = (id) => {
    const newTodoList = todoItems.filter((todo) => todo.id !== id);
    setTodoItems(newTodoList);
  };

  return {
    todoItems,
    addTodoItem,
    deleteTodoItem,
  };
};

export default useTodoList;
