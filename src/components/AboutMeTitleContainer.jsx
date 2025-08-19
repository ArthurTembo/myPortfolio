import styles from "../modules/titlestyle.module.css"
export default function AboutMeTitleContainer() {
  return (
    <div className={`container-fluid`}>
      <div className={`d-flex justify-content-center ${styles.container}`}>
        <span className={`fs-3 fs-md-2 fw-normal`}>ABOUT ME</span>
      </div>
    </div>
  );
}