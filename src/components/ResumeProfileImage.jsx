import profileImage from "../assets/images/image_1.jpg";
export default function ResumeProfileImage() {
  return (
    <div
      className={`d-flex justify-content-center justify-content-lg-start justify-content-xl-start justify-content-xxl-start`}
    >
      <img src={profileImage} alt="Profile Image" className={`img-fluid shadow card-shadow rounded-3`}/>
    </div>
  );
}
