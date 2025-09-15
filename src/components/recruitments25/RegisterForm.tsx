"use client";
import { useState } from 'react';

export default function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    registrationNumber: '',
    phoneNumber: '',
    srmistEmail: '',
    githubProfile: '',
    linkedinProfile: '',
    firstDomain: 'Technical',
    secondDomain: 'Creatives'
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    
    // Handle validation for registration number (max 15 digits)
    if (name === 'registrationNumber') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 15) {
        setFormData(prev => ({ ...prev, [name]: numericValue }));
      }
      return;
    }
    
    // Handle validation for phone number (max 10 digits)
    if (name === 'phoneNumber') {
      const numericValue = value.replace(/\D/g, '');
      if (numericValue.length <= 10) {
        setFormData(prev => ({ ...prev, [name]: numericValue }));
      }
      return;
    }
    
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDomainChange = (domainType, value) => {
    setFormData(prev => ({ ...prev, [domainType]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.registrationNumber.trim()) newErrors.registrationNumber = 'Registration Number is required';
    if (!formData.phoneNumber.trim()) newErrors.phoneNumber = 'Phone Number is required';
    if (!formData.srmistEmail.trim()) newErrors.srmistEmail = 'SRMIST Email is required';
    
    // Email validation for SRMIST domain
    if (formData.srmistEmail && !formData.srmistEmail.includes('@srmist.edu.in')) {
      newErrors.srmistEmail = 'Please enter a valid SRMIST email address';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const DomainOption = ({ name, value, selectedValue, onChange, label }) => (
    <div className="flex items-center gap-3">
      <div 
        className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
          selectedValue === value 
            ? 'border-cyan-400 bg-cyan-400 flex items-center justify-center' 
            : 'border-gray-400'
        }`}
        onClick={() => onChange(name, value)}
      >
        {selectedValue === value && <div className="w-3 h-3 rounded-full bg-white"></div>}
      </div>
      <span 
        className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-lg font-medium cursor-pointer" 
        onClick={() => onChange(name, value)}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-6">
      {/* Form container */}
      <div className="relative z-10 w-full max-w-6xl">
        <div className="bg-transparent p-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center mb-16">
            Registration Form
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Name Field */}
              <div>
                <label htmlFor="name" className="block text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 ml-2">
                  Name*
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white bg-opacity-90 border-0 rounded-2xl text-gray-800 placeholder-gray-400 text-lg focus:ring-0 focus:outline-none shadow-lg"
                  placeholder="Name"
                />
                {errors.name && <p className="text-red-400 text-sm mt-2 ml-2">{errors.name}</p>}
              </div>

              {/* Phone Number Field */}
              <div>
                <label htmlFor="phoneNumber" className="block text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 ml-2">
                  Phone Number*
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-6">
                    <span className="text-gray-600 text-lg font-medium">+91</span>
                  </div>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    className="w-full pl-16 pr-6 py-4 bg-white bg-opacity-90 border-0 rounded-2xl text-gray-800 placeholder-gray-400 text-lg focus:ring-0 focus:outline-none shadow-lg"
                    placeholder="012 345 6789"
                    maxLength="10"
                  />
                </div>
                {errors.phoneNumber && <p className="text-red-400 text-sm mt-2 ml-2">{errors.phoneNumber}</p>}
              </div>

              {/* GitHub Profile Link Field */}
              <div>
                <label htmlFor="githubProfile" className="block text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 ml-2">
                  Github Profile Link
                </label>
                <input
                  type="url"
                  id="githubProfile"
                  name="githubProfile"
                  value={formData.githubProfile}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white bg-opacity-90 border-0 rounded-2xl text-gray-800 placeholder-gray-400 text-lg focus:ring-0 focus:outline-none shadow-lg"
                  placeholder="Optional"
                />
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Registration Number Field */}
              <div>
                <label htmlFor="registrationNumber" className="block text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 ml-2">
                  Register Number*
                </label>
                <input
                  type="text"
                  id="registrationNumber"
                  name="registrationNumber"
                  value={formData.registrationNumber}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white bg-opacity-90 border-0 rounded-2xl text-gray-800 placeholder-gray-400 text-lg focus:ring-0 focus:outline-none shadow-lg"
                  placeholder="RAXXXXXXXXXXXXX"
                  maxLength="15"
                />
                {errors.registrationNumber && <p className="text-red-400 text-sm mt-2 ml-2">{errors.registrationNumber}</p>}
              </div>

              {/* SRMIST Email Field */}
              <div>
                <label htmlFor="srmistEmail" className="block text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 ml-2">
                  SRMIST Email*
                </label>
                <input
                  type="email"
                  id="srmistEmail"
                  name="srmistEmail"
                  value={formData.srmistEmail}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white bg-opacity-90 border-0 rounded-2xl text-gray-800 placeholder-gray-400 text-lg focus:ring-0 focus:outline-none shadow-lg"
                  placeholder="xyz@srmist.edu.in"
                />
                {errors.srmistEmail && <p className="text-red-400 text-sm mt-2 ml-2">{errors.srmistEmail}</p>}
              </div>

              {/* LinkedIn Profile Link Field */}
              <div>
                <label htmlFor="linkedinProfile" className="block text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 ml-2">
                  LinkedIn Profile Link
                </label>
                <input
                  type="url"
                  id="linkedinProfile"
                  name="linkedinProfile"
                  value={formData.linkedinProfile}
                  onChange={handleInputChange}
                  className="w-full px-6 py-4 bg-white bg-opacity-90 border-0 rounded-2xl text-gray-800 placeholder-gray-400 text-lg focus:ring-0 focus:outline-none shadow-lg"
                  placeholder="Optional"
                />
              </div>
            </div>
          </div>

          {/* Choose Your First Domain Section */}
          <div className="mt-12 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center mb-8">
              Choose Your First Domain*
            </h2>
            
            {/* First Domain Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DomainOption 
                name="firstDomain"
                value="Technical"
                selectedValue={formData.firstDomain}
                onChange={handleDomainChange}
                label="Technical"
              />
              
              <DomainOption 
                name="firstDomain"
                value="Creatives"
                selectedValue={formData.firstDomain}
                onChange={handleDomainChange}
                label="Creatives"
              />
              
              <DomainOption 
                name="firstDomain"
                value="Events"
                selectedValue={formData.firstDomain}
                onChange={handleDomainChange}
                label="Events"
              />
              
              <DomainOption 
                name="firstDomain"
                value="Business"
                selectedValue={formData.firstDomain}
                onChange={handleDomainChange}
                label="Business"
              />
            </div>
          </div>

          {/* Choose Your Second Domain Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center mb-8">
              Choose Your Second Domain
            </h3>
            
            {/* Second Domain Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <DomainOption 
                name="secondDomain"
                value="Technical"
                selectedValue={formData.secondDomain}
                onChange={handleDomainChange}
                label="Technical"
              />
              
              <DomainOption 
                name="secondDomain"
                value="Creatives"
                selectedValue={formData.secondDomain}
                onChange={handleDomainChange}
                label="Creatives"
              />
              
              <DomainOption 
                name="secondDomain"
                value="Events"
                selectedValue={formData.secondDomain}
                onChange={handleDomainChange}
                label="Events"
              />
              
              <DomainOption 
                name="secondDomain"
                value="Business"
                selectedValue={formData.secondDomain}
                onChange={handleDomainChange}
                label="Business"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-12 text-center">
            <button 
              onClick={validateForm}
              className="px-12 py-4 bg-gradient-to-r from-cyan-400 to-blue-400 text-white text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Submit
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}