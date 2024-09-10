// import Experience from "../../components/Experience/Experience";
import FloatingDock from "../../components/FloatingDock/FloatingDock";
import Hero from "../../components/Hero/Hero";
import TechSlider from "../../components/TechSlider/TechSlider";
import { TimelineExperience } from "../../components/Timeline/TimelineExperience";
import { ToolSlider } from "../../components/ToolSlider/ToolSlider";
import "./Home.css";


export default function Home() {
  return (
    <section className="homePage-container">
      <Hero />
      <TechSlider />
      <ToolSlider />
      <FloatingDock />
      <TimelineExperience />
      {/* <Experience /> */}
    </section>
  );
}
