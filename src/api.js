import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    apikey: "d07205f9ad7855c70fd0b0a7b4459976",
    language: "en-US"
  }
});

api.get("tv/popular");

export default api;