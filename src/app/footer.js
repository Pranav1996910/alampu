import Link from 'next/link';
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <SocialIcons/>
      <div className={styles.copyright}>
        <p className={styles.copyrightText}>&copy; {new Date().getFullYear()} Alampu. All rights reserved.</p>
      </div>
    </footer>
  );
}

function SocialIcons() {
  return (
    <div className="flex gap-x-4">
      <a
        href="https://twitter.com/thealampustore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className="text-white hover:text-gray-300" />
      </a>
      <a
        href="https://instagram.com/thealampustore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className="text-white hover:text-gray-300" />
      </a>
      <a
        href="https://facebook.com/thealampustore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className="text-white hover:text-gray-300" />
      </a>
      <a
        href="https://linkedin.com/company/thealampustore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="text-white hover:text-gray-300" />
      </a>
    </div>
  );
}
