import { useSelector } from "react-redux";
import { Wrapper } from "./style";
import deleteIcon from "../../../assets/icons/delete.svg";
const ProductList = ({ amount, changeAmount, deleteHandler }) => {
  const { orderData } = useSelector((state) => state.orderData);
  return (
    <Wrapper>
      <Wrapper.Table>
        <Wrapper.Thead>
          <Wrapper.Tr>
            <Wrapper.Th>Products </Wrapper.Th>
            <Wrapper.Th>Price</Wrapper.Th>
            <Wrapper.Th>Quanity</Wrapper.Th>
            <Wrapper.Th>Total</Wrapper.Th>
            <Wrapper.Th></Wrapper.Th>
          </Wrapper.Tr>
        </Wrapper.Thead>
        <Wrapper.Tbody>
          {orderData?.map((value, index) => {
            return (
              <Wrapper.Tr key={value.id}>
                <Wrapper.Td isTitle>
                  <Wrapper.InfoSection>
                    <Wrapper.Img src={value.img} alt={"productImg "} />
                    <Wrapper.NameSection>
                      <Wrapper.Name>{value.name}</Wrapper.Name>
                      <Wrapper.ID>
                        <Wrapper.Span>SKU : </Wrapper.Span>
                        {value.id}
                      </Wrapper.ID>
                    </Wrapper.NameSection>
                  </Wrapper.InfoSection>
                </Wrapper.Td>
                <Wrapper.Td>
                  <Wrapper.Price>${value.price}.00</Wrapper.Price>
                </Wrapper.Td>

                <Wrapper.Td>
                  <Wrapper.ProductAmountSection>
                    <Wrapper.Button onClick={() => changeAmount("dec", index)}>
                      -
                    </Wrapper.Button>
                    <Wrapper.Count>{amount[index]}</Wrapper.Count>
                    <Wrapper.Button onClick={() => changeAmount("inc", index)}>
                      +
                    </Wrapper.Button>
                  </Wrapper.ProductAmountSection>
                </Wrapper.Td>
                <Wrapper.Td>
                  <Wrapper.Price isTotal>
                    ${value.price * amount[index]}.00
                  </Wrapper.Price>
                </Wrapper.Td>
                <Wrapper.Td>
                  <Wrapper.Icon
                    src={deleteIcon}
                    alt={"Delete"}
                    onClick={() => deleteHandler(value, index)}
                  />
                </Wrapper.Td>
              </Wrapper.Tr>
            );
          })}
        </Wrapper.Tbody>
      </Wrapper.Table>
    </Wrapper>
  );
};

export default ProductList;
