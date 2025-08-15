import html5Icon from "../assets/images/html5.jpg";
import css3Icon from "../assets/images/css3.jpg";
import bootstrapIcon from "../assets/images/bootstrap.jpg";
import javascriptIcon from "../assets/images/javascript.jpg";
import reactJSIcon from "../assets/images/reactjs.jpg";
import compTechIcon from "../assets/images/comptech.png";
import ExpertiseData from "./ExpertiseData";
export default function Expertise() {
  const expertiseInfo = [
    {
      skillTitle: "HTML5",
      styleWidth: "96%",
      ariaValue: "96",
      icon: html5Icon,
    },
    {
      skillTitle: "CSS3",
      styleWidth: "87%",
      ariaValue: "87",
      icon: css3Icon,
    },
    {
      skillTitle: "Bootstrap5",
      styleWidth: "90%",
      ariaValue: "90",
      icon: bootstrapIcon,
    },
    {
      skillTitle: "Javascript",
      styleWidth: "92%",
      ariaValue: "92",
      icon: javascriptIcon,
    },
    {
      skillTitle: "ReactJS",
      styleWidth: "90%",
      ariaValue: "90",
      icon: reactJSIcon,
    },
    {
      skillTitle: "Computer Repairing",
      styleWidth: "88%",
      ariaValue: "88",
      icon: compTechIcon,
    },
  ];
  return (
    <div className={`row col-11 col-md-11 shadow round-2 pt-5 pb-4 ps-2 pe-2`}>
      <div className={`text-center fs-3 mb-2`}>Expertise</div>
      {expertiseInfo.map((expertiseInfo) => (
        <ExpertiseData
          key={expertiseInfo.skillTitle}
          title={expertiseInfo.skillTitle}
          styleWidth={expertiseInfo.styleWidth}
          ariaValue={expertiseInfo.ariaValue}
          icon={expertiseInfo.icon}
        />
      ))}
    </div>
  );
}
