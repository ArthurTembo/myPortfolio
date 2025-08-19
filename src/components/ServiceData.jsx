import styles from "../modules/servicedata.module.css";
export default function ServiceData({ serviceTitle, serviceImage, isActive }) {
  return (
    <div className={`carousel-item ${isActive ? "active" : ""}`}>
      <div className={`d-flex justify-content-center`}>
        <div className={`card p-1 p-md-2  ${styles.card}`}>
          <img
            src={serviceImage}
            alt="image"
            className={`img-fluid rounded-3 ${styles.imgcontainer}`}
          />
          <div className={`${styles.caption}`}>{serviceTitle}</div>
        </div>
      </div>
    </div>
  );
}
