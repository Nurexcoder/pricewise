"use client";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

type Props = {
  content: string;
};

const HeartHoverButton = ({ content }: Props) => {
  const [isMouseHover, setIsMouseHover] = React.useState(false);
  return (
    <button
      className="flex gap-2 items-center text-base bg-red-50 px-4 py-2 rounded text-red-700 transition-all"
      onMouseOver={() => setIsMouseHover(true)}
      onMouseLeave={() => setIsMouseHover(false)}
    >
      {!isMouseHover ? <FaRegHeart className=" leading-normal" /> : <FaHeart />}
      <span className="m-0 leading-normal">{content}</span>
    </button>
  );
};

export default HeartHoverButton;
