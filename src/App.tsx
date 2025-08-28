import React, { useState } from 'react';
import Navigation from './components/Navigation';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import CoursesPage from './pages/CoursesPage';
import InstructorsPage from './pages/InstructorsPage';
import EventsPage from './pages/EventsPage';
import ContactPage from './pages/ContactPage';
import Footer from './components/Footer';
import './App.css';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [enrollments, setEnrollments] = useState<any[]>([]);

  const handleEnrollment = (courseName: string) => {
    const enrollment = { 
      course: courseName, 
      date: new Date().toISOString(), 
      id: Date.now() 
    };
    setEnrollments(prev => [...prev, enrollment]);
    alert(`Successfully enrolled in ${courseName}! We will contact you soon with next steps.`);
  };

  const renderCurrentPage = () => {
    switch (currentPage) {
      case 'home': 
        return <HomePage setCurrentPage={setCurrentPage} />;
      case 'about': 
        return <AboutPage />;
      case 'courses': 
        return <CoursesPage onEnrollment={handleEnrollment} />;
      case 'instructors': 
        return <InstructorsPage />;
      case 'events': 
        return <EventsPage />;
      case 'contact': 
        return <ContactPage />;
      default: 
        return <HomePage setCurrentPage={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderCurrentPage()}
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
};

export default App;