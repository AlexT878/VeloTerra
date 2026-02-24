import { Sun, Moon, ShoppingBag, User } from "lucide-react";
import "./Header.css";
import { MESSAGES } from "../constants/strings";
import { ARIA_LABEL } from "../constants/aria-labels";
import { Link } from "react-router";
import SearchBar from "./SearchBar";
import ButtonDropdown from "./Dropdown/ButtonDropdown";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../services/cartSlice";
import { toggleTheme } from "../services/themeSlice";

export default function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const theme = useSelector((state) => state.theme.theme);

  function handleElementRemoved(item) {
    dispatch(removeFromCart(item.id));
  }

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
          Icon={ShoppingBag}
          size={24}
          strokeWidth={2}
          ariaLabel={ARIA_LABEL.CART}
          items={cartItems}
          onRemoveButtonClick={(item) => handleElementRemoved(item)}
          emptyMsg={MESSAGES.EMPTY_CART}
        />

        <button className="account-btn" aria-label={ARIA_LABEL.MY_PROFILE}>
          <User size={20} strokeWidth={2.5} />
          <span>{MESSAGES.MY_PROFILE}</span>
        </button>

        <button className="icon-btn" onClick={() => dispatch(toggleTheme())}>
          {theme === "light" ? <Sun /> : <Moon />}
        </button>
      </nav>
    </header>
  );
}
