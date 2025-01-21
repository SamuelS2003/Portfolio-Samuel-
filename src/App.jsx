import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/hero/Hero.jsx";
import Skills from "./components/skills/Skills.jsx";
import Projects from "./components/projects/Projects.jsx";
import Footer from "./components/footer/Footer.jsx";
import Accomplishment from "./components/accomplishment/Accomplishment.jsx";


function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Skills/> 
      <Accomplishment/>
      <Projects/>
      <Footer/>
    </>
  )
}

export default App
