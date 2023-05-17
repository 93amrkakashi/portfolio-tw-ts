import { FaLinkedin } from "react-icons/fa";
import { AiFillFacebook } from "react-icons/ai";
import {
  FaGooglePlusSquare,
  FaWhatsappSquare,
  FaGithubSquare,
} from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="flex justify-center gap-2 mt-2">
      <a target="_blank" href="https://github.com/93amrkakashi">
        <span className="hover:text-designColor duration-300 cursor-pointer text-3xl">
          <FaGithubSquare />
        </span>
      </a>
      <a
        href="https://www.linkedin.com/in/amr-ali-mohamed-88192b241/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="hover:text-designColor duration-300 cursor-pointer text-3xl">
          <FaLinkedin />
        </span>
      </a>

      <a
        href="https://www.facebook.com/93amr.kakashi/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="hover:text-designColor duration-300 cursor-pointer text-3xl">
          <AiFillFacebook />
        </span>
      </a>
      <a
        href="mailto:93amr.kakashi@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="hover:text-designColor duration-300 cursor-pointer text-3xl">
          <FaGooglePlusSquare />
        </span>
      </a>
      <a
        href="https://wa.me/0201029404662"
        target="_blank"
        rel="noopener noreferrer"
      >
        <span className="hover:text-designColor duration-300 cursor-pointer text-3xl relative">
          <FaWhatsappSquare />
        </span>
      </a>
    </div>
  );
};

export default Contacts;
