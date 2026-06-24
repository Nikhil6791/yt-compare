import React from "react";

const VideoDetail = ({ props }) => {
  const { items } = props;
  return (
    <div className="m-4">
      {items?.map((elem) => {
        return (
          <div
            className="border border-gray-400  rounded-2xl p-2 "
            key={elem.id}
          >
            <div className=" flex flex-wrap justify-center items-center gap-2">
              <img
                src={elem.snippet.thumbnails.default.url}
                className="rounded-2xl"
              />
              <p>{elem.snippet.title}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default VideoDetail;
