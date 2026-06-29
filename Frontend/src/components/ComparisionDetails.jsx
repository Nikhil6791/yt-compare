import React, { useState, useRef } from "react";
import SearchIcon from "@iconify-react/material-symbols/search";
import axios from "axios";
import { useYT } from "../hooks/useYt.js";
import { useContext } from "react";
import { YTContext } from "../context/yt.context.jsx";
import VideoDetail from "./VideoDetail.jsx";
import VideoData from "./VideoData.jsx";
import { useNavigate } from "react-router-dom";

const ComparisionDetails = ({ props, tab }) => {
  const [firstInput, setFirstInput] = useState("");
  const [secondInput, setSecondInput] = useState("");
  const [isClicked, setIsClicked] = useState(false);
  // const { inputPlaceHolder } = props;
  const firstButtonRef = useRef();
  const secondButtonRef = useRef();
  const navigate = useNavigate();
  const context = useContext(YTContext);
  const {
    firstVideoData,
    secondVideoData,
    setFirstVideoData,
    setSecondVideoData,
  } = context;
  // console.log(secondInput);
  console.log({ firstVideoData });

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const resetAll = () => {
    setFirstVideoData(null);
    setSecondVideoData(null);
    setFirstInput("");
    setSecondInput("");
  };

  const { handleYTVideoData, handleYTChannelData } = useYT();

  const handleYTVideoDataCaller = async (e) => {
    // let input = type === "first" ? firstInput : secondInput;
    // console.log("Input", input);
    // const buttonClicked = e.currentTarget.id;
    let input;
    let type;
    if (e.currentTarget === firstButtonRef.current) {
      input = firstInput;
      type = "first";
    } else {
      input = secondInput;
      type = "second";
    }

    let linkArr = input.split("/");
    let id = linkArr[linkArr.length - 1].split("?")[0];
    let userName = linkArr[linkArr.length - 1].split("?")[0];
    if (tab === "video") {
      await handleYTVideoData({ id, type });
    }

    if (tab === "channel") {
      await handleYTChannelData({ userName, type });
    }
  };

  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-2xl text-bold mb-5">{props.title}</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-around gap-4">
          <div className="input-group flex gap-2 flex-col">
            <label htmlFor="firstChannel">{props.firstInputLabel}</label>
            <div className="relative flex justify-between items-center">
              <input
                onChange={(e) => setFirstInput(e.target.value)}
                className="px-[10vw] py-4 outline-none border border-gray-300 rounded-xl active:borderborder-blue-400"
                type="text"
                placeholder={props.inputPlaceHolder}
                value={firstInput}
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
                ref={firstButtonRef}
                type="button"
                onClick={handleYTVideoDataCaller}
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
                className="px-[10vw] py-4 outline-none border border-gray-300 rounded-xl"
                type="text"
                placeholder={props.inputPlaceHolder}
                value={secondInput}
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
                ref={secondButtonRef}
                type="button"
                onClick={handleYTVideoDataCaller}
                className="bg-blue-600 absolute cursor-pointer px-6 py-2 right-2 rounded-2xl"
              >
                Search
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 m-4">
          {firstVideoData && <VideoDetail props={firstVideoData} />}
          {secondVideoData && <VideoDetail props={secondVideoData} />}
        </div>

        <div className="buttons flex justify-end items-center gap-4 mt-5">
          <button
            onClick={() => setIsClicked(true)}
            disabled={!firstVideoData || !secondVideoData}
            className={`font-semibold rounded-xl px-5 py-2
    ${
      !firstVideoData || !secondVideoData
        ? "bg-gray-400 cursor-not-allowed"
        : "bg-gray-800 hover:bg-gray-700 cursor-pointer"
    }`}
          >
            {props.buttonTitle}
          </button>

          <button
            onClick={resetAll}
            className="border font-semibold border-gray-400 hover:bg-gray-600 cursor-pointer rounded-xl px-5 py-2"
          >
            Reset
          </button>
        </div>

        <div className="flex justify-around items-center m-4">
          {isClicked && <VideoData props={firstVideoData} />}
          {isClicked && <VideoData props={secondVideoData} />}
        </div>
      </form>
    </div>
  );
};

export default ComparisionDetails;
