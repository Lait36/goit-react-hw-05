import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCredits } from "../../tmdbAPI";

export default function MovieCast() {
  const [casts, setCasts] = useState([]);
  const { moviesId: movieId } = useParams();

  useEffect(() => {
    async function fetchCasts(movieId) {
      const data = await getMovieCredits(movieId);
      setCasts(data.data.cast);
    }

    fetchCasts(movieId);
  }, [movieId]);

  console.log(casts);
  return (
    <>
      <ul>
        {casts.map((item) => (
          <li key={item.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w500/${item.profile_path}`}
                alt=""
                height="250px"
              />
              <h3>{item.name}</h3>
              <p>{item.character}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
