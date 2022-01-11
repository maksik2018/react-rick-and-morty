import { useState, useEffect } from "react";
import Filter from "./Filter";
import "./CharacterList.css";
import NewItem from "./NewItem";

export default function CharactersList() {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [statusFilter, setStatusFilter] = useState("all");
  const [nameFilter, setNameFilter] = useState("");

  useEffect(() => {
    const url = `https://rickandmortyapi.com/api/character/?page=${page}`;

    fetch(url)
      .then((res) => res.json())
      .then((apiData) => {
        setCharacters((previousCharacter) => {
          return [...previousCharacter, ...apiData.results];
        });
        setTotalPages(apiData.info.pages);
      });
  }, [page]);

  const saved = localStorage.getItem("linkedin_oauth2_state");

  function handleLoadMore() {
    if (page < totalPages) {
      setPage(page + 1);
    }
  }

  function handleStatusFilterChange(statusFilterValue) {
    setStatusFilter(statusFilterValue);
  }

  function handleNameFilterChange(nameFilterValue) {
    setNameFilter(nameFilterValue);
  }

  function renderFilteredCharacters() {
    return characters
      .filter((character) => {
        return character.status === statusFilter || statusFilter === "all";
      })
      .filter((character) => {
        return (
          character.name.toLowerCase().includes(nameFilter.toLowerCase()) ||
          nameFilter === ""
        );
      })
      .map((character) => {
        return <NewItem key={character.id} data={character} />;
      });
  }

  if (saved) {
    return (
      <div>
        <Filter
          onStatusFilterChange={handleStatusFilterChange}
          onNameFilterChange={handleNameFilterChange}
        />
        <div className="characters-main">
          <ul className="character-list">{renderFilteredCharacters()}</ul>
        </div>
        {page < totalPages && (
          <div className="load-more-button-wrapper">
            <button className="load-more-button" onClick={handleLoadMore}>
              Load more
            </button>
          </div>
        )}
      </div>
    );
  }
}
