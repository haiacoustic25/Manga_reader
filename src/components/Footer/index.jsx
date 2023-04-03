import React from 'react';
import '../../assets/styles/footer.css';
import logo from '../../assets/img/logo.png';

const Footer = ({ colorFooter, isLogo = false }) => {
  return (
    <div id="footer" className={colorFooter == 'white' && 'white'}>
      <div id="footer-about">
        <div className="container">
          {isLogo && (
            <div className="footer-top">
              <a href="/" className="footer-logo">
                <img src={logo} alt="Logo" />
              </a>
            </div>
          )}
          <div className="footer-links">
            <ul className="ulclear">
              <li>
                <a href="#" title="Terms of service">
                  Terms of service
                </a>
              </li>
              <li>
                <a href="#" title="DMCA">
                  DMCA
                </a>
              </li>
              <li>
                <a href="#" title="Contact">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" title="Sitemap">
                  Sitemap
                </a>
              </li>
            </ul>
          </div>
          <div className="about-text">
            Mangareader does not store any files on our server, we only linked to the media which is
            hosted on 3rd party services.
          </div>
          <p className="copyright">© Mangareader.to</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
