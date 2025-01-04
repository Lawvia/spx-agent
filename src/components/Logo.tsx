import React from 'react';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <img 
        src="https://i.imgur.com/k3Q0WUL.jpeg" 
        alt="AI Coin Agent" 
        className="w-8 h-8 object-cover"
      />
      <span className="text-xl font-bold">SPX Agent</span>
    </div>
  );
}