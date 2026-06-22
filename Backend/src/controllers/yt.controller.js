import axios from "axios";

export async function fetchVideoData(req, res) {
  const { id } = req.body;
  console.log(id);

  try {
    const response = await axios.get(
      "https://www.googleapis.com/youtube/v3/videos",
      {
        params: {
          part: "statistics, snippet",
          id: id,
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
