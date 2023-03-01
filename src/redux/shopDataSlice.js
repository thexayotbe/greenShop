import { createSlice } from "@reduxjs/toolkit";
import { data } from "../mock/data";
const filterData = createSlice({
  name: "filterData",
  initialState: {
    filterData: {
      familyName: "House Plants",
      size: "",
      range: [0, 1000],
      sortType: "All Plants",
      sortBy: "Default sorting",
    },
    sortedData: data["House Plants"],
  },
  reducers: {
    setSelectedFamily(state, action) {
      switch (action.payload.type) {
        case "family":
          state.filterData = {
            ...state.filterData,
            familyName: action.payload.value,
          };
          state.sortedData = data[`${action.payload.value}`];
          break;
        case "size":
          state.filterData = {
            ...state.filterData,
            size: action.payload.value,
          };
          break;
        case "range":
          state.filterData = {
            ...state.filterData,
            range: action.payload.value,
          };
          break;
        case "sortType":
          state.filterData = {
            ...state.filterData,
            sortType: action.payload.value,
          };

          break;
        case "sortBy":
          state.filterData = {
            ...state.filterData,
            sortBy: action.payload.value,
          };
          break;
        default:
          return state.filterData;
      }
    },
    setRange(state, action) {
      state.sortedData = data[state.filterData.familyName].filter(
        (value) =>
          value.price >= action.payload[0] && value.price <= action.payload[1]
      );
    },
  },
});

export default filterData.reducer;
export const { setSelectedFamily, setRange } = filterData.actions;
