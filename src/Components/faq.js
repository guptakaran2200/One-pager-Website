import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaVideo } from "react-icons/fa";
import ReactPlayer from "react-player";
import "./FAQ.css"; // Import the CSS file
import "./custom.css"; // Import the custom CSS file

export default function FAQ() {
  const [showVideo, setShowVideo] = useState({ faq1: false, faq2: false }); // State to control video display for each FAQ

  // Function to toggle video display for FAQ1
  const toggleVideo = (faq) => {
    setShowVideo((prevState) => ({
      ...prevState,
      [faq]: !prevState[faq],
    }));
  };

  return (
    <div className="container mt-5">
      <div className="accordion" id="accordionExample">
        {/* FAQ 1 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button d-flex justify-content-between"
              type="button"
              onClick={() => toggleVideo("faq1")} // Call toggleVideo function on button click
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              <span className="accordion-text">What is F2 Fintech?</span>
              <FaVideo className="ms-auto accordion-icon" />
            </button>
          </h2>
          {/* Conditionally render the video based on showVideo state */}
          {showVideo.faq1 && (
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {/* Embed the ReactPlayer component to display the video */}
                <ReactPlayer
                  url="https://www.youtube.com/shorts/A-RqUAeKZSU" // Provide your video URL here
                  controls // Show video controls
                  width="100%"
                />
              </div>
            </div>
          )}
        </div>
        
        {/* FAQ 2 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button d-flex justify-content-between"
              type="button"
              onClick={() => toggleVideo("faq2")} // Call toggleVideo function on button click
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span className="accordion-text">How can I apply for a loan?</span>
              <FaVideo className="ms-auto accordion-icon" />
            </button>
          </h2>
          {/* Conditionally render the video based on showVideo state */}
          {showVideo.faq2 && (
            <div
              id="collapseTwo"
              className="accordion-collapse collapse show"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {/* Embed the ReactPlayer component to display the video */}
                <ReactPlayer
                  url="https://www.youtube.com/shorts/JnXd_Z6skKs" // Provide your video URL here
                  controls // Show video controls
                  width="100%"
                />
              </div>
            </div>
          )}
        </div>
        {/* FAQ 3 */}
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button d-flex justify-content-between"
              type="button"
              onClick={() => toggleVideo("faq3")} // Call toggleVideo function on button click
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <span className="accordion-text">What is the Rule No. 72</span>
              <FaVideo className="ms-auto accordion-icon" />
            </button>
          </h2>
          {/* Conditionally render the video based on showVideo state */}
          {showVideo.faq3 && (
            <div
              id="collapseTwo"
              className="accordion-collapse collapse show"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                {/* Embed the ReactPlayer component to display the video */}
                <ReactPlayer
                  url="https://www.youtube.com/shorts/UmOtB73hnjg" // Provide your video URL here
                  controls // Show video controls
                  width="100%"
                />
              </div>
            </div>
          )}
        </div>

        {/* Other FAQ items can be added similarly */}
      </div>
    </div>
  );
}
