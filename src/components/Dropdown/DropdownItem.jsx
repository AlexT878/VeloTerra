export default function DropdownItem({ item, onRemove }) {
  return (
    <li>
      <div className="list-row">
        <img src={item.image} alt={item.name} />
        <span className="item-name">{item.name}</span>
        <button
          className="remove-item"
          onClick={(e) => {
            e.stopPropagation();
            onRemove(item);
          }}
        >
          ✕
        </button>
      </div>
    </li>
  );
}
