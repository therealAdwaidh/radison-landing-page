"use client"
import React, { useState, FC } from 'react';

interface ContactFormProps {
  onSubmit?: (data: FormData) => void;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactForm: FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSubmit) {
      onSubmit(formData);
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <form onSubmit={handleSubmit} className=" rounded-lg p-6 shadow-lg">
        <div className="mb-4 ">
          <label htmlFor="name" className="block text-white text-xs font-medium mb-2">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Smith"
            className="w-full px-3 py-2 futurebackground8 text-sm formcolor rounded border  border-gray-700 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        
        <div className="mb-4">
          <label htmlFor="email" className="block text-white text-xs font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@framer.com"
            className="w-full px-3 py-2 futurebackground2 text-white rounded border border-gray-700 focus:outline-none focus:border-indigo-500"
            required
          />
        </div>
        
        <div className="mb-6">
          <label htmlFor="message" className="block text-white text-xs font-medium mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Hi, I am reaching out for..."
            rows={4}
            className="w-full px-3 py-2 futurebackground2 text-white rounded border border-gray-700 focus:outline-none focus:border-indigo-500 resize-none"
            required
          ></textarea>
        </div>
        
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded transition duration-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;