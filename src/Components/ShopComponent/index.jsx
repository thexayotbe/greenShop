import { useEffect } from "react";
import { LocationName } from "../Generic/styles";
import ProductCard from "./ProductCard";
import RelatedProducts from "./RelatedProducts";
import Reviews from "./Reviews";
import { Wrapper } from "./style";

const ShopComponent = () => {
  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <Wrapper>
      <LocationName>
        <LocationName.Home>Home</LocationName.Home>/ Shop
      </LocationName>
      <ProductCard />
      <Reviews />
      <RelatedProducts title={"Releted Products"} />
    </Wrapper>
  );
};

export default ShopComponent;
