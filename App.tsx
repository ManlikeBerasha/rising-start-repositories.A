
import React, { useState } from 'react';
import { ErrorBoundary } from './components/ErrorBoundary';
import { Navigation } from './components/Navigation';
import { Hero } from './components/Hero';
import { Services3D } from './components/Services3D';
import { ContactModal } from './components/ContactModal';
import { FloatingActionButton } from './components/FloatingActionButton';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-brand-blue font-sans text-white antialiased">
        <Navigation onContactClick={() => setIsModalOpen(true)} />
        <main className="relative overflow-hidden">
          <section id="hero">
            <Hero onJoinClick={() => setIsModalOpen(true)} />
          </section>
          <div className="relative">
              <div
                  style={{ clipPath: 'polygon(0 0, 100% 25%, 100% 100%, 0 100%)' }}
                  className="absolute -top-24 md:-top-32 lg:-top-48 xl:-top-64 left-0 w-full h-96 bg-gradient-to-r from-brand-gold via-yellow-400 to-brand-gold z-0"
              ></div>
              <div className="relative z-10">
                  <section id="services">
                    <Services3D />
                  </section>
              </div>
          </div>
        </main>
        <ContactModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        <FloatingActionButton onClick={() => setIsModalOpen(true)} />
      </div>
    </ErrorBoundary>
  );
}

export default App;
