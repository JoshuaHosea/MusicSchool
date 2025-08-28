import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';

const EventsPage: React.FC = () => {
  const events = [
    { 
      title: "Spring Recital", 
      date: "2025-04-15", 
      time: "7:00 PM", 
      venue: "Main Concert Hall", 
      description: "Students showcase their progress in our semi-annual performance." 
    },
    { 
      title: "Jazz Night", 
      date: "2025-03-22", 
      time: "8:00 PM", 
      venue: "Jazz Lounge", 
      description: "Professional jazz performance with student participation opportunities." 
    },
    { 
      title: "Master Class: Guitar Techniques", 
      date: "2025-03-08", 
      time: "2:00 PM", 
      venue: "Studio A", 
      description: "Advanced workshop with visiting professional guitarist." 
    },
    { 
      title: "Open House", 
      date: "2025-02-28", 
      time: "10:00 AM", 
      venue: "All Facilities", 
      description: "Tour our facilities and meet our instructors. Free mini-lessons!" 
    },
  ];

  const performanceOpportunities = [
    {
      title: "Recitals",
      icon: "🎭",
      description: "Semi-annual recitals in our beautiful concert hall"
    },
    {
      title: "Competitions",
      icon: "🎪",
      description: "Regional and national music competition opportunities"
    },
    {
      title: "Community Events",
      icon: "🎵",
      description: "Performances at local festivals and charity events"
    }
  ];

  return (
    <div className="pt-16">
      <section className="py-20 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Upcoming Events</h1>
          <p className="text-xl">Join us for performances, workshops, and community gatherings that celebrate music.</p>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid gap-8">
            {events.map((event, index) => (
              <div key={index} className="bg-white rounded-xl shadow-xl p-8 hover:shadow-2xl transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-4">
                      <Calendar className="h-6 w-6 text-purple-600 mr-3" />
                      <span className="text-purple-600 font-semibold">{new Date(event.date).toLocaleDateString()}</span>
                      <Clock className="h-5 w-5 text-gray-500 ml-6 mr-2" />
                      <span className="text-gray-600">{event.time}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-3">{event.description}</p>
                    <div className="flex items-center text-gray-500">
                      <MapPin className="h-5 w-5 mr-2" />
                      <span>{event.venue}</span>
                    </div>
                  </div>
                  <div className="mt-6 md:mt-0 md:ml-8">
                    <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Performance Opportunities</h2>
          <p className="text-lg text-gray-600 mb-8">
            At Harmony Academy, we believe performance is essential to musical growth. Our students have multiple opportunities throughout the year to showcase their talents.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {performanceOpportunities.map((opportunity, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg">
                <div className="text-4xl mb-4">{opportunity.icon}</div>
                <h3 className="text-lg font-semibold mb-3">{opportunity.title}</h3>
                <p className="text-gray-600">{opportunity.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-white">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Stay Connected</h2>
              <p className="text-xl opacity-90">Never miss an event or opportunity</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold mb-6">Get Event Notifications</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-bold">📧</span>
                    </div>
                    <span>Email updates for new events</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-bold">📅</span>
                    </div>
                    <span>Calendar reminders</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center mr-4">
                      <span className="text-sm font-bold">🎟️</span>
                    </div>
                    <span>Early access to tickets</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-white/10 rounded-xl p-8 backdrop-blur-sm">
                <h3 className="text-xl font-bold mb-4">Event Statistics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Annual Recitals</span>
                    <span className="font-bold">2</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Monthly Workshops</span>
                    <span className="font-bold">4+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Community Performances</span>
                    <span className="font-bold">12+</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Average Attendance</span>
                    <span className="font-bold">150+</span>
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

export default EventsPage;