import axios from "axios";
const KEY = "AIzaSyAdOd_9QjdnB7dgCCUZNEIOE4IQo_BZMn4";

export const baseParams = {
  part: "snippet",
  maxResults: 5,
  key: KEY,
};

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
