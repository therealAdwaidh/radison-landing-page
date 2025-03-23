import React from 'react';

const ContactSection: React.FC = () => {
  return (
    <div className=" text-white py-16 px-4 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-4xl font-bold mb-4">
          Ask whatever you have in your mind
        </h1>
        
        <p className="text-lg md:text-sm mb-8 opacity-90 max-w-2xl">
          Whether you have questions or are ready to discuss your business, 
          we're here to help. Reach out today.
        </p>
        
        <div className="space-y-4 mt-12">
          {/* Email contact */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <a href="mailto:admin@raddision.com" className="hover:underline">
              admin@raddision.com
            </a>
          </div>
          
          {/* Phone contact */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href="tel:9698198061" className="hover:underline">
              (969) 819-8061
            </a>
          </div>
          
          {/* Address */}
          <div className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span>43 Roselle St. New York</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;