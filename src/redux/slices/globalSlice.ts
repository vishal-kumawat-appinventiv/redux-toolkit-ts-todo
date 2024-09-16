import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { GlobalState } from "../../utils/types/types";

const initialState: GlobalState = {
  loading: false,
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
  },
});

export const { setLoading } = globalSlice.actions;
export default globalSlice.reducer;
