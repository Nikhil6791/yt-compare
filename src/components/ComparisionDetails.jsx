import React from "react";
import SearchIcon from "@iconify-react/material-symbols/search";
const ComparisionDetails = () => {
  return (
    <div className="flex justify-center items-center flex-col ">
      <h1 className="text-2xl text-bold mb-5">
        Select Two Channels to Compare
      </h1>
      <form className="flex gap-7">
        <div className="input-group flex gap-2 flex-col">
          <label htmlFor="firstChannel">First Channel</label>
          <div className="relative flex justify-around items-center">
            <input
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
            <button className="bg-blue-600 cursor-pointer px-6 py-2 absolute right-2  rounded-2xl">
              Search
            </button>
          </div>
        </div>
        <div className="input-group flex gap-1 flex-col">
          <label htmlFor="secondChannel">Second Channel</label>
          <div className="relative flex justify-around items-center">
            <input
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
      </form>
    </div>
  );
};

export default ComparisionDetails;
