import React from 'react';
import { Brain, TrendingUp, Users, Lightbulb, BarChart3, Zap, Shield } from 'lucide-react';

const features = [
  {
    icon: <Brain className="h-8 w-8 text-blue-500" />,
    title: "Redefine Market Intelligence",
    description: "Deliver transformative, real-time insights that decode complex market narratives and uncover hidden opportunities."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Empower Every Investor",
    description: "Equip all market participants, regardless of expertise, with the tools and knowledge to outperform the competition."
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-blue-500" />,
    title: "Inspire Market Leadership",
    description: "Build a dynamic ecosystem where innovation, precision, and informed decisions drive financial success."
  },
  {
    icon: <BarChart3 className="h-8 w-8 text-blue-500" />,
    title: "Lead with AI Excellence",
    description: "Set new standards in financial technology by leveraging state-of-the-art AI to anticipate and adapt to market changes."
  }
];

export default function Features() {
  return (
    <div className="py-20 bg-gray-900/50" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Powerful Features for Smart Trading</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI-powered platform provides you with the tools and insights you need to make informed investment decisions.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-gray-800/50 hover:bg-gray-800 transition-colors">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}