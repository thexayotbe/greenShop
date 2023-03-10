import { createSlice } from "@reduxjs/toolkit";

const orderData = createSlice({
  name: "orderData",
  initialState: {
    orderData: [],
    productCount: [],
  },
  reducers: {
    setOrderedProducts(state, action) {
      if (state.orderData.includes(action.payload)) return;
      state.orderData = [...state.orderData, action.payload];
    },
    deleteProduct(state, action) {
      state.orderData = state.orderData.filter(
        (value) => value.id !== action.payload
      );
    },
    setProductCount(state, action) {
      state.orderData = [...state.orderData, action.payload];
    },
  },
});
export default orderData.reducer;
export const { setOrderedProducts, deleteProduct, setProductCount } =
  orderData.actions;
