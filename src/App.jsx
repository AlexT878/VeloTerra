import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./components/Landing";
import Shop from "./components/Shop";
import MainLayout from "./MainLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route element={<MainLayout />}>
          <Route path="/shop" element={<Shop />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
