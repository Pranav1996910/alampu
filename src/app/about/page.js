import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.aboutUsTitle}>About Alampu</div>
      <div className={styles.aboutAlampuDescription}>
        At <b>Alampu</b>, we transform gifting into an art. Whether it's
        corporate milestones, wedding celebrations, or college farewells, we
        curate premium gifts that leave a lasting impression.
        <br />
        <br />
        Our handpicked selection features top-tier brands and thoughtful,
        nostalgia-evoking keepsakes, ensuring every gift is meaningful. With a
        focus on authenticity and sustainability, we make gifting effortless,
        elegant, and unforgettable.
        <br />
        <br />
        Discover the joy of giving with <b>Alampu</b> — where every gift tells a
        story.
      </div>
      <div className={styles.meetTeamTitle}>Meet Our Team</div>
      <div className={styles.meetOurTeamDescription}>
        Alampu is your one-stop destination for all things gifting—whether it's
        corporate gifting, wedding favors, college souvenirs, or personal
        presents. We are a passionate team brought together by our love for
        craftsmanship and the joy of thoughtful gifting.
        <br />
        <br />
        Founded by three engineering friends with a shared dream, Alampu is
        committed to making your gifting experience seamless and delightful. We
        carefully curate a diverse range of gifts, handling everything from
        product selection to packaging, delivery, and customer support—all with
        a personal touch.
        <br />
        <br />
        As a growing team, we strive to make gifting hassle-free and meaningful.
        Join us in celebrating the joy of thoughtful gifting!
      </div>
    </div>
  );
}
