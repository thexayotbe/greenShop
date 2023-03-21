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
      state.productCount = state.orderData.map((value, index) =>
        value.count
          ? value.count
          : state.productCount[index]
          ? state.productCount[index]
          : 1
      );
    },
    deleteProduct(state, action) {
      state.orderData = state.orderData.filter(
        (value) => value.id !== action.payload
      );
    },
    setProductCount(state, { payload }) {
      console.log(payload.order, payload.type);
      if (payload.type === "inc")
        state.productCount = [
          ...state.productCount.map((value, index) =>
            index === payload.order ? value + 1 : value
          ),
        ];
      else if (payload.type === "dec" && state.productCount[payload.order] > 1)
        state.productCount = [
          ...state.orderData.map((value, index) =>
            index === payload.order ? value - 1 : value
          ),
        ];
    },
  },
});
export default orderData.reducer;
export const { setOrderedProducts, deleteProduct, setProductCount } =
  orderData.actions;
