import WorkExperience from "./WorkExperience";
import Education from "./Education";
import ResumeProfileImage from "./ResumeProfileImage";
import "../bootstrap/bootstrap.min.css";

export default function ServicesContainer() {
  return (
    <div className={`row  container-xxl`}>
      <div className={`col-md-12 col-lg-5`}>
        <ResumeProfileImage />
      </div>
      <div className={`col-md-12 col-lg-7`}>
        <WorkExperience /> <Education />
      </div>
    </div>
  );
}
