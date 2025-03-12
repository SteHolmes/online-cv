'use client'

import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import styles from './ContactForm.module.scss'

export default function ContactForm() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [formSubmitted, setFormSubmitted] = useState(false)

  const clearContactForm = () => {
    setName('')
    setEmail('')
    setMessage('')
  }

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault()
  
    try {
      await addDoc(collection(db, 'messages'), {
        name,
        email,
        message,
        date: new Date(),
      })

      clearContactForm()
      setFormSubmitted(true)

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      {!formSubmitted ?
      (<form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
          <div className={styles.inputWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M304 128a80 80 0 1 0 -160 0 80 80 0 1 0 160 0zM96 128a128 128 0 1 1 256 0A128 128 0 1 1 96 128zM49.3 464l349.5 0c-8.9-63.3-63.3-112-129-112l-91.4 0c-65.7 0-120.1 48.7-129 112zM0 482.3C0 383.8 79.8 304 178.3 304l91.4 0C368.2 304 448 383.8 448 482.3c0 16.4-13.3 29.7-29.7 29.7L29.7 512C13.3 512 0 498.7 0 482.3z"/></svg>
            <input className={styles.textInput} value={name} type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
          <div className={styles.inputWrapper}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"/></svg>
            <input className={styles.textInput} value={email} type="email" id="email" name="email" required onChange={(e) => setEmail(e.target.value)} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>  
          <textarea className={`${styles.textInput} ${styles.textArea}`} value={message} id="message" name="message" rows={6} required onChange={(e) => setMessage(e.target.value)}></textarea>
        </div>
        <button className={styles.submitButton} type="submit">Send</button>
      </form>)
      : (
        <div className={styles.submitMessage}>
          {/* <!--!Font Awesome Free 6.7.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2025 Fonticons, Inc.--> */}
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"/></svg>
            Thanks for your message!
          </span>
        </div>
      )}
    </>
  )
}