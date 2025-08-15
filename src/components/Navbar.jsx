import Logo from "./Logo";
import NavButtons from "./NavButtons";
import styles from "../modules/navbar.module.css";
import "../bootstrap/bootstrap.min.css";
import "../bootstrap/bootstrap.bundle.min.js";
export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg navbar-light ${styles.navblur}`}>
      <div class={`container-xxl ${styles.navbar}`}>
        <span>
          <Logo />
        </span>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <span>
            <NavButtons />
          </span>
        </div>
      </div>
    </nav>
  );
}
