import React from "react";

const Card = ({ props }) => {
  return (
    <div className="cursor-pointer border border-gray-400 px-12 py-4 m-4 rounded-2xl">
      <div className="heading flex gap-2 items-center justify-center">
        {props.icon}
        <p className="text-2xl">{props.title}</p>
      </div>
      <p className="text-md">{props.description}</p>
    </div>
  );
};

export default Card;
