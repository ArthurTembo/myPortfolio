import ContactTitleContainer from "./ContactTitleContainer";
import ContactForm from "./ContactForm";
import SocioLinksContainer from "./SocioLinksContainer";
export default function Contact() {
  return (
    <div className={`container-xxl mt-2`}>
      <ContactTitleContainer />
      <div className={`mt-3`}>
        <div className={``}>
          <ContactForm />
        </div>
        <div className={``}>
          <SocioLinksContainer />
        </div>
      </div>
    </div>
  );
}
