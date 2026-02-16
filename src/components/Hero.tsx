import { Github, Linkedin, Mail, ArrowDown, Download } from 'lucide-react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-blue-900 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-100 mb-6">
            Hi, I'm <span className="text-blue-400">Zwelisha Siwela</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-300 mb-8">
            Mobile & Web Developer | Full-Stack | React | React Native 
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
            Building mobile and web apps with React, Node.js, and MongoDB. 
            Recent IT graduate from TUT with a passion for clean code 
            and continuous learning.
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <a
              href="https://github.com/zwelisha19"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-gray-700 text-white rounded-full hover:bg-gray-600 transition-all hover:scale-110"
            >
              <Github size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/thabang-siwela-9008a7252"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-blue-600 text-white rounded-full hover:bg-blue-500 transition-all hover:scale-110"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:zwelishasiwela2@gmail.com"
              className="p-3 bg-cyan-600 text-white rounded-full hover:bg-cyan-500 transition-all hover:scale-110"
            >
              <Mail size={24} />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => scrollToSection('contact')}
              className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all hover:shadow-lg hover:shadow-blue-600/20"
            >
              Get In Touch
            </button>
            
            <a
              href="/cv/zwelisha.pdf"
              download
              className="px-8 py-4 bg-transparent text-blue-400 border-2 border-blue-600 rounded-lg font-semibold hover:bg-blue-600/10 transition-all hover:shadow-lg hover:shadow-blue-600/20 inline-flex items-center justify-center gap-2"
            >
              <Download size={20} />
              Download CV
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        >
          <ArrowDown size={32} className="text-gray-600" />
        </button>
      </div>
    </section>
  );
}