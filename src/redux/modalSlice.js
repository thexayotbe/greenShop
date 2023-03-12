import { createSlice } from "@reduxjs/toolkit";

const modalaSlice = createSlice({
  name: "modalSlice",
  initialState: {
    authModalVisibility: false,
  },
  reducers: {
    switchAuthModalVisibility(state) {
      state.authModalVisibility = !state.authModalVisibility;
    },
  },
});

export const { switchAuthModalVisibility } = modalaSlice.actions;
export default modalaSlice.reducer;
