import React from "react";
import logo from "../assets/Logo.jpg";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="nav-bar">
        <img src={logo} alt="" />

        <nav>
          <ul>
            <li>
              <Link to="" className="urls">
                My URLs
              </Link>
            </li>
            <li>
              <Link to="">Features </Link>
            </li>
            <li>
              <Link>Pricing</Link>
            </li>
            <li>
              <Link>Analytics</Link>
            </li>
            <li>
              <Link>FAQs</Link>
            </li>
          </ul>

          <div>
            <Link className="link">Log In</Link>
            <Link className="button1">Try for Free</Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Header;
