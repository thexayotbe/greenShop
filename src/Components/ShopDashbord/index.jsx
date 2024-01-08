import { Wrapper } from "./style";
import { data } from "../../mock/data";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedFamily,
  setRange,
  sortType,
  sortByPrice,
} from "../../redux/shopDataSlice";
import ShopSection from "../ShopSection";
import { Modal, Select } from "antd";
import { useEffect, useState } from "react";
import filter from "../../assets/icons/filter.svg";
import Filter from "./Filter";

const { Option } = Select;
const ShopDashbord = () => {
  const dispatch = useDispatch();
  const familyNames = Object.keys(data);
  const { filterData, sortedData } = useSelector((state) => state.filterData);
  const [stateData, setStateData] = useState([...sortedData]);
  const dropDownChange = (e) => {
    dispatch(sortByPrice(e));
  };
  const selectHandler = (value, type) => {
    dispatch(setSelectedFamily({ type: type, value: value }));
  };
  const filterRange = () => {
    dispatch(setRange(filterData.range));
  };
  const sortByType = (type) => {
    selectHandler(type, "sortType");
    dispatch(sortType(type));
  };
  useEffect(() => filterRange(), [filterData.familyName]);
  useEffect(() => {
    setStateData(sortedData);
  }, [sortedData]);

  return (
    <Wrapper>
      <Filter
        familyNames={familyNames}
        selectHandler={selectHandler}
        data={data}
        filterData={filterData}
        filterRange={filterRange}
      />
      <Wrapper.ProductsSide>
        <Wrapper.ProductsSort>
          <Wrapper.SortTypes>
            <Wrapper.TypeName
              onClick={() => sortByType("All Plants", "sortType")}
              className={filterData.sortType === "All Plants" && "selected"}
              isHeadSide={filterData.sortType === "All Plants" && "true"}>
              All Plants
            </Wrapper.TypeName>
            <Wrapper.TypeName
              onClick={() => sortByType("New Arrivals", "sortType")}
              className={filterData.sortType === "New Arrivals" && "selected"}
              isHeadSide={filterData.sortType === "New Arrivals" && "true"}>
              New Arrivals
            </Wrapper.TypeName>
            <Wrapper.TypeName
              onClick={() => sortByType("Sale", "sortType")}
              className={filterData.sortType === "Sale" && "selected"}
              isHeadSide={filterData.sortType === "Sale" && "true"}>
              Sale
            </Wrapper.TypeName>
          </Wrapper.SortTypes>
          <Wrapper.SortDefaultType>
            <Wrapper.TypeName>
              Sort by : {"   "}
              <Select
                style={{ width: "200px", border: "none" }}
                onChange={(e) => {
                  dropDownChange(e);
                }}
                defaultValue={"default"}>
                <Option value="default">Default</Option>
                <Option value="most-expensive">Most expensive</Option>
                <Option value="cheapest">Cheapest</Option>
              </Select>
            </Wrapper.TypeName>
          </Wrapper.SortDefaultType>
          <Wrapper.Icon src={filter} />
          <Modal open={true}>
            <Filter
              familyNames={familyNames}
              selectHandler={selectHandler}
              data={data}
              filterData={filterData}
              filterRange={filterRange}
            />
          </Modal>
        </Wrapper.ProductsSort>
        <ShopSection stateData={stateData} />
      </Wrapper.ProductsSide>
    </Wrapper>
  );
};

export default ShopDashbord;
