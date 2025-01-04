import React from 'react';

const steps = [
  {
    number: "01",
    title: "Data Collection",
    description: "Gathering research papers and agent technology information"
  },
  {
    number: "02",
    title: "Analysis",
    description: "Processing and analyzing data using advanced AI algorithms"
  },
  {
    number: "03",
    title: "Synthesis",
    description: "Creating comprehensive insights and research summaries"
  }
];

export default function HowItWorks() {
  return (
    <div className="py-32 bg-gray-900/30 relative overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">How it Works</h2>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="w-full lg:w-1/2 space-y-16">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start gap-6">
                <div className="text-2xl font-bold text-blue-400">{step.number}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-400 mb-2">{step.title}</h3>
                  <p className="text-gray-400">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="w-full lg:w-1/2 relative h-[400px] mt-16 lg:mt-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative w-64 h-64">
                {/* Animated circles */}
                <div className="absolute inset-0 border-2 border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]" />
                <div className="absolute inset-8 border-2 border-blue-500/30 rounded-full animate-[spin_8s_linear_infinite]" />
                <div className="absolute inset-16 border-2 border-blue-500/40 rounded-full animate-[spin_6s_linear_infinite]" />
                <div className="absolute inset-24 border-2 border-blue-500/50 rounded-full animate-[spin_4s_linear_infinite]" />
                {/* Center dot */}
                <div className="absolute inset-[120px] bg-blue-500 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}