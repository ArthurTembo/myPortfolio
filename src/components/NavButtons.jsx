import styles from "../modules/navbuttons.module.css";
import "../bootstrap/bootstrap.min.css";
import "../bootstrap/bootstrap.bundle.min.js";
export default function NavButtons() {
  return (
    <div className={styles.navbuttons}>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href={"#home"}>Home</a>
        </li>
        <li className="nav-item">
          <a href={"#about"}>About Me</a>
        </li>
        <li className="nav-item">
          <a href={"#services"}>Services</a>
        </li>
        <li className="nav-item">
          <a href={"#why_me"}>Why Me</a>
        </li>
        <li className="nav-item">
          <a href={"#resume"}>Resume</a>
        </li>
        <li className="nav-item">
          <a href={"#contact"}>Contact</a>
        </li>
      </ul>
    </div>
  );
}
