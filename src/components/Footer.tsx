import React from 'react';
import { Music } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

const Footer: React.FC<FooterProps> = ({ setCurrentPage }) => {
  const quickLinks = ['About', 'Courses', 'Instructors', 'Events'];
  const instruments = ['Piano', 'Guitar', 'Vocals', 'Drums'];

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <Music className="h-8 w-8 text-purple-400 mr-2" />
              <span className="font-bold text-xl">Harmony Academy</span>
            </div>
            <p className="text-gray-400 mb-4">
              Inspiring musical excellence for over 20 years.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                <span className="text-xs font-bold">f</span>
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                <span className="text-xs font-bold">t</span>
              </div>
              <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center cursor-pointer hover:bg-purple-700 transition-colors">
                <span className="text-xs font-bold">i</span>
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link}
                  onClick={() => setCurrentPage(link.toLowerCase())}
                  className="block text-gray-400 hover:text-white transition-colors"
                >
                  {link}
                </button>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Instruments</h3>
            <div className="space-y-2 text-gray-400">
              {instruments.map((instrument) => (
                <p key={instrument}>{instrument}</p>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-400">
              <p>(555) 123-MUSIC</p>
              <p>info@harmonyacademy.com</p>
              <p>123 Harmony Street<br />Music City, MC 12345</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Harmony Academy. All rights reserved. | Built with ❤️ for music education</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;