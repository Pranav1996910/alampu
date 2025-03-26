"use client";
import styles from "./page.module.css";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Form from "next/form";

export default function Page() {
  const onSubmit = (event) => {};
  return (
    <div className={styles.page}>
      <div className={styles.contactTitle}>Contact Us</div>
      <div className={styles.contactForm}>
        <div className={styles.getInTouch}>GET IN TOUCH</div>
        <Form className={styles.formMain} onSubmit={onSubmit}>
          <div className={styles.field}>
            <input
              className={styles.inputField}
              type="text"
              name="fullname"
              id="fullname"
              required
              placeholder="Example: Rohit Sharma"
            />
            <label htmlFor="fullname" className={styles.labelField}>
              Full Name
            </label>
          </div>
          <div className={styles.field}>
            <input
              className={styles.inputField}
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              type="email"
              name="email"
              required
              id="email"
              placeholder="Example: xyz@company.com"
            />
            <label htmlFor="email" className={styles.labelField}>
              Email
            </label>
          </div>
          <div className={styles.field}>
            <input
              className={styles.inputField}
              type="text"
              name="number"
              id="number"
              required
              placeholder="Example: +91 8765432109"
            />
            <label htmlFor="number" className={styles.labelField}>
              Phone
            </label>
          </div>
          <div className={styles.field}>
            <textarea
              className={styles.addressField}
              type="text"
              name="message"
              id="message"
              required
              placeholder="write your message here.."
            />
            <label htmlFor="message" className={styles.labelField}>
              Address
            </label>
          </div>
          <div className={styles.submitDiv}>
            <button className={styles.submitButton} type="submit">
              Submit
            </button>
          </div>
        </Form>
      </div>
      <div className={styles.contactContainer}>
        <div className={styles.contactMain}>
          <div className={styles.contactAddress}>
            <div className={styles.locationIcon}>
              <IoLocation />
            </div>
            <div className={styles.addressMain}>
              <span className={styles.addressTitle}>Location: </span>
              <span className={styles.addressDetail}>
                <b>Bengaluru</b>
              </span>
            </div>
          </div>
          <div className={styles.contactEmail}>
            <div className={styles.locationIcon}>
              <MdEmail />
            </div>
            <div className={styles.emailMain}>
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
