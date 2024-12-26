import React from "react";
import { LOGO_URL } from "../utils/constants";

const Footer = () => {
  return (
    <footer
      className="py-8"
      style={{
        background: "linear-gradient(45deg, #f3a683, #78e08f)", // Updated background gradient
        color: "black", // Black text
      }}
    >
      <div className="container mx-auto px-6 flex flex-wrap justify-between">
        <div className="footer-logo mb-6 md:mb-0 flex items-center">
          <img src={LOGO_URL} alt="Food Panda Logo" className="h-12 w-12 mr-3" />
          <div>
            <h1 className="text-3xl font-semibold">Food Panda</h1>
            <p>&copy; 2024 Food Panda Limited</p>
          </div>
        </div>

        <div className="footer-column mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-2">Company</h3>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Team</li>
            <li>Food Panda Pro</li>
            <li>Food Panda Genie</li>
            <li>Minis</li>
          </ul>
        </div>

        <div className="footer-column mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-2">Contact Us</h3>
          <ul>
            <li>Help & Support</li>
            <li>Partner With Us</li>
            <li>Drive With Us</li>
          </ul>
          <h3 className="font-bold text-lg mt-6 mb-2">Legal</h3>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>

        <div className="footer-column mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-2">Available in:</h3>
          <ul>
            <li>Bhubaneswar</li>
            <li>Bangalore</li>
            <li>Delhi</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Hyderabad</li>
            <li>Chennai</li>
          </ul>
        </div>

        <div className="footer-column mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-2">Life at Food Panda</h3>
          <ul>
            <li>Explore with Food Panda</li>
            <li>News</li>
            <li>Snacks & More</li>
          </ul>
        </div>

        <div className="footer-social mb-6 md:mb-0">
          <h3 className="font-bold text-lg mb-2 cursor-pointer">Social Links</h3>
          <div className="social-icons flex space-x-4 text-2xl">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <i className="fa fa-instagram"></i>
            </a>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <i className="fa fa-facebook"></i>
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <i className="fa fa-pinterest"></i>
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer"
            >
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
