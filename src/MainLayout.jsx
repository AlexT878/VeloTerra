import Header from "./components/Header";
import { Outlet } from "react-router-dom";
import ContactButton from "./components/Contact/ContactButton";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="main-container">
        <Outlet />
      </main>
    </>
  );
}
