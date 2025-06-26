import React from 'react';
import { Brain, Gamepad2, Trophy } from 'lucide-react';
import NavButton from '../common/NavButton.jsx';

const Header = ({ activeSection, setActiveSection }) => {
  return (
    <nav className="border-b border-gray-800 bg-black/90 backdrop-blur-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg">
              <Brain size={24} className="text-white" />
            </div>
            <span className="text-xl font-bold text-white">CodeArena</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <NavButton
              section="home"
              icon={Brain}
              label="Home"
              isActive={activeSection === 'home'}
              onClick={setActiveSection}
            />
            <NavButton
              section="games"
              icon={Gamepad2}
              label="Games"
              isActive={activeSection === 'games'}
              onClick={setActiveSection}
            />
            <NavButton
              section="leaderboard"
              icon={Trophy}
              label="Leaderboard"
              isActive={activeSection === 'leaderboard'}
              onClick={setActiveSection}
            />
            
            <button className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-200">
              Deploy Bot
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;