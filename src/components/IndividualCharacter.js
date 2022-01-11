import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import "./IndividualCharacter.css";
import TargetEpisode from "../components/Target_Episode";

export default function IndividualCharacter() {
  const history = useHistory();
  const { id } = useParams();
  const [character, setCharacter] = useState({});
  const [episode, setEpisode] = useState([]);
  const availableDate = moment(Date.parse(new Date(character.created))).format(
    "MMMM Do YYYY"
  );

  const getEpisode = (episode) => {
    episode.forEach((element) => {
      fetch(element)
        .then((res) => res.json())
        .then((apiData) => {
          setEpisode((ep) => [...ep, apiData]);
        });
    });
  };

  useEffect(() => {
    let cleanupFunction = false;
    const url = `https://rickandmortyapi.com/api/character/${id}`;

    fetch(url)
      .then((res) => res.json())
      .then((apiData) => {
        if (!cleanupFunction) setCharacter(apiData);
        getEpisode(apiData.episode);
      });
    return () => (cleanupFunction = true);
  }, [id]);

  return (
    <article className="individual-character">
      <div className="name-wrapper">
        <h4>{character.name}</h4>
        <div className="back-button-wrapper">
          <button className="back-button" onClick={() => history.goBack()}>
            GO BACK
          </button>
        </div>
      </div>
      <div className="background-wrapper">
        <div className="individual-character-box">
          <ul className="description">
            <li>Species: {character.species}</li>
            <li>Gender: {character.gender}</li>
            <li>Location: {character.location?.name}</li>
            <li>Status: {character.status}</li>
            {/* <li className="episode">Episode: {[character.episode]}</li> */}
            <li className="episode">
              Episode:
              {episode.map((ep) => (
                <TargetEpisode
                  key={ep.id + ep.id}
                  id={ep.id}
                  episode={ep.episode}
                  name={ep.name}
                />
              ))}
            </li>
            <li>Created: {availableDate}</li>
          </ul>
        </div>
      </div>
    </article>
  );
}
