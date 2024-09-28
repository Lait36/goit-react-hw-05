import { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
import { getMovieSearch } from "../../tmdbAPI";
import SearchBar from "../../Components/SearchBar/SearchBar";
import MovieList from "../../Components/MovieList/MovieList";

export default function MoviesPage() {
  const [topic, setTopic] = useState("");
  const [movies, setMovies] = useState(() => {
    const savedMovies = sessionStorage.getItem("movies"); // Используем sessionStorage
    return savedMovies ? JSON.parse(savedMovies) : [];
  });
  const [error, setError] = useState(null);
  console.log(error);

  const onSubmit = (newTopic) => {
    setMovies([]); 
    setTopic(newTopic);
    setError(false);
  };

  useEffect(() => {
    async function fetchMoviesList() {
      if (topic === "") {
        return;
      }

      try {
        const data = await getMovieSearch(topic);
        setMovies(data.data.results);
        // Сохраняем фильмы в sessionStorage
        sessionStorage.setItem("movies", JSON.stringify(data.data.results));
      } catch {
        setError(true);
      }
    }

    fetchMoviesList();
  }, [topic]);

  return (
    <>
      <SearchBar onSubmit={onSubmit} />
      {movies && <MovieList movies={movies} />}
    </>
  );
}
