import { useDispatch } from "react-redux";
import { removeFromCart } from "../../services/cartSlice";
import { ARIA_LABEL } from "../../constants/aria-labels";

export default function DropdownItem({ item }) {
  const dispatch = useDispatch();

  return (
    <li>
      <div className="list-row">
        <img src={item.image} alt={item.name} />
        <span className="item-name">{item.name}</span>
        <button
          className="remove-item"
          aria-label={ARIA_LABEL.REMOVE_FROM_CART}
          onClick={(e) => {
            e.stopPropagation();
            dispatch(removeFromCart(item.id));
          }}
        >
          <span>✕</span>
        </button>
      </div>
    </li>
  );
}
