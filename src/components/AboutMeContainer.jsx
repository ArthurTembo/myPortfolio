import AboutMeImageContainer from "./AboutMeImageContainer";
import AboutMeContent from "./AboutMeContent";
export default function AboutMeContainer() {
  return (
    <div className={`d-flex row`}>
      <div className={`d-none d-md-block col-5`}>
        <AboutMeImageContainer />
      </div>
      <div className={`col-12 col-md-7`}>
        <AboutMeContent />
      </div>
    </div>
  );
}
