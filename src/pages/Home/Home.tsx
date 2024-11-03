// import Experience from "../../components/Experience/Experience";
import Hero from "../../components/Hero/Hero";
import FloatingDock from "../../components/FloatingDock/FloatingDock";
import { ToolSlider } from "../../components/ToolSlider/ToolSlider";
import TechSlider from "../../components/TechSlider/TechSlider";
import { TimelineExperience } from "../../components/TimelineExperience/TimelineExperience";
import "./Home.css";
import Projects from "../../components/ProjectsBento/ProjectsBento";
import DevelopmentModal from "../../components/DevelopmentModal/DevelopmentModal";
import { AsideLinks } from "../../components/AsideLinks/AsideLinks";
import Footer from "../../components/Footer/Footer";


export default function Home() {
  return (
    <section className="homePage-container">
      <Hero />
      <TechSlider />
      <ToolSlider />
      <FloatingDock />
      <TimelineExperience />
      <Projects />
      <DevelopmentModal />
      <AsideLinks />
      <Footer />
    </section>
  );
}
