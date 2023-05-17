import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import Tools from "./Tools";
import MySkills from "./MySkills";

const About = () => {
  
  return (
    <section id="about" className="w-full">
      <Title title="About" subTitle="Me" />
      <AboutMe />
      <Title title="My" subTitle="Skills" />
      <MySkills />
      <Title title="My" subTitle="Tools" />
      <Tools />
    </section>
  );
};

export default About;
