import styles from "../modules/titlestyle.module.css";
import "../bootstrap/bootstrap.min.css";
export default function WhyMeTitleContainer() {
  return (
    <div className={`container-fluid`}>
      <div className={`d-flex justify-content-center ${styles.container}`}>
        <span className={`fs-3 fs-md-2 fw-normal`}>WHY ME</span>
      </div>
    </div>
  );
}