import { MESSAGES } from "../constants/strings";
import { Search } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router";
import "./SearchBar.css";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentSearch = searchParams.get("search") || "";

  const [searchInput, setSearchInput] = useState(currentSearch);

  function handleSubmit(e) {
    e.preventDefault();

    const newParams = new URLSearchParams(searchParams);

    if (searchInput) {
      newParams.set("search", searchInput);
    } else {
      newParams.delete("search");
    }

    setSearchParams(newParams);
  }

  return (
    <div className="search-container">
      <Search size={18} className="search-icon" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          id="search-input"
          type="text"
          placeholder={MESSAGES.SEARCH}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>
    </div>
  );
}
