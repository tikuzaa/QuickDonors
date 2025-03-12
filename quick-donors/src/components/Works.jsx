import React from 'react';

const steps = [
  {
    number: '1️',
    title: 'Sign Up & Verify',
    description: 'Create an account in seconds and verify your details to ensure a safe and trusted network.',
  },
  {
    number: '2️',
    title: 'Find a Match Instantly',
    description: 'Search for nearby blood donors or request blood by entering your location and blood type.',
  },
  {
    number: '3️',
    title: 'Connect & Communicate',
    description: 'Get real-time contact details of matching donors and communicate securely through our platform.',
  },
  {
    number: '4️',
    title: 'Donate or Receive Blood',
    description: 'Meet at a verified donation center or hospital, ensuring a safe and hassle-free process.',
  },
  {
    number: '5️',
    title: 'Save Lives & Earn Rewards',
    description: 'Every donation counts! Earn badges, rewards, and recognition for being a life-saving donor.',
  },
];

const Works = () => {
  return (
    <div className="py-16 bg-red-50 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
        <div className="text-5xl font-semibold text-red-600 mb-40 mt-20">How It Works - Step-by-Step Process</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.slice(0, 3).map((step, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-[#8E1616] text-white rounded-full text-3xl mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-red-600">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {steps.slice(3).map((step, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="flex items-center justify-center w-16 h-16 bg-[#8E1616] text-white rounded-full text-3xl mb-4">
                {step.number}
              </div>
              <h3 className="text-xl font-semibold text-red-600">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Works;