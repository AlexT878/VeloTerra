import { Heart, ShoppingBag, User } from "lucide-react";
import "./Header.css";
import { MESSAGES } from "../constants/strings";
import { ARIA_LABEL } from "../constants/aria-labels";
import { Link } from "react-router";
import { setSearchTerm } from "../services/bikeSlice";
import { useDispatch } from "react-redux";
import SearchBar from "./SearchBar";

export default function Header() {
  const dispatch = useDispatch();

  function handleSearch(input) {
    dispatch(setSearchTerm(input));
  }

  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          <span className="logo-top">VELO</span>
          <span className="logo-bottom">terra</span>
        </Link>
      </div>

      <div className="header-center">
        <SearchBar
          onSearchChange={(input) => {
            handleSearch(input);
          }}
        />
      </div>

      <nav className="header-right">
        <button className="icon-btn" aria-label={ARIA_LABEL.FAVORITES}>
          <Heart size={24} strokeWidth={2} />
          <span className="badge">0</span>
        </button>

        <button className="icon-btn" aria-label={ARIA_LABEL.CART}>
          <ShoppingBag size={24} strokeWidth={2} />
          <span className="badge">0</span>
        </button>

        <button className="account-btn" aria-label={ARIA_LABEL.MY_PROFILE}>
          <User size={20} strokeWidth={2.5} />
          <span>{MESSAGES.MY_PROFILE}</span>
        </button>
      </nav>
    </header>
  );
}
