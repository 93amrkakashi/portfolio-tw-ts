import React from "react";


interface SkillsCardProps {
  icons: JSX.Element;
  title: string;
  color: string;
}

const SkillsCard = ({ icons, title, color }: SkillsCardProps) => {
  return (
    <div className="py-8 px-6 flex flex-col items-center gap-2 border-r border-b">
      <span className="text-4xl text-designColor mb-2" style={{color:`${color}`}}>{icons}</span>
      <h2 className="font-titleFont text-lg font-semibold">{title}</h2>
    </div>
  );
};

export default SkillsCard;
