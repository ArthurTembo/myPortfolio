import "../bootstrap/bootstrap.min.css";
import styles from "../modules/titlestyle.module.css";
export default function ContactTitleContainer() {
  return (
    <div className={`container-fluid`}>
      <div className={`d-flex justify-content-center ${styles.container}`}>
        <span className={`fs-3 fs-md-2 fw-normal`}>CONTACT</span>
      </div>
    </div>
  );
}