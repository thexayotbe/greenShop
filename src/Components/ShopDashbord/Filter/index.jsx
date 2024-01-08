import React from "react";
import { Wrapper } from "../style";
import Button from "../../Generic/Button";
import saleBanner from "../../../assets/images/SaleBanner.png";

const Filter = ({
  familyNames,
  selectHandler,
  data,
  filterData,
  filterRange,
}) => {
  return (
    <Wrapper.FilterSide>
      <Wrapper.FilterGroup>
        <Wrapper.FilterTitle>Categories</Wrapper.FilterTitle>
        {familyNames.map((familyName, index) => {
          return (
            <Wrapper.FilterName
              key={index}
              className={filterData.familyName === familyName && "activeFamily"}
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
        <Wrapper.Price noSpace>
          Price:{" "}
          <Wrapper.NameAmount className={"selected"}>
            `${filterData.range[0]}-${filterData.range[1]}`
          </Wrapper.NameAmount>
        </Wrapper.Price>
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
  );
};

export default Filter;
