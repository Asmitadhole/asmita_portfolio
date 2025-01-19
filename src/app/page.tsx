
import Education from "./ui/about/Education";
import Experience from "./ui/experience/Experience";
import Hero from "./ui/home/Hero";
import SkillLists from "./ui/technologies/SkillLists";
import Projects from "./ui/projects/Projects";
import ContactForm from '@/app/ui/contact/ContactForm'
import AboutHero from '@/app/ui/about/AboutHero'
import CtaCertifications from "./ui/experience/CtaCertifications";
// import Certifications from "./(pages)/about/Certifications";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <AboutHero />
      <Experience />
      <SkillLists />
      <CtaCertifications />
      {/* <Certifications /> */}
      <Projects />
      <Education />
      <ContactForm />
    </div>
  );
}
