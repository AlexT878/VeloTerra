import ProductCard from "./ProductCard";
import "./Home.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBikes } from "../services/bikeSlice";
import { MESSAGES } from "../constants/strings";

export default function Home() {
  const dispatch = useDispatch();
  const { items, status } = useSelector((state) => state.bikes);

  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);

  if (status === "loading") {
    return <h3>{MESSAGES.LOADING}</h3>;
  }

  if (status === "failed") {
    return <h3>{MESSAGES.WRONG}</h3>;
  }

  return (
    <main className="landing-page">
      <div className="products-grid">
        {items &&
          items.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </main>
  );
}
