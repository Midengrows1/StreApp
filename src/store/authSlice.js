import { createSlice } from "@reduxjs/toolkit";
import { useNavigate } from "react-router-dom";
const initialState = {
  userToken: null,
  posts: [],
  signState: false,
  cart: [],
  productType: "products",
  drawerOpen: false,
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
    addCart(state, action) {
      state.cart.push(action.payload);
    },
    handleChangeType(state, action) {
      console.log(action.payload);
      state.productType = action.payload;
    },
    openDrawer(state, action) {
      state.drawerOpen = !state.drawerOpen;
    },
    deleteItem(state, action) {
      const newupdatedArr = state.cart.filter(
        (item) => item.id !== action.payload
      );
      state.cart = newupdatedArr;
    },
  },
  extraReducers: {},
});
export const {
  authUser,
  getAllPosts,
  signOut,
  addCart,
  handleChangeType,
  openDrawer,
  deleteItem,
} = authSlice.actions;

export default authSlice.reducer;
