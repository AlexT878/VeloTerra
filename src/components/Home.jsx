import ProductCard from "./ProductCard";
import "./Home.css";

const MOCK_PRODUCTS = [
  {
    id: 1,
    name: "Bicicletă MTB Trail X1",
    category: "Biciclete",
    price: 3200,
    stock: 5,
    image: "./no-photo.png",
  },
  {
    id: 2,
    name: "Cască Protecție VeloPro",
    category: "Echipament",
    price: 250,
    stock: 12,
    image: "./no-photo.png",
  },
  {
    id: 3,
    name: "Bicicletă Gravel Terra",
    category: "Biciclete",
    price: 4500,
    stock: 3,
    image: "./no-photo.png",
  },
  {
    id: 4,
    name: "Set Lumini LED USB",
    category: "Accesorii",
    price: 120,
    stock: 20,
    image: "./no-photo.png",
  },
];

export default function Home() {
  return (
    <main className="landing-page">
      <div className="products-grid">
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </main>
  );
}
