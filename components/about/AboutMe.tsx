import React from "react";

const AboutMe = () => {
  return (
    // <div className="flex flex-col md:flex-row pb-6">
      
    //   <div className="w-full md:w-1/2 p-6">
    //     <ul className="flex flex-col gap-1">
    //       <li className="aboutRightLi">
    //         <span className="aboutRightLiSpan">Age:</span>
    //         24
    //       </li>
    //       <li className="aboutRightLi">
    //         <span className="aboutRightLiSpan">Residence:</span>
    //         Egypt
    //       </li>
    //       <li className="aboutRightLi">
    //         <span className="aboutRightLiSpan">Freelance:</span>
    //         Available
    //       </li>
    //       <li className="aboutRightLi">
    //         <span className="aboutRightLiSpan">Address:</span>
    //         Egypt - Minia - Maghagha
    //       </li>
    //     </ul>
    //   </div>
    // </div>
    <div className="w-full md:w-2/2 px-6 border-r-[1px] border-r-zinc-800 flex items-center">
        <div className="py-6">
          <h2 className="font-semibold mb-1">Hello! I'm Amr Ali</h2>
          <p className="text-base leading-6 ">
            A React.js Frontend Web Developer. I am a rising talent in the web
            development world. I have a passion for developing and designing web
            applications and exploring more in this world that I love. I like
            using React to build responsive websites that are responsive to all
            screens, and I have a constant thirst for problem solving and
            getting into programming challenges.
          </p>
        </div>
      </div>
  );
};

export default AboutMe;
