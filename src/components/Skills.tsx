// export default function Skills() {
//   const skillCategories = [
//     {
//       category: 'Frontend',
//       skills: [
//         { name: 'React.js' },
//         { name: 'React Native' },
//         { name: 'JavaScript' },
//         { name: 'HTML/CSS' },
//         { name: 'Responsive Design' },
//       ],
//     },
//     {
//       category: 'Backend',
//       skills: [
//         { name: 'Node.js' },
//         { name: 'Express' },
//         { name: 'MongoDB' },
//         { name: 'Firebase' },
//         { name: 'REST APIs' },
//       ],
//     },
//     {
//       category: 'Tools & Others',
//       skills: [
//         { name: 'Git' },
//         { name: 'GitHub' },
//         { name: 'VS Code' },
//         { name: 'Postman' },
//         { name: 'Debugging' },
//       ],
//     },
//   ];

//   return (
//     <section id="skills" className="py-20 bg-gray-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
//           <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
//           <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
//             Technologies and tools I work with to build full-stack applications
//           </p>
//         </div>

//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {skillCategories.map((category, index) => (
//             <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
//               <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-2 border-blue-100">
//                 {category.category}
//               </h3>
//               <div className="flex flex-wrap gap-3">
//                 {category.skills.map((skill, skillIndex) => (
//                   <span
//                     key={skillIndex}
//                     className="px-4 py-2 bg-gradient-to-r from-blue-50 to-cyan-50 text-gray-700 rounded-full text-sm font-medium border border-blue-100 hover:scale-105 transition-transform cursor-default"
//                   >
//                     {skill.name}
//                   </span>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }


export default function Skills() {
  const skillCategories = [
    {
      category: 'Frontend',
      skills: [
        { name: 'React.js' },
        { name: 'React Native' },
        { name: 'JavaScript' },
        { name: 'HTML/CSS' },
        { name: 'Responsive Design' },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Node.js' },
        { name: 'Express' },
        { name: 'MongoDB' },
        { name: 'Firebase' },
        { name: 'REST APIs' },
      ],
    },
    {
      category: 'Tools & Others',
      skills: [
        { name: 'Git' },
        { name: 'GitHub' },
        { name: 'VS Code' },
        { name: 'Postman' },
        { name: 'Debugging' },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-100 mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Technologies and tools I work with to build full-stack applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow border border-gray-700">
              <h3 className="text-2xl font-bold text-gray-100 mb-6 border-b pb-2 border-gray-700">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-700 text-gray-200 rounded-full text-sm font-medium border border-gray-600 hover:scale-105 transition-transform cursor-default hover:bg-blue-600 hover:border-blue-500"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}