import React from "react"
import Layout from "../components/layout"
import styles from "./ContactForm.module.css"

const ContactForm = () => (<>
  
  <div className={styles.section}></div>
  <div className={styles.container}></div>
      <h1>Contact</h1>
      <form name="Contact Form" method="POST" data-netlify="true">
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label>Your Email:</label>
          <input className={styles.field} type="email" name="email" />
        </div>
        <div>
          <label>Message:</label>
          <textarea className={styles.textarea} name="message" />
        </div>
        <button className={styles.btn} type="submit">Send</button>
      </form>
 </>
  )


export default ContactForm