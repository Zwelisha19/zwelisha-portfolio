import { Code2, Lightbulb, Users, Rocket } from 'lucide-react';

export default function About() {
  const highlights = [
    {
      icon: <Code2 size={32} />,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code',
    },
    {
      icon: <Lightbulb size={32} />,
      title: 'Problem Solver',
      description: 'Tackling complex challenges with creative solutions',
    },
    {
      icon: <Users size={32} />,
      title: 'Team Player',
      description: 'Collaborating effectively in agile environments',
    },
    {
      icon: <Rocket size={32} />,
      title: 'Fast Learner',
      description: 'Constantly exploring new technologies and best practices',
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Developer workspace"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Crafting Digital Experiences
            </h3>
            <p className="text-gray-600 mb-4 leading-relaxed">
              With over 5 years of experience in software development, I specialize in building
              modern web applications using React, TypeScript, and Node.js. My journey in tech
              started with a curiosity about how things work, which evolved into a passion for
              creating intuitive and performant applications.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              I believe in writing code that not only works but is also elegant, maintainable,
              and scalable. Whether it's optimizing performance, implementing complex features,
              or mentoring junior developers, I approach every challenge with enthusiasm and dedication.
            </p>
            <p className="text-gray-600 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects,
              writing technical articles, or exploring the latest trends in web development.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-lg hover:shadow-lg transition-all hover:scale-105"
            >
              <div className="text-blue-600 mb-4">{item.icon}</div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
