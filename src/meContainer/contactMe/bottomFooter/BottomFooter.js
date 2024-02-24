import React from "react";
import "./BottomFooter.css"; // Import your CSS file for styling

const BottomFooter = () => {
  return (
    <footer className="footer-container_bottom">
      <div className="box-container">
        <div className="box">
          <h3>Ajay's Portfolio</h3>
          <p>
            Thank you for visiting my personal portfolio website. Connect with
            me over socials. <br /> <br /> Keep Rising 🚀. Connect with me
            providing the details above!
          </p>
        </div>

        <div className="contact-details">
          <h3>Contact Me</h3>
          <p>
            <i className="fa fa-envelope"></i> archnaeletricals@gmail.com
          </p>
          <p>
            <i className="fa fa-phone"></i> +91-9329547265
          </p>

          <p>
            <i className="fa fa-home"></i> 203, Taj Enclave Nagrth chowk
          </p>

          <p>
            <i className="fa fa-home"></i> four noor market russal chowk 
          </p>

        </div>

        <div className="social-media">
          <h3>Follow Me</h3>
          <div className="colz">
            <div className="colz-icon">
              <a href="https://github.com/sagarshukla010">
                <i className="fa fa-github-square"></i>
              </a>
              <a href="https://www.youtube.com/@sagarshukla1194">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/sagar-shukla-b517b416a/">
                <i className="fa fa-linkedin-square"></i>
              </a>
            </div>
          </div>       
        </div>
      </div>
      <div className="transparent-line">
        <h>Created and Build by Sagar Shukla  🚀</h>
      </div>
    </footer>
  );
};

export default BottomFooter;
