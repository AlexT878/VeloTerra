import { MESSAGES } from "../constants/strings";

export default function ProductCard({ product, onClickAddToCartButton }) {
  return (
    <div className="product-card">
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
