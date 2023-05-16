import Image from "next/image";
import React from "react";

interface ProjectsCardProps {
  image: string;
  title: string;
  category: string;
  link: string;
  code: string;
}

const ProjectsCard: React.FC<ProjectsCardProps> = ({ image, title, category, link, code }) => {
  console.log(image);
  return (
    <div className="w-full py-8 flex flex-col justify-center items-center border-b-[1px] border-b-zinc-800">
      <a href={link} target="_blank" rel="noopener noreferrer">
        <div className="w-full h-full mb-3 overflow-hidden relative cursor-pointer group">
          <img
            src={image}
            alt="ImageOne"
            className="w-full h-full object-cover scale-100 group-hover:scale-110 duration-300 cursor-pointer"
          />
          <div className="w-full h-full absolute top-0 left-0 hover:bg-gradient-to-r from-blue-600 via-blue-600 to-blue-200 opacity-20"></div>
        </div>
      </a>
      <h3 className="font-titleFont text-lg font-semibold text-[#ccc]">
        {title}
      </h3>
      <p className="text-base text-gray-400 -mt-1">{category}</p>
    </div>
  );
};

export default ProjectsCard;
