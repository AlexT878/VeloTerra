import { useState } from "react";
import "./ButtonDropdown.css";
import DropdownMenu from "./DropdownMenu";

export default function ButtonDropdown({
  // eslint-disable-next-line no-unused-vars
  Icon,
  size,
  strokeWidth,
  ariaLabel,
  items = [],
  emptyMsg,
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="button-dropdown">
      <button
        className="icon-btn"
        aria-label={ariaLabel}
        onClick={() => setIsOpen((prevState) => !prevState)}
      >
        <Icon size={size} strokeWidth={strokeWidth} />
        {items.length > 0 && <span className="badge">{items.length}</span>}
      </button>

      {isOpen && (
        <DropdownMenu
          items={items}
          emptyMsg={emptyMsg}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
