"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { registerRecruitment } from "@/app/actions/registerRecruitments25";

const ToastContainer = dynamic(
  () => import("react-toastify").then((mod) => ({ default: mod.ToastContainer })),
  { ssr: false }
);

export default function RegistrationForm() {
  // 👇 registration status toggle (set to false to close)
  const registrationOpen = false;

  const [formData, setFormData] = useState({
    name: "",
    registrationNumber: "",
    phoneNumber: "",
    srmistEmail: "",
    githubProfile: "",
    linkedinProfile: "",
    firstDomain: "",
    secondDomain: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState<boolean | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!registrationOpen) return;
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!registrationOpen) return;
    // Disabled submission if registrations are closed
  };

  const DomainOption = ({
    name,
    value,
    selectedValue,
    onChange,
    label,
  }: {
    name: "firstDomain" | "secondDomain";
    value: string;
    selectedValue: string;
    onChange: (domainType: "firstDomain" | "secondDomain", value: string) => void;
    label: string;
  }) => (
    <div className="flex items-center gap-3 opacity-60 cursor-not-allowed">
      <div
        className={`w-6 h-6 rounded-full border-[3.5px] border-white bg-white`}
      ></div>
      <span className="text-white text-xl font-medium">{label}</span>
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
              Registration <br /> Closed
            </span>
            <span className="hidden sm:block">Registrations Closed</span>
          </h1>

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <label className="block text-base sm:text-lg font-medium font-montserrat text-white mb-2 sm:mb-4 ml-2">
                Name
              </label>
              <input
                type="text"
                disabled
                placeholder="Registrations Closed"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-200 font-montserrat border-0 rounded-xl sm:rounded-2xl text-gray-500 text-base sm:text-lg focus:ring-0 focus:outline-none shadow-inner cursor-not-allowed"
              />
            </div>

            {/* Registration Number */}
            <div>
              <label className="block text-base sm:text-lg font-medium font-montserrat text-white mb-2 sm:mb-4 ml-2">
                Register Number
              </label>
              <input
                type="text"
                disabled
                placeholder="Registrations Closed"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-200 font-montserrat border-0 rounded-xl sm:rounded-2xl text-gray-500 text-base sm:text-lg focus:ring-0 focus:outline-none shadow-inner cursor-not-allowed"
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-base sm:text-lg font-medium font-montserrat text-white mb-2 sm:mb-4 ml-2">
                Phone Number
              </label>
              <input
                type="tel"
                disabled
                placeholder="Registrations Closed"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-200 font-montserrat border-0 rounded-xl sm:rounded-2xl text-gray-500 text-base sm:text-lg focus:ring-0 focus:outline-none shadow-inner cursor-not-allowed"
              />
            </div>

            {/* SRMIST Email */}
            <div>
              <label className="block text-base sm:text-lg font-medium font-montserrat text-white mb-2 sm:mb-4 ml-2">
                SRMIST Email
              </label>
              <input
                type="email"
                disabled
                placeholder="Registrations Closed"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-200 font-montserrat border-0 rounded-xl sm:rounded-2xl text-gray-500 text-base sm:text-lg focus:ring-0 focus:outline-none shadow-inner cursor-not-allowed"
              />
            </div>

            {/* GitHub */}
            <div>
              <label className="block text-base sm:text-lg font-medium font-montserrat text-white mb-2 sm:mb-4 ml-2">
                GitHub Profile Link
              </label>
              <input
                type="text"
                disabled
                placeholder="Registrations Closed"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-200 font-montserrat border-0 rounded-xl sm:rounded-2xl text-gray-500 text-base sm:text-lg focus:ring-0 focus:outline-none shadow-inner cursor-not-allowed"
              />
            </div>

            {/* LinkedIn */}
            <div>
              <label className="block text-base sm:text-lg font-medium font-montserrat text-white mb-2 sm:mb-4 ml-2">
                LinkedIn Profile Link
              </label>
              <input
                type="text"
                disabled
                placeholder="Registrations Closed"
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-200 font-montserrat border-0 rounded-xl sm:rounded-2xl text-gray-500 text-base sm:text-lg focus:ring-0 focus:outline-none shadow-inner cursor-not-allowed"
              />
            </div>
          </form>

          {/* Domains */}
          <div className="mt-8 md:mt-12 mb-6 md:mb-8 opacity-60">
  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-montserrat text-white bg-clip-text text-transparent text-center mb-6 md:mb-8">
    Choose Your First Domain
  </h2>

  <div className="flex flex-col items-center gap-10 font-montserrat">
    {/* First Domain */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-16 md:gap-x-[20rem] gap-y-4 sm:gap-y-6 md:gap-y-8">
      {["Technical", "Creatives", "Events", "Business"].map((domain) => (
        <DomainOption
          key={`first-${domain}`}
          name="firstDomain"
          value={domain}
          selectedValue={formData.firstDomain}
          onChange={() => {}}
          label={domain}
        />
      ))}
    </div>

    {/* Second Domain */}
    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-montserrat text-white bg-clip-text text-transparent text-center mb-6 md:mb-8">
    Choose Your Second Domain
  </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 sm:gap-x-16 md:gap-x-[20rem] gap-y-4 sm:gap-y-6 md:gap-y-8">
      {["Technical", "Creatives", "Events", "Business"].map((domain) => (
        <DomainOption
          key={`second-${domain}`}
          name="secondDomain"
          value={domain}
          selectedValue={formData.secondDomain}
          onChange={() => {}}
          label={domain}
        />
      ))}
    </div>
  </div>
</div>


          {/* Submit */}
          <div className="mt-8 md:mt-12 flex justify-center">
            <button
              disabled
              className="relative px-[70px] py-4 text-white text-xl font-semibold rounded-3xl shadow-lg border border-white bg-gray-400 cursor-not-allowed font-montserrat"
            >
              Registrations Closed
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
