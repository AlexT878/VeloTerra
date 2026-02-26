import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import "./ContactButton.css";
import { MESSAGES } from "../../constants/strings";

export default function ContactButton({ size, strokeWidth, className }) {
  const navigate = useNavigate();

  return (
    <div className={className}>
      <button
        className="floating-contact-btn"
        onClick={() => navigate("/contact")}
        aria-label="Contact"
      >
        <MessageCircle size={size} strokeWidth={strokeWidth} />
        <span className="contact-text">{MESSAGES.CONTACT}</span>
      </button>
    </div>
  );
}
