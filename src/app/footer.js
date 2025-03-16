import Link from "next/link";
import Image from "next/image";
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footerMainContainer}>
      <footer className={styles.footerContainer}>
        <div className={styles.footerSection1}>
          <div className={styles.logoContainer}>
            <Image
              src="/images/logo-alampu.png"
              width={100}
              height={100}
              className={styles.logo}
              alt="Alampu logo"
            />
          </div>
          <div className={styles.copyright}>
            <p className={styles.copyrightText}>
              &copy; {new Date().getFullYear()} Alampu. All rights reserved.
            </p>
          </div>
        </div>
        <div className={styles.footerSection2}>
          <SocialIcons />
          <div className={styles.footerLinks}>
            <Link href="/feedback" className={styles.feedbackLink}>Feedback</Link>
          </div>
          <div className={styles.footerLinks}>
            <Link href="/terms" className={styles.feedbackLink}>Terms & condition</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SocialIcons() {
  return (
    <div className={styles.socialMain}>
      <a
        href="https://instagram.com/thealampustore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram className={styles.socialIcon} />
      </a>
      <a
        href="https://linkedin.com/company/thealampustore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className={styles.socialIcon} />
      </a>
      <a
        href="https://facebook.com/thealampustore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaFacebook className={styles.socialIcon} />
      </a>
      <a
        href="https://twitter.com/thealampustore"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaTwitter className={styles.socialIcon} />
      </a>
    </div>
  );
}
