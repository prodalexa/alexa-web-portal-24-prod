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
  const [focused, setFocused] = useState(false)

  return (
    <div className="flex flex-col gap-1 w-full">
      <span
        className={`flex items-center gap-1 font-medium font-[Montserrat]
        ${isMobile ? "text-[13px]" : "text-[16px]"}
        ${invalid ? "text-red-400" : "text-[#00DD73]"}`}
      >
        {label}
        {required && <span className="text-pink-400">*</span>}
      </span>

      <div
        className={`flex items-center h-[44px] rounded-lg border-2 px-3 bg-white transition
        ${
          invalid
            ? "border-red-500"
            : focused
            ? "border-[#00DD73]"
            : "border-gray-300"
        }`}
      >
        {prefix && (
          <span className="font-semibold text-gray-700 pr-3 border-r border-gray-300 mr-3 whitespace-nowrap text-sm">
            {prefix}
          </span>
        )}

        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => {
            setFocused(false)
            onBlur()
          }}
          className={`flex-1 outline-none text-black font-[Montserrat]
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

  const [message, setMessage] = useState("")
  const [isError, setIsError] = useState(false)

  const setTeamName = (v: string) => setForm((f) => ({ ...f, teamName: v }))

  const setMemberField = (idx: number, field: string, v: string) =>
    setForm((f) => ({
      ...f,
      members: f.members.map((m, i) =>
        i === idx ? { ...m, [field]: v } : m
      )
    }))

  const touchTeamName = () => setTouched((t) => ({ ...t, teamName: true }))

  const touchMember = (idx: number, field: string) =>
    setTouched((t) => ({
      ...t,
      members: t.members.map((m, i) =>
        i === idx ? { ...m, [field]: true } : m
      )
    }))

  const teamNameInvalid = touched.teamName && form.teamName.trim() === ""

  const memberInvalid = (idx: number) => {

    const m = form.members[idx]
    const t = touched.members[idx]
    const req = REQUIRED_MEMBERS[idx]

    const hasAny = !!(m.name || m.email || m.phone || m.regNo)
    const should = req || hasAny

    return {
      name: t.name && should && m.name.trim() === "",
      email: t.email && should && !validateEmail(m.email),
      phone: t.phone && should && !validatePhone(m.phone),
      regNo: t.regNo && should && !validateRegNo(m.regNo)
    }

  }

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

    setMessage("")

    setTouched({
      teamName: true,
      members: form.members.map(() => ({
        name: true,
        email: true,
        phone: true,
        regNo: true
      }))
    })

    if (!isFormValid()) return

    const payload = {

      team_name: form.teamName,

      members: form.members
        .filter((m: { name: string; email: string; phone: string; regNo: string }) => m.name && m.email && m.phone && m.regNo)
        .map((m: { name: string; email: string; phone: string; regNo: string }) => ({
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

        <h1 className="text-center text-white font-['Saira_Stencil_One'] text-[44px] md:text-[64px] mb-10">
          Team Details
        </h1>

        <div className="flex justify-center mb-8">
          <div className="w-full max-w-[360px]">
            <Field
              label="Team Name"
              required
              value={form.teamName}
              onChange={setTeamName}
              onBlur={touchTeamName}
              placeholder="Name"
              invalid={teamNameInvalid}
              errorMsg="Team name is required"
              isMobile={isMobile}
            />
          </div>
        </div>

        {MEMBER_LABELS.map((label, idx) => {

          const inv = memberInvalid(idx)
          const req = REQUIRED_MEMBERS[idx]

          return (
            <div key={idx} className="mb-8">

              <div className="flex items-center gap-1 text-[#00DD73] font-medium text-[16px] mb-3">
                {label}
                {req && <span className="text-pink-400">*</span>}
              </div>

              <div className="flex flex-col md:flex-row gap-4">

                <Field
                  label="Name"
                  required={req}
                  value={form.members[idx].name}
                  onChange={(v) => setMemberField(idx, "name", v)}
                  onBlur={() => touchMember(idx, "name")}
                  placeholder="Name"
                  invalid={inv.name}
                  errorMsg="Name is required"
                  isMobile={isMobile}
                />

                <Field
                  label="E-mail Address (SRM ID)"
                  required={req}
                  value={form.members[idx].email}
                  onChange={(v) => setMemberField(idx, "email", v)}
                  onBlur={() => touchMember(idx, "email")}
                  placeholder="example@srmist.edu.in"
                  invalid={inv.email}
                  errorMsg="Must end in @srmist.edu.in"
                  type="email"
                  isMobile={isMobile}
                />

              </div>

              <div className="flex flex-col md:flex-row gap-4 mt-4">

                <Field
                  label="Phone Number"
                  required={req}
                  value={form.members[idx].phone}
                  onChange={(v) =>
                    setMemberField(idx, "phone", v.replace(/\D/g, "").slice(0, 10))
                  }
                  onBlur={() => touchMember(idx, "phone")}
                  placeholder="0123456789"
                  invalid={inv.phone}
                  errorMsg="Must be exactly 10 digits"
                  type="tel"
                  prefix="+91"
                  isMobile={isMobile}
                />

                <Field
                  label="Register Number"
                  required={req}
                  value={form.members[idx].regNo}
                  onChange={(v) =>
                    setMemberField(idx, "regNo", v.toUpperCase().slice(0, 15))
                  }
                  onBlur={() => touchMember(idx, "regNo")}
                  placeholder="RAXXXXXXXXXXXXX"
                  invalid={inv.regNo}
                  errorMsg="RA + exactly 13 digits"
                  isMobile={isMobile}
                />

              </div>

            </div>
          )
        })}

        <div className="flex justify-center mt-10">

          <button
            onClick={handleSubmit}
            className="flex items-center bg-[#00DD73] text-white font-bold px-10 py-3 rounded-lg shadow-md hover:-translate-y-[2px] transition"
          >
            Pay & Register
            <span className="ml-2 text-lg font-black">›</span>
          </button>

        </div>

      </div>

    </div>
  )
}