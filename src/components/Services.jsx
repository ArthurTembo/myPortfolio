import ServicesTitleContainer from "./ServicesTitleContainer";
import ServicesContainer from "./ServicesContainer";
export default function Services() {
  return (
    <div className={`ps-md-3 pe-md-3 mt-2`}>
      <ServicesTitleContainer />
      <ServicesContainer />
    </div>
  );
}
