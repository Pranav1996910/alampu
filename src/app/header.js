"use client";
import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";
import { GiHamburgerMenu } from "react-icons/gi";
import Modal from "./_components/navmodel/modal";
import { useState } from "react";

export default function Header() {
  const [showModal, setShowModal] = useState(false);
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navBarContainer}>
        <nav className={styles.navBarContainerDesktop}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.feedbackLink}>
              <Image
                src="/images/logo-alampu.png"
                width={100}
                height={100}
                className={styles.logo}
                alt="Alampu logo"
              />
            </Link>
          </div>
          <div className={styles.menuContainer}>
            <ul className={styles.navList}>
              <li className={styles.navItem}>
                <Link href="/about" className="hover:text-gray-300">
                  About us
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/careers" className="hover:text-gray-300">
                  Careers
                </Link>
              </li>
              <li className={styles.navItem}>
                <Link href="/contact" className="hover:text-gray-300">
                  Contact us
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <nav className={styles.navBarContainerMobile}>
          <div className={styles.logoContainer}>
            <Link href="/" className={styles.feedbackLink}>
              <Image
                src="/images/logo-alampu.png"
                width={100}
                height={100}
                className={styles.logo}
                alt="Alampu logo"
              />
            </Link>
          </div>
          <div className={styles.menuContainer}>
            <button className={styles.burgerButton} onClick={() => setShowModal(true)}>
              <GiHamburgerMenu />
            </button>
            {showModal && (
              <Modal onClose={() => setShowModal(false)}>
                Hello from the modal!
              </Modal>
            )}
          </div>
        </nav>
      </div>
      <div id="modal-root"></div>
    </header>
  );
}
