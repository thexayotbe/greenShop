import React from "react";
import { Wrapper } from "./style";
import flower1 from "../../../assets/images/flower1.png";
import flower2 from "../../../assets/images/flower2.png";
import flower3 from "../../../assets/images/flower3.png";
import { useState } from "react";
import deleteIcon from "../../../assets/icons/delete.svg";
import editIcon from "../../../assets/icons/Edit.svg";
const Products = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Barberton Daisy",
      price: 119.0,
      discount: false,
      img: flower1,
      date: new Date("2020-04-01"),
      sale: 5,
      status: "Active",
      view: 1234,
    },
    {
      id: 2,
      name: "Angel Wing Begonia",
      price: 149.0,
      discount: false,
      img: flower2,
      date: new Date("2020-07-01"),
      sale: 2,
      status: "Active",
      view: 1234,
    },
    {
      id: 3,
      name: "African Violet",
      price: 129.0,
      discount: false,
      img: flower3,
      date: new Date("2021-04-01"),
      sale: 20,
      status: "Pendings",
      view: 1234,
    },
  ]);
  return (
    <Wrapper>
      <Wrapper.Table>
        <Wrapper.Thead>
          <Wrapper.Tr>
            <Wrapper.Th>Products </Wrapper.Th>
            <Wrapper.Th>Data published</Wrapper.Th>
            <Wrapper.Th>Status</Wrapper.Th>
            <Wrapper.Th>View</Wrapper.Th>
            <Wrapper.Th></Wrapper.Th>
          </Wrapper.Tr>
        </Wrapper.Thead>
        <Wrapper.Tbody>
          {data.length > 0
            ? data.map(({ id, name, img, date, status, view }) => {
                return (
                  <Wrapper.Tr key={id}>
                    <Wrapper.Td>
                      <Wrapper.InfoSection>
                        <Wrapper.Img src={img} alt={"productImg "} />
                        <Wrapper.NameSection>
                          <Wrapper.Name>{name}</Wrapper.Name>
                          <Wrapper.ID>
                            <Wrapper.Span>SKU : </Wrapper.Span>
                            {id}
                          </Wrapper.ID>
                        </Wrapper.NameSection>
                      </Wrapper.InfoSection>
                    </Wrapper.Td>
                    <Wrapper.Td>
                      <Wrapper.Text>
                        {date.getDate()}{" "}
                        {date.toLocaleString("en-us", { month: "long" })}{" "}
                        {date.getFullYear()}
                      </Wrapper.Text>
                    </Wrapper.Td>
                    <Wrapper.Td>
                      <Wrapper.Text>{status}</Wrapper.Text>
                    </Wrapper.Td>
                    <Wrapper.Td>
                      <Wrapper.Text>{view}</Wrapper.Text>
                    </Wrapper.Td>
                    <Wrapper.Td>
                      <Wrapper.Icon src={editIcon} alt={"Delete"} />
                      <Wrapper.Icon src={deleteIcon} alt={"Delete"} />
                    </Wrapper.Td>
                  </Wrapper.Tr>
                );
              })
            : "None"}
        </Wrapper.Tbody>
      </Wrapper.Table>
    </Wrapper>
  );
};

export default Products;
