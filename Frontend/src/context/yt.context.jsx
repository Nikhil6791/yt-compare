import { createContext, useState } from "react";

export const YTContext = createContext();

export const YTProvider = ({ children }) => {
  const [firstVideoData, setFirstVideoData] = useState([]);
  const [secondVideoData, setSecondVideoData] = useState([]);

  const [firstChannelData, setFirstChannelData] = useState([]);
  const [secondChannelData, setSecondChannelData] = useState([]);

  return (
    <YTContext.Provider
      value={{
        firstVideoData,
        setFirstVideoData,
        secondVideoData,
        setSecondVideoData,
        firstChannelData,
        setFirstChannelData,
        secondChannelData,
        setSecondChannelData,
      }}
    >
      {children}
    </YTContext.Provider>
  );
};
