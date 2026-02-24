import "./ButtonDropdown.css";

// eslint-disable-next-line no-unused-vars
export default function ButtonDropdown({ Icon, size, strokeWidth, ariaLabel }) {
  return (
    <div className="button-dropdown">
      <button className="icon-btn" aria-label={ariaLabel}>
        <Icon size={size} strokeWidth={strokeWidth} />
        <span className="badge">0</span>
      </button>

      <div className="dropdown-card">
        <ul></ul>
      </div>
    </div>
  );
}
