import { BrowserRouter, Routes, Route } from "react-router";
import Header from "./components/Header";
import Home from "./components/Home";
import { CartProvider } from "./components/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />

        <main className="main-container">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </main>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
