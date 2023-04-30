import { createSlice } from "@reduxjs/toolkit";

const orderData = createSlice({
  name: "orderData",
  initialState: {
    orderData: [],
    productCount: [],
    address: {
      firstName: "",
      lastName: "",
      region: "",
      town: "",
      house: "",
      appartment: "",
      state: "",
      zip: "",
      email: "",
      phoneNumber: "",
    },
    paymentType: "",
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
      state.productCount = state.productCount.filter(
        (value, index) => index !== action.payload.countIndex
      );
      state.orderData = state.orderData.filter(
        (value) => value.id !== action.payload.type
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
          ...state.productCount.map((value, index) =>
            index === payload.order ? value - 1 : value
          ),
        ];
    },
    setAddress(state, { payload }) {
      state.address = {
        ...state.address,
        [payload.type]: payload.value,
      };
    },
    setPaymentType(state, action) {
      state.paymentType = action.payload;
    },
  },
});
export default orderData.reducer;
export const {
  setOrderedProducts,
  deleteProduct,
  setProductCount,
  setAddress,
  setPaymentType,
} = orderData.actions;
