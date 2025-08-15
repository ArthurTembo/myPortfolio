import styles from "../modules/titlestyle.module.css";
import "../bootstrap/bootstrap.min.css";
export default function WhyMeTitleContainer() {
  return (
    <div className={`container-fluid`}>
      <div className={`d-flex justify-content-center p-2 ${styles.container}`}>
        <span className={`fs-2 fw-normal`}>WHY ME</span>
      </div>
    </div>
  );
}