import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800 shadow-lg z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center items-center h-16">
          {/* Navigation Links - Centered */}
          <div className="hidden md:flex space-x-8">
            <button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-gray-300 hover:text-blue-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className="text-gray-300 hover:text-blue-400 transition-colors">
              Contact
            </button>
          </div>

          {/* Mobile menu button - positioned absolutely to keep centering */}
          <button
            className="md:hidden absolute right-4 text-gray-300 hover:text-blue-400"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-gray-800">
            <button onClick={() => scrollToSection('home')} className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('skills')} className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors">
              Skills
            </button>
            <button onClick={() => scrollToSection('projects')} className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors">
              Projects
            </button>
            <button onClick={() => scrollToSection('experience')} className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors">
              Experience
            </button>
            <button onClick={() => scrollToSection('contact')} className="block w-full text-left px-4 py-2 text-gray-300 hover:text-blue-400 hover:bg-gray-800 transition-colors">
              Contact
            </button>
          </div>
        )}
      </nav>
    </header>
  );
}