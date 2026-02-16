import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'DriveNow - Car Rental System',
      description: 'A full-stack car rental application where users can browse available vehicles, filter by criteria, and make bookings. Features an admin dashboard for managing vehicles and bookings.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
      github: 'https://github.com/Zwelisha19/car-rental-frontend',
      live: 'https://car-rental-sand-seven.vercel.app/',
      adminLive: 'https://car-rental-sand-seven.vercel.app/admin/login',
      features: [
        'Browse vehicles with filtering',
        'Booking system',
        'Admin dashboard',
        'JWT authentication'
      ]
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Featured Project</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Here's my main project. Check back soon for more!
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full lg:w-3/4">
            <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-600/10 transition-all border border-gray-700">
              <img
                src={projects[0].image}
                alt={projects[0].title}
                className="w-full h-64 object-cover"
              />
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-100 mb-3">{projects[0].title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{projects[0].description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Key Features</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {projects[0].features.map((feature, idx) => (
                      <li key={idx} className="text-gray-400 flex items-center">
                        <span className="text-blue-400 mr-2">•</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {projects[0].technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-gray-700 text-gray-300 text-sm rounded-full border border-gray-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Admin Credentials */}
                <div className="mb-6 p-4 bg-gray-700/50 rounded-lg border border-gray-600">
                  <p className="text-sm text-gray-300 mb-1">
                    <span className="font-semibold text-blue-400">Admin Demo:</span> zwelishat@gmail.com
                  </p>
                  <p className="text-sm text-gray-300">
                    <span className="font-semibold text-blue-400">Password:</span> P@ssword1
                  </p>
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={projects[0].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-gray-700 text-gray-200 rounded-lg hover:bg-gray-600 transition-colors"
                  >
                    <Github size={20} className="mr-2" />
                    Frontend Code
                  </a>
                  <a
                    href={projects[0].live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Live Demo (Customer)
                  </a>
                  <a
                    href={projects[0].adminLive}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
                  >
                    <ExternalLink size={20} className="mr-2" />
                    Admin Dashboard
                  </a>
                </div>
              </div>
            </div>

            {/* Coming Soon Message */}
            <div className="text-center mt-12">
              <p className="text-gray-500">
                🚀 More projects coming soon: Employee Management System & Task Tracker App
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}