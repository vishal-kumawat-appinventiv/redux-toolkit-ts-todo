import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../src/redux/store/store";
import TodoBox from "./components/Todo";
import useFetchTodos from "./components/customHook/FetchTodo";

const App: React.FC = () => {
  const { loading } = useSelector((state: RootState) => state.global);
  const { todos } = useFetchTodos();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Todo List</h1>
      {loading && <p className="text-3xl">Loading...</p>}
      <ul className="list-disc ml-5 mt-4">
        {todos.map((todo) => (
          <TodoBox key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default App;
