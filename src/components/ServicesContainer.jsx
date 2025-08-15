import mathlessons from "../assets/images/mathlessons.jpg";
import ictlessons from "../assets/images/ictlessonimage.jpg";
import frontend from "../assets/images/frontendimage.jpg";
import hardware from "../assets/images/hardwareconf.jpg";
import software from "../assets/images/softwareconf.jpg";
import ServiceData from "./ServiceData";
import ServiceDataBigScreen from "./ServiceDataBigScreen";
import styles from "../modules/servicescontainer.module.css";

export default function ServicesContainer() {
  const serviceInformation = [
    {
      id: "1",
      serviceImage: frontend,
      serviceTitle: "Web Development",
      isActive: true,
    },
    {
      id: "2",
      serviceImage: software,
      serviceTitle: "Software Configuration",
      isActive: false,
    },
    {
      id: "3",
      serviceImage: hardware,
      serviceTitle: "Hardware Configuration",
      isActive: false,
    },
    {
      id: "4",
      serviceImage: ictlessons,
      serviceTitle: "ICT Lessons",
      isActive: false,
    },
    {
      id: "5",
      serviceImage: mathlessons,
      serviceTitle: "Mathematics Lessons",
      isActive: false,
    },
  ];
  return (
    <div className={`container-fluid`}>
      <div className={`d-md-none`}>
        <div
          id={`myCarousel`}
          className={`carousel slide carousel-fade`}
          data-bs-ride={`carousel`}
          data-bs-interval="3000"
        >
          {/* Carousel Indicators */}
          <div className="carousel-indicators">
            {serviceInformation.map((serviceInfo, index) => (
              <button
                key={`indicator-${serviceInfo.id}`}
                type="button"
                data-bs-target="#myCarousel"
                data-bs-slide-to={index}
                className={serviceInfo.isActive ? "active" : ""}
                aria-current={serviceInfo.isActive ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
              ></button>
            ))}
          </div>

          <div className={`carousel-inner ${styles.carousel}`}>
            {serviceInformation.map((serviceInfo) => (
              <ServiceData
                key={serviceInfo.id}
                serviceTitle={serviceInfo.serviceTitle}
                serviceImage={serviceInfo.serviceImage}
                isActive={serviceInfo.isActive}
              />
            ))}
          </div>

          {/* Carousel Controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className={`d-none d-md-block container-fluid`}>
        <div className={`mt-1 row`}>
          {serviceInformation.map((serviceInfo) => (
            <ServiceDataBigScreen
              key={serviceInfo.id}
              serviceTitle={serviceInfo.serviceTitle}
              serviceImage={serviceInfo.serviceImage}
              isActive={serviceInfo.isActive}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
