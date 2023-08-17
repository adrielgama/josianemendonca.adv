import React from "react";
import { RiArrowRightSLine } from "react-icons/ri";

interface ButtonProps {
  text: string;
  hasArrow?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, hasArrow }) => {
  return hasArrow ? (
    <a href="#contact">
      <div className="bg-gradient-to-tr from-wine600 to-wine600 rounded-full text-center text-white py-1 px-2 text-xs mt-8 max-w-[170px] h-7 flex items-center justify-between">
        <p>{text}</p>
        <div className="text-wine600 bg-gray-light rounded-full">
          <RiArrowRightSLine size={20} />
        </div>
      </div>
    </a>
  ) : (
    <a href="#contact">
      <div className="bg-gradient-to-tr from-wine600 to-wine600 rounded-full text-center text-white py-1 px-2 text-xs mt-8 max-w-[170px] h-7 flex items-center justify-center">
        <p>{text}</p>
      </div>
    </a>
  );
};
