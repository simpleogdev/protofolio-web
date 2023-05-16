/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Image from "next/image";
import web1 from "/public/web1.png";
import web2 from "/public/web2.png";
import web3 from "/public/web3.png";
import web4 from "/public/web4.png";
import web5 from "/public/web5.png";
import web6 from "/public/web6.png";

const Section4 = () => {
  return (
    <div className="mt-16 ml-16 text-white">
      <div className="flex">
        <h3 className="font-semibold text-3xl">Portofolio</h3>
      </div>
      <div>
        <p className="text-left mt-7 font-poppins font-semibold">
          since the beginning of my journey as a freelancer designer and developer, i ve
          done remote work for <span className="text-teal-500">agencies</span> consulted
          for <span className="text-teal-500">startups</span>and collaborated with
          talented people to create digital product for both <br></br>business and
          consumer use.
        </p>
        <p className="text-left mt-6 font-poppins font-semibold">
          i offer from a wide range of services, including brand design, programming
          teaching
        </p>
      </div>
      <div className="mt-12 mr-10 sm:mt-10 flex">
        <Image className="w-[50%] rounded-xl" src={web1} alt="" />
        <Image className="w-[45%] rounded-xl mx-8 " src={web2} alt="" />
      </div>
      <div className=" mt-12 mr-10 sm:mt-10 flex">
        <Image className="w-[50%] rounded-xl" src={web3} alt="" />
        <Image className="w-[45%] rounded-xl mx-8 " src={web4} alt="" />
      </div>
      <div className=" mt-12 mr-10 sm:mt-10 flex">
        <Image className="w-[50%] rounded-xl" src={web5} alt="" />
        <Image className="w-[45%] rounded-xl mx-8 " src={web6} alt="" />
      </div>
    </div>
  );
};

export default Section4;
