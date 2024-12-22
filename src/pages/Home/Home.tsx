import "./Home.css";

import Hero from "../../components/Hero/Hero";
// import Tech from "../../components/Tech/Tech";
import TechSlider from "../../components/TechSlider/TechSlider";
import { ToolSlider } from "../../components/ToolSlider/ToolSlider";
import FloatingDock from "../../components/FloatingDock/FloatingDock";
import { TimelineExperience } from "../../components/TimelineExperience/TimelineExperience";
import Projects from "../../components/ProjectsBento/ProjectsBento";
import Footer from "../../components/Footer/Footer";


export default function Home() {
  return (
    <section className="homePage-container">
      <Hero />
      {/* <Tech/> */}
      <TechSlider />
      <ToolSlider />
      <FloatingDock />
      <TimelineExperience />
      <Projects />
      <Footer />
    </section>
  );
}
