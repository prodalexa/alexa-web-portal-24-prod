"use client";

import { useState } from "react";
import { registerRecruitment } from "@/app/actions/registerRecruitments25";

// Define types for form data
type FormData = {
  name: string;
  registrationNumber: string;
  phoneNumber: string;
  srmistEmail: string;
  githubProfile: string;
  linkedinProfile: string;
  firstDomain: string;
  secondDomain: string;
};

// Define types for form errors
type FormErrors = {
  name?: string;
  registrationNumber?: string;
  phoneNumber?: string;
  srmistEmail?: string;
};

// Define types for DomainOption props
type DomainOptionProps = {
  name: "firstDomain" | "secondDomain";
  value: string;
  selectedValue: string;
  onChange: (domainType: "firstDomain" | "secondDomain", value: string) => void;
  label: string;
};

export default function RegistrationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    registrationNumber: "",
    phoneNumber: "",
    srmistEmail: "",
    githubProfile: "",
    linkedinProfile: "",
    firstDomain: "",
    secondDomain: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState<{ 
    type: 'success' | 'error', 
    text: string 
  } | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Clear any existing errors for this field
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }

    // Clear submit message when user starts typing
    if (submitMessage) {
      setSubmitMessage(null);
    }

    // Handle validation for registration number (max 15 digits)
    if (name === "registrationNumber") {
      // Always enforce uppercase
      const upperValue = value.toUpperCase();

      // Allow gradual typing: R, RA, RA + digits (up to 13 digits after RA)
      const regex = /^(R|RA|RA\d{0,13})$/; 

      if (regex.test(upperValue) || upperValue === "") {
        setFormData((prev) => ({ ...prev, [name]: upperValue }));
      }
      return;
    }

    // Handle validation for phone number (max 10 digits)
    if (name === "phoneNumber") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) {
        setFormData((prev) => ({ ...prev, [name]: numericValue }));
      }
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleDomainChange = (
    domainType: "firstDomain" | "secondDomain",
    value: string
  ) => {
    setFormData((prev) => ({ ...prev, [domainType]: value }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.registrationNumber.trim())
      newErrors.registrationNumber = "Registration Number is required";
    if (!formData.phoneNumber.trim())
      newErrors.phoneNumber = "Phone Number is required";
    if (!formData.srmistEmail.trim())
      newErrors.srmistEmail = "SRMIST Email is required";

    if (
      formData.srmistEmail &&
      !formData.srmistEmail.includes("@srmist.edu.in")
    ) {
      newErrors.srmistEmail = "Please enter a valid SRMIST email address";
    }

    if (formData.phoneNumber && formData.phoneNumber.length !== 10) {
      newErrors.phoneNumber = "Phone number must be exactly 10 digits";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm()) {
      return;
    }

    if (!formData.firstDomain) {
      setSubmitMessage({ 
        type: 'error', 
        text: 'Please select your first domain' 
      });
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage(null);

    try {
      const result = await registerRecruitment({
        name: formData.name,
        registrationNumber: formData.registrationNumber,
        phoneNumber: formData.phoneNumber,
        srmistEmail: formData.srmistEmail,
        githubProfile: formData.githubProfile,
        linkedinProfile: formData.linkedinProfile,
        firstDomain: formData.firstDomain,
        secondDomain: formData.secondDomain,
      });

      if (result.success) {
        setSubmitMessage({ 
          type: 'success', 
          text: result.message || 'Registration successful!' 
        });
        
        // Reset form
        setFormData({
          name: "",
          registrationNumber: "",
          phoneNumber: "",
          srmistEmail: "",
          githubProfile: "",
          linkedinProfile: "",
          firstDomain: "",
          secondDomain: "",
        });
        setErrors({});
      } else {
        setSubmitMessage({ 
          type: 'error', 
          text: result.error || 'Registration failed. Please try again.' 
        });
      }
    } catch (error) {
      setSubmitMessage({ 
        type: 'error', 
        text: 'An unexpected error occurred. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const DomainOption: React.FC<DomainOptionProps> = ({
    name,
    value,
    selectedValue,
    onChange,
    label,
  }) => (
    <div className="flex items-center gap-3">
      <div
        className={`w-6 h-6 rounded-full border-2 cursor-pointer ${
          selectedValue === value
            ? "border-cyan-400 bg-cyan-400 flex items-center justify-center"
            : "border-gray-400"
        }`}
        onClick={() => onChange(name, value)}
      >
        {selectedValue === value && (
          <div className="w-3 h-3 rounded-full bg-white"></div>
        )}
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
                <label
                  htmlFor="name"
                  className="block text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 ml-2"
                >
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
                {errors.name && (
                  <p className="text-red-400 text-sm mt-2 ml-2">{errors.name}</p>
                )}
              </div>

              {/* Phone Number Field */}
              <div>
                <label
                  htmlFor="phoneNumber"
                  className="block text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 ml-2"
                >
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
                    maxLength={10}
                  />
                </div>
                {errors.phoneNumber && (
                  <p className="text-red-400 text-sm mt-2 ml-2">
                    {errors.phoneNumber}
                  </p>
                )}
              </div>

              {/* GitHub Profile */}
              <div>
                <label
                  htmlFor="githubProfile"
                  className="block text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 ml-2"
                >
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
                <label
                  htmlFor="registrationNumber"
                  className="block text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 ml-2"
                >
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
                  maxLength={15}
                />
                {errors.registrationNumber && (
                  <p className="text-red-400 text-sm mt-2 ml-2">
                    {errors.registrationNumber}
                  </p>
                )}
              </div>

              {/* SRMIST Email */}
              <div>
                <label
                  htmlFor="srmistEmail"
                  className="block text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 ml-2"
                >
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
                {errors.srmistEmail && (
                  <p className="text-red-400 text-sm mt-2 ml-2">
                    {errors.srmistEmail}
                  </p>
                )}
              </div>

              {/* LinkedIn Profile */}
              <div>
                <label
                  htmlFor="linkedinProfile"
                  className="block text-lg font-medium bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4 ml-2"
                >
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

          {/* First Domain */}
          <div className="mt-12 mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center mb-8">
              Choose Your First Domain*
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {["Technical", "Creatives", "Events", "Business"].map((domain) => (
                <DomainOption
                  key={domain}
                  name="firstDomain"
                  value={domain}
                  selectedValue={formData.firstDomain}
                  onChange={handleDomainChange}
                  label={domain}
                />
              ))}
            </div>
          </div>

          {/* Second Domain */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent text-center mb-8">
              Choose Your Second Domain
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {["Technical", "Creatives", "Events", "Business"].map((domain) => (
                <DomainOption
                  key={domain}
                  name="secondDomain"
                  value={domain}
                  selectedValue={formData.secondDomain}
                  onChange={handleDomainChange}
                  label={domain}
                />
              ))}
            </div>
          </div>

          {/* Submit Message */}
          {submitMessage && (
            <div className={`mt-8 p-4 rounded-lg text-center ${
              submitMessage.type === 'success' 
                ? 'bg-green-100 text-green-800 border border-green-300' 
                : 'bg-red-100 text-red-800 border border-red-300'
            }`}>
              {submitMessage.text}
            </div>
          )}

          {/* Submit Button */}
          <div className="mt-12 text-center">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`px-12 py-4 text-white text-xl font-semibold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${
                isSubmitting 
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-gradient-to-r from-cyan-400 to-blue-400 hover:scale-105'
              }`}
            >
              {isSubmitting ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
