import React from 'react';
import { Linkedin, Twitter, Instagram, Facebook, Globe } from 'lucide-react';

const RadisonUI = () => {
  return (
    <div className=" max-w-6xl w-full mx-auto bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Header section */}
        <div className="flex flex-col md:flex-row justify-between items-start">
          {/* Logo and tagline */}
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <div className="grid grid-cols-2 gap-1 mr-2">
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="w-4 h-4 bg-white rounded-full"></div>
                <div className="w-4 h-4 bg-white rounded-full"></div>
              </div>
              <span className="text-3xl font-bold ml-2">Radison</span>
            </div>
            <p className="text-xs max-w-md color-gray">
              Your trusted partner in AI solutions, creating smarter systems for smarter businesses.
            </p>
          </div>
          <div className="gradientcolor"></div>

          {/* Navigation */}
          <div className="flex flex-col md:flex-row gap-8 md:gap-16">
            {/* Sections */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Sections</h3>
              <ul className="space-y-2 text-xs">
                <li>Process</li>
                <li>Services</li>
                <li>Benefits</li>
                <li>Plans</li>
                <li>Contact</li>
              </ul>
            </div>

            {/* Pages */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Pages</h3>
              <ul className="text-xs space-y-2">
                <li>Home</li>
                <li>Coming soon</li>
                <li>404</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Social icons */}
        <div className="">
          <div className="flex flex-wrap gap-3">
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <Linkedin size={20} />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <Twitter size={20} />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <Instagram size={20} />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <Facebook size={20} />
            </div>
            <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center">
              <Globe size={20} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RadisonUI;