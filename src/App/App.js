import './App.css';

import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';
import Intro from '../Components/Intro/Intro';
import About from '../Components/About/About';
import Projects from '../Components/Projects/Projects';
import Services from '../Components/ServicesComponent/Services';
import Contact from '../Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
        <Intro />
        <About />
        <Projects />
        <Services />
        <Contact />
      <Footer />
    </div>
  );
};

export default App;
