import Navbar from "../components/layout/Navbar";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Stats from "../components/sections/stats";
import Academics from "../components/sections/Academics";
import BeyondAcademics from "../components/sections/BeyondAcademics";
import Campus from "../components/sections/Campus";
import Testimonials from "../components/sections/Testimonials";
import Admissions from "../components/sections/Admissions";
import Footer from "../components/layout/Footer";
import ScrollProgress from "../components/animation/ScrollProgress";
import CustomCursor from "../components/animation/CustomCursor";

export default function Home() {
  return (
    <>
      <ScrollProgress />
      <CustomCursor />
      <Navbar />
      


      <main>
        <Hero />
        <About />
        <Stats />
        <Academics />
        <BeyondAcademics />
        <Campus />
        <Testimonials />
        <Admissions />
      </main>

      <Footer />
    </>
  );
}