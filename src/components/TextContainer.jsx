import styles from "../modules/textcontainer.module.css";
export default function TextContainer() {
  return (
    <div >
      <div className={styles.heading}>
        <div>
          <span className={styles.emphasis}>WELCOME </span>TO
        </div>
        MY PORTFOLIO!
      </div>
      <div className={styles.paragraph}>
        I'm a <span className={styles.emphasis}>Web Developer</span>, passionate
        about crafting beautiful and functional digital experiences.
      </div>
      <div className={styles.outro}>
        <span className={styles.emphasis}>Explore</span> my work below.
      </div>
    </div>
  );
}
