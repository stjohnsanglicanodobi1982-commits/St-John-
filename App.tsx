import { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Give } from './components/Give';
import { Contact } from './components/Contact';
import { Chatbot } from './components/Chatbot';
import { Footer } from './components/Footer';
function Gallery() {
  return (
    <section id="gallery" className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Youths Anniversary 2025</h2>
        
        <div className="flex flex-wrap gap-6 justify-center">

          <div className="text-center">
            <img src="/Images/group with matron.jpg" alt="Group with Matron" className="w-80 rounded-lg shadow-md" />
            <p className="mt-2 font-semibold">Group Photo with Matron</p>
          </div>

          <div className="text-center">
            <img src="/Images/group with vicar.jpg" alt="Group with Vicar" className="w-80 rounded-lg shadow-md" />
            <p className="mt-2 font-semibold">Group Photo with Vicar</p>
          </div>

          <div className="text-center">
            <img src="/Images/vicar_wife.jpg" alt="Vicar's Wife" className="w-80 rounded-lg shadow-md" />
            <p className="mt-2 font-semibold">Mama Vicar</p>
          </div>

        </div>
      </div>
    </section>
  )
}
export function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'give', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleJoinClick = () => {
    setActiveSection('services');
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-800 antialiased selection:bg-anglican-gold selection:text-anglican-blue-dark">
      {/* Navigation */}
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Main Page Sections */}
      <main className="flex-grow">
        <Hero onJoinClick={handleJoinClick} />
        <About />
        <Services />
        <Gallery />
        <Give />
        <Contact />
      </main>

      {/* Floating Chatbot Assistant Widget */}
      <Chatbot />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
