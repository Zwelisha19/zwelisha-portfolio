import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Senior Frontend Developer',
      organization: 'TechCorp Inc.',
      period: '2022 - Present',
      description: 'Leading the frontend development team, architecting scalable React applications, and mentoring junior developers.',
      achievements: [
        'Improved application performance by 40%',
        'Led migration to TypeScript',
        'Implemented CI/CD pipeline',
      ],
    },
    {
      type: 'work',
      title: 'Full Stack Developer',
      organization: 'StartupXYZ',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using React, Node.js, and various databases.',
      achievements: [
        'Built 5+ production applications',
        'Reduced API response time by 60%',
        'Introduced testing culture',
      ],
    },
    {
      type: 'work',
      title: 'Junior Developer',
      organization: 'WebSolutions Co.',
      period: '2019 - 2020',
      description: 'Started career building responsive websites and learning modern web development practices.',
      achievements: [
        'Developed 10+ client websites',
        'Learned React and modern JavaScript',
        'Collaborated in agile teams',
      ],
    },
    {
      type: 'education',
      title: 'Bachelor of Computer Science',
      organization: 'University of Technology',
      period: '2015 - 2019',
      description: 'Graduated with honors, focusing on software engineering and web technologies.',
      achievements: [
        'GPA: 3.8/4.0',
        'Dean\'s List',
        'Led student tech club',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`relative mb-12 ${
                index % 2 === 0 ? 'md:text-right md:pr-1/2' : 'md:text-left md:pl-1/2'
              }`}
            >
              <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-4">
                    <div
                      className={`p-2 rounded-full ${
                        exp.type === 'work' ? 'bg-blue-100 text-blue-600' : 'bg-green-100 text-green-600'
                      }`}
                    >
                      {exp.type === 'work' ? <Briefcase size={24} /> : <GraduationCap size={24} />}
                    </div>
                    <div className="ml-4">
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.organization}</p>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500 mb-3">{exp.period}</p>
                  <p className="text-gray-600 mb-4">{exp.description}</p>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-gray-600 flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-8">
                <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
