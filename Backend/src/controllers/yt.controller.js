import axios from "axios";

export async function fetchVideoData(req, res) {
  // console.log("REQ", req.params);
  const { id } = req.params;
  // console.log(id);
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "statistics, snippet",
          id: req.params.id,
          key: process.env.YOUTUBE_API_KEY,
        },
      },
    );

    return res.json(response.data);
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.data.error.errors);
  }
}

export async function getChannelID(req, res) {
  const { userName } = req.params;
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          part: "snippet",
          q: userName,
          type: "channel",
          key: process.env.YOUTUBE_API_KEY,
        },
      },
    );

    return res.json(response.data);
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.data.error.errors);
  }
}

export async function fetchChannelData(req, res) {
  console.log("REQ", req.params);
  console.log("CHANNEL CONTROLLER HIT");
  const { channelId } = req.params;
  console.log({ channelId });

  // console.log(id);
  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        params: {
          part: "snippet,statistics",
          id: channelId,
          key: process.env.YOUTUBE_API_KEY,
        },
      },
    );

    return res.json(response.data);
  } catch (error) {
    console.log(error.response.data);
    console.log(error.response.data.error.errors);
  }
}
