import { BrowserRouter, Routes, Route } from "react-router";
import Landing from "./components/Landing";
import Shop from "./components/Shop";
import MainLayout from "./MainLayout";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import ContactPage from "./components/Contact/ContactPage";
import { useDispatch } from "react-redux";
import { loginAsAdmin } from "./services/authSlice";
import { supabase } from "./services/supabase";

function App() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    const checkUser = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        dispatch(loginAsAdmin());
      }
    };

    checkUser();
  }, [dispatch, theme]);

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
