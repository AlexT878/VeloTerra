import { Sun, Moon, ShoppingBag, User } from "lucide-react";
import "./Header.css";
import { MESSAGES } from "../constants/strings";
import { ARIA_LABEL } from "../constants/aria-labels";
import { Link } from "react-router";
import SearchBar from "./SearchBar";
import ButtonDropdown from "./Dropdown/ButtonDropdown";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../services/themeSlice";
import { loginAsAdmin, logout } from "../services/authSlice";
import { loginWithSupabase, logoutFromSupabase } from "../services/authService";
import ContactButton from "./Contact/ContactButton";

export default function Header() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const theme = useSelector((state) => state.theme.theme);
  const { isAdmin, profileName } = useSelector((state) => state.auth);

  async function handleAuthClick() {
    try {
      if (isAdmin) {
        await logoutFromSupabase();
        dispatch(logout());
      } else {
        const email = window.prompt("Email:");
        if (!email) return;
        const password = window.prompt("Password:");
        if (!password) return;

        await loginWithSupabase(email, password);
        dispatch(loginAsAdmin());
        alert("Logged as Admin!");
      }
    } catch (error) {
      alert("Error: " + error.message);
    }
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
        <ContactButton
          size={18}
          strokeWidth={2.6}
          className="contact-header-container"
        />
      </div>

      <nav className="header-right">
        <ButtonDropdown
          Icon={ShoppingBag}
          size={24}
          strokeWidth={2}
          ariaLabel={ARIA_LABEL.CART}
          items={cartItems}
          emptyMsg={MESSAGES.EMPTY_CART}
        />

        <button
          className="account-btn"
          aria-label={ARIA_LABEL.MY_PROFILE}
          onClick={handleAuthClick}
        >
          <User size={20} strokeWidth={2.5} />
          <span className="account-name">{profileName}</span>
        </button>

        <button
          className="icon-btn"
          onClick={() => dispatch(toggleTheme())}
          aria-label={
            theme === "light" ? ARIA_LABEL.CHANGE_DARK : ARIA_LABEL.CHANGE_LIGHT
          }
        >
          {theme === "light" ? <Sun /> : <Moon />}
        </button>

        <ContactButton
          size={24}
          strokeWidth={2}
          className="contact-floating-container"
        />
      </nav>
    </header>
  );
}
