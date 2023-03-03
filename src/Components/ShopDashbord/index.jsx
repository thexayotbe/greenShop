import { Wrapper } from "./style";
import { data } from "../../mock/data";
import Button from "../Generic/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedFamily,
  setRange,
  sortType,
  sortByPrice,
} from "../../redux/shopDataSlice";
import ShopSection from "../ShopSection";
import { Select } from "antd";
import { useEffect, useState } from "react";
import saleBanner from "../../assets/images/SaleBanner.png";

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
      <Wrapper.FilterSide>
        <Wrapper.FilterGroup>
          <Wrapper.FilterTitle>Categories</Wrapper.FilterTitle>
          {familyNames.map((familyName, index) => {
            return (
              <Wrapper.FilterName
                key={index}
                className={
                  filterData.familyName === familyName && "activeFamily"
                }
                onClick={() => selectHandler(familyName, "family")}>
                {familyName}{" "}
                <Wrapper.NameAmount>
                  ({data[familyName].length})
                </Wrapper.NameAmount>
              </Wrapper.FilterName>
            );
          })}
        </Wrapper.FilterGroup>
        <Wrapper.FilterGroup>
          <Wrapper.FilterTitle>Price Range</Wrapper.FilterTitle>
          <Wrapper.Slider
            max={1000}
            range
            color="#46A358"
            defaultValue={[0, 1000]}
            style={{ color: "#46A358" }}
            onChange={(e) => selectHandler(e, "range")}
          />
          <Wrapper.FilterName noSpace>
            Price:{" "}
            <Wrapper.NameAmount className={"selected"}>
              `${filterData.range[0]}-${filterData.range[1]}`
            </Wrapper.NameAmount>
          </Wrapper.FilterName>
          <Button
            onClickFunc={filterRange}
            widthBtn={"90px"}
            heightBtn={"35px"}
            margin={"16px 0 0 0"}>
            Filter
          </Button>
        </Wrapper.FilterGroup>
        <Wrapper.FilterGroup>
          <Wrapper.FilterTitle>Size</Wrapper.FilterTitle>
          <Wrapper.FilterName onClick={() => selectHandler("Small", "size")}>
            {" "}
            Small <Wrapper.NameAmount>(119)</Wrapper.NameAmount>
          </Wrapper.FilterName>
          <Wrapper.FilterName onClick={() => selectHandler("Medium", "size")}>
            Medium <Wrapper.NameAmount>(86)</Wrapper.NameAmount>
          </Wrapper.FilterName>
          <Wrapper.FilterName onClick={() => selectHandler("Large", "size")}>
            Large <Wrapper.NameAmount>(78)</Wrapper.NameAmount>
          </Wrapper.FilterName>
        </Wrapper.FilterGroup>
        <Wrapper.SaleBannerImg src={saleBanner} />
      </Wrapper.FilterSide>
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
        </Wrapper.ProductsSort>
        <ShopSection stateData={stateData} />
      </Wrapper.ProductsSide>
    </Wrapper>
  );
};

export default ShopDashbord;
