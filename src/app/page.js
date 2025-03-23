import styles from "./page.module.css";
import ClientSlider from "./_components/slider/slider";
import Testimonial from "./_components/testimonial/testimonial";
import Services from "./_components/services/services";
import { IoMdTimer } from "react-icons/io";
import { FaPeopleArrows } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { GrUserManager } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { MdOutlineShoppingBag } from "react-icons/md";
import { RxCrossCircled } from "react-icons/rx";
import { IoMdPricetags } from "react-icons/io";
import { MdOutlineTimer } from "react-icons/md";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.bannerImageMain}></div>
      <div className={styles.mainBody}>
        <Services />
        <div className={styles.clientSection}>
          <div className={styles.clientSectionTitle}>What Makes Us Unique</div>
          <div className={styles.uniqueGrid}>
            <div className={styles.uinqueGridCell}>
              <div>
                <IoMdTimer className={styles.uniqueIcons} />
              </div>
              <div>Over 3 Years of Industry Experience</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <FaPeopleArrows className={styles.uniqueIcons} />
              </div>
              <div>Serving 100+ Corporate Clients</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <MdOutlineShoppingBag className={styles.uniqueIcons} />
              </div>
              <div>Offering 5000+ Unique Products</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <IoMdPricetags className={styles.uniqueIcons} />
              </div>
              <div>Options Available for Every Budget</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <RxCrossCircled className={styles.uniqueIcons} />
              </div>
              <div>No Minimum Order Requirement </div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <TbTruckDelivery className={styles.uniqueIcons} />
              </div>
              <div>Fast-Track Delivery Services Available</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <GrUserManager className={styles.uniqueIcons} />
              </div>
              <div>Personalized Branding with Your Logo</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <HiLightBulb className={styles.uniqueIcons} />
              </div>
              <div>Perfect Gifting Ideas for Every Occasion</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <FaSearch className={styles.uniqueIcons} />
              </div>
              <div>Uncompromised Quality</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <FaEdit className={styles.uniqueIcons} />
              </div>
              <div>Carefully Curated Selection</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <IoEarth className={styles.uniqueIcons} />
              </div>
              <div>
                Seamless Shipping Experience - Nationwide & International
                Shipping
              </div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <MdOutlineTimer className={styles.uniqueIcons} />
              </div>
              <div>
                Saving You Time - The Simplest & Quickest Way to Impress
              </div>
            </div>
          </div>
        </div>
        <div className={styles.clientSection}>
          <div className={styles.clientSectionTitle}>Our Clients</div>
          <ClientSlider />
        </div>
        <div className={styles.clientSection}>
          <div className={styles.clientSectionTitle}>Testimonials</div>
          <Testimonial />
        </div>
      </div>
    </div>
  );
}
