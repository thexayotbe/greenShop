import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Wrapper } from "./style";
import ShopCard from "../Generic/ShopCard";
import { Pagination } from "antd";
import { data } from "../../mock/data";
const ShopSection = ({ stateData }) => {
  const { filterData } = useSelector((state) => state.filterData);
  const [startPage, setStartPage] = useState(1);
  const [endPage, setEndPage] = useState(9);
  const [currentPage, setCurrentPage] = useState(1);
  const pageChange = (page) => {
    setCurrentPage(page);
    if (page === 1) {
      setStartPage(1);
      setEndPage(9);
      return;
    }
    setStartPage((page - 1) * 9);
    setEndPage((page - 1) * 9 + 8);
  };
  useEffect(() => {
    setStartPage(1);
    setEndPage(9);
    setCurrentPage(1);
  }, [filterData.familyName]);
  useEffect(() => {
    setCurrentPage(1);
  }, [stateData]);
  return (
    <Wrapper>
      <Wrapper.ContainerProduct>
        <Wrapper.Products>
          {stateData.map((value, index) => {
            return (
              index >= startPage &&
              index <= endPage && (
                <ShopCard
                  key={value.id}
                  {...value}
                  familyName={filterData.familyName}
                />
              )
            );
          })}
        </Wrapper.Products>
      </Wrapper.ContainerProduct>
      <Wrapper.Pagination>
        <Pagination
          current={currentPage}
          total={stateData.length + 1}
          onChange={pageChange}
        />
      </Wrapper.Pagination>
    </Wrapper>
  );
};

export default ShopSection;
