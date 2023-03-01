import { Wrapper } from "./style";
import { data } from "../../mock/data";
import Button from "../Generic/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedFamily, setRange } from "../../redux/shopDataSlice";
import ShopSection from "../ShopSection";
import { Dropdown, Space } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import saleBanner from "../../assets/images/SaleBanner.png";
const ShopDashbord = () => {
  const dispatch = useDispatch();
  const familyNames = Object.keys(data);
  const { filterData, sortedData } = useSelector((state) => state.filterData);
  const [stateData, setStateData] = useState([...sortedData]);
  const dropDownChange = (e) => {
    const copyData = [...sortedData];
    selectHandler(e.target.innerText, "sortBy");
    if (e.target.innerText === "Default sorting") {
      setStateData([...sortedData]);
    } else if (e.target.innerText === "Cheapest") {
      setStateData(stateData.sort((a, b) => a.price - b.price));
    } else if (e.target.innerText === "Most Expensive") {
      setStateData(
        stateData
          .sort((a, b) => {
            return a.price - b.price;
          })
          .reverse()
      );
    }
  };
  const items = [
    {
      key: "1",
      label: (
        <Wrapper.Label onClick={dropDownChange}>Default sorting</Wrapper.Label>
      ),
    },
    {
      key: "2",
      label: <Wrapper.Label onClick={dropDownChange}>Cheapest</Wrapper.Label>,
    },
    {
      key: "3",
      label: (
        <Wrapper.Label onClick={dropDownChange}>Most Expensive</Wrapper.Label>
      ),
    },
  ];

  const selectHandler = (value, type) => {
    dispatch(setSelectedFamily({ type: type, value: value }));
  };

  useEffect(() => setStateData(sortedData), [sortedData]);
  const filterRange = () => {
    dispatch(setRange(filterData.range));
  };
  const sortByType = (type) => {
    selectHandler(type, "sortType");
    let copyData = [...sortedData];
    if (type === "New Arrivals") {
      setStateData(
        copyData.sort((a, b) => a.date.getTime() - b.date.getTime())
      );
    } else if (type === "Sale") {
      setStateData(copyData.sort((a, b) => a.sale - b.sale));
    } else if (type === "All Plants") {
      setStateData(copyData);
    }
  };
  useEffect(() => filterRange(), [filterData.familyName]);

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
              <Dropdown
                trigger={"click"}
                menu={{
                  items,
                }}>
                <Space>
                  {filterData.sortBy}
                  <DownOutlined />
                </Space>
              </Dropdown>
            </Wrapper.TypeName>
          </Wrapper.SortDefaultType>
        </Wrapper.ProductsSort>
        <ShopSection stateData={stateData} />
      </Wrapper.ProductsSide>
    </Wrapper>
  );
};

export default ShopDashbord;
