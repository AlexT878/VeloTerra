import { useNavigate } from "react-router";
import { MESSAGES } from "../constants/strings";
import "./Landing.css";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <main className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{MESSAGES.LANDING_TITLE}</h1>
          <p className="hero-description">{MESSAGES.LANDING_DESCRIPTION}</p>
          <button className="cta-button" onClick={() => navigate("/shop")}>
            {MESSAGES.LANDING_BUTTON}
          </button>
        </div>
      </section>
    </main>
  );
}
