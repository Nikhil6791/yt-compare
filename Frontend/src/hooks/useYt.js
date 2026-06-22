import { useContext } from "react";
import { YTContext } from "../context/yt.context.jsx";

export const useYT = () => {
  const context = useContext(YTContext);

  const {
    firstChannelData,
    setFirstChannelData,
    secondChannelData,
    setSecondChannelData,
    firstVideoData,
    setFirstVideoData,
    secondVideoData,
    setSecondVideoData,
  } = context;
};
