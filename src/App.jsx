import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./components/Landing";
import Shop from "./components/Shop";
import MainLayout from "./MainLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ContactPage from "./components/Contact/ContactPage";

function App() {
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route element={<MainLayout />}>
          <Route path="/shop" element={<Shop />} />
        </Route>

        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
