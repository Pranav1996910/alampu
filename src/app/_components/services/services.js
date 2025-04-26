import styles from "./services.module.css";
import { FaGifts } from "react-icons/fa";
import { GiClothes } from "react-icons/gi";
import { FaPeopleCarry } from "react-icons/fa";
import { MdOutlineFestival } from "react-icons/md";
import { GiHoodie } from "react-icons/gi";
import Link from "next/link";
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
          <div className={styles.serviceCardTitle}>
            Personalized Corporate Gifts
          </div>
          <div className={styles.serviceDescription}>
            Thoughtfully curated gifts customized with branding, logos, or
            personal touches to strengthen business relationships and leave a
            lasting impression.
          </div>
          <div className={styles.submitButton}>
            <Link
              href="/catalogue.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download Catalog
            </Link>
          </div>
        </div>
        <div className={styles.servicesMain}>
          <div className={styles.serviceLogo}>
            <GiClothes className={styles.serviceLogoReact} />
          </div>
          <div className={styles.serviceCardTitle}>Coordinated Attire</div>
          <div className={styles.serviceDescription}>
            Professionally designed uniforms and themed attire that align with
            corporate branding, ensuring a cohesive and polished look for teams
            and events.
          </div>
          <div className={styles.submitButton}>
            <Link
              href="/catalogue.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Know More
            </Link>
          </div>
        </div>
        <div className={styles.servicesMain}>
          <div className={styles.serviceLogo}>
            <FaPeopleCarry className={styles.serviceLogoReact} />
          </div>
          <div className={styles.serviceCardTitle}>Wedding Gifts</div>
          <div className={styles.serviceDescription}>
            Elegant and customized wedding gifts, perfect for personal
            celebrations, adding a unique and memorable touch to special
            occasions.
          </div>
          <div className={styles.submitButton}>
            <Link
              href="/catalogue.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Know More
            </Link>
          </div>
        </div>
        <div className={styles.servicesMain}>
          <div className={styles.serviceLogo}>
            <MdOutlineFestival className={styles.serviceLogoReact} />
          </div>
          <div className={styles.serviceCardTitle}>
            College Fests and Events
          </div>
          <div className={styles.serviceDescription}>
            Branded merchandise and giveaways tailored for college fests,
            cultural events, and competitions, enhancing engagement and brand
            visibility.
          </div>
          <div className={styles.submitButton}>
            <Link
              href="/catalogue.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Know More
            </Link>
          </div>
        </div>
        <div className={styles.servicesMain}>
          <div className={styles.serviceLogo}>
            <GiHoodie className={styles.serviceLogoReact} />
          </div>
          <div className={styles.serviceCardTitle}>
            Customized T-Shirts, Caps & Hoodies
          </div>
          <div className={styles.serviceDescription}>
            High-quality, custom-printed apparel designed for teams, events, or
            promotions, blending style with brand representation.
          </div>
          <div className={styles.submitButton}>
            <Link
              href="/catalogue.pdf"
              rel="noopener noreferrer"
              target="_blank"
            >
              Know More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
