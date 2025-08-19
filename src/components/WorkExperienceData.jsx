import "../bootstrap/bootstrap.min.css";
import iconStyle from "../modules/iconstyle.module.css";
import calendar from "../svgs/regular/calendar.svg";
import location from "../svgs/solid/map-marker.svg";
import styles from "../modules/workexperiencedata.module.css";
export default function WorkExperienceData({
  jobTitle,
  jobLocation,
  fullTime,
  duration,
}) {
  return (
    <div className={`mt-2 mb-3`}>
      <div className={`d-flex justify-content-between p-2 ${styles.txtsize}`}>
        <span>{jobTitle}</span>
        <span className={`rounded-pill bg-warning p-1 ps-3 pe-3 ${styles.size}`}>
          {fullTime ? "FULLTIME" : "PART TIME"}
        </span>
      </div>
      <div className={`d-flex justify-content-between p-2 ${styles.txtsize}`}>
        <span>
          <img src={location} alt="icon" className={`p-2 ${iconStyle.icon}`} />
          {jobLocation}
        </span>
        <span>
          <img src={calendar} alt="icon" className={` p-2 ${iconStyle.icon}`} />
          {duration}
        </span>
      </div>
      <div className={`border-bottom border-text-muted mt-2`}></div>
    </div>
  );
}
