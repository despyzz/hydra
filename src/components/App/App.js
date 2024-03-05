import './App.scss';
import Header from '../Header'
import {
  HeroSection,
  AboutSection,
  ServicesSection,
  TechSection,
  ProcessSection,
  OptInSection
} from "../Sections";
import Footer from "../Footer";

function App() {
  return (
    <div className="app">
      <div className="container">
        <Header/>
        <main>
          <HeroSection/>
          <AboutSection/>
          <ServicesSection/>
          <TechSection/>
          <ProcessSection/>
          <OptInSection/>
        </main>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
