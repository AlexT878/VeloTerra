import { Link } from "react-router-dom";
import { MESSAGES } from "../constants/strings";
import "./Landing.css";

export default function Landing() {
  return (
    <main className="landing-page">
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">{MESSAGES.LANDING_TITLE}</h1>
          <p className="hero-description">{MESSAGES.LANDING_DESCRIPTION}</p>
          <Link to="/shop" className="cta-button">
            {MESSAGES.LANDING_BUTTON}
          </Link>
        </div>
      </section>
    </main>
  );
}
