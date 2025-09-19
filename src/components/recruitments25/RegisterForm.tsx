"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
// import { registerRecruitment } from "@/app/actions/registerRecruitments25";

const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => ({ default: mod.ToastContainer })),
  { ssr: false }
);

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

type FormErrors = {
  name?: string;
  registrationNumber?: string;
  phoneNumber?: string;
  srmistEmail?: string;
  githubProfile?: string;
  firstDomain?: string;
  secondDomain?: string;
};

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
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target as { name: keyof FormErrors; value: string };

    if (name === "name") {
      const lettersSpacesValue = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData((prev) => ({ ...prev, [name]: lettersSpacesValue }));
      if (errors.name) setErrors((prev) => ({ ...prev, [name]: "" }));
      return;
    }

    if (name === "registrationNumber") {
      const upperValue = value.toUpperCase().replace(/\s/g, "");
      setFormData((prev) => ({ ...prev, [name]: upperValue }));
      return;
    }

    if (name === "phoneNumber") {
      const numericValue = value.replace(/\D/g, "");
      if (numericValue.length <= 10) setFormData((prev) => ({ ...prev, [name]: numericValue }));
      return;
    }

    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleDomainChange = (domainType: "firstDomain" | "secondDomain", value: string) => {
    setFormData((prev) => ({
    ...prev,
    [domainType]: prev[domainType] === value ? "" : value,
  }));
    if (errors[domainType]) setErrors((prev) => ({ ...prev, [domainType]: "" }));
    if (errors.githubProfile) setErrors((prev) => ({ ...prev, githubProfile: "" }));
  };

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    else if (!/^[a-zA-Z\s]+$/.test(formData.name)) newErrors.name = "Name can only contain letters and spaces";

    if (!/^RA\d{13}$/.test(formData.registrationNumber)) newErrors.registrationNumber = "Invalid Registration Number";

    if (!/^\d{10}$/.test(formData.phoneNumber)) newErrors.phoneNumber = "Phone Number must be exactly 10 digits";

    if (!/^[\w.-]+@srmist\.edu\.in$/.test(formData.srmistEmail)) newErrors.srmistEmail = "Please enter a valid SRMIST email address";

    if (!formData.firstDomain) newErrors.firstDomain = "Please select your first domain";

    if (formData.secondDomain && formData.secondDomain === formData.firstDomain) {
      newErrors.secondDomain = "Second domain cannot be the same as first domain";
    }

    if (formData.firstDomain === "Technical" || formData.secondDomain === "Technical") {
      if (!formData.githubProfile.trim()) {
        newErrors.githubProfile = "GitHub profile is required for Technical domain";
      } else if (!/^(https?:\/\/)?(www\.)?github\.com\/[\w-]+\/?$/.test(formData.githubProfile)) {
        newErrors.githubProfile = "Enter a valid GitHub URL containing github.com/";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  setSubmitSuccess(null);

  if (validateForm()) {
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

      if (result?.success) {
        setSubmitSuccess(true);
        toast.success("Registration successful!", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
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
        setSubmitSuccess(false);
        toast.error(result?.error || "Registration failed. Please try again.", {
          position: "bottom-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      }
    } catch (error) {
      setSubmitSuccess(false);
      toast.error("An unexpected error occurred. Please try again.", {
        position: "bottom-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    }
  } else {
    
    toast.error("Please correct all the highlighted errors.", {
      position: "bottom-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  }

  setIsSubmitting(false);
};

  const DomainOption: React.FC<DomainOptionProps> = ({ name, value, selectedValue, onChange, label }) => (
    <div className="flex items-center gap-3">
      <div
        className={`w-6 h-6 rounded-full border-[3.5px] cursor-pointer ${
          selectedValue === value ? "bg-[#00B5FF] flex items-center justify-center" : "border-white bg-white"
        }`}
        onClick={() => onChange(name, value)}
      >
        {selectedValue === value && <div className="w-3 h-3 rounded-full"></div>}
      </div>
      <span
        className="text-white text-xl font-medium cursor-pointer"
        onClick={() => onChange(name, value)}
      >
        {label}
      </span>
    </div>
  );

  return (
    <div className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6">
      <div className="relative z-10 w-full max-w-7xl">
        <div className="bg-transparent p-4 sm:p-6 md:p-8">
          <h1
            className="text-5xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-16 font-montserrat-alternates pb-2 text-transparent bg-clip-text leading-tight"
            style={{ backgroundImage: "linear-gradient(90deg, #00B5FF 0%, #00CDC1 100%)" }}
          >
            <span className="block sm:hidden">
              Registration <br /> Form
            </span>
            <span className="hidden sm:block">Registration Form</span>
          </h1>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-base sm:text-lg font-medium font-montserrat text-white mb-2 sm:mb-4 ml-2">
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white font-montserrat bg-opacity-90 border-2 rounded-xl sm:rounded-2xl text-gray-800 placeholder-gray-400 text-base sm:text-lg focus:ring-0 focus:outline-none shadow-lg ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Full Name"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1 ml-2">{errors.name}</p>}
            </div>

            {/* Registration Number */}
            <div>
              <label htmlFor="registrationNumber" className="block text-base sm:text-lg font-medium font-montserrat text-white mb-2 sm:mb-4 ml-2">
                Register Number*
              </label>
              <input
                type="text"
                id="registrationNumber"
                name="registrationNumber"
                value={formData.registrationNumber}
                onChange={handleInputChange}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white font-montserrat bg-opacity-90 border-2 rounded-xl sm:rounded-2xl text-gray-800 placeholder-gray-400 text-base sm:text-lg focus:ring-0 focus:outline-none shadow-lg ${
                  errors.registrationNumber ? "border-red-500" : ""
                }`}
                placeholder="RAXXXXXXXXXXXXX"
                maxLength={15}
              />
              {errors.registrationNumber && <p className="text-red-500 text-sm mt-1 ml-2">{errors.registrationNumber}</p>}
            </div>

            {/* Phone Number */}
            <div>
              <label htmlFor="phoneNumber" className="block text-base sm:text-lg font-medium font-montserrat text-white mb-2 sm:mb-4 ml-2">
                Phone Number*
              </label>
              <div
                className={`relative flex items-center rounded-xl sm:rounded-2xl bg-white bg-opacity-90 overflow-hidden shadow-lg ${
                  errors.phoneNumber ? "border-2 border-red-500" : ""
                }`}
              >
                <span className="pl-4 sm:pl-6 pr-2 sm:pr-3 py-3 sm:py-4 text-black text-base sm:text-lg font-medium font-montserrat relative after:content-[''] after:absolute after:right-0 after:top-1/2 after:-translate-y-1/2 after:w-[1px] after:h-4 sm:after:h-6 after:bg-gray-400">
                  +91&nbsp;
                </span>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  value={formData.phoneNumber}
                  onChange={handleInputChange}
                  className="flex-1 px-2 sm:px-3 py-3 sm:py-4 text-gray-800 font-montserrat placeholder-gray-400 text-base sm:text-lg focus:ring-0 focus:outline-none bg-transparent"
                  placeholder="012 345 6789"
                  maxLength={10}
                />
              </div>
              {errors.phoneNumber && <p className="text-red-500 text-sm mt-1 ml-2">{errors.phoneNumber}</p>}
            </div>

            {/* SRMIST Email */}
            <div>
              <label htmlFor="srmistEmail" className="block text-base sm:text-lg font-medium font-montserrat text-white mb-2 sm:mb-4 ml-2">
                SRMIST Email*
              </label>
              <input
                type="email"
                id="srmistEmail"
                name="srmistEmail"
                value={formData.srmistEmail}
                onChange={handleInputChange}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white font-montserrat bg-opacity-90 border-2 rounded-xl sm:rounded-2xl text-gray-800 placeholder-gray-400 text-base sm:text-lg focus:ring-0 focus:outline-none shadow-lg ${
                  errors.srmistEmail ? "border-red-500" : ""
                }`}
                placeholder="xyz@srmist.edu.in"
              />
              {errors.srmistEmail && <p className="text-red-500 text-sm mt-1 ml-2">{errors.srmistEmail}</p>}
            </div>

            {/* GitHub */}
            <div>
              <label htmlFor="githubProfile" className="block text-base sm:text-lg font-medium font-montserrat text-white mb-2 sm:mb-4 ml-2">
                Github Profile Link
              </label>
              <input
                type="url"
                id="githubProfile"
                name="githubProfile"
                value={formData.githubProfile}
                onChange={handleInputChange}
                className={`w-full px-4 sm:px-6 py-3 sm:py-4 bg-white font-montserrat bg-opacity-90 border-0 rounded-xl sm:rounded-2xl text-gray-800 placeholder-gray-400 text-base sm:text-lg focus:ring-0 focus:outline-none shadow-lg ${
                  errors.githubProfile ? "border-2 border-red-500" : ""
                }`}
                placeholder="Optional"
              />
              {errors.githubProfile && <p className="text-red-500 text-sm mt-1 ml-2">{errors.githubProfile}</p>}
            </div>

            {/* LinkedIn */}
            <div>
              <label htmlFor="linkedinProfile" className="block text-base sm:text-lg font-medium font-montserrat text-white mb-2 sm:mb-4 ml-2">
                LinkedIn Profile Link
              </label>
              <input
                type="url"
                id="linkedinProfile"
                name="linkedinProfile"
                value={formData.linkedinProfile}
                onChange={handleInputChange}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-white font-montserrat bg-opacity-90 border-0 rounded-xl sm:rounded-2xl text-gray-800 placeholder-gray-400 text-base sm:text-lg focus:ring-0 focus:outline-none shadow-lg"
                placeholder="Optional"
              />
            </div>
          </form>

          {/* Domains */}
          <div className="mt-8 md:mt-12 mb-6 md:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-montserrat text-white bg-clip-text text-transparent text-center mb-6 md:mb-8">
              Choose Your First Domain*
            </h2>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-16 md:gap-x-[20rem] gap-y-4 sm:gap-y-6 md:gap-y-8 font-montserrat">
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
            {errors.firstDomain && <p className="text-red-500 text-sm mt-2 text-center">{errors.firstDomain}</p>}
          </div>

          <div className="mt-8 md:mt-12">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white font-montserrat bg-clip-text text-transparent text-center mb-6 md:mb-8">
              Choose Your Second Domain
            </h3>
            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-16 md:gap-x-[20rem] gap-y-4 sm:gap-y-6 md:gap-y-8 font-montserrat">
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
            {errors.secondDomain && <p className="text-red-500 text-sm mt-2 text-center">{errors.secondDomain}</p>}
          </div>

          {/* Submit */}
          <div className="mt-8 md:mt-12 flex justify-center">
            <button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className={`relative px-[70px] py-4 text-white text-xl font-semibold rounded-3xl shadow-lg transition-all duration-300 border border-white flex items-center justify-center hover:scale-105 ${
                isSubmitting ? "opacity-50 cursor-not-allowed" : "hover:shadow-xl font-montserrat"
              } bg-[linear-gradient(90deg,#00B5FF_0%,#00CDC1_100%)]`}
            >
              <span>{isSubmitting ? "Submitting..." : "Submit"}</span>
              {!isSubmitting && (
                <img
                  src="/recruitments25/RightArrow.svg"
                  alt="Right Arrow"
                  className="absolute"
                  style={{
                    top: "50%",
                    right: "8px",
                    transform: "translateY(-50%)",
                    width: "20px",
                    height: "16px",
                  }}
                />
              )}
            </button>

            <ToastContainer
              position="bottom-center"
              autoClose={3000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="colored"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
