import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"; // Importuri grupate
import "./Shop.css";

import ProductCard from "./ProductCard";
import AddProductCard from "./AddProductCard";
import FilterManager from "./Filters/FilterManager";
import Pagination from "./Pagination";

import { getProducts, removeProduct } from "../services/productSlice";
import { addToCart } from "../services/cartSlice";

import useProducts from "../hooks/useProducts";
import useFilteredProducts from "../hooks/useFilteredProducts";
import { MESSAGES } from "../constants/strings";

export default function Shop() {
  const dispatch = useDispatch();
  const { products, status } = useProducts();
  const { items } = useSelector((state) => state.products);
  const isAdmin = useSelector((state) => state.auth.isAdmin);

  const { paginatedItems, totalPages } = useFilteredProducts(products);

  function handleAddToCart(product) {
    dispatch(addToCart(product));
  }

  function handleDeleteProduct(id) {
    dispatch(removeProduct(id));
  }

  useEffect(() => {
    if (items.length === 0) {
      dispatch(getProducts());
    }
  }, [dispatch, items.length]);

  return (
    <main className="central-container">
      <FilterManager />
      <div className="products-grid">
        {isAdmin && <AddProductCard />}
        {status === "loading" && <h3>{MESSAGES.LOADING}</h3>}
        {status === "failed" && <h3>{MESSAGES.WRONG}</h3>}
        {status === "succeeded" &&
          paginatedItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() => handleAddToCart(product)}
              onDeleteClick={handleDeleteProduct}
            />
          ))}
        {status === "succeeded" && paginatedItems.length === 0 && (
          <div className="empty-state-container">
            <h2 className="empty-state-title">{MESSAGES.OOPS}</h2>
            <p className="empty-state-message">{MESSAGES.NO_PRODUCT_FOUND}</p>
          </div>
        )}
      </div>
      {status === "succeeded" && <Pagination totalPages={totalPages} />}
    </main>
  );
}
