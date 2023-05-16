import React from "react";
import { AiFillHtml5 } from "react-icons/ai";
import { DiCss3, DiReact } from "react-icons/di";
import { GrNode } from "react-icons/gr";
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiExpress,
  SiSass,
} from "react-icons/si";

import SkillsCard from "./SkillsCard";

const MyServices: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <SkillsCard icons={<AiFillHtml5 />} title="HTML5" color={'#e44d26'} />
      <SkillsCard icons={<DiCss3 />} title="CSS3" color={'#006fb7'} />
      <SkillsCard icons={<SiJavascript />} title="JavaScript" color={'#f7df1e'} />
      <SkillsCard icons={<SiTypescript />} title="TypeScript" color={'#006fb7'} />
      <SkillsCard icons={<DiReact />} title="React Js" color={'#65d8f7'} />
      <SkillsCard icons={<SiNextdotjs />} title="Next Js" color={'#000000'} />
      <SkillsCard icons={<GrNode />} title="Node Js" color={'#76af04'} />
      <SkillsCard icons={<SiExpress />} title="Express Js" color={'#000000'} />
      <SkillsCard icons={<SiSass />} title="Scss" color={'#ca6597'} />
    </div>
  );
};

export default MyServices;
