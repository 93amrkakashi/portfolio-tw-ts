import React from "react";

type ResumeCardProps = {
  title: string;
  subTitle: string;
  des: string;
};

const ResumeCard: React.FC<ResumeCardProps> = ({ title, subTitle, des }) => {
  return (
    <div className="w-full py-6 flex flex-col gap-2.5 border-b-[1px] border-b-zinc-800">
      <h2 className="text-lg font-titleFont text-gray-200 font-medium">
        {title}
      </h2>
      <p className="text-sm text-[#999] -mt-2">{subTitle}</p>
      <p className="text-base text-[#999] font-medium pr-10">{des}</p>
    </div>
  );
};

export default ResumeCard;
