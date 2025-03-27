"use client";
import styles from "./testimonial.module.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className={styles.testimonialMain}>
      <Slider className={styles.testimonialSlider} {...settings}>
        <div className={styles.testimonialCardMain}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialDescription}>
              "Thank you so much, your team mate have done an incredible job. I
              love the way you took responsibility, shopping with Alampu was
              great experience you people have considered every detail I had
              mentioned about to curtain the gift box it was amazing and
              delivered it on time. Leading and shaping a brand new team and
              taking new responsibility is a real challenge work."
            </div>
            <div className={styles.testimonialBy}>- Anjalin Janifer</div>
          </div>
        </div>
        <div className={styles.testimonialCardMain}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialDescription}>
              "Good variety of pocket friendly quality corporate gifts. Support
              staff is just awesome, order got delivered on next day.The quality
              of the gift articles is top notch"
            </div>
            <div className={styles.testimonialBy}>- Shreegiri</div>
          </div>
        </div>
        <div className={styles.testimonialCardMain}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialDescription}>
              "Good service and creative gifts indeed. Overall i have had a good
              experience with Alampu! Kudos!"
            </div>
            <div className={styles.testimonialBy}>- Shwetha R</div>
          </div>
        </div>
        <div className={styles.testimonialCardMain}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialDescription}>
              "It was really wonderful shopping with you. We had ordered gifts
              to our clients on the occasion of our company Anniversary and
              during Women's day; The alampu team is very approachable and
              delivered our orders even when we requested it to be on an urgent
              basis I.e., within 2-3 hrs as well in few cases".
            </div>
            <div className={styles.testimonialBy}>- Srivatsa G S</div>
          </div>
        </div>
        <div className={styles.testimonialCardMain}>
          <div className={styles.testimonialCard}>
            <div className={styles.testimonialDescription}>
              "The whole experience was very nice, what I liked most is within
              short period of time everything was arranged and was delivered to
              the door step."
            </div>
            <div className={styles.testimonialBy}>- Pruthvi K</div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
