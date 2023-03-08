import { configureStore } from "@reduxjs/toolkit";
import orderDataSlice from "./orderDataSlice";
import filterDataSlice from "./shopDataSlice";

export default configureStore({
  reducer: {
    filterData: filterDataSlice,
    orderData: orderDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
