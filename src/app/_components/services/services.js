import styles from "./services.module.css";
import { FaGifts } from "react-icons/fa";
export default function Services() {
  return (
    <div className={styles.servicesContainer}>
      <div className={styles.serviceTitleDiv}>
        <div className={styles.serviceTitle}>Our Services</div>
      </div>
      <div className={styles.servicesCards}>
        <div className={styles.servicesMain}>
          <div className={styles.serviceLogo}>
            <FaGifts className={styles.serviceLogoReact} />
          </div>
          <div className={styles.serviceCardTitle}>Corporate Gifts</div>
          <div className={styles.serviceDescription}>
            Got an event around the corner? Looking for Innovative Corporate
            Gift Ideas? Then, you'll love our catalog of 4000+ products.
          </div>
          <div className={styles.serviceButton}>
            <button className={styles.submitButton} type="submit">
              Know More
            </button>
          </div>
        </div>
        <div className={styles.servicesMain}>
          <div className={styles.serviceLogo}>
            <FaGifts className={styles.serviceLogoReact} />
          </div>
          <div className={styles.serviceCardTitle}>Corporate Gifts</div>
          <div className={styles.serviceDescription}>
            Got an event around the corner? Looking for Innovative Corporate
            Gift Ideas? Then, you'll love our catalog of 4000+ products.
          </div>
          <div className={styles.serviceButton}>
            <button className={styles.submitButton} type="submit">
              Know More
            </button>
          </div>
        </div>
        <div className={styles.servicesMain}>
          <div className={styles.serviceLogo}>
            <FaGifts className={styles.serviceLogoReact} />
          </div>
          <div className={styles.serviceCardTitle}>Corporate Gifts</div>
          <div className={styles.serviceDescription}>
            Got an event around the corner? Looking for Innovative Corporate
            Gift Ideas? Then, you'll love our catalog of 4000+ products.
          </div>
          <div className={styles.serviceButton}>
            <button className={styles.submitButton} type="submit">
              Know More
            </button>
          </div>
        </div>
        <div className={styles.servicesMain}>
          <div className={styles.serviceLogo}>
            <FaGifts className={styles.serviceLogoReact} />
          </div>
          <div className={styles.serviceCardTitle}>Corporate Gifts</div>
          <div className={styles.serviceDescription}>
            Got an event around the corner? Looking for Innovative Corporate
            Gift Ideas? Then, you'll love our catalog of 4000+ products.
          </div>
          <div className={styles.serviceButton}>
            <button className={styles.submitButton} type="submit">
              Know More
            </button>
          </div>
        </div>
        <div className={styles.servicesMain}>
          <div className={styles.serviceLogo}>
            <FaGifts className={styles.serviceLogoReact} />
          </div>
          <div className={styles.serviceCardTitle}>Corporate Gifts</div>
          <div className={styles.serviceDescription}>
            Got an event around the corner? Looking for Innovative Corporate
            Gift Ideas? Then, you'll love our catalog of 4000+ products.
          </div>
          <div className={styles.serviceButton}>
            <button className={styles.submitButton} type="submit">
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
