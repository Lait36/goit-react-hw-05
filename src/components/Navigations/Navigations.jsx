import { NavLink } from "react-router-dom";
import css from "./Navigations.module.css";
import clsx from "clsx";

export default function Navigations() {
  const makeNavLinkClass = ({ isActive }) => {
    return clsx(css.link, isActive && css.active);
  };

  return (
    <div className={css.container}>
      <NavLink to="/" className={makeNavLinkClass}>
        Home
      </NavLink>
      <NavLink to="/movies" className={makeNavLinkClass}>
        Movies
      </NavLink>
    </div>
  );
}
