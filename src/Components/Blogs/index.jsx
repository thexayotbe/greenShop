import React from "react";
import BlogCard from "./BlogCard";
import { Wrapper } from "./style";
import shop1 from "../../assets/images/shop1.png";
import shop2 from "../../assets/images/shop2.png";
import shop3 from "../../assets/images/shop3.png";
import shop4 from "../../assets/images/shop4.png";
const Blogs = () => {
  return (
    <Wrapper>
      <Wrapper.Text>
        <Wrapper.Title>Our Blog Posts</Wrapper.Title>
        <Wrapper.Description>
          We are an online plant shop offering a wide range of cheap and trendy
          plants.{" "}
        </Wrapper.Description>
        <Wrapper.Blogs>
          <BlogCard
            img={shop1}
            day={12}
            minute={6}
            title={"Cactus & Succulent Care Tips"}
            text={
              "Cacti are succulents are easy care plants for any home or patio. "
            }
          />
          <BlogCard
            img={shop2}
            day={13}
            minute={2}
            title={"Top 10 Succulents for Your Home"}
            text={"Best in hanging baskets. Prefers medium to high light."}
          />
          <BlogCard
            img={shop3}
            day={15}
            minute={3}
            title={"Cacti & Succulent Care Tips"}
            text={
              "Cacti and succulents thrive in containers and because most are.."
            }
          />
          <BlogCard
            img={shop4}
            day={15}
            minute={2}
            title={"Best Houseplants Room by Room"}
            text={"The benefits of houseplants are endless. In addition to.."}
          />
        </Wrapper.Blogs>
      </Wrapper.Text>
    </Wrapper>
  );
};

export default Blogs;
