import styles from "./page.module.css";

export default function Page() {
  return (
    <div className={styles.page}>
      <div className={styles.aboutUsTitle}>About Alampu</div>
      <div className={styles.aboutAlampuDescription}>
        Alampu is your one-stop shop for all your corporate gifting, wedding
        gifting, and college gifting needs. We strive to deliver some of the
        best-handpicked premium brand products to your dear ones.
        <br />
        <br />
        We create the most gratifying shopping experience that is built on
        authenticity and sustainability. Our products vary from a wide range of
        thoughtful pieces of art that evoke nostalgia to customized gifting
        options that will be admired and cherished.
        <br />
        <br />
        Alampu also encapsulates the beauty and elegance of local artistry. We
        curate hand-picked items that embody the stories of rural and
        not-so-heard parts of India, bringing you the best of our heritage,
        culture and splendour.
        <br />
        <br />
        We work with an extensive network of local artisans and weavers —
        bringing you a wide range of hand-picked items including handwoven and
        naturally dyed fabric. At Alampu, we bring you exquisite pieces of work
        that serve a purpose and tell a tale.
      </div>
      <div className={styles.meetTeamTitle}>Meet Our Team</div>
      <div className={styles.meetOurTeamDescription}>
        Alampu started as a collective dream of three engineering friends.
        <br />
        <br />
        At Alampu, we strive to make your gifting journey hassle-free and joyful,
        by bringing to you a wide range of thoughtful gifting options for your
        loved ones.
        <br />
        <br />
        Having grown up closely observing the rich Kannada heritage
        of handloom & handicrafts, we are driven by an aim to bring these
        timeless pieces of art to the forefront along with the other
        conventional gifting options.
        <br />
        <br />
        We are currently a small team managing the end-to-end experience right from curating products, pick-up, package,
        delivery and customer support. We look forward to cherishing all things
        indigenous with you.
      </div>
    </div>
  );
}
