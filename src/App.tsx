import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import HowItWorks from './components/HowItWorks';
import TargetAudience from './components/TargetAudience';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <TargetAudience />
      <CallToAction />
      <Footer />
    </div>
  );
}

export default App;