import { Heart, ShoppingBag, User } from "lucide-react";
import "./Header.css";
import { MESSAGES } from "../constants/strings";
import { ARIA_LABEL } from "../constants/aria-labels";
import { Link } from "react-router";
import SearchBar from "./SearchBar";
import ButtonDropdown from "./ButtonDropdown";

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <Link to="/" className="logo">
          <span className="logo-top">{MESSAGES.LOGO_TOP}</span>
          <span className="logo-bottom">{MESSAGES.LOGO_BOTTOM}</span>
        </Link>
      </div>

      <div className="header-center">
        <SearchBar />
      </div>

      <nav className="header-right">
        <ButtonDropdown
          Icon={Heart}
          size={24}
          strokeWidth={2}
          ariaLabel={ARIA_LABEL.FAVORITES}
        />

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
