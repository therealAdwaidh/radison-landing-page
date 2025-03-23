import ScrollingLogos from "@/component/ScrollingLogos";
import Image from "next/image";

import Navbar from "@/component/NavBar";
import CustomSVG from "@/component/CustomSVG";
import SubscriptionPricing from "@/component/SubscriptionPricing";
import Testimonials from "@/component/Testimonials";
import TestimonialsTwo from "@/component/TestimonialsTwo";
import ContactSection from "@/component/ContactSection";
import ContactFormProps from "@/component/ContactFormProps";
import AccordionItemProps from "@/component/AccordionItemProps";
import RadisonUI from "@/component/RadisonUI";



export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen ">
      

      {/* Hero Section with Background Video */}
      <div className="relative min-h-screen flex flex-col p-6">
        <div className="absolute inset-0 z-0">
          <video autoPlay muted loop className="absolute w-full h-full object-cover opacity-50">
            <source src="nextvideo2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>


          <div className="absolute inset-0 bg-black opacity-0"></div>
          
        </div>

        {/* Sticky Navbar */}
        <Navbar/>
       
      

        {/* Hero Content */}
        <div className="z-10 max-w-6xl w-full flex flex-col items-center justify-end h-screen mx-auto ">
          <div className="futurebackground4 rounded-full px-3 py-1  inline-flex items-center">
            <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"></path>
            </svg>
            <p className="text-sm">Radison - AI Automation Partner</p>
          </div>

          <h1 className="text-3xl md:text-3xl lg:text-5xl text-center font-bold mb-8 leading-tight">
            Transforming workflows with AI <br className="hidden md:block" /> powered automation
          </h1>

          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl text-gray-300 text-center">
            Experience the future of business with intelligent, scalable <br className="hidden md:block" />
            automation solutions tailored to your needs
          </p>

          <div className="space-x-2 pt-5">

            <div className="futurebackground3 text-gray-200 rounded-full px-3 py-1 mb-6 shadow-lg inline-flex items-center">
                  Our services
              </div>

            <div className="futurebackground text-gray-200 rounded-full px-3 py-1 mb-6 shadow-lg inline-flex items-center">
              
               See plans
              </div>

          </div>

           {/* Scrolling Logos Section */}
        
        <ScrollingLogos />
        </div>

       

        
      </div>

       {/* Hero Content */}
       <div className="z-10 max-w-6xl w-full  flex flex-col items-center justify-center mx-auto py-16">
          <div className="futurebackground2 text-gray-200 rounded-full px-3 py-1 mb-8 shadow-lg inline-flex items-center">
           
            who are we
          </div>
                  

          <h2 className="text-3xl md:text-3xl lg:text-4xl max-w-3xl text-center font-bold mb-8 leading-tight">
          We are Radison, we help founders like you to automate their day to day business operations with the help of AI
          </h2>

          
        </div>


        <div className="flex justify-center px-8 space-x-8">
        <div className="futurebackground5  text-white w-full max-w-sm rounded-3xl overflow-hidden p-8">
              {/* <!-- Heading with ampersand styling --> */}

              <img src="image1.png" alt="" />
              <p className="text-3xl md:text-lg font-bold   mb-4">
                Discovery <span className="font-light">&</span> Analysis
              </p>
              
              {/* <!-- Subtext with slightly reduced opacity --> */}
              <p className="text-gray-300 text-lg md:text-sm leading-relaxed">
                We dive deep into your needs, exploring ideas 
                and defining strategies for long-term success.
              </p>
        </div>
        <div className="futurebackground5 text-white w-full max-w-sm rounded-3xl overflow-hidden px-8 py-5">
              {/* <!-- Heading with ampersand styling --> */}
              <img src="image2.png" alt="" />
              <p className="text-3xl md:text-lg font-bold   mb-4">
                Discovery <span className="font-light">&</span> Analysis
              </p>
              
              {/* <!-- Subtext with slightly reduced opacity --> */}
              <p className="text-gray-300 text-lg md:text-sm leading-relaxed">
                We dive deep into your needs, exploring ideas 
                and defining strategies for long-term success.
              </p>
        </div>
        <div className="futurebackground5 text-white w-full max-w-sm rounded-3xl overflow-hidden p-8">
              {/* <!-- Heading with ampersand styling --> */}
              <img src="image3.png" alt="" />
              <p className="text-3xl md:text-lg font-bold   mb-4">
                Discovery <span className="font-light">&</span> Analysis
              </p>
              
              {/* <!-- Subtext with slightly reduced opacity --> */}
              <p className="text-gray-300 text-lg md:text-sm leading-relaxed">
                We dive deep into your needs, exploring ideas 
                and defining strategies for long-term success.
              </p>
        </div>
        </div>

         {/* Hero Content */}
         <div className="z-10 max-w-6xl w-full flex flex-col items-center justify-center mx-auto py-16">
          <div className="futurebackground2 text-gray-200 rounded-full px-3 py-1 mb-8 shadow-lg inline-flex items-center">
           
           Services
          </div>

          <h3 className="text-3xl md:text-3xl lg:text-5xl max-w-3xl text-center font-bold mb-4 leading-tight">
          Innovative services for growth
          </h3>
          <p >Tailored solutions to streamline, innovate, and grow.</p>

          
        </div>


        <div className="flex justify-center px-8 space-x-4">
        <div className="futurebackground6  text-white w-full max-w-sm rounded-3xl overflow-hidden p-8">
              {/* <!-- Heading with ampersand styling --> */}

              <img src="image4.png" alt="" />
              <p className="text-3xl md:text-lg font-bold   mb-4">
                Discovery <span className="font-light">&</span> Analysis
              </p>
              
              {/* <!-- Subtext with slightly reduced opacity --> */}
              <p className="text-gray-300 text-lg md:text-sm leading-relaxed">
                We dive deep into your needs, exploring ideas 
                and defining strategies for long-term success.
              </p>
        </div>
        <div className="futurebackground6 text-white w-full max-w-sm rounded-3xl overflow-hidden px-8 py-5">
              {/* <!-- Heading with ampersand styling --> */}
              <img src="image5.png" alt="" />
              <p className="text-3xl md:text-lg font-bold   mb-4">
                Discovery <span className="font-light">&</span> Analysis
              </p>
              
              {/* <!-- Subtext with slightly reduced opacity --> */}
              <p className="text-gray-300 text-lg md:text-sm leading-relaxed">
                We dive deep into your needs, exploring ideas 
                and defining strategies for long-term success.
              </p>
        </div>
        <div className="futurebackground6 text-white w-full max-w-sm rounded-3xl overflow-hidden p-8">
              {/* <!-- Heading with ampersand styling --> */}
              <img src="image6.png" alt="" />
              <p className="text-3xl md:text-lg font-bold   mb-4">
                Discovery <span className="font-light">&</span> Analysis
              </p>
              
              {/* <!-- Subtext with slightly reduced opacity --> */}
              <p className="text-gray-300 text-lg md:text-sm leading-relaxed">
                We dive deep into your needs, exploring ideas 
                and defining strategies for long-term success.
              </p>
        </div>
        </div>

        <div className="flex justify-center px-8 space-x-4 pt-3">
        <div className="futurebackground6  text-white  w-full max-w-xl rounded-3xl overflow-hidden p-8">
              {/* <!-- Heading with ampersand styling --> */}

              <img src="image7.png" alt="" />
              <p className="text-3xl md:text-lg font-bold   mb-4">
                Discovery <span className="font-light">&</span> Analysis
              </p>
              
              {/* <!-- Subtext with slightly reduced opacity --> */}
              <p className="text-gray-300 text-lg md:text-sm leading-relaxed">
                We dive deep into your needs, exploring ideas 
                and defining strategies for long-term success.
              </p>
        </div>
        <div className="futurebackground6 text-white  w-full max-w-xl rounded-3xl overflow-hidden px-8 py-5">
              {/* <!-- Heading with ampersand styling --> */}
              <img src="image8.png" alt="" />
              <p className="text-3xl md:text-lg font-bold   mb-4">
                Discovery <span className="font-light">&</span> Analysis
              </p>
              
              {/* <!-- Subtext with slightly reduced opacity --> */}
              <p className="text-gray-300 text-lg md:text-sm leading-relaxed">
                We dive deep into your needs, exploring ideas 
                and defining strategies for long-term success.
              </p>
        </div>
        
        </div>

         {/* Hero Content */}
         <div className="z-10 max-w-6xl w-full flex flex-col items-center justify-center mx-auto mt-20">
          <div className="futurebackground2 text-gray-200 rounded-full px-3 py-1 mb-8 shadow-lg inline-flex items-center">
           
          Benefits
          </div>

          <h3 className="text-3xl md:text-3xl lg:text-5xl max-w-3xl text-center font-bold mb-4 leading-tight">
          Maximize efficiency and impact
          </h3>
          <p >Discover the key benefits of partnering with us.</p>

          
        </div>


        <div className="flex justify-center px-8 mt-10 space-x-8">
        <div className="futurebackground5  text-white w-full max-w-sm rounded-3xl overflow-hidden p-8">
              {/* <!-- Heading with ampersand styling --> */}

              <div className="">
              <CustomSVG/>
              </div>
              <div className="gradientcolor"></div>
              <p className="text-3xl md:text-lg font-bold   py-4">
                Discovery <span className="font-light">&</span> Analysis
              </p>
              
              {/* <!-- Subtext with slightly reduced opacity --> */}
              <p className="text-gray-300 text-lg md:text-sm leading-relaxed">
                We dive deep into your needs, exploring ideas 
                and defining strategies for long-term success.
              </p>
        </div>
        <div className="futurebackground5 text-white w-full max-w-sm rounded-3xl overflow-hidden px-8 py-5">
              {/* <!-- Heading with ampersand styling --> */}
              
              <div className="">
              <CustomSVG/>
              </div>
              <div className="gradientcolor"></div>
              <p className="text-3xl md:text-lg font-bold py-4">
                Discovery <span className="font-light">&</span> Analysis
              </p>
              
              {/* <!-- Subtext with slightly reduced opacity --> */}
              <p className="text-gray-300 text-lg md:text-sm leading-relaxed">
                We dive deep into your needs, exploring ideas 
                and defining strategies for long-term success.
              </p>
        </div>
        <div className="futurebackground5 text-white w-full max-w-sm rounded-3xl overflow-hidden p-8">
              {/* <!-- Heading with ampersand styling --> */}
              
              <div className="">
              <CustomSVG/>
              <p>price 500</p>
              </div>

              <div className="gradientcolor"></div>
              <p className="text-3xl md:text-lg font-bold py-4">
                Discovery <span className="font-light">&</span> Analysis
              </p>
              
              {/* <!-- Subtext with slightly reduced opacity --> */}
              <p className="text-gray-300 text-lg md:text-sm leading-relaxed">
                We dive deep into your needs, exploring ideas 
                and defining strategies for long-term success.
              </p>

        </div>
        </div>



         {/* Hero Content */}
         <div className="z-10 max-w-6xl w-full flex flex-col items-center justify-center mx-auto py-16">
          <div className="futurebackground2 text-gray-200 rounded-full px-3 py-1 mb-8 shadow-lg inline-flex items-center">
           
           Services
          </div>

          <h3 className="text-3xl md:text-3xl lg:text-5xl max-w-3xl text-center font-bold mb-4 leading-tight">
          Flexible plans for growth
          </h3>
          <p >Tailored solutions to streamline, innovate, and grow.</p>

          
        </div>

        <SubscriptionPricing/>



          {/* Hero Content */}
          <div className="z-10 max-w-6xl w-full flex flex-col items-center justify-center mx-auto py-16">
          <div className="futurebackground2 text-gray-200 rounded-full px-3 py-1 mb-8 shadow-lg inline-flex items-center">
           
          Testimonials+
          </div>

          <h3 className="text-3xl md:text-3xl lg:text-5xl max-w-3xl text-center font-bold mb-4 leading-tight">
          Trusted by satisfied clients
          </h3>
          <p >Discover how we’ve driven growth and innovation.</p>

          
        </div>


       

       <Testimonials/>
       <TestimonialsTwo/>

       <div className="mx-auto sxs">
       <div className="flex justify-center background-element ">

          <div className="w-full max-w-xl">
            <ContactSection/>
          </div>
          
          <div className="w-full max-w-xl">
            <ContactFormProps/>
          </div>
          <div className=""></div>

          </div>
          
       </div>


         {/* Hero Content */}
    <div className="z-10 max-w-6xl w-full flex flex-col items-center justify-center mx-auto py-16">
          <div className="futurebackground2 text-gray-200 rounded-full px-3 py-1 mb-8 shadow-lg inline-flex items-center">
           
          FAQs
          </div>

          <h3 className="text-3xl md:text-3xl lg:text-5xl max-w-3xl text-center font-bold mb-4 leading-tight">
          We’re here to help
          </h3>
          <p >FAQs designed to provide the information you need.</p>

          
        </div>


       <AccordionItemProps/>

       

         {/* Hero Content */}
    <div className="z-10 max-w-6xl w-full flex flex-col items-center justify-center mx-auto py-16">
          <div className="futurebackground2 text-gray-200 rounded-full px-3 py-1 mb-8 shadow-lg inline-flex items-center">
           
          Radison
          </div>

          <h3 className="text-3xl md:text-3xl lg:text-5xl max-w-3xl text-center font-bold mb-4 leading-tight">
          Let’s talk about your next big move
          </h3>
          <p >Hop on a call with us to see how our services can accelerate your growth.</p>

          
        </div>
        <RadisonUI />

  
        
    </div>
  );
}