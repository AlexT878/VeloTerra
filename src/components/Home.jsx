import ProductCard from "./ProductCard";
import "./Home.css";
import { useState, useEffect } from "react";
import { fetchBikes } from "../services/bikeService";

export default function Home() {
  const [bikeData, setBikeData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchBikes();
        setBikeData(data);
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    getData();
  }, []);

  return (
    <main className="landing-page">
      <div className="products-grid">
        {bikeData.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
