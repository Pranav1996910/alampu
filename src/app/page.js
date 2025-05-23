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

// Explore icon imports
import { PiTShirtFill } from "react-icons/pi";
import { IoGlassesSharp } from "react-icons/io5";
import { FaMugSaucer } from "react-icons/fa6";
import { FaStapler } from "react-icons/fa6";
import { ImHeadphones } from "react-icons/im";
import { BsGiftFill } from "react-icons/bs";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.bannerImageMain}></div>
      <div className={styles.mainBody}>
        <Services />
        <div className={styles.exploreSection}>
          <div className={styles.exploreMainTitle}>
            Explore a Wide Range of Personalized Bulk Gifts for Employees,
            Clients, and Office Staff
          </div>
          <div className={styles.exploreTitleDescription}>
            At <b>Alampu</b>, we specialize in customized corporate gifting
            solutions for every occasion, be it a work anniversary, festive
            celebration, or employee appreciation event.
          </div>
          <div className={styles.uniqueGridExplore}>
            <div className={styles.uniqueGridCellExplore}>
              <div>
                <PiTShirtFill className={styles.uniqueIconsExplore} />
              </div>
              <div className={styles.exploreTitle}>Apparel</div>
              <div className={styles.exploreDescription}>
                From <b>branded t-shirts</b> to hoodies, jackets, and caps, we
                offer fully customizable apparel to suit individual preferences.
              </div>
            </div>
            <div className={styles.uniqueGridCellExplore}>
              <div>
                <IoGlassesSharp className={styles.uniqueIconsExplore} />
              </div>
              <div className={styles.exploreTitle}>Accessories</div>
              <div className={styles.exploreDescription}>
                Make a statement with <b>stylish travel bags</b>, sunglasses,
                and a variety of accessories designed to impress and delight
              </div>
            </div>
            <div className={styles.uniqueGridCellExplore}>
              <div>
                <FaMugSaucer className={styles.uniqueIconsExplore} />
              </div>
              <div className={styles.exploreTitle}>Home & Living</div>
              <div className={styles.exploreDescription}>
                Enhance any space with
                <b>
                &nbsp;personalized photo frames, elegant lunch boxes, and decorative
                  wall clocks&nbsp;
                </b>
                — perfect gifts for a modern workspace or home.
              </div>
            </div>
            <div className={styles.uniqueGridCellExplore}>
              <div>
                <FaStapler className={styles.uniqueIconsExplore} />
              </div>
              <div className={styles.exploreTitle}>Office Essentials</div>
              <div className={styles.exploreDescription}>
                Boost productivity with custom <b>office stationery</b> that is
                both practical and stylish—an ideal gift for dedicated
                employees.
              </div>
            </div>
            <div className={styles.uniqueGridCellExplore}>
              <div>
                <ImHeadphones className={styles.uniqueIconsExplore} />
              </div>
              <div className={styles.exploreTitle}>Gadgets</div>
              <div className={styles.exploreDescription}>
                For tech enthusiasts, our range includes
                <b>
                  &nbsp; earphones, USB hubs, smart devices, and other innovative
                  electronics&nbsp;
                </b>
                to keep them connected.
              </div>
            </div>
            <div className={styles.uniqueGridCellExplore}>
              <div>
                <BsGiftFill className={styles.uniqueIconsExplore} />
              </div>
              <div className={styles.exploreTitle}>Gift Hampers</div>
              <div className={styles.exploreDescription}>
                Looking for a versatile gifting solution? Our
                <b>&nbsp;custom gift hampers and corporate gift vouchers</b> offer a
                variety of thoughtful products tailored for employees and
                clients.
              </div>
            </div>
          </div>
        </div>
        <div className={styles.clientSection}>
          <div className={styles.clientSectionTitle}>What Makes Us Unique</div>
          <div className={styles.uniqueGrid}>
            <div className={styles.uniqueGridCell}>
              <div>
                <IoMdTimer className={styles.uniqueIcons} />
              </div>
              <div>Over 3 Years of Industry Experience</div>
            </div>
            <div className={styles.uniqueGridCell}>
              <div>
                <FaPeopleArrows className={styles.uniqueIcons} />
              </div>
              <div>Serving 100+ Corporate Clients</div>
            </div>
            <div className={styles.uniqueGridCell}>
              <div>
                <MdOutlineShoppingBag className={styles.uniqueIcons} />
              </div>
              <div>Offering 5000+ Unique Products</div>
            </div>
            <div className={styles.uniqueGridCell}>
              <div>
                <IoMdPricetags className={styles.uniqueIcons} />
              </div>
              <div>Options Available for Every Budget</div>
            </div>
            <div className={styles.uniqueGridCell}>
              <div>
                <RxCrossCircled className={styles.uniqueIcons} />
              </div>
              <div>No Minimum Order Requirement </div>
            </div>
            <div className={styles.uniqueGridCell}>
              <div>
                <TbTruckDelivery className={styles.uniqueIcons} />
              </div>
              <div>Fast-Track Delivery Services Available</div>
            </div>
            <div className={styles.uniqueGridCell}>
              <div>
                <GrUserManager className={styles.uniqueIcons} />
              </div>
              <div>Personalized Branding with Your Logo</div>
            </div>
            <div className={styles.uniqueGridCell}>
              <div>
                <HiLightBulb className={styles.uniqueIcons} />
              </div>
              <div>Perfect Gifting Ideas for Every Occasion</div>
            </div>
            <div className={styles.uniqueGridCell}>
              <div>
                <FaSearch className={styles.uniqueIcons} />
              </div>
              <div>Uncompromised Quality</div>
            </div>
            <div className={styles.uniqueGridCell}>
              <div>
                <FaEdit className={styles.uniqueIcons} />
              </div>
              <div>Carefully Curated Selection</div>
            </div>
            <div className={styles.uniqueGridCell}>
              <div>
                <IoEarth className={styles.uniqueIcons} />
              </div>
              <div>
                Seamless Shipping Experience - Nationwide & International
                Shipping
              </div>
            </div>
            <div className={styles.uniqueGridCell}>
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
