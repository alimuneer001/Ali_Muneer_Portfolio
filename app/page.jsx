import FloatingContact from "../components/FloatingContact";
import ToastContainer from "../components/ToastContainer";
import Navigation from "../components/Navigation";
import MobileDrawer from "../components/MobileDrawer";
import Hero from "../components/Hero";
import About from "../components/About";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Showcase from "../components/Showcase";
import Skills from "../components/Skills";
import Services from "../components/Services";
import Contact from "../components/Contact";
import ProjectModal from "../components/ProjectModal";
import ContactModal from "../components/ContactModal";
import Script from "next/script";

export default function Page() {
  return (
    <>
      <ToastContainer />
      <Navigation />
      <MobileDrawer />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Showcase />
      <Skills />
      <Services />
      <Contact />
      <FloatingContact />
      <ProjectModal />
      <ContactModal />
      <Script src="/scripts/portfolio-runtime.js" strategy="afterInteractive" />
    </>
  );
}
