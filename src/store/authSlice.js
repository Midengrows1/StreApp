import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
const initialState = {
  userToken: null,
  posts: [],
  signState: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    authUser(state, action) {
      state.userToken = action.payload;
      state.signState = true;
    },
    signOut(state, action) {
      localStorage.removeItem("userToken");
      state.signState = false;
    },
  },
  extraReducers: {},
});
export const { authUser, getAllPosts, signOut } = authSlice.actions;

export default authSlice.reducer;
