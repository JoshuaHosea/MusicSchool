import React from 'react';
import { Music, Users, Award } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Music className="h-8 w-8 text-white" />,
      title: "Excellence",
      description: "We maintain the highest standards in music education and performance.",
      bgColor: "bg-blue-500"
    },
    {
      icon: <Users className="h-8 w-8 text-white" />,
      title: "Community",
      description: "We foster a supportive environment where every student can thrive.",
      bgColor: "bg-purple-500"
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: "Growth",
      description: "We celebrate every milestone in each student's musical journey.",
      bgColor: "bg-pink-500"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Harmony Academy</h1>
          <p className="text-xl leading-relaxed">
            For over 20 years, we have been nurturing musical talent and inspiring creativity in students of all ages.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                Founded in 2003 by professional musicians Maria and Carlos Rodriguez, Harmony Academy began as a small studio with a big dream: to make quality music education accessible to everyone.
              </p>
              <p className="text-gray-600 mb-4">
                Today, we have grown to serve over 500 students annually, with a team of 12 professional instructors and state-of-the-art facilities. Our graduates have gone on to perform at Carnegie Hall, Berklee College of Music, and stages around the world.
              </p>
              <p className="text-gray-600">
                But our greatest pride remains in every student who discovers the joy of music, whether they are 5 or 95 years old.
              </p>
            </div>
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="text-6xl mb-4">🎵</div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
                <p className="text-gray-700">
                  To inspire, educate, and empower students through the transformative power of music, creating a lifelong love of learning and artistic expression.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
                <div className={`w-16 h-16 ${value.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Stats Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Impact in Numbers</h2>
              <p className="text-xl opacity-90">Two decades of musical excellence</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold mb-2">500+</div>
                <div className="text-lg opacity-90">Students Annually</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">12</div>
                <div className="text-lg opacity-90">Expert Instructors</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">95%</div>
                <div className="text-lg opacity-90">Success Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">20+</div>
                <div className="text-lg opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;