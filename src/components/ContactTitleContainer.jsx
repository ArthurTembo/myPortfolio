import "../bootstrap/bootstrap.min.css";
import styles from "../modules/titlestyle.module.css";
export default function ContactTitleContainer() {
  return (
    <div className={`container-fluid`}>
      <div className={`d-flex justify-content-center p-2 ${styles.container}`}>
        <span className={`fs-2 fw-normal`}>CONTACT</span>
      </div>
    </div>
  );
}