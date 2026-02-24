import DropdownItem from "./DropdownItem";

export default function DropdownMenu({
  items,
  emptyMsg,
  onRemoveItem,
  onClose,
}) {
  return (
    <>
      <div className="dropdown-overlay" onClick={onClose} />

      <div className="dropdown-card">
        {items.length > 0 ? (
          <ul className="dropdown-list">
            {items.map((item) => (
              <DropdownItem key={item.id} item={item} onRemove={onRemoveItem} />
            ))}
          </ul>
        ) : (
          <div className="empty-container">
            <span className="empty-msg">{emptyMsg}</span>
          </div>
        )}
      </div>
    </>
  );
}
