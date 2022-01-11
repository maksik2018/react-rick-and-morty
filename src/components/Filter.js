import "./Filter.css";
import { FaSearch } from "react-icons/fa";

export default function Filter({ onNameFilterChange }) {
  function handleNameFilter(event) {
    event.preventDefault();
    const filterValueName = event.target.charactername.value;
    onNameFilterChange(filterValueName);
  }

  return (
    <div className="filter-form-container">
      <form onSubmit={handleNameFilter} className="filter-form">
        <div className="name-search-container">
          <input
            type="text"
            name="charactername"
            id="charactername"
            placeholder="Search for your favourite character"
            className="search-bar-input"
            aria-label="name search input"
          />
          <button
            type="submit"
            className="filter-form-button"
            aria-label="name search submit "
          >
            <FaSearch className="mag-glass" />
          </button>
        </div>
      </form>
    </div>
  );
}
