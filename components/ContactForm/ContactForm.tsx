'use client'

import { useState } from 'react'
import { collection, addDoc } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'
import { db } from '@/lib/firebase'
import styles from './ContactForm.module.scss'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faUser, faEnvelope } from '@fortawesome/free-regular-svg-icons'

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
      toast('Contact form submitted successfully')

    } catch (error) {
      if (error instanceof FirebaseError) {
        console.error('Firebase error:', error.message)
        console.error('Error code:', error.code)
        toast(error.message)
      } else {
        console.error(error)
      }
    }
  }

  return (
    <>
      {!formSubmitted ?
      (<form className={styles.contactForm} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <div className={styles.inputWrapper}>
            <FontAwesomeIcon icon={faUser} />          
            <input className={styles.textInput} value={name} type="text" id="name" name="name" required onChange={(e) => setName(e.target.value)} />
          </div>
        </div>
        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <div className={styles.inputWrapper}>
            <FontAwesomeIcon icon={faEnvelope} />
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
          <span>           
            <FontAwesomeIcon icon={faThumbsUp} />
            Thanks for your message!
          </span>
        </div>
      )}
    </>
  )
}