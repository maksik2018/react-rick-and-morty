import React from "react";
import { NavLink } from "react-router-dom";

const TargetEpisode = (episode) => {
  return (
    <>
      <NavLink exact to={`/Episode/${episode.id}`}>
        <div>
          <p>
            <strong>{episode.name}</strong>
          </p>
        </div>
      </NavLink>
    </>
  );
};

export default TargetEpisode;
