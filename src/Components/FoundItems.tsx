// FoundItemSteps.tsx
import React from 'react';

interface FoundItemStepsProps {
  description: string;
  steps: string[];
}

const FoundItemSteps: React.FC<FoundItemStepsProps> = ({ description, steps }) => {
  return (
    <div className="bg-gray-900 bg-opacity-90 backdrop-filter backdrop-blur-lg shadow-lg text-white font-anton rounded-lg p-6">
      <h2 className="text-3xl font-bold mb-6">{description}</h2>
      <ul className="space-y-4">
        {steps.map((step, index) => (
          <li key={index} className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="flex items-center justify-center w-12 h-12 bg-gray-800 rounded-full">
                <span className="text-gray-400 text-xl">{index + 1}</span>
              </div>
            </div>
            <div className="flex-1">
              <p className="text-lg leading-relaxed">{step}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FoundItemSteps;
