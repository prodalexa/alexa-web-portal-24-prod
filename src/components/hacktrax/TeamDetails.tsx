"use client";

import { registerTeam } from "@/lib/actions/hacktrax";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";
import { z } from "zod";

// Submit button component with loading state
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-hack_orange text-white font-bold py-4 px-8 rounded-lg hover:bg-opacity-90 text-xl mt-8 flex items-center gap-2 disabled:opacity-70"
    >
      {pending ? "Processing..." : "Pay & Register"}
      <svg xmlns="http://www.w3.org/2000/svg" width="8" height="18" viewBox="0 0 8 18" fill="none" className="ml-2">
        <path d="M0 14.9665L5 8.99981L0 3.03315L1 0.646484L8 8.99981L1 17.3531L0 14.9665Z" fill="white" />
      </svg>
    </button>
  );
}

// Define form field component to reduce repetition
const FormField = ({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  error = null,
  prefix = null
}: {
  label: string;
  name: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  error?: string | null;
  prefix?: string | null;
}) => (
  <div>
    <h2 className="text-hack_orange text-lg md:text-xl mb-2">{label}{required && "*"}</h2>
    {prefix ? (
      <div className="flex w-full bg-white rounded-lg">
        <span className="p-3 md:p-4 text-black border-r border-black">{prefix}</span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full p-3 md:p-4 text-black rounded-r-lg focus:outline-none focus:ring-2 focus:ring-hack_orange"
          aria-invalid={!!error}
        />
      </div>
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-white rounded-lg p-3 md:p-4 text-black focus:outline-none focus:ring-2 focus:ring-hack_orange"
        aria-invalid={!!error}
      />
    )}
    {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
  </div>
);


const TeamDetails = () => {
  // Initialize form state with the server action
  const [formState, formAction] = useFormState(registerTeam, {
    success: false,
    message: "",
    errors: {}
  });

  // Define team members data structure to enable looping
  const members = [
    { number: 1, label: "Member 1 (Lead)", required: true },
    { number: 2, label: "Member 2", required: true },
    { number: 3, label: "Member 3", required: false },
    { number: 4, label: "Member 4", required: false },
  ];

  // Success message handling
  if (formState.success) {
    return (
      <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 md:px-8 mt-16 md:mt-32 bg-hack_bg">
        <h1 className="text-white text-4xl md:text-6xl mb-8 md:mb-12 text-center font-sairaStencilOne">TEAM DETAILS</h1>
        <div className="bg-white p-8 rounded-lg text-center">
          <h2 className="text-hack_orange text-2xl mb-4">Success!</h2>
          <p className="text-black text-lg">{formState.message}</p>
        </div>
      </div>
    );
  }

  // Helper function to get field error
  interface FormErrors {
    [field: string]: string[];
  }

  interface FormState {
    success: boolean;
    message: string;
    errors: FormErrors;
  }

  const getError = (field: string): string | null => {
    if (!formState.errors || !formState.errors[field]) return null;
    return formState.errors[field][0];
  };

  // Helper function to get nested member field error
  const getMemberError = (memberIndex: number, field: "name" | "email" | "phone" | "registrationNumber"): string | null => {
    const path = `members.${memberIndex - 1}.${field}`;
    return getError(path);
  }

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 md:px-8 mt-16 md:mt-32 bg-hack_bg">
      <h1 className="text-white text-4xl md:text-6xl mb-8 md:mb-12 text-center font-sairaStencilOne">TEAM DETAILS</h1>

      {formState.message && !formState.success && (
        <div className="w-full p-4 mb-6 bg-red-100 border border-red-400 text-red-700 rounded-lg">
          {formState.message}
        </div>
      )}

      <form action={formAction} className="w-full space-y-6 md:space-y-8 font-monsterrat">
        {/* Team Name */}
        <div className="grid justify-center w-full">
          <FormField
            label="Team Name"
            name="teamName"
            placeholder="Enter team name"
            required={true}
            error={getError('teamName')}
          />
        </div>

        <div className="space-y-6 md:space-y-8">
          <div className="w-full">
            {/* Map through members to generate member form sections */}
            {members.map((member, index) => (
              <React.Fragment key={member.number}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <FormField
                    label={member.label}
                    name={`member${member.number}Name`}
                    placeholder="Name"
                    required={member.required}
                    error={getMemberError(member.number, 'name')}
                  />
                  <FormField
                    label="SRM Email ID"
                    name={`member${member.number}Email`}
                    type="email"
                    placeholder="xy1234@srmist.edu.in"
                    required={member.required}
                    error={getMemberError(member.number, 'email')}
                  />
                  <div>
                    <h2 className="text-hack_orange text-lg md:text-xl mb-2">
                      Phone Number{member.required && "*"}
                    </h2>
                    <div className="flex w-full bg-white rounded-lg">
                      <span className="p-3 md:p-4 text-black border-r border-black">+91</span>
                      <input
                        type="tel"
                        name={`member${member.number}Phone`}
                        placeholder="1234567890"
                        className="w-full p-3 md:p-4 text-black rounded-r-lg focus:outline-none focus:ring-2 focus:ring-hack_orange"
                        aria-invalid={!!getMemberError(member.number, 'phone')}
                      />
                    </div>
                    {getMemberError(member.number, 'phone') && (
                      <p className="text-red-500 text-sm mt-1">{getMemberError(member.number, 'phone')}</p>
                    )}
                  </div>
                  <FormField
                    label="Registration Number"
                    name={`member${member.number}RegistrationNumber`}
                    placeholder="RAXXXXXXXXXXXXXX"
                    required={member.required}
                    error={getMemberError(member.number, 'registrationNumber')}
                  />
                </div>
                {/* Add separator if not the last member */}
                {member.number < members.length && (
                  <div className="w-full h-[1px] bg-white my-8"></div>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        <div className="flex justify-center w-full">
          <SubmitButton />
        </div>
      </form>
    </div>
  );
};

export default TeamDetails;