"use client";
import styles from "./page.module.css";
import { IoLocation } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoCallSharp } from "react-icons/io5";
import Form from "next/form";
import { useState } from "react";

export default function Page() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, number, message }),
    });

    const data = await response.json();

    if (response.ok) {
      setStatus("Message sent successfully!");
    } else {
      setStatus(`Error: ${data.error}`);
    }
    setShowPopup(true);
    setTimeout(() => {
      setEmail("");
      setNumber("");
      setFullname("");
      setMessage("");
      setStatus("");
      setShowPopup(false);
    }, 2000);
  };

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
              fullname="fullname"
              id="fullname"
              required
              placeholder="Example: Rohit Sharma"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
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
              fullname="email"
              required
              id="email"
              placeholder="Example: xyz@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="email" className={styles.labelField}>
              Email
            </label>
          </div>
          <div className={styles.field}>
            <input
              className={styles.inputField}
              type="text"
              fullname="number"
              id="number"
              required
              placeholder="Example: +91 8765432109"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor="number" className={styles.labelField}>
              Phone
            </label>
          </div>
          <div className={styles.field}>
            <textarea
              className={styles.addressField}
              type="text"
              fullname="message"
              id="message"
              required
              placeholder="write your message here.."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor="message" className={styles.labelField}>
              Message
            </label>
          </div>
          <div className={styles.submitDiv}>
            <button className={styles.submitButton} type="submit">
              Submit
            </button>
          </div>
        </Form>
      </div>
      {showPopup && (
        <div className={styles.popupContainer}>
          <div className={styles.popup}>
            <p>{status}</p>
          </div>
        </div>
      )}
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
