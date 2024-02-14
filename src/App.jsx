import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";
import { TodoContext } from "./context/TodoContext";
import useTodoList from "./hooks/useTodoList";

function App() {
  const { todoItems, addTodoItem, deleteTodoItem } = useTodoList();
  return (
    <>
      <TodoContext.Provider
        value={{
          todoItems: todoItems,
          addTodoItem: addTodoItem,
          deleteTodoItem: deleteTodoItem,
        }}
      >
        <AddTodo />
        <TodoItems />
      </TodoContext.Provider>
    </>
  );
}

export default App;
