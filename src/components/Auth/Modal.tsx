// import React from "react";
import "./Modal.css";

import Login from "./Login/Login";
import Profile from "./Profile/Profile";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoggedIn: boolean;
}

export default function Modal({ isOpen, onClose, isLoggedIn }: ModalProps) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <h2>{isLoggedIn ? <Profile /> : <Login />}</h2>
      </div>
    </div>
  );
}
