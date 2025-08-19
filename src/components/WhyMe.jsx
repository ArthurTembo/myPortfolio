import WhyMeTitleContainer from "./WhyMeTitleContainer";
import Expertise from "./Expertise";
import WhyMeContent from "./WhyMeContent";
export default function WhyMe() {
  return (
    <div className={`ps-md-3 pe-md-3`}>
      <WhyMeTitleContainer />
      <div className={`d-flex justify-content-center`}>
        <WhyMeContent />
      </div>
      <div className={`d-flex justify-content-center`}>
        <Expertise />
      </div>
    </div>
  );
}
