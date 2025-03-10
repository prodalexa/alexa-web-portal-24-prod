"use client";
import { registerTeam } from "@/lib/actions/carrynclutch";
import Image from "next/image";
import React from "react";
import { useFormState, useFormStatus } from "react-dom";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="bg-gradient-to-r from-[#460156] to-[#9902BC] text-white font-bold py-4 px-12 text-lg rounded-xl hover:bg-opacity-90 transition-opacity border-4 border-white inline-flex items-center"
    >
      <span>{pending ? "Processing..." : "Pay & Register"}</span>
      <Image
        src="/carrynclutch/Chevron_Right.png"
        alt="Chevron Right"
        height={10}
        width={10}
        className="ml-4 object-contain"
      />
    </button>
  )
}

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
    <label className="block text-white text-lg mb-2">{label}{required && "*"}</label>
    {prefix ? (
      <div className="flex">
        <span className="bg-gaming_form_bg border border-white/30 rounded-l-lg px-4 py-3 text-white">{prefix}</span>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          className="w-full bg-gaming_form_bg border border-white/30 border-l-0 rounded-r-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
          aria-invalid={!!error}
        />
      </div>
    ) : (
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
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
    { number: 1, label: "Player 1 (Lead)", required: true },
    { number: 2, label: "Player 2", required: true },
    { number: 3, label: "Player 3", required: true },
    { number: 4, label: "Player 4", required: true },
    { number: 5, label: "Player 5", required: true },
    { number: 6, label: "Player 6", required: false }
  ];

  // Success message handling
  if (formState.success) {
    return (
      <div className="relative w-screen min-h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-white text-4xl md:text-6xl font-bold text-center font-monsterrat tracking-wider">
            Registration Successful!
          </h1>
          <p className="text-white text-lg md:text-xl text-center font-monsterrat tracking-wider">
            {formState.message}
          </p>
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
  const getMemberError = (memberIndex: number, field: "name" | "email" | "phoneNumber" | "riotId"): string | null => {
    const path = `members.${memberIndex - 1}.${field}`;
    return getError(path);
  }

  return (
    <div className="relative w-screen md:min-h-screen flex flex-col overflow-hidden -mt-72 md:mt-0">
      <div className="relative h-[25vh] md:h-[50vh] flex items-center justify-center">
        <Image
          src="/carrynclutch/Border.png"
          alt="Border"
          width={1920}
          height={1080}
          className="absolute w-[75%] md:w-[50%] h-[120%] object-contain pointer-events-none"
          priority
        />
        <h1 className="relative z-10 text-white text-4xl md:text-6xl font-valorant text-center font-monsterrat tracking-wider px-16">
          TEAM DETAILS
        </h1>
      </div>

      <div className="relative z-10 w-full max-w-4xl mx-auto px-4 md:px-8">
        {formState.message && !formState.success && (
          <div className="w-full p-4 mb-6 bg-red-900/50 border border-red-400 text-red-100 rounded-lg">
            {formState.message}
          </div>
        )}

        <form action={formAction} className="space-y-8 font-monsterrat">
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <FormField
                label="Team Name"
                name="teamName"
                placeholder="Team Name"
                required={true}
                error={getError('teamName')}
              />
              <div>
                <label className="block text-white text-lg mb-2">Campus*</label>
                <select
                  name="campus"
                  className="w-full bg-gaming_form_bg border border-white/30 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white appearance-none"
                >
                  <option value="SRMIST">SRMIST</option>
                </select>
                {getError('campus') && <p className="text-red-500 text-sm mt-1">{getError('campus')}</p>}
              </div>
            </div>

            {/* Map through members to generate member form sections */}
            {members.map((member) => (
              <React.Fragment key={member.number}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    label={member.label}
                    name={`member${member.number}Name`}
                    placeholder="Name"
                    required={member.required}
                    error={getMemberError(member.number, 'name')}
                  />
                  <FormField
                    label="Riot ID"
                    name={`member${member.number}RiotId`}
                    placeholder="EarlGreyTeemo#sip"
                    required={member.required}
                    error={getMemberError(member.number, 'riotId')}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-white text-lg mb-2">
                      Phone Number{member.required && "*"}
                    </label>
                    <div className="flex">
                      <span className="bg-gaming_form_bg border border-white/30 rounded-l-lg px-4 py-3 text-white">+91</span>
                      <input
                        type="tel"
                        name={`member${member.number}PhoneNumber`}
                        placeholder="012 345 6789"
                        className="w-full bg-gaming_form_bg border border-white/30 border-l-0 rounded-r-lg px-4 py-3 text-white placeholder-white/50 focus:outline-none focus:border-white"
                        aria-invalid={!!getMemberError(member.number, 'phoneNumber')}
                      />
                    </div>
                    {getMemberError(member.number, 'phoneNumber') && (
                      <p className="text-red-500 text-sm mt-1">{getMemberError(member.number, 'phoneNumber')}</p>
                    )}
                  </div>
                  <FormField
                    label="Email"
                    name={`member${member.number}Email`}
                    type="email"
                    placeholder={member.number === 1 ? "xy1234@srmist.edu.in" : "xyz@gmail.com"}
                    required={member.required}
                    error={getMemberError(member.number, 'email')}
                  />
                </div>
              </React.Fragment>
            ))}
          </div>

          <div className="w-full flex justify-center pt-8">
            <SubmitButton />
          </div>
        </form>
      </div>
    </div>
  );
};

export default TeamDetails;