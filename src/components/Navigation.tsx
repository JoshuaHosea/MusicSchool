import React, { useState } from 'react';
import { Music, Menu, X } from 'lucide-react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

const Navigation: React.FC<NavigationProps> = ({ currentPage, setCurrentPage }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = ['home', 'about', 'courses', 'instructors', 'events', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Music className="h-8 w-8 text-purple-600 mr-2" />
            <span className="font-bold text-xl text-gray-900">Harmony Academy</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigationItems.map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`capitalize font-medium transition-colors ${
                  currentPage === page ? 'text-purple-600' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                {page}
              </button>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navigationItems.map((page) => (
                <button
                  key={page}
                  onClick={() => {
                    setCurrentPage(page);
                    setIsMenuOpen(false);
                  }}
                  className="capitalize block px-3 py-2 text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-gray-50 w-full text-left"
                >
                  {page}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;