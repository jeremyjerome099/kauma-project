import './App.scss';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Courses from './components/courses/Courses';
import OurTeam from './components/our team/OurTeam';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div><section id="Homepage">
        <Navbar />
        <Hero />
      </section><section id="About">
        <About />
      </section>
      <section id="Contact">
        <Contact />
      </section>
      <section id="Courses">
        <Courses />
      </section>
      <section id="Our Team">
        <OurTeam />
      </section>
       
    </div>
  )
}

export default App;
