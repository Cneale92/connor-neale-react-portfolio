import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social-list">
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://github.com/Cneale92"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li className="social-list__item">
          <a
            className="social-list__link"
            href="https://www.linkedin.com/in/connor-neale-bab081179?trk=people-guest_people_search-card"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
      <div className="footer-text">
        <p className="social-list__item ">
          &copy; Connor Neale 2024 | &lt;Made with React&gt;
        </p>
      </div>
    </footer>
  );
}
