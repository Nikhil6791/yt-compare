import React, { useState } from "react";
import Card from "../components/Card";
import { channelCardData, videoCardData } from "../data";
import ComparisionDetails from "../components/ComparisionDetails";
const Compare = () => {
  const [comparisionData, setComparisionData] = useState(channelCardData);
  return (
    <div className="flex-1 flex justify-center items-center ">
      <div className="border flex justify-center items-center flex-col border-gray-400 rounded-xl">
        <div className="flex justify-between items-center p-12">
          <Card
            props={channelCardData}
            setComparisionData={setComparisionData}
          />
          <Card props={videoCardData} setComparisionData={setComparisionData} />
        </div>
        <div className="flex justify-center items-center p-5">
          {comparisionData && <ComparisionDetails props={comparisionData} />}
        </div>
      </div>
    </div>
  );
};

export default Compare;
