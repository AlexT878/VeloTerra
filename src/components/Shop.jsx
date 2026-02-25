import ProductCard from "./ProductCard";
import "./Shop.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBikes, removeBike } from "../services/bikeSlice";
import { addToCart } from "../services/cartSlice";
import { FILTER_OPTIONS, MESSAGES, SORT_OPTIONS } from "../constants/strings";
import useBikes from "../hooks/useBikes";
import FilterOption from "./Filters/FilterOption";
import FilterManager from "./Filters/FilterManager";
import useFilteredProducts from "../hooks/useFilteredProducts";
import Pagination from "./Pagination";
import { ITEMS_PER_PAGE } from "../constants/values";

export default function Shop() {
  const dispatch = useDispatch();
  const { products, status } = useBikes();

  const { paginatedItems, totalPages } = useFilteredProducts(products);

  function handleAddToCartClickButton(product) {
    dispatch(addToCart(product));
  }

  function handleDeleteBike(id) {
    dispatch(removeBike(id));
  }

  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);

  return (
    <main className="central-container">
      <FilterManager />
      <div className="products-grid">
        {status === "loading" && <h3>{MESSAGES.LOADING}</h3>}
        {status === "failed" && <h3>{MESSAGES.WRONG}</h3>}
        {status === "succeeded" &&
          paginatedItems.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClickAddToCartButton={() => handleAddToCartClickButton(product)}
              onDeleteClick={handleDeleteBike}
            />
          ))}
      </div>
      {status === "succeeded" && <Pagination totalPages={totalPages} />}
    </main>
  );
}
