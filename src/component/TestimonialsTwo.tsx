import React from "react";

const testimonials = [
  {
    text: "Working with Radison has been seamless. Their solutions are both innovative and highly effective.",
    image: "https://framerusercontent.com/images/TlENrhqjow3GKPwacxNV0l9zC0.jpg", // Replace with actual image URL
    name: "Liam Walker",
    role: "Product Manager : Brightpath",
  },
  {
    text: "Radison provided exceptional service, delivering exactly what we needed with precision.",
    image: "https://framerusercontent.com/images/TlENrhqjow3GKPwacxNV0l9zC0.jpg",
    name: "Sophia Carter",
    role: "CEO : InnovateTech",
  },
  {
    text: "The collaboration with Radison exceeded our expectations. Highly recommended!",
    image: "https://framerusercontent.com/images/vgHPhTINz7GSobPMUEAoJ98f1A.jpg",
    name: "Daniel Smith",
    role: "CTO : FutureSoft",
  },
];

const TestimonialCard = ({ text, image, name, role }: { text: string; image: string; name: string; role: string }) => {
  return (

    
    <div className="futurebackground5 text-white w-full max-w-sm rounded-3xl overflow-hidden p-8">

          
          <div className="gradientcolor"></div>

          <p className="text-gray-300 text-lg md:text-sm leading-relaxed">"{text}"</p>
          <div className="flex items-center mt-4">
            
          <div className="testimonialimage">
          <img width={30} height={30} src={image} alt={name} />
           
          </div>
            <div className="px-2">
              <p className="font-bold">{name}</p>
              <p className="text-sm text-gray-400">{role}</p>
            </div>
          </div>
        </div>
  );
};

const Testimonials = () => {
  return (
    <div className="flex flex-wrap justify-center gap-6 p-6">
      {testimonials.map((testimonial, index) => (
        <TestimonialCard key={index} {...testimonial} />
      ))}
    </div>
  );
};

export default Testimonials;
