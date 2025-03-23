import styles from "./page.module.css";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.contactTitle}>Contact Us</div>
      <div className={styles.contactNavigation}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2379.6215035396913!2d77.51253700021776!3d12.965428565509335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3d0071c00c0d%3A0x35e4c78f2e5cb99f!2sManasa!5e0!3m2!1sde!2sde!4v1742697396816!5m2!1sde!2sde"
          width="600"
          height="450"
          className={styles.contactMap}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
      <div className={styles.contactMain}>
        <div className={styles.contactAddress}>
          <div className={styles.locationIcon}>
            <IoLocation />
          </div>
          <div className={styles.addressMain}>
            <span className={styles.addressTitle}>Address: </span>
            <span className={styles.addressDetail}>
              2nd A MAIN, VINAYAKA of Business: 220,MANASA, LAYOUT, NAGARABHAVI
              2nd STAGE, Bengaluru Urban, Karnataka, 560072
            </span>
          </div>
        </div>
        <div className={styles.contactEmailMain}>
          <div className={styles.contactEmail}>
            <div className={styles.locationIcon}>
              <MdEmail />
            </div>
            <div className={styles.addressMain}>
              <span className={styles.addressTitle}>Email us: </span>
              <span className={styles.addressDetail}>
                <a
                  className={styles.applyLink}
                  rel="noopener noreferrer"
                  href="mailto:alampustore@gmail.com"
                  target="_blank"
                >
                  alampustore@gmail.com
                </a>
                &nbsp;and&nbsp;
                <a
                  className={styles.applyLink}
                  rel="noopener noreferrer"
                  href="mailto:support@alampu.com"
                  target="_blank"
                >
                  support@alampu.com
                </a>
              </span>
            </div>
          </div>
          <div className={styles.contactEmail}>
            <div className={styles.locationIcon}>
              <IoCallSharp />
            </div>
            <div className={styles.addressMain}>
              <span className={styles.addressTitle}>Contact us: </span>
              <span className={styles.addressDetail}>
                <a
                  className={styles.applyLink}
                  rel="noopener noreferrer"
                  href="tel:+91 7019747023"
                  target="_blank"
                >
                  +91 7019747023
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
