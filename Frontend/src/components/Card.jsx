import React, { useState } from "react";
import { channelSearchData, videoSearchData } from "../data/index.jsx";
import ComparisionDetails from "./ComparisionDetails";
const Card = ({ props, setComparisionData }) => {
  const handleClick = (e) => {
    console.log("Clicked");
    console.log(e.target.innerText);
    if (
      e.target.innerText === "Youtube Videos" ||
      e.target.innerText === "Compare view counts and performance"
    ) {
      setComparisionData(videoSearchData);
    }

    if (
      e.target.innerText === "Youtube Channels" ||
      e.target.innerText === "Compare subscriber counts and metrics"
    ) {
      setComparisionData(channelSearchData);
    }
  };
  return (
    <>
      <div
        onClick={handleClick}
        className="cursor-pointer hover:border-blue-500  border border-gray-400 px-12 py-4 m-4 rounded-2xl"
      >
        <div className="heading  flex gap-2 items-center justify-center">
          {props.icon}
          <p className="text-xl">{props.title}</p>
        </div>
        <p className="text-md">{props.description}</p>
      </div>

      {/* {comparisionData && <ComparisionDetails props={comparisionData} />} */}
    </>
  );
};

export default Card;
