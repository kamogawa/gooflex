import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    apikey: "d07205f9ad7855c70fd0b0a7b4459976",
    language: "en-US"
  }
});

export const tvApi = {
  topRated: () => api.get("tv/top_rated"),
  popular: () => api.get("tv/popular"),
  airingToday: () => api.get("tv/airing_today"),
  movieDetail: (id) => api.get(`movie/${id}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  searchTv: (term) => api.get("search/tv", {
    params: {
      query: encodeURIComponent(term)
    }
  })
}

export const movieApi = {
  nowPlaying: () => api.get("movie/now_playing"),
  upComing: () => api.get("movie/upcoming"),
  popular: () => api.get("movie/popular"),
  showDetail: (id) => api.get(`tv/${id}`, {
    params: {
      append_to_response: "videos"
    }
  }),
  searchMove: (term) => api.get("search/movie", {
    params: {
      query: encodeURIComponent(term)
    }
  })
}