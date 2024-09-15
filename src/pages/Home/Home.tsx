// import Experience from "../../components/Experience/Experience";
import Hero from "../../components/Hero/Hero";
import FloatingDock from "../../components/FloatingDock/FloatingDock";
import { ToolSlider } from "../../components/ToolSlider/ToolSlider";
import TechSlider from "../../components/TechSlider/TechSlider";
import { TimelineExperience } from "../../components/TimelineExperience/TimelineExperience";
import "./Home.css";
import Projects from "../../components/ProjectsBento/ProjectsBento";


export default function Home() {
  return (
    <section className="homePage-container">
      <Hero />
      <TechSlider />
      <ToolSlider />
      <FloatingDock />
      <TimelineExperience />
      <Projects />
    </section>
  );
}
