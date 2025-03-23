import styles from "./page.module.css";
import ClientSlider from "./_components/slider/slider";
import Testimonial from "./_components/testimonial/testimonial";
import Services from "./_components/services/services";
import Image from "next/image";
import { IoMdTimer } from "react-icons/io";
import { FaPeopleArrows } from "react-icons/fa6";
import { FaArrowUpWideShort } from "react-icons/fa6";
import { TbTruckDelivery } from "react-icons/tb";
import { FaEdit } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { HiLightBulb } from "react-icons/hi";
import { GrUserManager } from "react-icons/gr";
import { FaSearch } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { RiPresentationFill } from "react-icons/ri";
import { MdOutlineShoppingBag } from "react-icons/md";
export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.bannerImageMain}></div>
      <div className={styles.mainBody}>
        <Services />
        {/* <div className={styles.clientSection}>
          <div className={styles.clientSectionTitle}>Testimonials</div>
          <Testimonial />
        </div> */}
        <div className={styles.clientSection}>
          <div className={styles.clientSectionTitle}>What Makes Us Unique</div>
          <div className={styles.uniqueGrid}>
            <div className={styles.uinqueGridCell}>
              <div>
                <IoMdTimer className={styles.uniqueIcons} />
              </div>
              <div>19+ Years in business</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <FaPeopleArrows className={styles.uniqueIcons} />
              </div>
              <div>1000+ Corporate clients</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <MdOutlineShoppingBag className={styles.uniqueIcons} />
              </div>
              <div>4000+ Products</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <FaArrowUpWideShort className={styles.uniqueIcons} />
              </div>
              <div>Product in Every Budget</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <TbTruckDelivery className={styles.uniqueIcons} />
              </div>
              <div>Urgent Delivery Options Available</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <FaEdit className={styles.uniqueIcons} />
              </div>
              <div>Everything Customised with your Logos</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <IoEarth className={styles.uniqueIcons} />
              </div>
              <div>Delivery Across India (Even Global)</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <HiLightBulb className={styles.uniqueIcons} />
              </div>
              <div>Ideas for every Occasion</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <GrUserManager className={styles.uniqueIcons} />
              </div>
              <div>Dedicated Account Manager</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <FaSearch className={styles.uniqueIcons} />
              </div>
              <div>Find Exactly What You Need</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <FaRegFilePdf className={styles.uniqueIcons} />
              </div>
              <div>Download a professional looking PDF in minutes</div>
            </div>
            <div className={styles.uinqueGridCell}>
              <div>
                <RiPresentationFill className={styles.uniqueIcons} />
              </div>
              <div>Quickest, Easiest way to present to your Boss/Team</div>
            </div>
          </div>
        </div>
        <div className={styles.clientSection}>
          <div className={styles.clientSectionTitle}>Our Clients</div>
          <ClientSlider />
        </div>
      </div>
    </div>
  );
}
