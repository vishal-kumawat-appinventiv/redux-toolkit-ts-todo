import { Todo } from "../utils/types/types";

const TodoBox = ({ todo }: { todo: Todo }) => {
  return (
    <>
      <li
        key={todo.id}
        className={`mt-2 ${todo.completed ? "line-through" : ""}`}
      >
        {todo.title}
      </li>
    </>
  );
};

export default TodoBox;
