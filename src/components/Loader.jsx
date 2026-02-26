import React from "react";
import "./Loader.css";
import { MESSAGES } from "../constants/strings";

export default function Loader() {
  return (
    <div className="loader-container">
      <div className="modern-spinner"></div>
      <p className="loader-text">{MESSAGES.LOADING}</p>
    </div>
  );
}
