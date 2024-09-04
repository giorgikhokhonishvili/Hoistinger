import React from "react";

export default function WorkItem({ year, title, details, duration }) {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4 relative">
        {/* Circle on the left side */}
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full border-2 border-white left-[-22px] top-1/2 transform -translate-y-1/2" />

        <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-[#001b5e] rounded-md">
            {year}
          </span>
          <span className="text-lg font-semibold text-[#001b5e]">{title}</span>
          <span className="my-1 text-sm font-normal leading-none text-stone-400">
            {duration}
          </span>
        </p>
        <p>
          <span className="my-2 text-base font-normal text-stone-500">
            {details}
          </span>
        </p>
      </li>
    </ol>
  );
}
