import { configureStore } from "@reduxjs/toolkit";
import globalReducer from "../slices/globalSlice";
import todoReducer from "../slices/todoSlice";

const store = configureStore({
  reducer: {
    global: globalReducer,
    todos: todoReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
