"use client";
import React, { useState } from "react";

interface PricingOption {
  price: number;
  period: string;
}

interface PricingData {
  monthly: PricingOption;
  annually: PricingOption;
}

type BillingPeriod = "monthly" | "annually";

const SubscriptionPricing: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<BillingPeriod>("monthly");

  const pricingPlans = [
    {
      name: "Basic",
      monthlyPrice: 480,
      annualPrice: 4800,
      features: [
        "Basic workflow automation",
        "Basic chatbot development",
        "60 content requests",
        "E-mail support",
        "1 consultation a month",
      ],
    },
    {
      name: "Professional",
      monthlyPrice: 960,
      annualPrice: 9600,
      features: [
        "Advanced workflow automation",
        "Custom chatbot development",
        "120 content requests",
        "Priority email support",
        "2 consultations a month",
      ],
    },
    {
      name: "Enterprise",
      monthlyPrice: 200,
      annualPrice: 20000,
      features: [
        "Full automation suite",
        "AI-driven chatbot",
        "Unlimited content requests",
        "24/7 support",
        "Dedicated account manager",
      ],
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-black    p-4">
      {/* Toggle Switch */}
      <div className="inline-flex rounded-lg bg-black mb-8 p-1">
        <button
          onClick={() => setBillingPeriod("annually")}
          className={`py-2 px-4 rounded-lg font-medium text-sm transition-all duration-500 ease-in-out ${
            billingPeriod === "annually"
              ? "bg-indigo-600 text-white"
              : "text-gray-400"
          }`}
        >
          Annually
        </button>
        <button
          onClick={() => setBillingPeriod("monthly")}
          className={`py-2 px-4 rounded-lg font-medium text-sm transition-all duration-500 ease-in-out ${
            billingPeriod === "monthly"
              ? "bg-indigo-600 text-white"
              : "text-gray-400"
          }`}
        >
          Monthly
        </button>
      </div>

      {/* Pricing Plans Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="w-full max-w-sm futurebackground7 rounded-xl overflow-hidden shadow-lg transition-all duration-500 ease-in-out"
          >
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center mb-4">
                <div className="p-1 bg-gray-800 rounded-lg mr-2">

                  {/* svg */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5  text-white"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                    <path
                      fillRule="evenodd"
                      d="M3.707 3.293a1 1 0 011.414 0L10 8.586l4.879-4.879a1 1 0 111.414 1.414L11.414 10l4.879 4.879a1 1 0 01-1.414 1.414L10 11.414l-4.879 4.879a1 1 0 01-1.414-1.414L8.586 10 3.707 5.121a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>

                  {/* plan */}
                <span className="text-white font-medium">{plan.name}</span>
                
              </div>

              {/* Price */}
              <div className="mb-4 transition-all duration-500 ease-in-out">
                <div className="flex items-end">
                  <span className="text-white text-3xl font-bold">
                    {plan.name === "Enterprise"
                      ? "Custom"
                      : `$${
                          billingPeriod === "monthly"
                            ? plan.monthlyPrice
                            : plan.annualPrice
                        }`}
                  </span>
                  {plan.name !== "Enterprise" && (
                    <span className="text-gray-400 ml-1">
                      {billingPeriod === "monthly" ? "/month" : "/year"}
                    </span>
                  )}
                </div>
                <p className="text-gray-400 text-sm py-4">
                  {plan.name === "Basic"
                    ? "Essential tools and features for getting started with ease."
                    : plan.name === "Professional"
                    ? "Advanced features and automation to scale your workflow."
                    : "Tailored solutions for businesses with custom some needs."}
                </p>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 px-4 rounded-lg font-medium transition-all duration-500 ease-in-out flex items-center justify-center mb-6">
                Go with this plan
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 ml-1"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>

              {/* Features */}
              <div className="space-y-3 transition-all duration-500 ease-in-out">
                {plan.features.map((feature, featureIndex) => (
                  <div className="flex items-center" key={featureIndex}>
                    <div className="flex-shrink-0 h-5 w-5 bgray rounded flex items-center justify-center mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3 w-3 text-white"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <span className="text-gray-200 text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionPricing;
