export default function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="card-image-placeholder">
        <img src={product.image} alt={product.name}></img>
      </div>

      <div className="card-content">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>

        <div className="card-footer">
          <span className="product-price">{product.price} RON</span>
          <button className="add-cart-btn">Adaugă</button>
        </div>
      </div>
    </div>
  );
}
