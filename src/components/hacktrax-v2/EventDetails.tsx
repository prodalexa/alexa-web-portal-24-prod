'use client';

import React, { useEffect, useState } from 'react';

// ── SCALE (desktop only) ─────────────────────────────────────────────
const SCALE = 1;
const s = (n: number) => `${n * SCALE}px`;

const trackList = [
  'Healthcare, Digital Health & Biotechnology',
  'Fintech',
  'E-commerce & Digital Commerce',
  'Cybersecurity',
  'Renewable Energy & Clean Technology',
  'Problem Statement- HealthTech App.',
];

// ── BREAKPOINT ───────────────────────────────────────────────────────
const MOBILE_BREAKPOINT = 768;

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== 'undefined' ? window.innerWidth < MOBILE_BREAKPOINT : false
  );
  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < MOBILE_BREAKPOINT);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);
  return isMobile;
};

// ════════════════════════════════════════════════════════════════════
// MOBILE VIEW
// Renders a single image rectangle with exact Figma measurements:
//   width:   444.0582275390625px
//   height:  860.6248168945312px
//   top:     884.66px
//   left:    -17.88px
//   angle:   0deg   opacity: 1
// ════════════════════════════════════════════════════════════════════
const MobileView: React.FC = () => (
  <div
  id="eventDetails"
  style={{
    width: "100%",
    background:
      "linear-gradient(0deg, rgba(91,0,137,0) 0%, rgba(31,0,47,0) 55.29%, #1F002F 100%)",
    padding: s(28),
    boxSizing: "border-box",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }}
>
    <img
      src="/hacktrax-v2/EventDetailsM.svg"
      style={{
        width: "100%",
        height: "auto",
      }}
    />
  </div>
);

// ════════════════════════════════════════════════════════════════════
// DESKTOP VIEW
// ════════════════════════════════════════════════════════════════════
const DesktopView: React.FC = () => (
  <div
    id="eventDetails"
    style={{
      width: '100vw',
      marginTop: '80px',
      minHeight: '100vh',
      background: 'linear-gradient(0deg, rgba(91, 0, 137, 0) 0%, rgba(31, 0, 47, 0) 55.29%, #1F002F 100%)',
      padding: s(28),
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    {/* ── TOP SECTION: Tracks + Venue (left) | Team Size (right) ── */}
    <div style={{ position: 'relative', width: s(1021.03 + 580.62), display: 'flex' , alignItems: 'flex-start'}} >

      {/* LEFT COLUMN */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: s(28), width: s(1021.03) }}>

        {/* TRACKS CARD */}
        <div
          style={{
            position: 'relative',
            width: s(1021.03),
            height: s(615.92),
            borderRadius: s(50),
            transform: 'rotate(-0.1deg)',
            background: 'linear-gradient(135deg, #FBD840 0%, #958026 100%)',
            padding: s(23),
            boxSizing: 'border-box',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              borderRadius: s(57.41),
              border: `${9.02 * SCALE}px solid #000`,
              background: 'linear-gradient(135deg, #FBD840 60%, #958026 100%)',
              overflow: 'hidden',
              position: 'relative',
              boxSizing: 'border-box',
            }}
          >
            {/* Black header bar */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: s(124.11),
                top: 0,
                left: 0,
                backgroundColor: '#000',
                borderRadius: `${s(48)} ${s(48)} 0 0`,
              }}
            />
            {/* TRACKS title */}
            <div
              style={{
                position: 'absolute',
                width: '100%',
                height: s(124.11),
                top: 0,
                left: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: s(70), color: '#fff', whiteSpace: 'nowrap' }}>
                TRACKS
              </span>
            </div>
            {/* Track list */}
            <div style={{ position: 'absolute', top: s(150), left: s(37), right: s(20) }}>
              <ul style={{ margin: 0, padding: `0 0 0 ${s(32)}`, listStyle: 'disc' }}>
                {trackList.map((track, i) => (
                  <li key={i} style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: s(40), lineHeight: '149%', color: '#000' }}>
                    {track}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* VENUE + PER TEAM CARD */}
        <div
          style={{
            position: 'relative',
            width: s(860),
            borderRadius: s(61.22),
            backgroundColor: '#150727',
            border: `${1.22 * SCALE}px solid #000`,
            padding: s(38.9),
            boxSizing: 'border-box',
            display: 'flex',
            flexDirection: 'column',
            gap: s(34),
          }}
        >
          {/* VENUE row */}
          <div
            style={{
              position: 'relative',
              height: s(209.13),
              borderRadius: s(50),
              backgroundColor: '#3E1969',
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <div style={{ paddingLeft: s(36), display: 'flex', flexDirection: 'column', gap: s(10) }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: s(57.53), color: '#fff' }}>VENUE</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: s(51.42), color: '#fff' }}>TP2 14TH FLOOR</span>
            </div>
            <div style={{ boxShadow: `inset 0px ${s(-18.15)} ${s(20)} 0px #000`, position: 'absolute', inset: 0, borderRadius: s(50), pointerEvents: 'none' }} />
          </div>

          {/* PER TEAM row */}
          <div
            style={{
              position: 'relative',
              height: s(209.13),
              borderRadius: s(50),
              backgroundColor: '#3E1969',
              display: 'flex',
              alignItems: 'center',
              overflow: 'hidden',
            }}
          >
            <div style={{ marginLeft: 'auto', paddingRight: s(36), display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: s(8) }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: s(57.53), color: '#fff' }}>PER TEAM</span>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: s(53.87), color: '#fff' }}>RS . 150</span>
            </div>
            <div style={{ boxShadow: `inset 0px ${s(-18.15)} ${s(20)} 0px #000`, position: 'absolute', inset: 0, borderRadius: s(50), pointerEvents: 'none' }} />
          </div>

          {/* Corner screws */}
          {[
            { top: s(8),   left: s(8),   right: 'auto', bottom: 'auto' },
            { top: s(8),   left: 'auto', right: s(8),   bottom: 'auto' },
            { top: 'auto', left: s(8),   right: 'auto', bottom: s(8)   },
            { top: 'auto', left: 'auto', right: s(8),   bottom: s(8)   },
          ].map((pos, i) => (
            <div
              key={i}
              style={{
                position: 'absolute', ...pos,
                width: s(24.96), height: s(28.78),
                borderRadius: '50%',
                border: `${1.22 * SCALE}px solid #888`,
                backgroundColor: 'rgba(255,255,255,0.07)',
                boxSizing: 'border-box',
              }}
            />
          ))}
        </div>

      </div>{/* end left column */}

      {/* TEAM SIZE — absolute right, spans full height */}
      <div style={{ position: 'absolute', right: 0, top: 0, width: s(580.62)}}>
        <img
  src="/hacktrax-v2/team_size.svg"
  style={{
    width: "100%",
    height: "auto",
    display: "block",
    mixBlendMode: "screen",
  }}
/>
        <div
          style={{
            position: 'absolute',
            top: 'calc(32% + 35px)',
            left: 'calc(68% + 10px)',
            transform: 'translate(-50%, -50%) rotate(270.41deg)',
            fontFamily: "'Bebas Neue', sans-serif",
            fontWeight: 400,
            fontSize: s(203.59),
            lineHeight: '100%',
            color: '#fff',
            whiteSpace: 'nowrap',
            textShadow: `0px ${s(6.03)} ${s(6.03)} #000`,
            pointerEvents: 'none',
          }}
        >
          TEAM SIZE
        </div>
      </div>

    </div>{/* end top section */}

    {/* ── BOTTOM ROW: Logo + Dates ── */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: s(28),
        width: s(1021.03 + 580.62),
      }}
    >
      <img
        src="/hacktrax-v2/img.svg"
        alt="HackTrax 2.0"
        style={{
          width: s(493.77), height: s(545.47), objectFit: 'contain',
          transform: 'rotate(12.7deg)', transformOrigin: 'center center',
          flexShrink: 0, mixBlendMode: 'screen',
        }}
      />
      <img
        src="/hacktrax-v2/dates.svg"
        alt="27 March 28"
        style={{ width: s(680), height: 'auto', borderRadius: s(31.76), flexShrink: 0, mixBlendMode: 'screen' }}
      />
    </div>

  </div>
);

// ════════════════════════════════════════════════════════════════════
// MAIN COMPONENT — switches between Desktop and Mobile
// ════════════════════════════════════════════════════════════════════
const EventDetails: React.FC = () => {
  const isMobile = useIsMobile();

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return isMobile ? <MobileView /> : <DesktopView />;
};

export default EventDetails;