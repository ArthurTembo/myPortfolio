import WorkExperienceData from "./WorkExperienceData";
import "../bootstrap/bootstrap.min.css";
export default function WorkExperience() {
  const workExperience = [
    {
      jobTitle: "Front End Developer Intern",
      jobLocation: "Maso Enterprise",
      fullTime: false,
      duration: "2025 April - Present",
    },
    {
      jobTitle: "Computer Studies and Mathematics Teacher",
      jobLocation: "Mkwichi Day Secondary School",
      fullTime: true,
      duration: "2025 January - 2025 April",
    },
  ];
  return (
    <div className={`ps-4`}>
      <div className={`fs-4 p-1 d-flex justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start`}>
        <span>Work Experience</span>
      </div>
      {workExperience.map((workData) => (
        <WorkExperienceData
          key={workData.jobTitle}
          jobTitle={workData.jobTitle}
          jobLocation={workData.jobLocation}
          fullTime={workData.fullTime}
          duration={workData.duration}
        />
      ))}
    </div>
  );
}
