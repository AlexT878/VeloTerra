/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./ButtonDropdown.css";
import DropdownMenu from "./DropdownMenu";

export default function ButtonDropdown({
  Icon,
  size,
  strokeWidth,
  ariaLabel,
  items = [],
  onRemoveButtonClick,
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
        <span className="badge">{items.length}</span>
      </button>

      {isOpen && (
        <DropdownMenu
          items={items}
          emptyMsg={emptyMsg}
          onRemoveItem={onRemoveButtonClick}
          onClose={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
