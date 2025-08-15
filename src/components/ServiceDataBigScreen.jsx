import styles from "../modules/servicedata.module.css";
export default function ServiceDataBigScreen({
  serviceTitle,
  serviceImage,
  isActive,
}) {
  return (
    <div className={`d-none d-md-block col-md-6 col-lg-4`}>
      <div className={`p-3 ${styles.card}`}>
        <img
          src={serviceImage}
          alt="image"
          className={`img-fluid rounded-3 ${styles.imgcontainer}`}
        />
        <div className={`${styles.caption}`}>{serviceTitle}</div>
      </div>
    </div>
  );
}
