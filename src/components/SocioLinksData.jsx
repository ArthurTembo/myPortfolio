import styles from "../modules/iconstyle.module.css";
export default function SocioLinksData({ link, linkIcon, linkColor }) {
  return (
    <div
      className={`p-2 card shadow d-flex justify-content-center`}
      style={{ maxWidth: "50px" }}
    >
      <a href={`${link}`} target={`_blank`}>
        <img src={linkIcon} alt="icon" className={`${styles.sociolinkicon}`} />
      </a>
    </div>
  );
}
