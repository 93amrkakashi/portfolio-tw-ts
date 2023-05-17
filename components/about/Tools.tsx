import React from "react";
import { DiNpm, DiGulp } from "react-icons/di";
import { FaYarn, FaBootstrap } from "react-icons/fa";
import { BsGit, BsGithub } from "react-icons/bs";
import { TbBrandVscode, TbHexagonLetterM } from "react-icons/tb";
import { SiFirebase, SiPug, SiTailwindcss, SiChakraui } from "react-icons/si";

import SkillsCard from "./SkillsCard";

const Tools = () => {
  return (
    <div className="px-0 grid grid-cols-2 md:grid-cols-4 pb-10">
      <SkillsCard icons={<TbBrandVscode />} title="VS Code" color={"#038fd6"} />
      <SkillsCard icons={<DiNpm />} title="NPM" color={"#cb3837"} />
      <SkillsCard icons={<FaYarn />} title="Yarn" color={"#2c8ebb"} />
      <SkillsCard icons={<BsGit />} title="Git" color={"#cb3837"} />
      <SkillsCard icons={<BsGithub />} title="Github" color={"#000000"} />
      <SkillsCard icons={<SiFirebase />} title="Firebase" color={"#ffcb2b"} />
      <SkillsCard icons={<DiGulp />} title="Gulp Js" color={"#d34a47"} />
      <SkillsCard icons={<SiPug />} title="Pug Js" color={"#f4d57e"} />
      <SkillsCard icons={<FaBootstrap />} title="Bootstrap" color={"#6b37b7"} />
      <SkillsCard
        icons={<SiTailwindcss />}
        title="TailwindCss"
        color={"#07b0ce"}
      />
      <SkillsCard
        icons={<TbHexagonLetterM />}
        title="MaterialUi"
        color={"#007ec7"}
      />
      <SkillsCard icons={<SiChakraui />} title="ChakraUi" color={"#3dc7be"} />
    </div>
  );
};

export default Tools;
