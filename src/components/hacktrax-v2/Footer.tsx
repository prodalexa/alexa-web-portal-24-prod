"use client";

import React, { useState, useEffect } from "react";

const InstagramIcon = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <rect x="2" y="2" width="24" height="24" rx="6.5" stroke="#00DD73" strokeWidth="2.4" />
    <circle cx="14" cy="14" r="5.2" stroke="#00DD73" strokeWidth="2.4" />
    <circle cx="20.5" cy="7.5" r="1.8" fill="#00DD73" />
  </svg>
);

const EmailIcon = ({ size = 26 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 28 28" fill="none">
    <rect x="2" y="6" width="24" height="16" rx="3" stroke="#00DD73" strokeWidth="2.4" />
    <polyline points="2,7.5 14,17 26,7.5" stroke="#00DD73" strokeWidth="2.4" />
  </svg>
);

export default function Footer() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  if (isMobile) {
    return (
      <div
        id="footer"
        style={{
          width: "100vw",
          background: "#1a0035",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "0 20px",
          boxSizing: "border-box",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: 500,
            border: "1.5px solid #00DD73",
            display: "flex",
            flexDirection: "column",
            gap: 29,
            padding: "16px",
            marginTop: 40,
            boxSizing: "border-box",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: 35, color: "#fff", fontWeight: 600 }}>
              Embrace the
            </span>
            <span style={{ fontSize: 70, color: "#00DD73", fontWeight: 700 }}>
              FUTURE.
            </span>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <span style={{ color: "#fff", fontWeight: 600 }}>
              Got any queries? Contact us at
            </span>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <InstagramIcon size={22} />
              <a
                href="https://www.instagram.com/alexadevsrm/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                alexadevsrm
              </a>
            </div>

            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <EmailIcon size={22} />
              <a
                href="mailto:hello@alexadevsrm.com"
                style={{ color: "#fff", textDecoration: "none" }}
              >
                hello@alexadevsrm.com
              </a>
            </div>
          </div>
        </div>

        <div style={{ padding: "16px 0" }}>
          <span style={{ fontSize: 11, color: "rgba(255,255,255,0.45)" }}>
            © 2026 Alexa Developers SRM. All rights reserved.
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      id="footer"
      style={{
        width: "100vw",
        background: "#1a0035",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: 1600,
          borderTop: "5px solid #00DD73",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: 1600,
          display: "flex",
          justifyContent: "space-between",
          padding: "36px 70px",
          boxSizing: "border-box",
        }}
      >
        <div>
          <div style={{ fontSize: 42, color: "#fff", fontWeight: 600 }}>
            Embrace the
          </div>
          <div style={{ fontSize: 84, color: "#00DD73", fontWeight: 700 }}>
            FUTURE.
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={{ color: "#fff", fontWeight: 600 }}>
            Got any queries? Contact us at
          </span>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <InstagramIcon />
            <a
              href="https://www.instagram.com/alexadevsrm/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              alexadevsrm
            </a>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <EmailIcon />
            <a
              href="mailto:hello@alexadevsrm.com"
              style={{ color: "#fff", textDecoration: "none" }}
            >
              hello@alexadevsrm.com
            </a>
          </div>
        </div>
      </div>

      <div
        style={{
          width: "100%",
          maxWidth: 1600,
          height: 1,
          background: "rgba(255,255,255,0.12)",
        }}
      />

      <div style={{ padding: "14px 0 18px" }}>
        <span style={{ fontSize: 13, color: "rgba(255,255,255,0.45)" }}>
          © 2026 Alexa Developers SRM. All rights reserved.
        </span>
      </div>
    </div>
  );
}