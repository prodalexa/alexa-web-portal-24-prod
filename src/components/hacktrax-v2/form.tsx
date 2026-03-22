"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

const validateEmail = (v: string) => /^[^\s@]+@srmist\.edu\.in$/.test(v.trim())
const validatePhone = (v: string) => /^\d{10}$/.test(v.trim())
const validateRegNo = (v: string) => /^RA\d{13}$/.test(v.trim())

interface FieldProps {
  label: string
  required?: boolean
  value: string
  onChange: (v: string) => void
  onBlur: () => void
  placeholder: string
  invalid: boolean
  errorMsg: string
  type?: string
  prefix?: string
  isMobile: boolean
}

function Field({
  label,
  required,
  value,
  onChange,
  onBlur,
  placeholder,
  invalid,
  errorMsg,
  type = "text",
  prefix,
  isMobile
}: FieldProps) {

  return (
    <div className="flex flex-col gap-1 w-full opacity-60">
      <span
        className={`flex items-center gap-1 font-medium font-[Montserrat]
        ${isMobile ? "text-[13px]" : "text-[16px]"}
        text-gray-400`}
      >
        {label}
        {required && <span className="text-pink-400">*</span>}
      </span>

      <div className="flex items-center h-[44px] rounded-lg border-2 px-3 bg-gray-200 border-gray-300 cursor-not-allowed">
        {prefix && (
          <span className="font-semibold text-gray-500 pr-3 border-r border-gray-300 mr-3 whitespace-nowrap text-sm">
            {prefix}
          </span>
        )}

        <input
          type={type}
          value={value}
          placeholder="Registrations Closed"
          disabled
          className={`flex-1 outline-none text-gray-500 font-[Montserrat] bg-transparent
          ${isMobile ? "text-[13px]" : "text-[14px]"}`}
        />
      </div>

      {invalid && (
        <span className="text-[11px] text-red-400 font-[Montserrat]">
          {errorMsg}
        </span>
      )}
    </div>
  )
}

interface MemberForm {
  name: string
  email: string
  phone: string
  regNo: string
}

interface FormState {
  teamName: string
  members: MemberForm[]
}

const MEMBER_LABELS = ["Member 1 (Lead)", "Member 2", "Member 3", "Member 4"]
const REQUIRED_MEMBERS = [true, true, false, false]

const emptyMember = (): MemberForm => ({ name: "", email: "", phone: "", regNo: "" })
const emptyTouched = () => ({ name: false, email: false, phone: false, regNo: false })

export default function Form() {

  const router = useRouter()

  const registrationOpen = false

  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  const [form, setForm] = useState<FormState>(() => {
    if (typeof window !== "undefined") {
      const saved = sessionStorage.getItem("hacktraxFormData")
      if (saved) return JSON.parse(saved) as FormState
    }

    return {
      teamName: "",
      members: [emptyMember(), emptyMember(), emptyMember(), emptyMember()]
    }
  })

  useEffect(() => {
    sessionStorage.setItem("hacktraxFormData", JSON.stringify(form))
  }, [form])

  const [touched, setTouched] = useState({
    teamName: false,
    members: [emptyTouched(), emptyTouched(), emptyTouched(), emptyTouched()]
  })

  const isFormValid = () => {
    if (form.teamName.trim() === "") return false

    for (let i = 0; i < 4; i++) {
      const m = form.members[i]

      if (!REQUIRED_MEMBERS[i] && !(m.name || m.email || m.phone || m.regNo))
        continue

      if (
        !m.name.trim() ||
        !validateEmail(m.email) ||
        !validatePhone(m.phone) ||
        !validateRegNo(m.regNo)
      )
        return false
    }

    return true
  }

  const handleSubmit = () => {

    if (!registrationOpen) return

    if (!isFormValid()) return

    const payload = {
      team_name: form.teamName,
      members: form.members
        .filter((m) => m.name && m.email && m.phone && m.regNo)
        .map((m) => ({
          name: m.name,
          email_id: m.email,
          phone_number: m.phone,
          registration_number: m.regNo
        }))
    }

    sessionStorage.setItem("hacktraxTeamData", JSON.stringify(payload))
    router.push("/hacktrax-v2/payment")
  }

  return (
    <div
      id="formSection"
      className="min-h-fit w-full flex justify-center px-6 py-14 bg-[linear-gradient(to_right,#1F002F_0%,#3a0b60_20%,#5d0b8c_50%,#3a0b60_80%,#1F002F_100%)]"
    >

      <div className="w-full max-w-[1200px]">

        
        <h1 className="text-center text-white font-['Saira_Stencil_One'] text-[44px] md:text-[64px] mb-4">
          Registrations Closed
        </h1>

        <p className="text-center text-gray-300 mb-10 font-[Montserrat]">
          You can no longer submit this form.
        </p>

        <div className="flex justify-center mb-8">
          <div className="w-full max-w-[360px]">
            <Field
              label="Team Name"
              required
              value={form.teamName}
              onChange={() => {}}
              onBlur={() => {}}
              placeholder="Name"
              invalid={false}
              errorMsg=""
              isMobile={isMobile}
            />
          </div>
        </div>

        {MEMBER_LABELS.map((label, idx) => {

          const req = REQUIRED_MEMBERS[idx]

          return (
            <div key={idx} className="mb-8 opacity-60">

              <div className="flex items-center gap-1 text-gray-400 font-medium text-[16px] mb-3">
                {label}
                {req && <span className="text-pink-400">*</span>}
              </div>

              <div className="flex flex-col md:flex-row gap-4">

                <Field label="Name" required={req} value="" onChange={()=>{}} onBlur={()=>{}} placeholder="" invalid={false} errorMsg="" isMobile={isMobile}/>
                <Field label="E-mail Address (SRM ID)" required={req} value="" onChange={()=>{}} onBlur={()=>{}} placeholder="" invalid={false} errorMsg="" type="email" isMobile={isMobile}/>

              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-4">

                <Field label="Phone Number" required={req} value="" onChange={()=>{}} onBlur={()=>{}} placeholder="" invalid={false} errorMsg="" type="tel" prefix="+91" isMobile={isMobile}/>
                <Field label="Register Number" required={req} value="" onChange={()=>{}} onBlur={()=>{}} placeholder="" invalid={false} errorMsg="" isMobile={isMobile}/>

              </div>

            </div>
          )
        })}

        <div className="flex justify-center mt-10">
          <button
            disabled
            className="flex items-center bg-gray-500 text-white font-bold px-10 py-3 rounded-lg shadow-md cursor-not-allowed"
          >
            Registrations Closed
          </button>
        </div>

      </div>

    </div>
  )
}