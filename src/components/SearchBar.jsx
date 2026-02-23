import { MESSAGES } from "../constants/strings";
import { Search } from "lucide-react";
import { useState } from "react";
import { useSearchParams } from "react-router";

export default function SearchBar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearchInput = searchParams.get("search");

  const [searchInput, setSearchInput] = useState(initialSearchInput);

  function handleSubmit(e) {
    e.preventDefault();
    setSearchParams({ search: searchInput });
  }

  return (
    <div className="search-container">
      <Search size={18} className="search-icon" />
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          placeholder={MESSAGES.SEARCH}
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
      </form>
    </div>
  );
}
