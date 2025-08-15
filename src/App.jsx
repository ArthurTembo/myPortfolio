import "./App.css";
import Navbar from "./components/Navbar";
import "./bootstrap/bootstrap.min.css";
import "./bootstrap/bootstrap.bundle.min.js";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Services from "./components/Services";
import WhyMe from "./components/WhyMe";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
export default function App() {
  return (
    <div className="App">
      <div className={``}>
        <section className={`sticky-top`}>
          <Navbar />
        </section>
        <section id={"home"}>
          <Home />
        </section>
        <section id={"about"}>
          <AboutMe />
        </section>
        <section id={"services"}>
          <Services />
        </section>
        <section id={"why_me"}>
          <WhyMe />
        </section>
        <section id={"resume"}>
          <Resume />
        </section>
        <section id={"contact"}>
          <Contact />
        </section>
      </div>
    </div>
  );
}
