import React from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import Link from "next/link";
import Image from "next/image";

const Modal = ({ onClose }) => {
  const handleCloseClick = (e) => {
    onClose();
  };

  const modalContent = (
    <div className={styles.modalOverlay}>
      <div className={styles.modalWrapper}>
        <div className={styles.modal}>
          <div className={styles.modalHeader}>
            <div className={styles.logoContainer}>
              <Link onClick={handleCloseClick} href="/" className={styles.feedbackLink}>
                <Image
                  src="/images/logo-alampu.png"
                  width={100}
                  height={100}
                  className={styles.logo}
                  alt="Alampu logo"
                />
              </Link>
            </div>
            <div>
              <a href="#" onClick={handleCloseClick}>
                x
              </a>
            </div>
          </div>
          <div className={styles.navLinks}>
            <div>
              <Link onClick={handleCloseClick} href="/" className="hover:text-gray-300">
                Home
              </Link>
            </div>
            <div>
              <Link onClick={handleCloseClick} href="/about" className="hover:text-gray-300">
                About us
              </Link>
            </div>
            <div>
              <Link onClick={handleCloseClick} href="/careers" className="hover:text-gray-300">
                Careers
              </Link>
            </div>
            <div>
              <Link onClick={handleCloseClick} href="/contact" className="hover:text-gray-300">
                Contact Us
              </Link>
            </div>
            <div>
              <Link onClick={handleCloseClick} href="/feedback" className="hover:text-gray-300">
                Feedback
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return ReactDOM.createPortal(
    modalContent,
    document.getElementById("modal-root")
  );
};

export default Modal;
