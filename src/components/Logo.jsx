import styles from "../modules/logo.module.css";
import "../bootstrap/bootstrap.min.css";
export default function Logo() {
  return (
    <div className={`navbar-brand text-secondary fw-bold ${styles.logo}`}>
      Arthur Tembo
    </div>
  );
}
