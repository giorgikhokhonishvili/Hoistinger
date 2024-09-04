import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Main() {
  return (
    <div id="main" className="relative">
      <img
        className="w-full h-screen object-cover scale-x-[-1] object-left"
        src="https://img.freepik.com/free-vector/gradient-blur-pink-blue-abstract-background_53876-117324.jpg"
        alt="Background"
      />

      <div className="w-full h-screen absolute top-0 left-0 bg-white/25">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="text-4xl mb-4 sm:text-5xl font-bold text-gray-800">
            Im Gio X
          </h1>
          <h2 className="text-2xl flex sm:text-3xl pt-4 text-gray-800">
            <TypeAnimation
              sequence={["Developer", 1000, "Coder", 1000, "tech ent", 1000]}
              wrapper="span"
              speed={50}
              style={{
                fontSize: "1em",
                paddingLeft: "5px",
                display: "inline-block",
              }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaTwitter className="cursor-pointer" size={20} />
            <FaFacebook className="cursor-pointer" size={20} />
            <FaInstagram className="cursor-pointer" size={20} />
            <FaLinkedinIn className="cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
