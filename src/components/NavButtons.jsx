import styles from "../modules/navbuttons.module.css";
import "../bootstrap/bootstrap.min.css";
import "../bootstrap/bootstrap.bundle.min.js";
export default function NavButtons() {
  return (
    <div className={styles.navbuttons}>
      <ul className="navbar-nav">
        <a href={"#home"}>
          <li className="nav-item">Home</li>
        </a>
        <a href={"#about"}>
          <li className="nav-item">About Me</li>
        </a>
        <a href={"#services"}>
          <li className="nav-item">Services</li>
        </a>
        <a href={"#why_me"}>
          <li className="nav-item">Why Me</li>
        </a>
        <a href={"#resume"}>
          <li className="nav-item">Resume</li>
        </a>
        <a href={"#contact"}>
          <li className="nav-item">Contact</li>
        </a>
      </ul>
    </div>
  );
}
