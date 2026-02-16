import { Mail, Phone, MapPin, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-100 mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            I'm currently looking for a junior developer position. 
            If you have an opportunity, I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* Email */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-600/10">
            <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Mail className="text-blue-400" size={24} />
            </div>
            <h3 className="text-gray-100 font-semibold mb-2">Email</h3>
            <a 
              href="mailto:zwelishasiwela2@gmail.com" 
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm break-all"
            >
              zwelishasiwela2@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-600/10">
            <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Phone className="text-blue-400" size={24} />
            </div>
            <h3 className="text-gray-100 font-semibold mb-2">Phone</h3>
            <a 
              href="tel:0797760201" 
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              079 776 0201
            </a>
          </div>

          {/* GitHub */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-600/10">
            <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Github className="text-blue-400" size={24} />
            </div>
            <h3 className="text-gray-100 font-semibold mb-2">GitHub</h3>
            <a 
              href="https://github.com/zwelisha19" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors"
            >
              @zwelisha19
            </a>
          </div>

          {/* LinkedIn */}
          <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-600 transition-all hover:shadow-lg hover:shadow-blue-600/10">
            <div className="bg-blue-600/20 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
              <Linkedin className="text-blue-400" size={24} />
            </div>
            <h3 className="text-gray-100 font-semibold mb-2">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/thabang-siwela-9008a7252" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition-colors text-sm break-all"
            >
              Thabang Siwela
            </a>
          </div>
        </div>

        {/* Location - optional addition */}
        <div className="text-center mt-12">
          <p className="text-gray-500 flex items-center justify-center gap-2">
            <MapPin size={16} className="text-blue-400" />
            <span>South Africa • Available for remote opportunities</span>
          </p>
        </div>
      </div>
    </section>
  );
}