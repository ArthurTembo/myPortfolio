import ResumeTitleContainer from "./ResumeTitleContainer";
import ResumeContainer from "./ResumeContainer";
import "../bootstrap/bootstrap.min.css";
export default function Resume() {
  return (
    <div className={`container-xxl`}>
      <ResumeTitleContainer />
      <ResumeContainer />
    </div>
  );
}
