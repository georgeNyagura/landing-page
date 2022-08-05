import './App.css';
import Features from './components/Sections/Features/Features';
import Hero from './components/Sections/Hero/Hero';
import Navbar from './components/Sections/Navbar/Navbar';
import Pricing from './components/Sections/Pricing/Pricing';
import Stats from './components/Sections/Stats/Stats';
import ContactForm from './components/Sections/Network/ContactForm';

function App() {
  return (
    <div className="w-full App">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <ContactForm />
    </div>
  );
}

export default App;
