import Link from "next/link";
import Image from "next/image";
import styles from "./header.module.css";

export default function Header() {
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
            </ul>
          </div>
        </nav>
        <div className="hidden md:block"></div>
        {/* Add Mobile Navigation Toggle Here */}
      </div>
    </header>
  );
}
