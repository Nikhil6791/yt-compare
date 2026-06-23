import { useContext } from "react";
import { YTContext } from "../context/yt.context.jsx";
import { fetchDataFromYoutubeApi } from "../services/yt.api.js";
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

  const handleYTVideoData = async ({ id, type }) => {
    const data = await fetchDataFromYoutubeApi({ id });
    console.log("Data", data);
    // const newFirstVideoData = [...firstVideoData];
    // newFirstVideoData.push(data);
    if (type === "first") {
      setFirstVideoData(data);
      console.log("First Video Data", firstVideoData);
    }

    if (type === "second") {
      setSecondVideoData(data);
      console.log("Second Video Data", secondVideoData);
    }
  };

  return { handleYTVideoData };
};
