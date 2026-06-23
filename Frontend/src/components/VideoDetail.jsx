import React from "react";
import { useContext } from "react";
import { YTContext } from "../context/yt.context.jsx";
const VideoDetail = () => {
  const context = useContext(YTContext);

  const { firstVideoData, secondVideoData } = context;
  return (
    <div className="border border-gray-400">
      <div className="flex gap-2">
        <img src="https://i.ytimg.com/vi/ysRrzG8MU_M/default.jpg" />
        <p>1st Mastercard IND v AUS T20I</p>
      </div>
    </div>
  );
};

export default VideoDetail;
