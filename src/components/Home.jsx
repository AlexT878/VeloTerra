import ProductCard from "./ProductCard";
import "./Home.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBikes } from "../services/bikeSlice";

export default function Home() {
  const dispatch = useDispatch();
  const bikes = useSelector((state) => state.bikes.items);

  useEffect(() => {
    dispatch(getBikes());
  }, [dispatch]);

  return (
    <main className="landing-page">
      <div className="products-grid">
        {bikes.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
