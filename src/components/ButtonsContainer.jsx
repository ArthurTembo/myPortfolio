import styles from "../modules/button.module.css";
import "../bootstrap/bootstrap.min.css";
export default function ButtonsContainer() {
  return (
    <div className={styles.buttonsholder}>
      <a href={"#about"}>
        <button className={`fw-bold btn btn-primary rounded-pill ${styles.button}`}>
          ABOUT ME
        </button>
      </a>
      <a href={"#services"}>
        <button
          className={`fw-bold btn btn-primary bg-transparent border-primary rounded-pill ${styles.button2}`}
        >
          SERVICES
        </button>
      </a>
    </div>
  );
}
