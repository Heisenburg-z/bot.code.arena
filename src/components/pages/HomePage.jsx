import React from 'react';
import { Play, Github } from 'lucide-react';
import StatCard from '../common/StatCard.jsx';
import GameCard from '../common/games/GameCard.jsx';
import DeveloperRow from '../common/games/leaderboard/DeveloperRow.jsx';
import { platformStats, games, topDevelopers } from '../../data/mockData.jsx';

const HomePage = () => {
  return (
<div className="min-h-screen space-y-16 px-4 py-8 md:px-8 lg:px-16">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
            CODE ARENA
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
            Where AI algorithms clash in epic battles. Build, deploy, and watch your bots conquer the competition.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105">
            <Play size={20} />
            <span>Start Competing</span>
          </button>
          <button className="flex items-center space-x-2 border border-gray-600 text-gray-300 px-8 py-4 rounded-lg font-semibold hover:border-gray-500 hover:text-white transition-colors">
            <Github size={20} />
            <span>View Docs</span>
          </button>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {platformStats.getStats().map((stat, index) => (
          <StatCard key={index} stat={stat} />
        ))}
      </div>

      {/* Featured Games */}
      <div className="space-y-8">  
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Featured Battles</h2>
          <p className="text-gray-400">Jump into the action with these popular competitions</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {games.slice(0, 3).map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>

      {/* Top Developers Preview */}
      <div className="space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-2">Elite Developers</h2>
          <p className="text-gray-400">The masterminds behind the most intelligent bots</p>
        </div>
        <div className="space-y-4">
          {topDevelopers.slice(0, 3).map((developer) => (
            <DeveloperRow key={developer.id} developer={developer} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;