import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { BsCloudLightningFill } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import Contacts from "./Contacts";

const Left: React.FC = () => {
  const [text] = useTypewriter({
    words: ["Front End Developer", "React.js Developer"],
    loop: true,
    typeSpeed: 40,
    deleteSpeed: 20,
    delaySpeed: 2000,
  });
  return (
    <div className="w-full lgl:w-5/12 h-full bg-bodyColor rounded-2xl shadow-testShwdow z-10">
      <div className="w-full h-3/5">
        <img
          className="w-full h-full object-cover rounded-2xl"
          src={"/pics/pic.jpg"}
          alt="bannerImage"
        />
      </div>
      <div className="w-full h-2/5 flex flex-col justify-between border-t-0 rounded-bl-xl rounded-br-xl">
        <div className="flex flex-col items-center gap-2 py-10">
          <h1 className="text-textColor text-4xl font-semibold">Amr Ali</h1>
          <p className="text-base text-designColor tracking-wide">
            {text}
            <Cursor cursorBlinking={false} cursorStyle="|" />
          </p>

          <Contacts />
        </div>
        <div className="flex h-14">
          <a
            href={"/cv.pdf"}
            target="_blank"
            className="w-1/2 border-t-[1px] borderRight border-t-zinc-800 text-m tracking-wide uppercase  gap-2 hover:text-designColor duration-300"
            rel="noreferrer"
          >
            <button className="w-full h-full flex justify-center font-bold items-center gap-2">
              Download CV <BsCloudLightningFill />
            </button>
          </a>

          <button className="w-1/2 border-t-[1px] border-t-zinc-800 font-bold text-m tracking-wide uppercase flex justify-center items-center gap-2 hover:text-designColor duration-300">
            <a
              href="https://wa.me/0201029404662"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact me
            </a>
            <FiSend />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
