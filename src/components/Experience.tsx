import { Briefcase, GraduationCap } from 'lucide-react';

export default function Experience() {
  const experiences = [
    {
      type: 'work',
      title: 'Software Developer Intern',
      organization: 'Moepi Publishing',
      period: 'May 2025 – Present',
      description: 'Currently gaining hands-on experience in software development through work-integrated learning.',
      achievements: [
        'Working on full-stack development projects',
        'Collaborating with development team on real-world applications',
        'Applying React, Node.js, and other modern technologies',
        'Learning industry best practices and development workflows',
      ],
    },
   {
  type: 'work',
  title: 'Mobile and App Developer Intern (Work-Integrated Learning)',
  organization: 'Codetribe',
  period: 'July 2024 – March 2025',
  description: 'Work-integrated learning placement as part of TUT National Diploma program.',
  achievements: [
    'Developed mobile applications using React, React Native, and Node.js',
    'Debugged and optimized apps for performance and user experience',
    'Managed code with Git and contributed to collaborative projects',
    'Documented technical specifications and user guides for future development',
  ],
},
    {
      type: 'education',
      title: 'National Diploma in Information Technology',
      organization: 'Tshwane University of Technology',
      period: 'Feb 2018 – March 2025',
      description: 'Completed comprehensive IT education with focus on software development.',
      achievements: [
        'Relevant Courses: Software Development',
        'Built full-stack applications as part of coursework',
        'Graduated with practical experience in modern web technologies',
      ],
    },
    {
      type: 'education',
      title: 'Matric / High School',
      organization: 'Ngaka Maseko Secondary School',
      period: '2014 – 2016',
      description: 'Completed secondary education.',
      achievements: [
        'National Senior Certificate (Matric)',
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Experience & Education</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-600 mt-4">My journey in tech so far</p>
        </div>

        <div className="relative">
          {/* Timeline line */}
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
                      className={`p-3 rounded-full ${
                        exp.type === 'work' 
                          ? 'bg-blue-100 text-blue-600' 
                          : 'bg-green-100 text-green-600'
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
                        <span className="text-blue-600 mr-2 font-bold">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Timeline dot */}
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