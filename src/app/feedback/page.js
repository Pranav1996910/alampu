"use client";
import styles from "./page.module.css";
import React from "react";
import Form from "next/form";
import { useState } from "react";

export default function Page() {
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [dob, setDob] = useState("");
  const [number, setNumber] = useState("");
  const [address, setAddress] = useState("");
  const [feedback, setFeedback] = useState("");
  const [status, setStatus] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ fullname, email, company, designation, dob, number, address, feedback }),
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
      setCompany("");
      setDesignation("");
      setDob("");
      setNumber("");
      setAddress("");
      setFeedback("");
      setShowPopup(false);
    }, 2000);
  };

  return (
    <div className={styles.page}>
      <div className={styles.feedbackContainer}>
        <div className={styles.feedbackTitle}>Feedback</div>
        <Form className={styles.formMain} onSubmit={onSubmit}>
          <div className={styles.field}>
            <input
              className={styles.inputField}
              type="text"
              name="fullname"
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
              name="email"
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
              name="companyName"
              id="companyName"
              required
              placeholder="Example: xyz"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
            <label htmlFor="companyName" className={styles.labelField}>
              Company Name
            </label>
          </div>
          <div className={styles.field}>
            <input
              className={styles.inputField}
              type="text"
              name="designation"
              id="designation"
              required
              placeholder="Example: manager"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
            <label htmlFor="designation" className={styles.labelField}>
              Designation
            </label>
          </div>
          <div className={styles.field}>
            <input
              className={styles.inputField}
              type="text"
              name="dob"
              id="dob"
              pattern="^\d{2}-\d{2}-\d{4}$"
              required
              placeholder="Example: 13-09-1996"
              value={dob}
              onChange={(e) => setDob(e.target.value)}
            />
            <label htmlFor="dob" className={styles.labelField}>
              Date Of Birth
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
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
            <label htmlFor="number" className={styles.labelField}>
              WhatsApp Number
            </label>
          </div>
          <div className={styles.field}>
            <textarea
              className={styles.addressField}
              type="text"
              name="address"
              id="address"
              required
              placeholder="Example: Connaught House,
                Middle Circle,
                PO Box 7890,
                Connaught House,
                Bengaluru 560072
                IND"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="address" className={styles.labelField}>
              Address
            </label>
          </div>
          <div className={styles.field}>
            <textarea
              className={styles.feedbackInputField}
              type="text"
              name="feedback"
              required
              id="feedback"
              placeholder="write your feedback here......."
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
            />
            <label htmlFor="feedback" className={styles.labelField}>
              Feedback
            </label>
          </div>
          <div className={styles.concentDiv}>
            <input
              type="checkbox"
              id="checkbox"
              name="checkbox"
              required
              value="checkbox"
              className={styles.concentCheckbox}
            />
            By providing feedback, you authorize us to use your comments for
            promotional purposes on all our social media platforms, as well as
            to send messages via WhatsApp and email.
          </div>
          <div className={styles.submitDiv}>
            <button className={styles.submitButton} type="submit">
              Submit Feedback
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
    </div>
  );
}
