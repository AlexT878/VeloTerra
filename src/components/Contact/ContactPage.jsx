import { useNavigate } from "react-router-dom";
import "./ContactPage.css";
import { MESSAGES } from "../../constants/strings";
import { sendContactMessage } from "../../services/sendContactMessage";
import { useState } from "react";

export default function ContactPage() {
  const navigate = useNavigate();
  const [errors, setErrors] = useState({});

  async function handleSubmit(e) {
    e.preventDefault();
    const data = new FormData(e.target);
    const formValues = Object.fromEntries(data.entries());

    const newErrors = {};

    if (!formValues.name.trim()) {
      newErrors.name = "Name is required.";
    }

    if (!formValues.email.trim()) {
      newErrors.email = MESSAGES.EMAIL_REQ;
    } else if (!formValues.email.includes("@")) {
      newErrors.email = MESSAGES.EMAIL_REQ_SYMBOL;
    }

    if (!formValues.message.trim()) {
      newErrors.message = MESSAGES.MESSAGE_EMPTY;
    } else if (formValues.message.trim().length < 10) {
      newErrors.message = MESSAGES.MESSAGE_SHORT;
    } else if (formValues.message.trim().length > 300) {
      newErrors.message = MESSAGES.MESSAGE_LONG;
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});

    try {
      const insertedData = await sendContactMessage(formValues);
      alert(`${MESSAGES.SEND_MESSAGE_SUCCESSFULLY} ${insertedData.id}`);
      e.target.reset();
    } catch (error) {
      alert(`${MESSAGES.WRONG}`);
      console.error(error);
    }
  }

  const handleChange = (e) => {
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  return (
    <div className="contact-page-wrapper">
      <main className="central-container">
        <div className="contact-wrapper">
          <h2>{MESSAGES.CONTACT_US}</h2>
          <form className="contact-form" onSubmit={handleSubmit} noValidate>
            <div className="form-group">
              <label htmlFor="name">{MESSAGES.NAME}</label>
              <input
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
              />
              {errors.name && (
                <span className="error-message">{errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email">{MESSAGES.EMAIL}</label>
              <input
                type="email"
                id="email"
                name="email"
                onChange={handleChange}
              />
              {errors.email && (
                <span className="error-message">{errors.email}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="message">{MESSAGES.MESSAGE}</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                onChange={handleChange}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
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
