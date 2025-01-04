import React from 'react';
import { Zap } from 'lucide-react';

export default function CallToAction() {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-90"></div>
          <div className="relative px-8 py-16 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Transform Your Trading?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Join thousands of successful traders who are already using SPX Agent to make smarter investment decisions.
            </p>
            <button className="flex items-center mx-auto bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Started Now <Zap className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}