import "./Home.css";

import NavBar from "../../components/NavBar/NavBar";
import Hero from "../../components/Hero/Hero";
import Tech from "../../components/Tech/Tech";
// import TechSlider from "../../components/TechSlider/TechSlider";
import ToolSlider from "../../components/ToolSlider/ToolSlider";
import FloatingDock from "../../components/FloatingDock/FloatingDock";
import TimelineExperience from "../../components/TimelineExperience/TimelineExperience";
import Projects from "../../components/ProjectsBento/ProjectsBento";
import Comments from "../../components/Comments/Comments";
import Footer from "../../components/Footer/Footer";

export default function Home() {
  return (
    <section className="homePage-container">
      <NavBar />
      <Hero />
      <Tech />
      {/* <TechSlider /> */}
      <ToolSlider />
      <FloatingDock />
      <TimelineExperience />
      <Projects />
      <Comments />
      <Footer />
    </section>
  );
}
