import React, { useState } from "react";
import { Wrapper } from "./style";

const Reviews = () => {
  const [activeSection, setActiveSection] = useState("desc");
  const changer = (type) => {
    setActiveSection(type);
  };
  return (
    <Wrapper>
      <Wrapper.Sections>
        <Wrapper.SectionName
          onClick={() => changer("desc")}
          className={`${activeSection === "desc" && "active"} `}>
          Product Description
        </Wrapper.SectionName>
        <Wrapper.SectionName
          onClick={() => changer("rev")}
          className={`${activeSection === "rev" && "active"} `}>
          Reviews (19)
        </Wrapper.SectionName>
      </Wrapper.Sections>
      <Wrapper.Description>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Nam fringilla augue nec est
        tristique auctor. Donec non est at libero vulputate rutrum. Morbi ornare
        lectus quis justo gravida semper. Nulla tellus mi, vulputate adipiscing
        cursus eu, suscipit id nulla.
      </Wrapper.Description>
      <Wrapper.Description spaceTop>
        Pellentesque aliquet, sem eget laoreet ultrices, ipsum metus feugiat
        sem, quis fermentum turpis eros eget velit. Donec ac tempus ante. Fusce
        ultricies massa massa. Fusce aliquam, purus eget sagittis vulputate,
        sapien libero hendrerit est, sed commodo augue nisi non neque. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor, lorem et
        placerat vestibulum, metus nisi posuere nisl, in accumsan elit odio quis
        mi. Cras neque metus, consequat et blandit et, luctus a nunc. Etiam
        gravida vehicula tellus, in imperdiet ligula euismod eget. The ceramic
        cylinder planters come with a wooden stand to help elevate your plants
        off the ground.
      </Wrapper.Description>
      <Wrapper.Title>Living Room:</Wrapper.Title>
      <Wrapper.Description>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Wrapper.Description>
      <Wrapper.Title>Dining Room:</Wrapper.Title>
      <Wrapper.Description></Wrapper.Description>
      The benefits of houseplants are endless. In addition to cleaning the air
      of harmful toxins, they can help to improve your mood, reduce stress and
      provide you with better sleep. Fill every room of your home with
      houseplants and their restorative qualities will improve your life.
      <Wrapper.Title>Office:</Wrapper.Title>
      <Wrapper.Description>
        The ceramic cylinder planters come with a wooden stand to help elevate
        your plants off the ground. The ceramic cylinder planters come with a
        wooden stand to help elevate your plants off the ground. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit.
      </Wrapper.Description>
    </Wrapper>
  );
};

export default Reviews;
