import React from 'react';
import { Award, Users, Star } from 'lucide-react';

const InstructorsPage: React.FC = () => {
  const instructors = [
    { 
      name: "Maria Rodriguez", 
      instrument: "Piano", 
      experience: "15 years", 
      image: "🎹", 
      specialty: "Classical & Jazz" 
    },
    { 
      name: "Jake Thompson", 
      instrument: "Guitar", 
      experience: "12 years", 
      image: "🎸", 
      specialty: "Rock & Blues" 
    },
    { 
      name: "Sophia Lee", 
      instrument: "Vocals", 
      experience: "10 years", 
      image: "🎤", 
      specialty: "Pop & Musical Theater" 
    },
    { 
      name: "David Kim", 
      instrument: "Drums", 
      experience: "18 years", 
      image: "🥁", 
      specialty: "All Genres" 
    },
  ];

  const whyDifferent = [
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "Professional Experience",
      description: "All our instructors are working musicians with extensive performance and teaching backgrounds.",
      bgColor: "bg-purple-500"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Personalized Approach",
      description: "Every lesson is tailored to your individual learning style, goals, and musical interests.",
      bgColor: "bg-blue-500"
    },
    {
      icon: <Star className="h-8 w-8 text-white" />,
      title: "Ongoing Education",
      description: "Our team regularly attends workshops and masterclasses to stay current with best practices.",
      bgColor: "bg-pink-500"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Instructors</h1>
          <p className="text-xl">Learn from passionate professionals who are dedicated to your musical growth.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {instructors.map((instructor, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl p-6 text-center hover:transform hover:scale-105 transition-all">
                <div className="text-6xl mb-4">{instructor.image}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{instructor.name}</h3>
                <div className="text-purple-600 font-semibold mb-2">{instructor.instrument}</div>
                <div className="text-sm text-gray-600 mb-3">{instructor.experience} Experience</div>
                <div className="text-sm text-gray-700 bg-gray-50 rounded-lg p-3">
                  <strong>Specialty:</strong> {instructor.specialty}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-blue-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Why Our Instructors Are Different</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {whyDifferent.map((item, index) => (
              <div key={index}>
                <div className={`w-16 h-16 ${item.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching Philosophy Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-white rounded-2xl shadow-xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Teaching Philosophy</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We believe that music education should be inspiring, inclusive, and individually tailored to each student's unique journey.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Student-Centered Learning</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm font-bold">1</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Individual Assessment</h4>
                      <p className="text-gray-600">We start by understanding your current level, learning style, and musical goals.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm font-bold">2</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Customized Curriculum</h4>
                      <p className="text-gray-600">Every lesson plan is tailored to your interests and pace of learning.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1 flex-shrink-0">
                      <span className="text-white text-sm font-bold">3</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Regular Progress Reviews</h4>
                      <p className="text-gray-600">We celebrate achievements and adjust our approach as you grow.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-xl p-8">
                <div className="text-center">
                  <div className="text-5xl mb-6">🎓</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Qualified & Certified</h3>
                  <p className="text-gray-700 mb-6">
                    All our instructors hold advanced degrees in music and maintain active performance careers.
                  </p>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600 mb-1">100%</div>
                    <div className="text-sm text-gray-600">Certified Instructors</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstructorsPage;