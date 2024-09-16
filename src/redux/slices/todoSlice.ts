import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { setLoading } from "./globalSlice";
import { Todo, TodoState } from "../../utils/types/types";

const initialState: TodoState = {
  todos: [],
};

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",
  async (_, { dispatch }) => {
    dispatch(setLoading(true));
    const response = await fetch(import.meta.env.VITE_API as string);
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
