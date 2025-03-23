"use client"
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const secondSection = document.getElementById("second-section"); // Replace with actual section ID
      if (secondSection) {
        const sectionTop = secondSection.offsetTop;
        setIsScrolled(window.scrollY >= sectionTop);
      } else {
        // Fallback if section not found - activate after scrolling 200px
        setIsScrolled(window.scrollY > 200);
      }
    };
    
    // Initial check when component mounts
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    <>
      <style jsx>{`
        .navbar-container {
          transition: max-width 1s ease-in-out;
          width: 90%;
          max-width: ${isScrolled ? '768px' : '90%'};
        }
      `}</style>
      
      <div className="fixed top-6 left-0 right-0 z-50 flex justify-center">
        <div className="navbar-container">
          <div className="futurebackground rounded-lg px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <a href="#" className="flex items-center">
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect x="2" y="2" width="9" height="9" rx="1" fill="white" />
                    <rect x="13" y="2" width="9" height="9" rx="1" fill="white" />
                    <rect x="2" y="13" width="9" height="9" rx="1" fill="white" />
                    <rect x="13" y="13" width="9" height="9" rx="1" fill="white" />
                  </svg>
                  <span className="ml-2 text-xl font-bold text-white">Radison</span>
                </a>
              </div>
              
              <div className="hidden md:flex space-x-6">
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Process
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Benefits
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Plans
                </a>
                <a
                  href="#"
                  className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium"
                >
                  Contact
                </a>
              </div>
              
              <div className="hidden md:block">
                <a
                  href="#"
                  className="bg-indigo-600 hover:bg-indigo-700 text-white px-2 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  Get in touch
                  {/* <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 ml-1"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg> */}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}