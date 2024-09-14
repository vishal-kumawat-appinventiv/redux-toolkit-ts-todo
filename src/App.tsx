import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchTodos } from "./redux/todoSlice";

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { todos } = useSelector((state: RootState) => state.todos);
  const { loading } = useSelector((state: RootState) => state.global);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold">Todo List</h1>
      {loading && <p className="text-3xl">Loading...</p>}
      <ul className="list-disc ml-5 mt-4">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className={`mt-2 ${todo.completed ? "line-through" : ""}`}
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
