import React from 'react';
import Navbar from './components/Navbar';
import HeroContent from './components/HeroContent';
import Footer from './components/Footer';
import BackgroundVideo from './components/BackgroundVideo';

const App: React.FC = () => {
  const videoUrl = "/video/mp_.mp4";

  return (
    <main className="min-h-screen bg-black overflow-hidden flex flex-col relative">
      {/* Background Video */}
      <BackgroundVideo src={videoUrl} />

      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroContent />

      {/* Social Icons Footer */}
      <Footer />
    </main>
  );
};

export default App;
