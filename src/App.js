import './App.css';
import Header from './Header';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';
import { Routes, Route } from 'react-router-dom'
function App() {
  return (
    <div>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>

  );
    
}

export default App;
