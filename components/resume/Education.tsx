import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          title="Faculty Of Social Works"
          subTitle="Fayoum University"
          des="Bachelor of social work"
        />
        <ResumeCard
          title="High School"
          subTitle="New Maghagha High School"
          des="High School Diploma, Literary Stream"
        />
      </div>
    </div>
  );
};

export default Education;
