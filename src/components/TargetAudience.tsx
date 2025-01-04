import React from 'react';
import { Users, Briefcase, BarChart2, Coins } from 'lucide-react';

const audiences = [
  {
    icon: <Users className="h-12 w-12 text-blue-500" />,
    title: "Individual Traders",
    description: "Perfect for retail investors looking to leverage AI-powered insights for better trading decisions."
  },
  {
    icon: <Briefcase className="h-12 w-12 text-blue-500" />,
    title: "Investment Firms",
    description: "Ideal for professional trading firms seeking advanced market analysis and portfolio optimization."
  },
  {
    icon: <BarChart2 className="h-12 w-12 text-blue-500" />,
    title: "Fund Managers",
    description: "Empowering fund managers with AI-driven insights for superior portfolio performance."
  },
  {
    icon: <Coins className="h-12 w-12 text-blue-500" />,
    title: "Crypto Enthusiasts",
    description: "Supporting cryptocurrency traders with real-time market intelligence and trend analysis."
  }
];

export default function TargetAudience() {
  return (
    <div className="py-20" id="target-audience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Who We Serve</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            AI Coin is designed to serve diverse trading needs across the cryptocurrency market.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {audiences.map((audience, index) => (
            <div key={index} className="p-8 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 hover:from-gray-800 hover:to-gray-900 transition-colors">
              <div className="mb-6">{audience.icon}</div>
              <h3 className="text-2xl font-semibold mb-4">{audience.title}</h3>
              <p className="text-gray-400">{audience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}