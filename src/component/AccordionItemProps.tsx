"use client"
import React, { useState } from 'react';

// Define the accordion item type
interface AccordionItemProps {
  title: string;
  content: string;
  isOpen: boolean;
  toggle: () => void;
}

// Individual accordion item component
const AccordionItem: React.FC<AccordionItemProps> = ({ title, content, isOpen, toggle }) => {
  return (
    <div className="mb-2 futurebackground2 ">
      <button
        className="w-full flex items-center justify-between py-5 px-4 text-left focus:outline-none"
        onClick={toggle}
      >
        <span className="text-sm font-medium text-white">{title}</span>
        <div className="gradientcolor2"></div>
        {/* Custom SVG chevron instead of lucide-react */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className={`w-5 h-5 text-white transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''}`}
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      <div 
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-96 opacity-100 pb-5 px-4' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-300">{content}</p>
      </div>
    </div>
  );
};

// Main accordion component
const AIServicesAccordion: React.FC = () => {
  // State to track which accordion is open
  const [openIndex, setOpenIndex] = useState<number>(0);

  // Accordion data
  const accordionData = [
    {
      title: "What are AI development services?",
      content: "AI development services involve the creation, implementation, and maintenance of artificial intelligence solutions tailored to specific business needs. These services include machine learning model development, natural language processing, computer vision implementation, AI integration with existing systems, and ongoing support and optimization."
    },
    {
      title: "How can AI benefit my business?",
      content: "AI can benefit your business by automating repetitive tasks, providing data-driven insights, improving customer experiences through personalization, enhancing decision-making processes, optimizing operations, detecting anomalies or fraud, and creating new opportunities for innovation and growth."
    },
    {
      title: "What types of AI solutions do you offer?",
      content: "We offer a comprehensive range of AI solutions including predictive analytics, natural language processing, computer vision systems, recommendation engines, virtual assistants and chatbots, intelligent process automation, anomaly detection systems, and custom AI applications designed specifically for your business requirements."
    },
    {
      title: "How long does AI implementation take?",
      content: "The timeline for AI implementation varies depending on the complexity of the solution, data availability and quality, integration requirements, and scope of the project. Simple implementations might take 2-3 months, while more complex enterprise-wide solutions could take 6-12 months or longer to fully deploy and optimize."
    },
    {
      title: "What data requirements are needed for AI?",
      content: "Effective AI implementations typically require relevant, high-quality data in sufficient quantities. The specific requirements depend on the type of AI solution, but generally include historical data for training, validation data for testing, ongoing data collection mechanisms, and appropriate data governance practices to ensure privacy and compliance."
    },
    {
      title: "How do you ensure AI ethics and compliance?",
      content: "We ensure AI ethics and compliance through transparent development practices, regular bias testing and mitigation, adherence to industry standards and regulations, data privacy protections, ethical guidelines for AI usage, human oversight of automated decisions, and ongoing monitoring for unintended consequences or emergent behaviors."
    }
  ];

  // Toggle function for accordion items
  const toggleAccordion = (index: number) => {
    setOpenIndex(index === openIndex ? -1 : index);
  };

  return (
    <div className="min-h-screen flex items-center justify-center   p-4">
      <div className="max-w-3xl w-full rounded-lg overflow-hidden  shadow-xl ">
        {accordionData.map((item, index) => (
          <AccordionItem
            key={index}
            title={item.title}
            content={item.content}
            isOpen={index === openIndex}
            toggle={() => toggleAccordion(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default AIServicesAccordion;