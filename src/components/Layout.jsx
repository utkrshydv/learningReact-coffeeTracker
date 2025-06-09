// src/components/Layout.jsx

import { useState } from "react";
import Authentication from "./Authentication";
import Modal from "./Modal";
import { useAuth } from "../context/AuthContext";

export default function Layout({ children }) {
  const { globalUser, logout } = useAuth();
  const [showModal, setShowModal] = useState(false);

  function handleCloseModal() {
    setShowModal(false);
  }

  return (
    <>
      {/* Authentication Modal */}
      {showModal && (
        <Modal handleCloseModal={handleCloseModal}>
          <Authentication handleCloseModal={handleCloseModal} />
        </Modal>
      )}

      {/* Header */}
      <header>
        <div>
          <h1 className="text-gradient">COFFEE TRACKER</h1>
          <p>For Coffee Insatiates</p>
        </div>
        {globalUser ? (
          <button 
          className="signup-button"
          onClick={logout}>
            <p>Logout</p>
            <i className="fa-solid fa-mug-hot"></i>
          </button>
        ) : (
          <button
          className="signup-button"
          onClick={() => setShowModal(true)}>
            <p>Sign up free</p>
            <i className="fa-solid fa-mug-hot"></i>
          </button>
        )}
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer>
        <p>
          made by{" "}
          <a href="https://github.com/utkrshydv" target="_blank" rel="noreferrer">
            utkrshydv
          </a>
        </p>
      </footer>
    </>
  );
}
