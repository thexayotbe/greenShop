import { createSlice } from "@reduxjs/toolkit";
import { notification } from "antd";
import modalSlice, { switchAuthModalVisibility } from "./modalSlice";

const userData = createSlice({
  name: "userData",
  initialState: {
    users: [],
    isAuthed: false,
    currentUser: {},
  },
  reducers: {
    addUser(state, action) {
      state.users = [...state.users, action.payload];
      let userData = JSON.parse(localStorage.getItem("userData")) || [];
      userData.push(action.payload);
      localStorage.setItem("userData", JSON.stringify(userData));
      state.isAuthed = true;
    },
    checkUser(state, { payload: { data, onSuccess } }) {
      state.isAuthed = true;
      state.currentUser = { ...data };
    },
    logOut(state, action) {
      state.isAuthed = false;
    },
  },
});

export default userData.reducer;
export const { addUser, checkUser, logOut } = userData.actions;
