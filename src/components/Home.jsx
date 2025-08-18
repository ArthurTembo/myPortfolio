import styles from "../modules/home.module.css";
import TextHolder from "./TextHolder";
import ImageHolder from "./ImageHolder";
export default function Home() {
  return (
    <div className={`${styles.maincontainer}`}>
      <div className={`${styles.homecontainer}`}>
        <div className={styles.innercontainer}>
          <div className={`${styles.textholder}`}>
            <TextHolder />
          </div>
        </div>
        <span className={`${styles.tohide}`}>
          <div className={styles.innercontainer}>
            <ImageHolder />
          </div>
        </span>
      </div>
    </div>
  );
}
