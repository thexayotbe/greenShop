import { createSlice } from "@reduxjs/toolkit";

const userData = createSlice({
  name: "userData",
  initialState: {
    users: [],
  },
  reducers: {
    addUser(state, action) {
      state.users = [...state.users, action.payload];
    },
    chaeckUser(state, action) {},
  },
});

export default userData.reducer;
export const { addUser, chaeckUser } = userData.actions;
