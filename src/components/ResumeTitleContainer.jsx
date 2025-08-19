import "../bootstrap/bootstrap.min.css";
import styles from "../modules/resume.module.css";
export default function ResumeTitleContainer() {
  return (
    <div className={`container-fluid ${styles.container}`}>
      <div
        className={`d-flex justify-content-center`}
      >
        <span className={`fs-3 fs-md-2 fw-normal`}>RESUME</span>
      </div>
    </div>
  );
}
