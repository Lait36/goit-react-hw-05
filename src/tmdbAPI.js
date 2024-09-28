import axios from "axios";

const APIKEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDA1MjUxZTIwMzYxNGE2NDY2NTM4YjYyZGQ4NzI0ZSIsIm5iZiI6MTcyNzAxMzI2NC4xODM1NDcsInN1YiI6IjY2ZjAxNWFiNGE3ZjBiMThiMDI2NWJjMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.1P0Kaat1FxHPIQ2PoX-38Nl_1D4JEefSsiiMg6gdsyc";

export const getArticles = async () => {
  const res = await axios.get(
    "https://api.themoviedb.org/3/trending/movie/week",
    {
      headers: {
        Authorization: APIKEY,
      },
      params: {
        language: "en-US",
      },
    }
  );

  return res.data.results;
};

export const getMovieDetails = async (movieId) => {
  const res = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
    headers: {
      Authorization: APIKEY,
    },
    params: {
      language: "en-US",
    },
  });

  return res;
};

export const getMovieSearch = async (topic) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/search/movie?query=${topic}&include_adult=false&language=en-US&page=1`,
    {
      headers: {
        Authorization: APIKEY,
      },
      params: {
        language: "en-US",
      },
    }
  );
  return res;
};

export const getMovieCredits = async (movieId) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/credits?language=en-US`,
    {
      headers: {
        Authorization: APIKEY,
      },
      params: {
        language: "en-US",
      },
    }
  );
  return res;
}

export const getMovieReviews = async (movieId) => {
  const res = await axios.get(
    `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&page=1`,
    {
      headers: {
        Authorization: APIKEY,
      },
      params: {
        language: "en-US",
      },
    }
  );
  return res;
}