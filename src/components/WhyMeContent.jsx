import WhyMeData from "./WhyMeData";
import attention from "../assets/images/attention.png";
import skillBlend from "../assets/images/skillblend.png";
import optimize from "../assets/images/optimizecoding.png";
import efficient from "../assets/images/efficience.png";
import passionate from "../assets/images/passion.png";
import communication from "../assets/images/communication.png";

export default function WhyMeContent() {
  const whyMeInfo = [
    {
      icon: attention,
      factorTitle: "Attention to Detail",
    },
    {
      icon: skillBlend,
      factorTitle: "Unique Skill Blend",
    },
    {
      icon: optimize,
      factorTitle: "Optimized Coding Practices",
    },
    {
      icon: efficient,
      factorTitle: "Efficient Problem Solving",
    },
    {
      icon: passionate,
      factorTitle: "Passion for Coding",
    },
    {
      icon: communication,
      factorTitle: "Effective Communication",
    },
  ];
  return (
    <div className={`row col-11 col-md-11 shadow round-2 pt-3 pb-4`}>
      {whyMeInfo.map((whyMeInfo) => (
        <WhyMeData
          key={whyMeInfo.factorTitle}
          title={whyMeInfo.factorTitle}
          icon={whyMeInfo.icon}
        />
      ))}
    </div>
  );
}
