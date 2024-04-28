import { createSlice } from "@reduxjs/toolkit";

 const counterSlice = createSlice({
  name: "counter",
  initialState: "",
  reducers: {
    setCounter: (state, action) => action.payload,
  },
});

export const { setCounter } = counterSlice.actions;

export default counterSlice.reducer;

