import { useSelector } from "react-redux";
import { MESSAGES } from "../constants/strings";

export default function ProductCard({
  product,
  onClickAddToCartButton,
  onDeleteClick,
}) {
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  return (
    <div className="product-card">
      {isAdmin && (
        <button
          className="remove-button"
          onClick={() => onDeleteClick(product.id)}
        >
          X
        </button>
      )}
      <div className="card-image-placeholder">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="card-content">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>

        <div className="card-footer">
          <span className="product-price">
            {product.price} {MESSAGES.CURRENCY}
          </span>
          <button className="add-cart-btn" onClick={onClickAddToCartButton}>
            {MESSAGES.ADD_TO_CART}
          </button>
        </div>
      </div>
    </div>
  );
}
