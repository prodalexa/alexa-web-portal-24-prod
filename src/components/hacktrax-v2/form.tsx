"use client";

import { useState, useEffect } from "react";

/* ─── Validation ─────────────────────────────────────────────── */
const validateEmail = (v) => /^[^\s@]+@srmist\.edu\.in$/.test(v.trim());
const validatePhone = (v) => /^\d{10}$/.test(v.trim());
const validateRegNo = (v) => /^RA\d{13}$/.test(v.trim());

/* ─── Field Component ────────────────────────────────────────── */
function Field({ label, required, value, onChange, onBlur, placeholder, invalid, errorMsg, type = "text", prefix, isMobile }) {
  const [focused, setFocused] = useState(false);

  return (
    <div style={{ flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 4 }}>
      <span style={{
        fontFamily: "Montserrat, sans-serif",
        fontWeight: 500,
        fontSize: isMobile ? 13 : 16,
        lineHeight: isMobile ? "22px" : "28px",
        letterSpacing: "0.2px",
        color: invalid ? "#FF6B6B" : "#00DD73",
        display: "flex",
        alignItems: "center",
        gap: 2,
      }}>
        {label}
        {required && <span style={{ color: "#FF6B9D" }}>*</span>}
      </span>

      <div style={{
        height: 44,
        boxSizing: "border-box",
        border: `2px solid ${invalid ? "#FF4D4D" : focused ? "#00DD73" : "#cccccc"}`,
        borderRadius: 8,
        background: "#ffffff",
        padding: isMobile ? "0 12px" : "0 14px",
        display: "flex",
        alignItems: "center",
        transition: "border-color 0.2s",
      }}>
        {prefix && (
          <span style={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: isMobile ? 13 : 14,
            fontWeight: 600,
            color: "#333333",
            marginRight: isMobile ? 8 : 10,
            paddingRight: isMobile ? 8 : 10,
            borderRight: "1px solid #cccccc",
            whiteSpace: "nowrap",
          }}>
            {prefix}
          </span>
        )}
        <input
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); onBlur(); }}
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#111111",
            fontSize: isMobile ? 13 : 14,
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 400,
            padding: 0,
            caretColor: "#00DD73",
            minWidth: 0,
          }}
        />
      </div>

      {invalid && (
        <span style={{ fontSize: isMobile ? 10 : 11, color: "#FF6B6B", fontFamily: "Montserrat, sans-serif" }}>
          {errorMsg}
        </span>
      )}
    </div>
  );
}

/* ─── Constants ──────────────────────────────────────────────── */
const MEMBER_LABELS    = ["Member 1 (Lead)", "Member 2", "Member 3", "Member 4"];
const REQUIRED_MEMBERS = [true, true, false, false];
const emptyMember  = () => ({ name: "", email: "", phone: "", regNo: "" });
const emptyTouched = () => ({ name: false, email: false, phone: false, regNo: false });

/* ─── Main Component ─────────────────────────────────────────── */
export default function Form() {

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

  const setTeamName = (v) => setForm((f) => ({ ...f, teamName: v }));

  const setMemberField = (idx, field, v) =>
    setForm((f) => ({
      ...f,
      members: f.members.map((m, i) => i === idx ? { ...m, [field]: v } : m),
    }));

  const touchTeamName = () => setTouched((t) => ({ ...t, teamName: true }));

  const touchMember = (idx, field) =>
    setTouched((t) => ({
      ...t,
      members: t.members.map((m, i) => i === idx ? { ...m, [field]: true } : m),
    }));

  const teamNameInvalid = touched.teamName && form.teamName.trim() === "";

  const memberInvalid = (idx) => {
    const m = form.members[idx];
    const t = touched.members[idx];
    const req = REQUIRED_MEMBERS[idx];
    const hasAny = !!(m.name || m.email || m.phone || m.regNo);
    const should = req || hasAny;
    return {
      name:  t.name  && should && m.name.trim() === "",
      email: t.email && should && !validateEmail(m.email),
      phone: t.phone && should && !validatePhone(m.phone),
      regNo: t.regNo && should && !validateRegNo(m.regNo),
    };
  };

  const isFormValid = () => {
    if (form.teamName.trim() === "") return false;
    for (let i = 0; i < 4; i++) {
      const m = form.members[i];
      if (!REQUIRED_MEMBERS[i] && !(m.name || m.email || m.phone || m.regNo)) continue;
      if (!m.name.trim() || !validateEmail(m.email) || !validatePhone(m.phone) || !validateRegNo(m.regNo)) return false;
    }
    return true;
  };

  const handleSubmit = async () => {
  setTouched({
    teamName: true,
    members: form.members.map(() => ({
      name: true,
      email: true,
      phone: true,
      regNo: true,
    })),
  });

  if (!isFormValid()) return;

  const payload = {
    team_name: form.teamName,
    members: form.members
      .filter(m => m.name && m.email && m.phone && m.regNo)
      .map(m => ({
        name: m.name,
        email_id: m.email,
        phone_number: m.phone,
        registration_number: m.regNo,
      })),
  };

  try {
    const res = await fetch(
      "https://acktrax--gowtham6409728-qwsx9lla.leapcell.dev/v1/teams",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      }
    );

    if (res.ok) {
      setSubmitted(true);
    } else {
      const err = await res.json();
      console.error(err);
      alert("Submission failed. Please try again.");
    }
  } catch (error) {
    console.error(error);
    alert("Server error. Please try again.");
  }
};

  /* ── Success screen ── */
  if (submitted) {
    return (
      <div style={isMobile ? S.pageMobile : S.pageDesktop}>
        <div style={{
          display: "flex", flexDirection: "column", alignItems: "center",
          justifyContent: "center", minHeight: "100vh", gap: 20,
          padding: isMobile ? "0 27px" : "0 16px",
          width: "100%",
        }}>
          <div style={{
            width: isMobile ? 72 : 80,
            height: isMobile ? 72 : 80,
            borderRadius: "50%", background: "#00DD73",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: isMobile ? 34 : 38, fontWeight: 900, color: "#000",
          }}>✓</div>
          <h2 style={{
            fontSize: isMobile ? 22 : 26, fontWeight: 700, color: "#fff",
            margin: 0, fontFamily: "Montserrat, sans-serif", textAlign: "center",
          }}>
            Registration Submitted!
          </h2>
          <p style={{
            fontSize: isMobile ? 13 : 14, color: "rgba(255,255,255,0.6)",
            margin: 0, fontFamily: "Montserrat, sans-serif", textAlign: "center",
          }}>
            Your team has been registered successfully.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            style={{
              marginTop: 8, background: "transparent",
              border: "1.5px solid rgba(255,255,255,0.3)", color: "#fff",
              padding: "10px 28px", borderRadius: 8,
              fontSize: isMobile ? 13 : 14,
              cursor: "pointer", fontFamily: "Montserrat, sans-serif",
            }}
          >
            Back to Form
          </button>
        </div>
      </div>
    );
  }

  /* ══════════════════════════════════════════════
     MOBILE VIEW  (full width)
  ══════════════════════════════════════════════ */
  if (isMobile) {
    return (
      <div id="formSection" style={S.pageMobile}>
        <div style={S.cardMobile}>

          <h1 style={S.headingMobile}>Team Details</h1>

          {/* Team Name */}
          <div style={{ marginBottom: 20 }}>
            <Field
              label="Team Name" required isMobile
              value={form.teamName}
              onChange={setTeamName}
              onBlur={touchTeamName}
              placeholder="Name"
              invalid={teamNameInvalid}
              errorMsg="Team name is required"
            />
          </div>

          {/* Members */}
          {MEMBER_LABELS.map((label, idx) => {
            const inv = memberInvalid(idx);
            const req = REQUIRED_MEMBERS[idx];
            return (
              <div key={idx} style={{ marginBottom: 20 }}>

                {/* Member header label */}
                <div style={{
                  display: "inline-flex", alignItems: "center",
                  height: 24, marginBottom: 10, gap: 2,
                }}>
                  <span style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500, fontSize: 14,
                    lineHeight: "24px", letterSpacing: "0.2px",
                    color: "#00DD73", whiteSpace: "nowrap",
                  }}>
                    {label}
                  </span>
                  {req && (
                    <span style={{
                      fontFamily: "Montserrat, sans-serif",
                      fontWeight: 500, fontSize: 14,
                      color: "#FF6B9D", lineHeight: "24px",
                    }}>*</span>
                  )}
                </div>

                {/* All 4 fields stacked, gap: 10px */}
                <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                  <Field
                    label="Name" required={req} isMobile
                    value={form.members[idx].name}
                    onChange={(v) => setMemberField(idx, "name", v)}
                    onBlur={() => touchMember(idx, "name")}
                    placeholder="Name"
                    invalid={inv.name} errorMsg="Name is required"
                  />
                  <Field
                    label="E-mail Address (SRM ID)" required={req} isMobile
                    value={form.members[idx].email}
                    onChange={(v) => setMemberField(idx, "email", v)}
                    onBlur={() => touchMember(idx, "email")}
                    placeholder="example@srmist.edu.in"
                    invalid={inv.email} errorMsg="Must end in @srmist.edu.in"
                    type="email"
                  />
                  <Field
                    label="Phone Number" required={req} isMobile
                    value={form.members[idx].phone}
                    onChange={(v) => setMemberField(idx, "phone", v.replace(/\D/g, "").slice(0, 10))}
                    onBlur={() => touchMember(idx, "phone")}
                    placeholder="012 345 6789"
                    invalid={inv.phone} errorMsg="Must be exactly 10 digits"
                    type="tel" prefix="+91"
                  />
                  <Field
                    label="Register Number" required={req} isMobile
                    value={form.members[idx].regNo}
                    onChange={(v) => setMemberField(idx, "regNo", v.toUpperCase().slice(0, 15))}
                    onBlur={() => touchMember(idx, "regNo")}
                    placeholder="RAXXXXXXXXXXXXX"
                    invalid={inv.regNo} errorMsg="RA + exactly 13 digits"
                  />
                </div>
              </div>
            );
          })}

          {/* Submit */}
          <div style={{ display: "flex", justifyContent: "center", marginTop: 28 }}>
            <button
              onClick={handleSubmit}
              style={S.submitBtnMobile}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-2px)";
                e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,221,115,0.5)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,221,115,0.35)";
              }}
            >
              Pay &amp; Register
              <span style={{ fontSize: 16, marginLeft: 8, fontWeight: 900 }}>›</span>
            </button>
          </div>

        </div>
      </div>
    );
  }

  /* ══════════════════════════════════════════════
     DESKTOP VIEW  (full width)
  ══════════════════════════════════════════════ */
  return (
    <div id="formSection" style={S.pageDesktop}>
      <div style={S.cardDesktop}>

        <h1 style={S.headingDesktop}>Team Details</h1>

        {/* Team Name */}
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 28 }}>
          <div style={{ width: "100%", maxWidth: 357.6 }}>
            <Field
              label="Team Name" required
              value={form.teamName}
              onChange={setTeamName}
              onBlur={touchTeamName}
              placeholder="Name"
              invalid={teamNameInvalid}
              errorMsg="Team name is required"
            />
          </div>
        </div>

        {/* Members */}
        {MEMBER_LABELS.map((label, idx) => {
          const inv = memberInvalid(idx);
          const req = REQUIRED_MEMBERS[idx];
          return (
            <div key={idx} style={{ marginBottom: 24 }}>

              {/* Member header label */}
              <div style={{
                display: "inline-flex", alignItems: "center",
                height: 28, marginBottom: 12, gap: 2,
              }}>
                <span style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 500, fontSize: 16,
                  lineHeight: "28px", letterSpacing: "0.2px",
                  color: "#00DD73", whiteSpace: "nowrap",
                }}>
                  {label}
                </span>
                {req && (
                  <span style={{
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 500, fontSize: 16,
                    color: "#FF6B9D", lineHeight: "28px",
                  }}>*</span>
                )}
              </div>

              {/* Row 1: Name + Email */}
              <div style={S.rowDesktop}>
                <Field
                  label="Name" required={req}
                  value={form.members[idx].name}
                  onChange={(v) => setMemberField(idx, "name", v)}
                  onBlur={() => touchMember(idx, "name")}
                  placeholder="Name"
                  invalid={inv.name} errorMsg="Name is required"
                />
                <Field
                  label="E-mail Address (SRM ID)" required={req}
                  value={form.members[idx].email}
                  onChange={(v) => setMemberField(idx, "email", v)}
                  onBlur={() => touchMember(idx, "email")}
                  placeholder="example@srmist.edu.in"
                  invalid={inv.email} errorMsg="Must end in @srmist.edu.in"
                  type="email"
                />
              </div>

              {/* Row 2: Phone + Register */}
              <div style={{ ...S.rowDesktop, marginTop: 12 }}>
                <Field
                  label="Phone Number" required={req}
                  value={form.members[idx].phone}
                  onChange={(v) => setMemberField(idx, "phone", v.replace(/\D/g, "").slice(0, 10))}
                  onBlur={() => touchMember(idx, "phone")}
                  placeholder="012 345 6789"
                  invalid={inv.phone} errorMsg="Must be exactly 10 digits"
                  type="tel" prefix="+91"
                />
                <Field
                  label="Register Number" required={req}
                  value={form.members[idx].regNo}
                  onChange={(v) => setMemberField(idx, "regNo", v.toUpperCase().slice(0, 15))}
                  onBlur={() => touchMember(idx, "regNo")}
                  placeholder="RAXXXXXXXXXXXXX"
                  invalid={inv.regNo} errorMsg="RA + exactly 13 digits"
                />
              </div>

            </div>
          );
        })}

        {/* Submit */}
        <div style={{ display: "flex", justifyContent: "center", marginTop: 32 }}>
          <button
            onClick={handleSubmit}
            style={S.submitBtnDesktop}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 8px 24px rgba(0,221,115,0.5)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 4px 16px rgba(0,221,115,0.35)";
            }}
          >
            Pay &amp; Register
            <span style={{ fontSize: 18, marginLeft: 8, fontWeight: 900 }}>›</span>
          </button>
        </div>

      </div>
    </div>
  );
}

/* ─── Styles ─────────────────────────────────────────────────── */
const BASE_PAGE = {
  minHeight: "100vh",
  width: "100vw",
  background: "linear-gradient(160deg, #1e0040 0%, #2b0052 40%, #1a003a 70%, #0d001f 100%)",
  display: "flex",
  alignItems: "flex-start",
  justifyContent: "center",
  boxSizing: "border-box",
};

const S = {
  /* ── Desktop ── */
  pageDesktop: {
    ...BASE_PAGE,
    padding: "48px 40px 72px",
  },
  cardDesktop: {
    width: "100%",
    maxWidth: 1200,
    minHeight: 1350,
    padding: "40px 60px 56px",
    boxSizing: "border-box",
  },
  headingDesktop: {
    fontFamily: "'Saira Stencil One', sans-serif",
    fontWeight: 400,
    fontSize: 64,
    lineHeight: "36px",
    letterSpacing: "0.1px",
    color: "#FFFFFF",
    textAlign: "center",
    margin: 0,
    paddingBottom: 40,
  },
  rowDesktop: {
    display: "flex",
    gap: 16,
    flexWrap: "wrap",
  },
  submitBtnDesktop: {
    display: "flex",
    alignItems: "center",
    background: "#00DD73",
    color: "#ffffff",
    border: "none",
    borderRadius: 8,
    padding: "12px 36px",
    fontSize: 15,
    fontWeight: 700,
    fontFamily: "Montserrat, sans-serif",
    letterSpacing: "0.04em",
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(0,221,115,0.35)",
    transition: "transform 0.15s, box-shadow 0.15s",
  },

  /* ── Mobile ── */
  pageMobile: {
    ...BASE_PAGE,
    padding: "40px 20px 72px",
    justifyContent: "flex-start",
    
  },
  cardMobile: {
    width: "100%",
    maxWidth: 500,
    padding: "32px 20px 56px",
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
  },
  headingMobile: {
    fontFamily: "'Saira Stencil One', sans-serif",
    fontWeight: 400,
    fontSize: 44,
    lineHeight: "1.1",
    letterSpacing: "0.1px",
    color: "#FFFFFF",
    textAlign: "center",
    margin: 0,
    paddingBottom: 28,
  },
  submitBtnMobile: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    background: "#00DD73",
    color: "#ffffff",
    border: "none",
    borderRadius: 8,
    padding: "14px 36px",
    fontSize: 14,
    fontWeight: 700,
    fontFamily: "Montserrat, sans-serif",
    letterSpacing: "0.04em",
    cursor: "pointer",
    boxShadow: "0 4px 16px rgba(0,221,115,0.35)",
    transition: "transform 0.15s, box-shadow 0.15s",
  },
};