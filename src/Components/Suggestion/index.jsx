import React from "react";
import { Wrapper } from "./style";
import SuggestCard from "./SuggestCard";
import suggest1 from "../../assets/images/suggest1.png";
import suggest2 from "../../assets/images/suggest2.png";
const Suggestion = () => {
  return (
    <Wrapper>
      <SuggestCard img={suggest1} title={"Summer cactus & succulents"} />
      <SuggestCard img={suggest2} title={"Styling Trends & much more"} />
    </Wrapper>
  );
};

export default Suggestion;
