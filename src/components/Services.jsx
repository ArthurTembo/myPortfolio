import ServicesTitleContainer from "./ServicesTitleContainer";
import ServicesContainer from "./ServicesContainer";
export default function Services() {
  return (
    <div className={`container-xxl mt-2`}>
      <ServicesTitleContainer />
      <ServicesContainer />
    </div>
  );
}
