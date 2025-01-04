import React from 'react';
import { TrendingUp, ChevronRight } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

export default function Hero() {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0">
        <ParticlesBackground />
      </div>
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 text-transparent bg-clip-text">
              Transform Your Trading with AI-Powered Intelligence
            </h1>
            <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
              Harness the power of artificial intelligence to make smarter investment decisions. 
              Get real-time insights, predictive analytics, and market intelligence that gives you the edge.
            </p>
            <div className="flex justify-center gap-4">
              <button className="flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
                Start Trading <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="flex items-center bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}