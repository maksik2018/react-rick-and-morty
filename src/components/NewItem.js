import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./NewItem.css";

const NewItem = ({ data }) => {
  const { id, name, status, image } = data;
  const [show, setShow] = useState(false);

  return (
    <>
      <li className="character-item">
        <div className="name-container">
          <Link to={`/characters/${id}`}>
            <h6>{name}</h6>
            <p>{status}</p>
            {show && <img className="image" src={image} alt="preview" />}
          </Link>
          <button className="btn-clc" onClick={() => setShow(!show)}>
            show/close character's image
          </button>
        </div>
      </li>
    </>
  );
};

export default NewItem;
