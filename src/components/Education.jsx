import EducationData from "./EducationData";
export default function Education() {
  const education = [
    {
      institution: "Mzuzu University",
      certification: "Bachelors of Education ICT",
      duration: "2021 April - 2024 October",
    },
    {
      institution: "Nsaru Day Secondary School",
      certification: "MSCE",
      duration: "2015 September - 2019 July",
    },
  ];
  return (
    <div className={`ps-0 ps-md-4`}>
      <div
        className={`fs-5 fs-md-4 p-1 d-flex justify-content-center justify-content-md-start justify-content-lg-start justify-content-xl-start justify-content-xxl-start`}
      >
        <span>Education</span>
      </div>
      {education.map((eduData) => (
        <EducationData
          key={eduData.institution}
          institution={eduData.institution}
          certification={eduData.certification}
          duration={eduData.duration}
        />
      ))}
    </div>
  );
}
