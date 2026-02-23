import { MESSAGES } from "../constants/strings";
import { Search } from "lucide-react";
import { useState } from "react";

export default function SearchBar({ onSearchChange }) {
  const [searchInput, setSearchInput] = useState();

  function handleSubmit(e) {
    e.preventDefault();
    onSearchChange(searchInput);
  }

  return (
    <div className="search-container">
      <Search size={18} className="search-icon" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder={MESSAGES.SEARCH}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>
    </div>
  );
}
