import ProductCard from "./ProductCard";
import "./Home.css";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getBikes } from "../services/bikeSlice";
import { addToCart } from "../services/cartSlice";
import { MESSAGES } from "../constants/strings";
import useBikes from "../hooks/useBikes";

export default function Home() {
  const dispatch = useDispatch();
  const { filteredResults, status } = useBikes();

  function handleAddToCartClickButton(product) {
    dispatch(addToCart(product));
  }

  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);

  return (
    <main className="landing-page">
      <div className="products-grid">
        {status === "loading" && <h3>{MESSAGES.LOADING}</h3>}
        {status === "failed" && <h3>{MESSAGES.WRONG}</h3>}
        {status === "succeeded" &&
          filteredResults.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onClickAddToCartButton={() => handleAddToCartClickButton(product)}
            />
          ))}
      </div>
    </main>
  );
}
