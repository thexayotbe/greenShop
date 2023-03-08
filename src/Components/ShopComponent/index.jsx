import { LocationName } from "../Generic/styles";
import ProductCard from "./ProductCard";
import RelatedProducts from "./RelatedProducts";
import Reviews from "./Reviews";
import { Wrapper } from "./style";

const ShopComponent = () => {
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
