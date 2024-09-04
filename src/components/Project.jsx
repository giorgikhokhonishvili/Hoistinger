import React from "react";

export default function Project({ img, title }) {
  return (
    <div className="relative flex items-center justify-center h-auto w-full rounded-xl shadow-xl shadow-gray-400 rounder-xl group hover:bg-gredient-to-r from-gray-200 to-[#001b5e]">
      <img src={img} className="rounded-xl group-hover:opacity-10" />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] ">
        <h3 className="text-xl font-bold text-white tracking-wider text-center">
          {title}
        </h3>
        <p>REACT JS</p>
        <a href="#" className="pb-4 pt-2 text-white text-center">
          <p className="text-center p-3 rounder-ld bg-white text-gray-700 font-bold cursoir-pointertext-lg">
            more Info
          </p>
        </a>
      </div>
    </div>
  );
}
