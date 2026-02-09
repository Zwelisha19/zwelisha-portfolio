import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-cyan-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
            Hi, I'm <span className="text-blue-600">Alex Johnson</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8">
            Full Stack Developer | React Specialist | Open Source Enthusiast
          </p>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto mb-12">
            I craft elegant solutions to complex problems and build user-centric applications
            that make a difference. Passionate about clean code and continuous learning.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-900 text-white rounded-full hover:bg-gray-700 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:alex@example.com"
              className="p-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-500 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg"
          >
            Get In Touch
          </button>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={32} className="text-gray-400" />
        </button>
      </div>
    </section>
  );
}
