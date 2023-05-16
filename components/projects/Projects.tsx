import React from "react";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import { data } from "./projectsData";

const Projects: React.FC = () => {
  return (
    <div>
      <Title title="Recent" subTitle="Projects" />
      <div className="px-3 w-full grid grid-cols-2 md:grid-cols-2 gap-1 lgl:gap-5">
        {data.map((pro) => {
          return (
            <ProjectsCard
              key={Math.random()}
              title={pro.title}
              category={pro.category}
              image={pro.image}
              link={pro.link}
              code={pro.code}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
