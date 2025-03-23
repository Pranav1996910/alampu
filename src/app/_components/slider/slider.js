"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./slider.module.css";
import Image from "next/image";

export default function ClientSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <div className={styles.sliderMain}>
      <Slider className={styles.slider} {...settings}>
        <div className={styles.sliderDiv}>
          <Image
            src="/clients/a.png"
            width={100}
            height={100}
            className={styles.sliderImage}
            alt="Aldecor"
          />
        </div>
        <div className={styles.sliderDiv}>
          <Image
            src="/clients/b.jpg"
            width={100}
            height={100}
            className={styles.sliderImage}
            alt="DND"
          />
        </div>
        <div className={styles.sliderDiv}>
          <Image
            src="/clients/c.png"
            width={100}
            height={100}
            className={styles.sliderImage}
            alt="Avin"
          />
        </div>
        <div className={styles.sliderDiv}>
          <Image
            src="/clients/d.png"
            width={100}
            height={100}
            className={styles.sliderImage}
            alt="Cult"
          />
        </div>
        <div className={styles.sliderDiv}>
          <Image
            src="/clients/e.png"
            width={100}
            height={100}
            className={styles.sliderImage}
            alt="EP"
          />
        </div>
        <div className={styles.sliderDiv}>
          <Image
            src="/clients/f.png"
            width={100}
            height={100}
            className={styles.sliderImage}
            alt="Infineon"
          />
        </div>
        <div className={styles.sliderDiv}>
          <Image
            src="/clients/g.png"
            width={100}
            height={100}
            className={styles.sliderImage}
            alt="JCI"
          />
        </div>
        <div className={styles.sliderDiv}>
          <Image
            src="/clients/h.png"
            width={100}
            height={100}
            className={styles.sliderImage}
            alt="Omegologist"
          />
        </div>
        <div className={styles.sliderDiv}>
          <Image
            src="/clients/i.png"
            width={100}
            height={100}
            className={styles.sliderImage}
            alt="Ocellus"
          />
        </div>
        <div className={styles.sliderDiv}>
          <Image
            src="/clients/j.png"
            width={100}
            height={100}
            className={styles.sliderImage}
            alt="RV"
          />
        </div>
        <div className={styles.sliderDiv}>
          <Image
            src="/clients/k.png"
            width={100}
            height={100}
            className={styles.sliderImage}
            alt="Samantha"
          />
        </div>
      </Slider>
    </div>
  );
}
