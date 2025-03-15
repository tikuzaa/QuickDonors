import React from 'react';

const steps = [
  {
    image: '/sign up and verify.gif', // Replace with actual image path
    title: 'Sign Up & Verify',
    description: 'Create an account in seconds and verify your details to ensure a safe and trusted network.',
  },
  {
    image: '/find a match.gif',
    title: 'Find a Match Instantly',
    description: 'Search for nearby blood donors or request blood by entering your location and blood type.',
  },
  {
    image: '/connect and communicate.gif',
    title: 'Connect & Communicate',
    description: 'Get real-time contact details of matching donors and communicate securely through our platform.',
  },
  {
    image: '/donate or receive.gif',
    title: 'Donate or Receive Blood',
    description: 'Meet at a verified donation center or hospital, ensuring a safe and hassle-free process.',
  },
  {
    image: '/save lives.gif',
    title: 'Save Lives',
    description: 'Every little donation counts! Earn recognition for being a life-saving donor.',
  },
];

const Works = () => {
  return (
    <div className="py-16 bg-red-50 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto text-center">
      <hr className="w-20 mb-4 border-gray-300 dark:border-gray-600 mx-auto" />
        <div className="text-7xl font-semibold text-[#F95454] mb-30 mt-20">How It Works</div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.slice(0, 3).map((step, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={step.image} alt={step.title} className="w-24 h-24 mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-red-600">{step.title}</h3>
              <p className="text-gray-700">{step.description}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          {steps.slice(3).map((step, index) => (
            <div key={index} className="flex flex-col items-center p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
              <img src={step.image} alt={step.title} className="w-24 h-24 mb-4 object-cover" />
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