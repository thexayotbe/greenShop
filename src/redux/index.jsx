import { configureStore } from "@reduxjs/toolkit";
import filterDataSlice from "./shopDataSlice";

export default configureStore({
  reducer: {
    filterData: filterDataSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
