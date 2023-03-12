import { configureStore } from "@reduxjs/toolkit";
import orderDataSlice from "./orderDataSlice";
import filterDataSlice from "./shopDataSlice";
import modalSlice from "./modalSlice";
import userDataSlice from "./userSlice";
export default configureStore({
  reducer: {
    filterData: filterDataSlice,
    orderData: orderDataSlice,
    modal: modalSlice,
    userData: userDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
