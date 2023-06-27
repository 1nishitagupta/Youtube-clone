import axios from "axios";

const BASE_URL = "https://youtube-v3-alternative.p.rapidapi.com";

const options = {
  url: BASE_URL,
  params: {},
  headers: {
    "X-RapidAPI-Key": process.env.REACT_APP_RAPID_API_KEY,
    "X-RapidAPI-Host": "youtube-v3-alternative.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};
