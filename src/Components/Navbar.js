import React from 'react';
import logoimg from './F2-Fintech-logo-1.png';
import phoneimg from './phone.png';
import emailimg from './513_email.jpg';
import timingsimg from './clock-icon-symbol-sign-vector.jpg';

export default function Navbar({ scrollToAbout }) {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" style={{ padding: '0', marginBottom: '-5px' }}>
      <div className="container-fluid flex-column p-0">
        {/* Top Section */}
        <div className="d-flex justify-content-between align-items-center w-100" style={{ backgroundColor: '#000000', padding: '0.5rem 1rem' }}>
          <div className="d-flex align-items-center">
            <img src={phoneimg} alt="Phone" style={{ height: '20px', marginRight: '10px' }} />
            <span style={{ fontSize: '1rem', fontWeight: 'light', color: '#ffffff' }}>+918810600135</span>
          </div>
          <div className="d-flex align-items-center">
            <img src={emailimg} alt="email" style={{ height: '20px', marginRight: '10px' }} />
            <span style={{ fontSize: '1rem', fontWeight: 'light', color: '#ffffff' }}>wecare@f2fintech.com</span>
          </div>
          <div className="d-flex align-items-center">
            <img src={timingsimg} alt="timings" style={{ height: '20px', marginRight: '10px' }} />
            <span style={{ fontSize: '1rem', fontWeight: 'light', color: '#ffffff' }}>Mon - Sat : 09:00 AM - 07:00 PM</span>
          </div>
          <div className="d-flex align-items-center">
            <a href="https://www.instagram.com" style={{ color: '#ffffff', margin: '0 10px' }}><i className="fab fa-instagram"></i></a>
            <a href="https://www.facebook.com" style={{ color: '#ffffff', margin: '0 10px' }}><i className="fab fa-facebook"></i></a>
            <a href="https://www.linkedin.com" style={{ color: '#ffffff', margin: '0 10px' }}><i className="fab fa-linkedin"></i></a>
            <a href="https://www.twitter.com" style={{ color: '#ffffff', margin: '0 10px' }}><i className="fab fa-twitter"></i></a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="d-flex justify-content-between align-items-center w-100" style={{ padding: '0.5rem 1rem', backgroundColor: '#ffffff' }}>
          <a className="navbar-brand" href="/" style={{ padding: '0.25rem 0' }}>
            <img src={logoimg} alt="Company Logo" style={{ height: '80px' }} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link active btn text-white"
                  aria-current="page"
                  href="/"
                  style={{ backgroundColor: '#2c3ce3', borderColor: '#2c3ce3', padding: '0.5rem 1rem' }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <button
                  className="nav-link active btn text-white mx-2"
                  onClick={scrollToAbout}
                  style={{ backgroundColor: '#2c3ce3', borderColor: '#2c3ce3', padding: '0.5rem 1rem' }}
                >
                  About
                </button>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active btn text-white"
                  aria-current="page"
                  href="/faq"
                  style={{ backgroundColor: '#2c3ce3', borderColor: '#2c3ce3', padding: '0.5rem 1rem' }}
                >
                  FAQ
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link active btn text-white mx-2"
                  aria-current="page"
                  href="/contact"
                  style={{ backgroundColor: '#2c3ce3', borderColor: '#2c3ce3', padding: '0.5rem 1rem' }}
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
