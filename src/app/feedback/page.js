"use client";
import styles from "./page.module.css";
import React from "react";
import Form from "next/form";

export default function Page() {
  const onSubmit = (event) => {};

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
              name="companyName"
              id="companyName"
              required
              placeholder="Example: xyz"
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
    </div>
  );
}
