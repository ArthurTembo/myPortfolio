import SocioLinksData from "./SocioLinksData";
import instaIcon from "../svgs/brands/instagram.svg";
import facebookIcon from "../svgs/brands/facebook-square.svg";
import linkedinIcon from "../svgs/brands/linkedin.svg";
import whatsappIcon from "../svgs/brands/whatsapp.svg";
import xIcon from "../svgs/brands/twitter-square.svg";
import telegramIcon from "../svgs/brands/telegram.svg";
export default function SocioLinksContainer() {
  const socioLinksInfo = [
    {
      link: "https://www.facebook.com/share/1GGSkWiuiX/?mibextid=LQQJ4d",
      icon: facebookIcon,
      linkTitle: "Facebook",
      color: "color: #3b5998;",
    },
    {
      link: "https://x.com/@wavemasstter",
      icon: xIcon,
      linkTitle: "Twitter",
      color: "color: #3b5998;",
    },
    {
      link: "https://www.instagram.com/kingalpha02",
      icon: instaIcon,
      linkTitle: "Instagram",
      color:
        "color: linear-gradient(45deg,#405de6,#5851db,#833ab4,#c13584,#e1306c,#fd1d1d);",
    },
    {
      link: "https://www.linkedin.com/in/arthur-tembo-885518360?trk=contact-info",
      icon: linkedinIcon,
      linkTitle: "LinkedIn",
      color: "color: 0a66c2;",
    },
    {
      link: "https://t.me/profalfha02",
      icon: telegramIcon,
      linkTitle: "Telegram",
      color: "color: 0a66c2;",
    },
    {
      link: "https://wa.me/+265997674445",
      icon: whatsappIcon,
      linkTitle: "WhatsApp",
      color: "color: #25D366;",
    },
  ];
  return (
    <div className={`container-fluid`}>
      <div className={`text-center fs-2 fw-bold text-primary mt-3`}>
        Stay With Me
      </div>
      <div
        className={`ps-5 pe-5 pt-4 pb-4 row justify-content-evenly g-4 d-flex`}
      >
        {socioLinksInfo.map((socioLinksInfo) => (
          <SocioLinksData
            key={socioLinksInfo.link}
            link={socioLinksInfo.link}
            linkIcon={socioLinksInfo.icon}
            linkColor={socioLinksInfo.color}
          />
        ))}
      </div>
    </div>
  );
}
