"use client";

import { useState, useEffect } from "react";

/* ─── Validation ─────────────────────────────────────────────── */
const validateEmail = (v: string) => /^[^\s@]+@srmist\.edu\.in$/.test(v.trim());
const validatePhone = (v: string) => /^\d{10}$/.test(v.trim());
const validateRegNo = (v: string) => /^RA\d{13}$/.test(v.trim());

/* ─── Field Component ────────────────────────────────────────── */
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
  isMobile,
}: any) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 4 }}>
      <span
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: 500,
          fontSize: isMobile ? 13 : 16,
          lineHeight: isMobile ? "22px" : "28px",
          letterSpacing: "0.2px",
          color: invalid ? "#FF6B6B" : "#00DD73",
          display: "flex",
          alignItems: "center",
          gap: 2,
        }}
      >
        {label}
        {required && <span style={{ color: "#00DD73" }}>*</span>}
      </span>

      <div
        style={{
          height: 44,
          boxSizing: "border-box",
          border: `2px solid ${invalid ? "#FF4D4D" : focused ? "#00DD73" : "#cccccc"}`,
          borderRadius: 8,
          background: "#ffffff",
          padding: isMobile ? "0 12px" : "0 14px",
          display: "flex",
          alignItems: "center",
          transition: "border-color 0.2s",
        }}
      >
        {prefix && (
          <span
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: isMobile ? 13 : 14,
              fontWeight: 600,
              color: "#333333",
              marginRight: isMobile ? 8 : 10,
              paddingRight: isMobile ? 8 : 10,
              borderRight: "1px solid #cccccc",
              whiteSpace: "nowrap",
            }}
          >
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
            setFocused(false);
            onBlur();
          }}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#111111",
            fontSize: isMobile ? 13 : 14,
            fontFamily: "Montserrat, sans-serif",
            padding: 0,
            caretColor: "#00DD73",
            minWidth: 0,
          }}
        />
      </div>

      {invalid && (
        <span
          style={{
            fontSize: isMobile ? 10 : 11,
            color: "#FF6B6B",
            fontFamily: "Montserrat, sans-serif",
          }}
        >
          {errorMsg}
        </span>
      )}
    </div>
  );
}

/* ─── Constants ──────────────────────────────────────────────── */
const MEMBER_LABELS = ["Member 1 (Lead)", "Member 2", "Member 3", "Member 4"];
const REQUIRED_MEMBERS = [true, true, false, false];

const emptyMember = () => ({
  name: "",
  email: "",
  phone: "",
  regNo: "",
});

const emptyTouched = () => ({
  name: false,
  email: false,
  phone: false,
  regNo: false,
});

/* ─── Main Component ─────────────────────────────────────────── */
export default function TeamDetails() {

  useEffect(() => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href =
      "https://fonts.googleapis.com/css2?family=Saira+Stencil+One&family=Montserrat:wght@400;500;600&display=swap";
    document.head.appendChild(link);
  }, []);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const [form, setForm] = useState({
    teamName: "",
    members: [emptyMember(), emptyMember(), emptyMember(), emptyMember()],
  });

  const [touched, setTouched] = useState({
    teamName: false,
    members: [emptyTouched(), emptyTouched(), emptyTouched(), emptyTouched()],
  });

  const [submitted, setSubmitted] = useState(false);

  const setTeamName = (v: string) =>
    setForm((f) => ({ ...f, teamName: v }));

  const setMemberField = (idx: number, field: string, v: string) =>
    setForm((f) => ({
      ...f,
      members: f.members.map((m, i) =>
        i === idx ? { ...m, [field]: v } : m
      ),
    }));

  const touchTeamName = () =>
    setTouched((t) => ({ ...t, teamName: true }));

  const touchMember = (idx: number, field: string) =>
    setTouched((t) => ({
      ...t,
      members: t.members.map((m, i) =>
        i === idx ? { ...m, [field]: true } : m
      ),
    }));

  const teamNameInvalid =
    touched.teamName && form.teamName.trim() === "";

  const memberInvalid = (idx: number) => {
    const m = form.members[idx];
    const t = touched.members[idx];
    const req = REQUIRED_MEMBERS[idx];
    const hasAny = !!(m.name || m.email || m.phone || m.regNo);
    const should = req || hasAny;

    return {
      name: t.name && should && m.name.trim() === "",
      email: t.email && should && !validateEmail(m.email),
      phone: t.phone && should && !validatePhone(m.phone),
      regNo: t.regNo && should && !validateRegNo(m.regNo),
    };
  };

  const isFormValid = () => {
    if (form.teamName.trim() === "") return false;

    for (let i = 0; i < 4; i++) {
      const m = form.members[i];

      if (!REQUIRED_MEMBERS[i] && !(m.name || m.email || m.phone || m.regNo))
        continue;

      if (
        !m.name.trim() ||
        !validateEmail(m.email) ||
        !validatePhone(m.phone) ||
        !validateRegNo(m.regNo)
      )
        return false;
    }

    return true;
  };

  const handleSubmit = () => {
    setTouched({
      teamName: true,
      members: form.members.map(() => ({
        name: true,
        email: true,
        phone: true,
        regNo: true,
      })),
    });

    if (isFormValid()) {
      setSubmitted(true);
    }
  };

  if (submitted) {
    return (
      <div style={{ padding: 80, textAlign: "center", color: "white" }}>
        <h2>Registration Submitted!</h2>
        <p>Your team has been registered successfully.</p>
      </div>
    );
  }

  return (
    <div style={{ padding: 40, paddingTop: 10, maxWidth: 800, margin: "auto" }}>
      <h1 style={{ color: "white", textAlign: "center" }}>
        Team Details
      </h1>

      <Field
        label="Team Name"
        required
        value={form.teamName}
        onChange={setTeamName}
        onBlur={touchTeamName}
        placeholder="Team Name"
        invalid={teamNameInvalid}
        errorMsg="Team name required"
      />

      {MEMBER_LABELS.map((label, idx) => {
        const inv = memberInvalid(idx);

        return (
          <div key={idx} style={{ marginTop: 30 }}>
            <h3 style={{ color: "#00DD73" }}>{label}</h3>

            <Field
              label="Name"
              required={REQUIRED_MEMBERS[idx]}
              value={form.members[idx].name}
              onChange={(v: string) =>
                setMemberField(idx, "name", v)
              }
              onBlur={() => touchMember(idx, "name")}
              placeholder="Name"
              invalid={inv.name}
              errorMsg="Name required"
              isMobile={isMobile}
            />

            <Field
              label="Email"
              required={REQUIRED_MEMBERS[idx]}
              value={form.members[idx].email}
              onChange={(v: string) =>
                setMemberField(idx, "email", v)
              }
              onBlur={() => touchMember(idx, "email")}
              placeholder="example@srmist.edu.in"
              invalid={inv.email}
              errorMsg="Invalid SRM email"
              isMobile={isMobile}
            />
          </div>
        );
      })}

      <button
        onClick={handleSubmit}
        style={{
          marginTop: 40,
          background: "#00DD73",
          border: "none",
          padding: "12px 30px",
          borderRadius: 8,
          fontWeight: "bold",
          cursor: "pointer",
        }}
      >
        Pay & Register
      </button>
    </div>
  );
}