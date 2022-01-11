import { NavLink } from "react-router-dom";
import "./Navigation.css";

export default function Navigation() {
  function Clear() {
    localStorage.removeItem("linkedin_oauth2_state");
  }
  return (
    <div className="navigation-wrapper">
      <NavLink to="/">
        <img
          className="logo hidden-mobile"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/799px-Rick_and_Morty.svg.png"
          alt="rick and morty logo"
        />
        <button className="clear" onClick={Clear}>
          Sign out with Linkedin
        </button>
      </NavLink>
    </div>
  );
}
