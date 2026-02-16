import { Code2, Lightbulb, Users, Rocket } from 'lucide-react';
import profileImage from '../assets/images/zwelisha.jpeg';

export default function About() {
  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, well-documented React and Node.js applications',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Problem Solver',
      description: 'Debugging and optimizing performance for better user experience',
    },
    {
      icon: <Users size={32} />,
      title: 'Team Player',
      description: 'Collaborating effectively on projects using Git',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Fast Learner',
      description: 'Passionate about learning new technologies through hands-on projects',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src={profileImage}
              alt="Thabang Zwelisha Siwela"
              className="rounded-lg shadow-xl w-full max-w-md h-auto object-cover mx-auto border-4 border-gray-700"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-100 mb-6">
              Mobile and Web Developer
            </h3>
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                I'm a motivated software development intern with experience in building full-stack 
                applications. I recently completed my National Diploma in IT at Tshwane University of Technology 
                and worked as an intern at Codetribe.
              </p>
              <p>
                My experience includes developing responsive mobile and web applications, debugging 
                issues, and optimizing performance. I enjoy collaborating with teams and documenting 
                clean, maintainable code that solves real problems.
              </p>
              <p>
                I'm passionate about learning new technologies through hands-on projects and collaboration. 
                Currently looking for opportunities to contribute to innovative projects and grow as a 
                full-stack developer.
              </p>
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-gray-800 to-gray-700 rounded-lg hover:shadow-xl hover:shadow-blue-600/10 transition-all hover:scale-105 border border-gray-700"
            >
              <div className="text-blue-400 mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-gray-100 mb-2">{item.title}</h4>
              <p className="text-gray-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}