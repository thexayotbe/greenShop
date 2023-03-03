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
    copyData: data["House Plants"],
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

    sortType(state, action) {
      switch (action.payload) {
        case "New Arrivals":
          state.sortedData = [...state.sortedData].sort(
            (a, b) => a.date.getTime() - b.date.getTime()
          );
          break;
        case "Sale":
          state.sortedData = [...state.sortedData].sort(
            (a, b) => a.sale - b.sale
          );
          break;
        default:
          state.sortedData = [...state.copyData];
      }
    },
    sortByPrice(state, action) {
      switch (action.payload) {
        case "default":
          state.sortedData = [...state.copyData];
          break;
        case "cheapest":
          state.sortedData = [...state.sortedData].sort(
            (a, b) => a.price - b.price
          );
          break;
        case "most-expensive":
          state.sortedData = [...state.sortedData]
            .sort((a, b) => a.price - b.price)
            .reverse();
          break;
      }
    },
  },
});

export default filterData.reducer;
export const { setSelectedFamily, setRange, sortType, sortByPrice } =
  filterData.actions;
