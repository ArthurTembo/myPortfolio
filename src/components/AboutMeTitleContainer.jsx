import styles from "../modules/titlestyle.module.css"
export default function AboutMeTitleContainer() {
  return (
    <div className={`container-fluid`}>
      <div className={`d-flex justify-content-center p-2 ${styles.container}`}>
        <span className={`fs-2 fw-normal`}>ABOUT ME</span>
      </div>
    </div>
  );
}