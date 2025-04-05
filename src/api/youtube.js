import axios from "axios";

// npm install --save axios
const KEY = "AIzaSyCj3RDDylEtIF_i1LFBPfNMWnbnZYBLYpM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResult: 6,
    // javascript here no need {} as it is not JSX
    key: KEY,
  },
});
