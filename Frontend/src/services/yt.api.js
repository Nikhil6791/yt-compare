import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api/yt",
  withCredentials: true,
});

export const fetchDataFromYoutubeApi = async ({ id }) => {
  console.log("Id", id);
  try {
    const response = await api.get(`/video/${id}`);

    return response.data;
  } catch (error) {
    console.log(error);
    // console.log(error.response.data.error.errors);
  }

  // console.log(response.data);
};
