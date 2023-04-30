import { createSlice } from "@reduxjs/toolkit";

const modalaSlice = createSlice({
  name: "modalSlice",
  initialState: {
    authModalVisibility: false,
    orderModalVisibility: false,
  },
  reducers: {
    switchAuthModalVisibility(state) {
      state.authModalVisibility = !state.authModalVisibility;
    },
    switchOrderModalVisibility(state) {
      state.orderModalVisibility = !state.orderModalVisibility;
    },
  },
});

export const { switchAuthModalVisibility, switchOrderModalVisibility } =
  modalaSlice.actions;
export default modalaSlice.reducer;
