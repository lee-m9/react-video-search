import axios from "axios";

const KEY = "AIzaSyAToGaBhNACPoTlWBsXfJizJbyl8mstmqY";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
