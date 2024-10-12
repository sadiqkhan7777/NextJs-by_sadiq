// pages.tsx (or Home.tsx)
import Navbar from '../components/Navbar';
import ContactMe from '../components/ContactMe';
import Education from '../components/Education';
import WorkExperience from '../components/WorkExperience';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Intro from '../components/Intro';
import ProjectVideos from '../components/ProjectVideos';
 
export default function Home() {
  return (
    <div className="bg-cover bg-center min-h-screen scroll-smooth">
      <Navbar />
      <section id="intro">
        <Intro />
      </section>
      <section id="education">
        <Education />
      </section>
      <section id="work-experience">
        <WorkExperience />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="project-videos">
        <ProjectVideos />
      </section>
      <section id="contact-me">
        <ContactMe />
      </section>
    </div>
  );
}
