import React, { useState } from "react";
import SearchIcon from "@iconify-react/material-symbols/search";
import axios from "axios";
const ComparisionDetails = ({ props }) => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  // console.log(firstInput, secondInput);
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  // const fetchDataFromYoutubeApi = async () => {
  //   const response = await axios.get(
  //     "https://www.googleapis.com/youtube/v3/videos",
  //     {
  //       params: {
  //         part: "statistics, snippet",
  //         id: "ysRrzG8MU_M",
  //         key: "AIzaSyAMmYFi_UoJphU5wh3IKffNyGeU0BzEEUk",
  //       },
  //     },
  //   );

  //   console.log(response.data);
  // };

  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-2xl text-bold mb-5">{props.title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="inputs flex gap-6 items-center justify-center">
          <div className="input-group flex gap-2 flex-col">
            <label htmlFor="firstChannel">{props.firstInputLabel}</label>
            <div className="relative flex justify-around items-center">
              <input
                onChange={(e) => setFirstInput(e.target.value)}
                className="px-22 py-4 outline-none border border-gray-300 rounded-xl active:borderborder-blue-400"
                type="text"
                placeholder="Search for channel"
              />

              <SearchIcon
                className="absolute"
                height="24"
                style={{
                  color: "#f7eded",
                  position: "absolute",
                  left: "7px",
                }}
              />
              <button
                onClick={fetchDataFromYoutubeApi}
                className="bg-blue-600 cursor-pointer px-6 py-2 absolute right-2  rounded-2xl"
              >
                Search
              </button>
            </div>
          </div>
          <div className="input-group flex gap-2 flex-col">
            <label htmlFor="secondChannel">{props.secondInputLabel}</label>
            <div className="relative flex justify-around items-center">
              <input
                onChange={(e) => setSeondInput(e.target.value)}
                className="px-22 py-4 outline-none border border-gray-300 rounded-xl"
                type="text"
                placeholder="Search for channel"
              />
              <SearchIcon
                height="24"
                style={{
                  color: "#f7eded",
                  position: "absolute",
                  left: "7px",
                }}
              />

              <button className="bg-blue-600 absolute cursor-pointer px-6 py-2 right-2 rounded-2xl">
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="buttons flex justify-center items-center gap-4 mt-5">
          <button className="bg-gray-700 font-semibold cursor-pointer rounded-xl px-5 py-2">
            Compare Channels
          </button>

          <button className="border font-semibold border-gray-400 hover:bg-gray-600 cursor-pointer rounded-xl px-5 py-2">
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

export default ComparisionDetails;
