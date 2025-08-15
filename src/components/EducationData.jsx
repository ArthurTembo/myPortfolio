import "../bootstrap/bootstrap.min.css";
import iconStyle from "../modules/iconstyle.module.css";
import calendar from "../svgs/regular/calendar.svg";
import university from "../svgs/solid/university.svg";
export default function EducationData({
  institution,
  certification,
  duration,
}) {
  return (
    <div className={`mt-2 mb-3`}>
      <div className={`d-flex justify-content-between p-2`}>
        <span>{certification}</span>
      </div>
      <div className={`d-flex justify-content-between p-2`}>
        <span>
          <img src={university} alt="icon" className={` p-2 ${iconStyle.icon}`} />
          {institution}
        </span>{" "}
        <span>
          <img src={calendar} alt="icon" className={` p-2 ${iconStyle.icon}`} />
          {duration}
        </span>
      </div>
      <div className={`border-bottom border-text-muted mt-2`}></div>
    </div>
  );
}
