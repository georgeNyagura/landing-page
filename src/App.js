import './App.css';
import Features from './components/Features/Features';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import Pricing from './components/Pricing/Pricing';
import Stats from './components/Stats/Stats';
import Network from './components/Sections/Network/Network';

function App() {
  return (
    <div className="w-full App">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <Pricing />
      <Network />
    </div>
  );
}

export default App;
