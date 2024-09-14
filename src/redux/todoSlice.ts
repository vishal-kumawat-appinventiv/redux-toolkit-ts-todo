import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "./globalSlice";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

interface TodoState {
  todos: Todo[];
}

const initialState: TodoState = {
  todos: [],
};

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    dispatch(setLoading(false));
    return data as Todo[];
  }
);

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.todos = [];
    });
  },
});

export default todoSlice.reducer;
