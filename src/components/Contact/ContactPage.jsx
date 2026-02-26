import { useNavigate } from "react-router-dom";
import "./ContactPage.css";
import { MESSAGES } from "../../constants/strings";
import { sendContactMessage } from "../../services/sendContactMessage";

export default function ContactPage() {
  const navigate = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const formValues = Object.fromEntries(data.entries());

    try {
      const insertedData = await sendContactMessage(formValues);
      alert(`${MESSAGES.SEND_MESSAGE_SUCCESSFULLY} ${insertedData.id}`);
      e.target.reset();
    } catch (error) {
      alert(`${MESSAGES.WRONG}`);
      console.error(error);
    }
  }

  return (
    <div className="contact-page-wrapper">
      <main className="central-container">
        <div className="contact-wrapper">
          <h2>{MESSAGES.CONTACT_US}</h2>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">{MESSAGES.NAME}</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">{MESSAGES.EMAIL}</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">{MESSAGES.MESSAGE}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                required
              ></textarea>
            </div>

            <button type="submit" className="cta-button">
              {MESSAGES.SEND}
            </button>
          </form>
          <div className="retreat-section">
            <p>{MESSAGES.CONTACT_RETREAT}</p>
            <button
              type="button"
              onClick={() => navigate(-1)}
              className="retreat-link"
            >
              {MESSAGES.CONTACT_BACK}
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
