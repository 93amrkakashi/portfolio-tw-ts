import React, { useState } from "react";
import axios from "axios";
import { FiSend } from "react-icons/fi";
import Title from "../home/Title";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdAlternateEmail } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const Contact: React.FC = () => {
  const [clientName, setClientName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [messages, setMessages] = useState<string>("");

  // ================= Error Messages Start here =================
  const [errClientName, setErrClientName] = useState<boolean>(false);
  const [errEmail, setErrEmail] = useState<boolean>(false);
  const [errMessages, setErrMessage] = useState<boolean>(false);
  // ================= Error Messages End here ===================
  const [successMsg, setSuccessMsg] = useState<string>("");

  // ================= Email Validation Start here ===============
  const EmailValidation = (email: string): boolean => {
    return String(email)
      .toLowerCase()
      .match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/)
      ? true
      : false;
  };
  // ================= Email Validation End here =================

  const handleName = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setClientName(e.target.value);
    setErrClientName(false);
  };
  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
    setErrEmail(false);
  };
  const handleMessages = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
    setMessages(e.target.value);
    setErrMessage(false);
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!clientName) {
      setErrClientName(true);
    }
    if (!email) {
      setErrEmail(true);
    } else {
      if (!EmailValidation(email)) {
        setErrEmail(true);
      }
    }
    if (!messages) {
      setErrMessage(true);
    }
    if (clientName && email && EmailValidation(email) && messages) {
      axios.post("https://getform.io/f/5fc7e313-e290-4b98-a32c-4d48fe987a7b", {
        name: clientName,
        email: email,
        message: messages,
      });
      setSuccessMsg(
        `Hello dear ${clientName}, Your message has been sent successfully. Thank you for your time!`
      );
      setClientName("");
      setEmail("");
      setMessages("");
    }
  };
  return (
    <div className="w-full">
      <Title title="Get" subTitle="in Touch" />
      <div className="p-6 w-full flex flex-col  justify-between gap-4 md:gap-10 lgl:gap-20">
        <div className="w-full lgl:w-2/2">
          <p className="flex gap-6  w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor  text-lg  font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              <ImLocation2 />
            </span>
            Maghagha - Minia - Egypt
          </p>
          <p className="flex gap-6  w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor   text-lg  font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              <BsFillTelephoneFill />
            </span>
            +201029404662
          </p>
          <p className="flex  lgl:gap-6 w-full text-lg text-[#ccc] py-4 border-b-[1px] border-b-zinc-800">
            <span className="bg-designColor  text-lg  font-titleFont font-medium px-2 rounded-md flex items-center justify-center">
              <MdAlternateEmail />
            </span>
            93amr.kakashi@gmail.com
          </p>
        </div>
      </div>
      <div className="w-full mt-10">
        <Title title="Send" subTitle="Messages" />
        {successMsg ? (
          <p className="text-center text-base font-titleFont p-20 text-designColor">
            {successMsg}
          </p>
        ) : (
          <form
            onSubmit={handleSend}
            id="form"
            action="https://getform.io/f/5fc7e313-e290-4b98-a32c-4d48fe987a7b"
            method="POST"
            className="p-6 flex flex-col gap-6"
          >
            <div className="w-full flex flex-col lgl:flex-row gap-4 lgl:gap-10 justify-between">
              <input
                onChange={handleName}
                value={clientName}
                className={`${
                  errClientName
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                // className="w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 border-zinc-600 focus-visible:border-designColor outline-none duration-300"
                type="text"
                placeholder="Full Name"
              />
              <input
                onChange={handleEmail}
                value={email}
                className={`${
                  errEmail
                    ? "border-red-600 focus-visible:border-red-600"
                    : "border-zinc-600 focus-visible:border-designColor"
                } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300`}
                type="email"
                placeholder="Email Address"
              />
            </div>
            <textarea
              onChange={handleMessages}
              value={messages}
              className={`${
                errMessages
                  ? "border-red-600 focus-visible:border-red-600"
                  : "border-zinc-600 focus-visible:border-designColor"
              } w-full bg-transparent border-2 px-4 py-2 text-base text-gray-200 outline-none duration-300 resize-none`}
              placeholder="Your Message"
              rows={4}
            ></textarea>
            <button className="text-base w-44 flex items-center gap-1 text-gray-200 hover:text-designColor duration-200">
              Send Message{" "}
              <span className="mt-1 text-designColor">
                <FiSend />
              </span>
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
