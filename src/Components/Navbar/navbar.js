import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <section className="sidebar">
      <a style={{ color: "#fff" }}>CC Crypto Castle</a>
      <hr />
      <ul className="nav-list">
        <li className="nav-items">
          <Link to="/" className="nav-link">
            <span>טבלאות</span>
          </Link>
          <hr className="links_hr" />
          <Link to="/exchange" className="nav-link">
            <span>קניית מטבעות</span>
          </Link>
          <hr className="links_hr" />
          <Link to="/exchange" className="nav-link">
            <span>איזור אישי</span>
          </Link>
          <hr className="links_hr" />
          <Link to="/logout" className="nav-link">
            <span>יציאה מהמערכת</span>
          </Link>
        </li>
      </ul>
    </section>
  );
};

export default Sidebar;
