import React from 'react';

export default function Contact() {
  return (
    <div style={styles.contactContainer}>
      <h1 style={styles.heading}>Contact Us</h1>
      
      <div style={styles.contactDetails}>
        <h2 style={styles.subHeading}>Our Contact Information</h2>
        <p><strong>Address:</strong> 123 Fintech Street, Financial District, City, Country</p>
        <p><strong>Phone:</strong> +918810600135</p>
        <p><strong>Email:</strong> wecare@f2fintech.com</p>
        <p><strong>Business Hours:</strong> Mon - Sat : 09:00 AM - 07:00 PM</p>
      </div>
      
      <div style={styles.contactForm}>
        <h2 style={styles.subHeading}>Get in Touch</h2>
        <form>
          <div style={styles.formGroup}>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required style={styles.input} />
          </div>
          
          <div style={styles.formGroup}>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required style={styles.input} />
          </div>
          
          <div style={styles.formGroup}>
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="5" required style={styles.textarea}></textarea>
          </div>
          
          <button type="submit" style={styles.button}>Submit</button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  contactContainer: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto'
  },
  heading: {
    textAlign: 'center',
    color: '#2c3ce3'
  },
  subHeading: {
    textAlign: 'center',
    color: '#2c3ce3'
  },
  contactDetails: {
    marginBottom: '2rem',
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '8px'
  },
  contactForm: {
    backgroundColor: '#f9f9f9',
    padding: '1rem',
    borderRadius: '8px'
  },
  formGroup: {
    marginBottom: '1rem'
  },
  input: {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  textarea: {
    width: '100%',
    padding: '0.5rem',
    border: '1px solid #ccc',
    borderRadius: '4px'
  },
  button: {
    display: 'block',
    width: '100%',
    padding: '0.75rem',
    border: 'none',
    borderRadius: '4px',
    backgroundColor: '#2c3ce3',
    color: 'white',
    fontSize: '1rem',
    cursor: 'pointer'
  },
  buttonHover: {
    backgroundColor: '#1a28a0'
  }
};
