import React from "react";
import fintechimg from "./fintech.jpg"; // Adjust the path as needed
import videoSrc from "./_Video (2).mp4"; // Adjust the path as needed
import FAQ from "./faq"; // Import the FAQ component

export default function Home({ aboutRef, contactRef }) {
  return (
    <div
      style={{
        textAlign: "center",
        background: `linear-gradient(to right, rgba(44, 60, 227, 0.8), rgba(78, 194, 230, 0.8)), url(${fintechimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundBlendMode: "overlay",
        paddingTop: "0px",
        paddingBottom: "50px",
        color: "white",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <div
          style={{
            flex: "1",
            padding: "20px",
            fontFamily: "'Roboto Slab', serif",
            fontWeight: "700",
          }}
        >
          <h1
            style={{
              fontSize: "3rem",
              margin: "0",
              padding: "10px",
            }}
          >
            Welcome to our Global Electronic Marketplace
          </h1>
          <h1
            style={{
              fontSize: "2.5rem",
              margin: "0",
              padding: "10px",
            }}
          >
            for Buying & Selling loans.
          </h1>
        </div>
        <div
          style={{
            flex: "1",
            position: "relative", // Ensure the container is positioned relatively
            marginLeft: "20px",
            zIndex: "1",
            borderRadius: "40px",
            overflow: "hidden",
          }}
        >
          <img
            src={fintechimg}
            alt="Marketplace"
            style={{
              width: "55%",
              maxWidth: "600px",
              height: "auto",
              display: "block",
              borderRadius: "30px",
              marginLeft: "auto",
              position: "relative",
              zIndex: "2",
            }}
          />
          <div
            style={{
              position: "absolute",
              top: "0",
              bottom: "0",
              left: "0",
              right: "0",
              background: "inherit",
              filter: "blur(20px)",
              zIndex: "1",
              clipPath: "inset(0 20px 0 20px)", // Adjust the insets to control the blur area
              borderRadius: "30px",
            }}
          />
        </div>
      </div>
      {/* FAQ Section */}
      <div
        style={{
          padding: "50px",
          background: `linear-gradient(to right, rgba(44, 60, 227, 0.8), rgba(78, 194, 230, 0.8)), url(${fintechimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          textAlign: "center",
          fontFamily: "Arial, sans-serif",
          fontWeight: "bold",
          color: "white",
        }}
      >
        <div
          style={{
            background:
              "linear-gradient(to right, rgba(44, 60, 227, 0.8), rgba(78, 194, 230, 0.8))",
            padding: "20px",
            borderRadius: "10px",
            marginBottom: "20px",
            fontFamily: "'Roboto Slab', serif",
            color: "white",
          }}
        >
          <h1 style={{ margin: "0" }}>Frequently Asked Questions</h1>
        </div>
        <FAQ />
      </div>
      {/* Video Section */}
      <div
        style={{
          padding: "50px",
          background: "rgba(0, 0, 0, 0.8)",
          textAlign: "center",
          borderRadius: "10px",
        }}
      >
        <video
          width="80%"
          controls
          autoPlay
          muted
          style={{
            borderRadius: "10px",
            border: "3px solid white",
          }}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      {/* Contact */}
      <div
        ref={contactRef}
        style={{
          padding: "50px", // Adjusted padding to make the frame consistent with FAQ section
          background: `linear-gradient(to right, rgba(135, 206, 235, 0.8), rgba(0, 191, 255, 0.8)), url(${fintechimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          textAlign: "center",
          fontFamily: "'Roboto Slab', serif",
          fontWeight: "bold",
          color: "black",
          borderRadius: "10px", // Added border radius to round the corners
        }}
      >
        <div
          style={{
            backgroundColor: "rgba(255, 255, 255, 0.8)", // Lighten the background
            padding: "20px",
            borderRadius: "10px",
            border: "3px solid black", // Black and bold border
            marginBottom: "20px",
          }}
        >
          <h1>Contact Us</h1>
          <div
            style={{
              marginBottom: "2rem",
              padding: "1rem",
              borderRadius: "8px",
              border: "3px solid black",
            }}
          >
            <h2>Our Contact Information</h2>
            <p>
              <strong>Address:</strong> Noida M1 sector 63-A
            </p>
            <p>
              <strong>Phone:</strong> +918810600135
            </p>
            <p>
              <strong>Email:</strong> wecare@f2fintech.com
            </p>
            <p>
              <strong>Business Hours:</strong> Mon - Sat : 09:00 AM - 07:00 PM
            </p>
          </div>
          <div
            style={{
              padding: "1rem",
              borderRadius: "8px",
              border: "3px solid black",
            }}
          >
            <h2>Get in Touch</h2>
            <form>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="name">Name:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                />
              </div>
              <div style={{ marginBottom: "1rem" }}>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  style={{
                    width: "100%",
                    padding: "0.5rem",
                    border: "1px solid #ccc",
                    borderRadius: "4px",
                  }}
                ></textarea>
              </div>
              <button
                type="submit"
                style={{
                  display: "block",
                  width: "25%",
                  padding: "0.75rem",
                  border: "none",
                  borderRadius: "4px",
                  backgroundColor: "#2c3ce3",
                  color: "white",
                  fontSize: "1rem",
                  cursor: "pointer",
                  margin: "0 auto",
                }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* About Section */}
      <div
        ref={aboutRef}
        style={{
          padding: "50px",
          background: "linear-gradient(to bottom, #2c3ce3, #1a237e)",
          textAlign: "center",
          fontFamily: "'Roboto Slab', serif",
          fontWeight: "strong",
          color: "#ffffff",
          marginTop: "50px",
        }}
      >
        <h1>About Section</h1>
        <h3>Welcome to the About section of our Home page.</h3>
      </div>
    </div>
  );
}
