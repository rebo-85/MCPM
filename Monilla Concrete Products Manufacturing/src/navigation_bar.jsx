import { Link } from "react-router-dom";
import "./assets/navigation_bar.css";

function NavigationBar() {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <div className="navbar-logo">
            <Link to="/">
              <img src="src/assets/images/logo.jpg" alt="Company Logo"></img>
            </Link>
          </div>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavigationBar;
