import styles from "../modules/imageholder.module.css";
import image from "../assets/images/image_2.jpg";
import "../bootstrap/bootstrap.min.css";
export default function ImageHolder() {
  return (
    <div className={`d-none d-lg-block`}>
      <img className={`img-fluid ${styles.image}`} src={image} alt="image" />
    </div>
  );
}
