import aboutImage from "../assets/images/image_3.jpg";
export default function AboutMeImageContainer() {
  return (
      <div
        className={`d-flex justify-content-start p-3`}
      >
        <img src={aboutImage} alt="Profile Image" className={`img-fluid shadow card-shadow rounded-3`}/>
      </div>
    );
}
