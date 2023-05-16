/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
// import Avatar from '.../public/dev-ed-wave.png'
import Avatar from "/public/dev-ed-wave.png";
import Image from "next/image";

const Header = () => {
  return (
    <div className=" mt-32 md:mt-52 flex text-white justify-center font-poppins align-middle text-center items-center">
      <div>
        <h1 className="text-teal-600 text-5xl mt-2 font-bold">Zahid Khan</h1>
        <p className="mt-8 font-semibold text-xl">Developer and designer</p>
        <p className=" items-center text-[15px] max-w-sm mx-auto md: font-semibold mt-6 text-center leading-[1.7]">
          Freelancer providing services for programming and <br></br>design contents
          Join me down below and let's get<br></br>cracking!
        </p>
        <div className=" text-5xl cursor-pointer text-gray-500 gap-16 flex mt-7 justify-center">
          <AiFillTwitterCircle />
          <AiFillLinkedin />
          <AiFillYoutube />
        </div>
        <div className="flex mt-10 mx-auto justify-center relative bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 overflow-hidden">
          <Image className="object-cover" src={Avatar} alt="" />
        </div>
      </div>
      
    </div>
  );
};

export default Header;
