import React, { useRef, useState, useEffect } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import emailjs from '@emailjs/browser'
import styles from './Contact.module.css'

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });
  const containerRef = useScrollReveal();

  // Prevent body scroll when overlay is open
  useEffect(() => {
    if (showForm) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showForm]);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setStatus({ type: '', message: '' });

    emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setStatus({ type: 'success', message: 'Message sent successfully! I will get back to you soon.' });
        form.current.reset();
        setTimeout(() => setShowForm(false), 3000);
      }, (error) => {
        setStatus({ type: 'error', message: 'Failed to send message. Please try again or email me directly.' });
        console.error('EmailJS Error:', error.text);
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className={styles.contact} ref={containerRef}>
      <div className="container">
        <h2 className="reveal">Get In Touch</h2>
        <p className={`${styles.text} reveal`}>I'm always open to new opportunities and collaborations.</p>

        <div className={styles.contactContainer}>
          <div className={`${styles.ctaContainer} reveal`}>
            <button
              className={styles.contactBtn}
              onClick={() => setShowForm(true)}
            >
              Contact Me
            </button>

            <div className={styles.socialLinks}>
              <h3>Follow Me</h3>
              <div className={styles.links}>
                <a href="https://github.com/carchilleion" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="https://www.facebook.com/share/1DMTQBLNot/" target="_blank" rel="noopener noreferrer">Facebook</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showForm && (
        <div className={styles.overlay} onClick={() => setShowForm(false)}>
          <div className={styles.formWrapper} onClick={(e) => e.stopPropagation()}>
            <button
              className={styles.closeBtn}
              onClick={() => setShowForm(false)}
              aria-label="Close form"
            >
              &times;
            </button>
            <div className={styles.formHeader}>
              <h3>Send a Message</h3>
              <p>Fill out the form below and I'll get back to you as soon as possible.</p>
            </div>
            <form ref={form} onSubmit={sendEmail} className={styles.form}>
              <div className={styles.formGroup}>
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" required placeholder="Your Name" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" required placeholder="your.email@example.com" />
              </div>
              <div className={styles.formGroup}>
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" required placeholder="How can I help you?" rows="5"></textarea>
              </div>
              <button type="submit" className={styles.submitBtn} disabled={isSending}>
                {isSending ? 'Sending...' : 'Send Message'}
              </button>
              {status.message && (
                <div className={`${styles.status} ${styles[status.type]}`}>
                  {status.message}
                </div>
              )}
            </form>
          </div>
        </div>
      )}
    </section>
  )
}

export default Contact
