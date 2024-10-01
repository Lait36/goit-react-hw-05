/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import css from "./MovieList.module.css";

export default function MovieList({ movies }) {
  return (
    <ul className={css.articlesList}>
      {movies.map((item) => (
        <li key={item.id} className={css.articleItem}>
          <Link to={`/movies/${item.id}`} className={css.articleLink}>
            {item.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
