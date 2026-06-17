import React from "react";
import Card from "../components/Card";
import { channelCardData, videoCardData } from "../data";
import ComparisionDetails from "../components/ComparisionDetails";
const Compare = () => {
  return (
    <div className="flex-1 flex justify-center items-center ">
      <div className="border flex justify-center items-center flex-col border-gray-400 rounded-xl">
        <div className="flex justify-between items-center p-12">
          <Card props={channelCardData} />
          <Card props={videoCardData} />
        </div>
        <div className="flex justify-center items-center p-5">
          <ComparisionDetails />
          {/* <ComparisionDetails /> */}
        </div>
      </div>
    </div>
  );
};

export default Compare;
