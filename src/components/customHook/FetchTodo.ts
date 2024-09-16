import { useEffect } from "react";
import { fetchTodos } from "../../redux/slices/todoSlice";
import { AppDispatch, RootState } from "../../redux/store/store";
import { useDispatch, useSelector } from "react-redux";

const useFetchTodos = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { todos } = useSelector((state: RootState) => state.todos);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  return { todos };
};

export default useFetchTodos;
