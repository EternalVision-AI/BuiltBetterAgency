import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import Process from './components/Process';
import FAQ from './components/FAQ';
import About from './components/About';
// import OpportunityDetails from './components/OpportunityDetails';
import Testimonials from './components/Testimonials';
// import CallToAction from './components/CallToAction';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Services />
      {/* <OpportunityDetails /> */}
      <Testimonials />
      <About />
      <Process />
      <FAQ />
      {/* <CallToAction /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;