import React, { useState } from "react";
import SearchIcon from "@iconify-react/material-symbols/search";
import axios from "axios";
import { useYT } from "../hooks/useYt.js";
const ComparisionDetails = ({ props }) => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  // console.log(secondInput);
  console.log(firstInput);
  console.log(secondInput);
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const { handleYTVideoData } = useYT();

  const handleYTVideoDataCaller = async (type) => {
    // let input = type === "first" ? firstInput : secondInput;
    // console.log("Input", input);

    let input;
    if (type === "first") {
      input = firstInput;
    } else {
      input = secondInput;
    }

    console.log("Input", input);
    let linkArr = input.split("/");
    let id = linkArr[linkArr.length - 1].split("?")[0];
    console.log("Click Function", id);
    await handleYTVideoData({ id, type });
  };

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
                type="button"
                onClick={() => handleYTVideoDataCaller("first")}
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
                onChange={(e) => setSecondInput(e.target.value)}
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

              <button
                type="button"
                onClick={() => handleYTVideoDataCaller("second")}
                className="bg-blue-600 absolute cursor-pointer px-6 py-2 right-2 rounded-2xl"
              >
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
