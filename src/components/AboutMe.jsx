import AboutMeContainer from "./AboutMeContainer";
import AboutMeTitleContainer from "./AboutMeTitleContainer";
export default function AboutMe() {
  return (
    <div className={`container-xxl mt-2`}>
      <AboutMeTitleContainer />
      <AboutMeContainer />
    </div>
  );
}
