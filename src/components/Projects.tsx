// @ts-nocheck
import { ExternalLink, Github } from 'lucide-react';
import drivenowImg from '../assets/images/drivenow.png';
import employeeImg from '../assets/images/employee.png';

export default function Projects() {
  const projects = [
    {
      title: 'DriveNow - Car Rental System',
      description: 'A full-stack car rental application where users can browse available vehicles, filter by criteria, and make bookings. Features an admin dashboard for managing vehicles and bookings.',
      image: drivenowImg,
      technologies: ['React.js', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'JWT'],
      github: 'https://github.com/Zwelisha19/car-rental-frontend',
      live: 'https://car-rental-sand-seven.vercel.app/',
      adminLive: 'https://car-rental-sand-seven.vercel.app/admin/login',
      features: [
        'Browse vehicles with filtering',
        'Booking system',
        'Admin dashboard',
        'JWT authentication'
      ],
      adminEmail: 'zwelishat@gmail.com',
      adminPassword: 'P@ssword1',
      links: [
        { label: 'Frontend Code', url: 'https://github.com/Zwelisha19/car-rental-frontend', style: 'github' },
        { label: 'Live Demo (Customer)', url: 'https://car-rental-sand-seven.vercel.app/', style: 'primary' },
        { label: 'Admin Dashboard', url: 'https://car-rental-sand-seven.vercel.app/admin/login', style: 'admin' },
      ],
    },
    {
      title: 'Employee Management System',
      description: 'A full-stack employee management system with role-based authentication. Admins manage employees, track daily and monthly attendance, approve leave requests, upload profile images, and generate department and attendance reports from a single dashboard.',
     image: employeeImg,
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'MySQL', 'Sequelize', 'JWT'],
      features: [
        'Employee CRUD operations',
        'Daily & monthly attendance tracking',
        'Leave request approval workflow',
        'Department management',
        'Reports & analytics',
        'Profile image uploads',
        'JWT authentication & role-based access',
        'Email notifications via Brevo'
      ],
      adminEmail: 'zwelishat@gmail.com',
      adminPassword: 'P@ssword1',
      links: [
        { label: 'Frontend Code', url: 'https://github.com/Zwelisha19/Employee-Management-System-Frontend.git', style: 'github' },
        { label: 'Backend Code', url: 'https://github.com/Zwelisha19/Employee-Management-System-Api.git', style: 'github' },
        { label: 'Live Demo', url: 'https://employee-management-system-frontend-six.vercel.app/', style: 'primary' },
      ],
    },
  ];

  const linkStyles = {
    github: 'bg-gray-700 text-gray-200 hover:bg-gray-600',
    primary: 'bg-blue-600 text-white hover:bg-blue-700',
    admin: 'bg-purple-600 text-white hover:bg-purple-700',
  };

  return (
    <section id="projects" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A selection of full-stack applications I've built end to end.
          </p>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="w-full lg:w-3/4 mx-auto"
            >
              <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl hover:shadow-blue-600/10 transition-all border border-gray-700">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-gray-100 mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>

                  {/* Features */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
                      Key Features
                    </h4>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-400 flex items-center">
                          <span className="text-blue-400 mr-2">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-blue-400 uppercase tracking-wider mb-2">
                      Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
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
                      <span className="font-semibold text-blue-400">Admin Demo:</span> {project.adminEmail}
                    </p>
                    <p className="text-sm text-gray-300">
                      <span className="font-semibold text-blue-400">Password:</span> {project.adminPassword}
                    </p>
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-4">
                    {project.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center px-4 py-2 rounded-lg transition-colors ${linkStyles[link.style]}`}
                      >
                        {link.style === 'github' ? (
                          <Github size={20} className="mr-2" />
                        ) : (
                          <ExternalLink size={20} className="mr-2" />
                        )}
                        {link.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Coming Soon Message */}
        <div className="text-center mt-16">
          <p className="text-gray-500">
            🚀 More projects coming soon: Task Tracker App
          </p>
        </div>
      </div>
    </section>
  );
}