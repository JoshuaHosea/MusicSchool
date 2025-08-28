import React from 'react';

interface CoursesPageProps {
  onEnrollment: (courseName: string) => void;
}

const CoursesPage: React.FC<CoursesPageProps> = ({ onEnrollment }) => {
  const courses = [
    { 
      name: "Private Lessons", 
      price: "$80/hour", 
      features: ["One-on-one instruction", "Flexible scheduling", "All skill levels", "Personalized curriculum"], 
      popular: false 
    },
    { 
      name: "Group Classes", 
      price: "$120/month", 
      features: ["Small class sizes (4-6 students)", "Weekly 90-min sessions", "Ensemble playing", "Performance opportunities"], 
      popular: true 
    },
    { 
      name: "Master Classes", 
      price: "$200/session", 
      features: ["Professional guest instructors", "Advanced techniques", "Recording opportunities", "Industry insights"], 
      popular: false 
    },
  ];

  const instruments = [
    { name: 'Piano', icon: '🎹', description: 'Classical to Jazz' },
    { name: 'Guitar', icon: '🎸', description: 'Acoustic & Electric' },
    { name: 'Vocals', icon: '🎤', description: 'All Genres' },
    { name: 'Drums', icon: '🥁', description: 'Rock to Latin' },
    { name: 'Violin', icon: '🎻', description: 'Classical & Modern' },
    { name: 'Bass', icon: '🎸', description: 'Electric & Upright' },
    { name: 'Trumpet', icon: '🎺', description: 'Jazz & Classical' },
    { name: 'Saxophone', icon: '🎷', description: 'All Styles' }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Courses</h1>
          <p className="text-xl">Choose from our variety of programs designed for every skill level and musical interest.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-xl p-8 relative ${course.popular ? 'ring-4 ring-purple-500' : ''}`}>
                {course.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-purple-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.name}</h3>
                  <div className="text-3xl font-bold text-purple-600 mb-4">{course.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button 
                  onClick={() => onEnrollment(course.name)}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                >
                  Enroll Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instruments Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Instruments We Teach</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {instruments.map((instrument, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg hover:shadow-xl transition-all hover:transform hover:scale-105">
                <div className="text-4xl mb-3">{instrument.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{instrument.name}</h3>
                <p className="text-sm text-gray-600">{instrument.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CoursesPage;