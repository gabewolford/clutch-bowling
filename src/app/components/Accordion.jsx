"use client";

import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

export default function Accordion({ title, content, icon }) {
  const [isOpen, setIsOpen] = useState(true);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`overflow-hidden text-white col-span-1 transition duration-500`}
    >
      <div
        className="py-3 px-4 flex justify-between items-center cursor-pointer text-clutchBlue-200"
        onClick={toggleAccordion}
      >
        <div className="flex flex-row items-center gap-3 xl:gap-4 text-lg md:text-2xl xl:text-3xl">
          {icon}
          <h4 className="font-medium">{title}</h4>
        </div>
        <div className="lg:text-xl">
          {isOpen ? <FaChevronUp /> : <FaChevronDown />}
        </div>
      </div>
      {isOpen && (
        <div className={`py-3 px-4 text-sm md:text-base xl:text-lg`}>
          {content}
        </div>
      )}
    </div>
  );
}
