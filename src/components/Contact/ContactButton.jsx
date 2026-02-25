import { useNavigate } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import "./ContactButton.css";

export default function ContactButton() {
  const navigate = useNavigate();

  return (
    <button
      className="floating-contact-btn"
      onClick={() => navigate("/contact")}
      aria-label="Contact"
    >
      <MessageCircle size={24} />
      <span>Contact</span>
    </button>
  );
}
