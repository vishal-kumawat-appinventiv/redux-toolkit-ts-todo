import useFetchTodos from "../../components/customHook/FetchTodo";
import Heading from "../../components/Heading";
import TodoBox from "../../components/TodoBox";

const Home = () => {
  const { todos } = useFetchTodos();

  return (
    <div className="container mx-auto p-4">
      <Heading />
      <ul className="list-disc ml-5 mt-4">
        {todos.map((todo) => (
          <TodoBox key={todo.id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default Home;
