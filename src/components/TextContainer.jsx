import styles from "../modules/textcontainer.module.css";
export default function TextContainer() {
  return (
    <div >
      <div className={`fs-1 ${styles.heading}`}>
        <div>
          <span className={`${styles.emphasis}`}>WELCOME </span>TO
        </div>
        MY PORTFOLIO!
      </div>
      <div className={`fs-3 ${styles.paragraph}`}>
        I'm a <span className={styles.emphasis}>Web Developer</span>, passionate
        about crafting beautiful and functional digital experiences.
      </div>
      <div className={`fs-3 ${styles.outro}`}>
        <span className={styles.emphasis}>Explore</span> my work below.
      </div>
    </div>
  );
}
