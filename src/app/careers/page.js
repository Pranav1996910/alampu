import styles from "./page.module.css";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { MdDownload } from "react-icons/md";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.careersTitle}>Careers</div>
      <div className={styles.aboutAlampuDescription}>
        Thank you for choosing us !
        <br />
        <br />
        We would love to have you on board with us.
      </div>
      <div className={styles.currentOpeningsTitle}>Current Openings</div>
      <div className={styles.currentOpeningsForm}>
        <div className={styles.jobTitle}>
          <p className={styles.positionHeaders}>Title:</p>
          <p className={styles.positionDescription}>
            Business Development Associate
          </p>
        </div>
        <div className={styles.jobTitle}>
          <p className={styles.positionHeaders}>Experience:</p>
          <p className={styles.positionDescription}>Any</p>
        </div>
        <div className={styles.jobTitle}>
          <p className={styles.positionHeaders}>Job Description:</p>
          <p>
            <Link
              className={styles.positionDescription}
              href="/resume.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download <MdDownload className={styles.icons} />
            </Link>
          </p>
        </div>
        <div className={styles.jobTitle}>
          <p className={styles.positionHeaders}>Apply:</p>
          <div>
            <a
              className={styles.applyLink}
              rel="noopener noreferrer"
              href="mailto:alampustore@gmail.com"
            >
              Email <MdOutlineEmail className={styles.icons} />
            </a>
          </div>
          <div>
            <a
              className={styles.applyLink}
              rel="noopener noreferrer"
              href="https://wa.me/7019747023"
            >
              Whatsapp <FaWhatsapp className={styles.icons} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
