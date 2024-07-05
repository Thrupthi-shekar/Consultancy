import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="company-info">
        <h2>Company Information</h2>
        <ul>
          <li>Address: Church street, Bangalore</li>
          <li>Phone: +91 9999999999</li>
          <li>
            Email: <a href="mailto:info@azayd.com" className="links">info@azayd.com</a>
          </li>
        </ul>
      </div>
      <div className="social-media-links">
        <h2>Social Media</h2>
        <ul>
          <li>
            <a href="(link unavailable)" className="links">Facebook</a>
          </li>
          <li>
            <a href="(link unavailable)" className="links">Twitter</a>
          </li>
          <li>
            <a href="(link unavailable)" className="links">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};


      // <p>Copyright ©️ 2024 Azayd IT Consulting Services. All rights reserved.</p>

export default Footer;
