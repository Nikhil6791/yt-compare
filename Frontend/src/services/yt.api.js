import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/yt",
  withCredentials: true,
});

const fetchDataFromYoutubeApi = async ({ id }) => {
  try {
    const response = await api.post(
      "/video",

      {
        id,
      },
    );

    return response.data;
  } catch (error) {
    console.log(error);
  }

  console.log(response.data);
};
