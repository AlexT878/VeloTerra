/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./ButtonDropdown.css";

export default function ButtonDropdown({
  Icon,
  size,
  strokeWidth,
  ariaLabel,
  items = [],
  onRemoveButtonClick,
  empty_msg,
}) {
  const [buttonPressed, setButtonPressed] = useState(false);

  return (
    <div className="button-dropdown">
      <button
        className="icon-btn"
        aria-label={ariaLabel}
        onClick={() => setButtonPressed((prevState) => !prevState)}
      >
        <Icon size={size} strokeWidth={strokeWidth} />
        <span className="badge">{items.length}</span>
      </button>

      {buttonPressed && (
        <>
          <div
            className="dropdown-overlay"
            onClick={() => setButtonPressed(false)}
          />

          <div className="dropdown-card">
            {items.length > 0 ? (
              <ul className="dropdown-list">
                {items.map((item) => (
                  <li key={item.id}>
                    <div className="list-row">
                      <img src={item.image} alt={item.name} />
                      <span className="item-name">{item.name}</span>
                      <button
                        className="remove-item"
                        onClick={(e) => {
                          e.stopPropagation();
                          onRemoveButtonClick(item);
                        }}
                      >
                        ✕
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="empty-container">
                <span className="empty-msg">{empty_msg}</span>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
