'use client';

import React, { useState, useEffect } from 'react';

const DomainSection: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);

    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const domains = [
    {
      title: 'Technical',
      description:
        'A vibrant community of innovators building the tech of tomorrow. The Technical community comes together to unite curious minds who are perfecting smooth frontend experiences, building solid backend systems, and creating effective applications. Through the process, members hone their craft, try out fresh ideas, and elevate their skills throughout the journey.',
      iconSrc: '/recruitments25/tech.svg',
    },
    {
      title: 'Creatives',
      description:
        'Where imagination is the star of the show. The Creatives field brings ideas to life into impactful stories and engaging designs. From compelling content to visually appealing interfaces, this team incorporates creativity into every aspect, reimagining how individuals connect and interact.',
      iconSrc: '/recruitments25/creative.svg',
    },
    {
      title: 'Events',
      description:
        'The pulse that drives the club, where ideas become reality. The Events space lives for ideation, strategy, and perfect execution, delivering every event to be engaging and unforgettable. Through commitment and creativity, they craft moments that create memories that last. ',
      iconSrc: '/recruitments25/events.svg',
    },
    {
      title: 'Business',
      description:
        'The bridge between ideas and possibilities. The Business sector develops entrepreneurial and leadership minds while nurturing connections to industry. With partnerships, sponsorships, and targeted outreach, they unlock possibilities and turn imagination into impact.',
      iconSrc: '/recruitments25/business.svg',
    },
  ];

  return (
    <div
      className="font-montserrat-alternates"
      id="domain"
      style={{
        minHeight: '100vh',
        background: 'transparent',
        padding: isMobile ? '30px 16px' : '80px 20px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style jsx>{`
        .domain-card {
          position: relative;
        }
        .domain-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          border-radius: 48px;
          padding: 2px;
          background: linear-gradient(
              90deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 1) 25%,
              rgba(255, 255, 255, 0.5) 50%,
              rgba(255, 255, 255, 0.1) 75%,
              transparent 100%
            ),
            linear-gradient(
              0deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 0.5) 50%,
              transparent 100%
            ),
            linear-gradient(
              180deg,
              rgba(255, 255, 255, 1) 0%,
              rgba(255, 255, 255, 0.5) 50%,
              transparent 100%
            );
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: exclude;
          mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          mask-composite: exclude;
          pointer-events: none;
        }

        .domain-card-even::before {
          background: linear-gradient(
            135deg,
            rgba(60, 217, 208, 0.6) 60%,
            rgba(60, 217, 208, 0.3) 65%,
            transparent 80%
          );
        }

        .domain-card-odd::before {
          background: linear-gradient(
            -135deg,
            rgba(60, 217, 208, 0.6) 60%,
            rgba(60, 217, 208, 0.3) 65%,
            transparent 80%
          );
        }
      `}</style>

      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: 'center',
            marginBottom: isMobile ? '30px' : '60px',
          }}
        >
          <h2
            style={{
              fontSize: isMobile ? '28px' : '48px',
              fontWeight: '700',
              color: '#ffffff',
              margin: '0',
              lineHeight: '1.2',
            }}
          >
            Our{' '}
            <span
              style={{
                color: '#3CD9D0',
              }}
            >
              Domains
            </span>
          </h2>
        </div>

        {/* Domain Cards */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: isMobile ? '20px' : '36px',
            maxWidth: '900px',
            margin: '0 auto',
            position: 'relative',
            zIndex: 1,
          }}
        >
          {domains.map((domain, index) => {
            const isEven = index % 2 === 0;
            return (
              <div
                key={index}
                style={{
                  backgroundColor: 'rgba(0, 0, 0, 0.3)',
                  borderRadius: '48px',
                  padding: isMobile ? '30px 24px' : '50px 60px',
                  position: 'relative',
                  cursor: 'pointer',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center', // keep both centered
                  flexDirection: isMobile
                    ? 'column'
                    : isEven
                    ? 'row-reverse'
                    : 'row',
                  gap: isMobile ? '12px' : '30px', // reduced gap
                  minHeight: isMobile ? 'auto' : '220px',
                  width: '100%',
                  boxShadow: '0 15px 35px rgba(0, 0, 0, 0.5)',
                }}
                className={`domain-card ${
                  isEven ? 'domain-card-even' : 'domain-card-odd'
                }`}
              >
                {/* Icon Container */}
                <div
                  style={{
                    width: isMobile ? '200px' : '160px',
                    height: isMobile ? '250px' : '160px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                    position: 'relative',
                    zIndex: 2,
                  }}
                >
                  <img
                    src={domain.iconSrc}
                    alt={`${domain.title} icon`}
                    style={{
                      width: isMobile ? '150px' : '160px',
                      height: isMobile ? '150px' : '160px',
                      objectFit: 'contain',
                    }}
                  />
                </div>

                {/* Content */}
                <div
                  style={{
                    flex: '1',
                    position: 'relative',
                    zIndex: 2,
                    textAlign: isMobile
                      ? 'center'
                      : isEven
                      ? 'left'
                      : 'right',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    paddingBottom: isMobile ? '40px' : '30px', // increased bottom padding
                  }}
                >
                  <h3
                    style={{
                      fontSize: isMobile ? '28px' : '52px',
                      fontWeight: '700',
                      color: '#3CD9D0',
                      margin: '0 0 16px 0',
                      lineHeight: '1.1',
                    }}
                  >
                    {domain.title}
                  </h3>

                  <p
                    style={{
                      fontSize: isMobile ? '14px' : '18px',
                      color: 'rgba(229, 231, 235, 0.9)',
                      lineHeight: '1.5',
                      margin: '0',
                      fontWeight: '400',
                      maxWidth: isMobile ? 'none' : '400px',
                      marginLeft: isMobile ? 'auto' : isEven ? '0' : 'auto',
                      marginRight: isMobile ? 'auto' : isEven ? 'auto' : '0',
                    }}
                  >
                    {domain.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DomainSection;
