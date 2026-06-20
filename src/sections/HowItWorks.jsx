import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const steps = [
  {
    num: '01',
    title: 'We Audit Your Current Pipeline',
    desc: 'We map your entire lead flow — where leads come from, where they fall off, and what\'s costing you deals right now.',
    color: '#00D4FF',
    detail: 'Free 30-min strategy call included',
  },
  {
    num: '02',
    title: 'We Build Your Automation Stack',
    desc: 'Our team configures your CRM, WhatsApp sequences, email flows, and booking system in under 2 weeks.',
    color: '#7B61FF',
    detail: 'Zero technical work required from you',
  },
  {
    num: '03',
    title: 'We Go Live & Watch Numbers Move',
    desc: 'Flip the switch and watch your response time drop to minutes, appointments triple, and agents finally focus on closing.',
    color: '#FF6B35',
    detail: 'Results visible within the first 14 days',
  },
  {
    num: '04',
    title: 'We Optimize Every Month',
    desc: 'Monthly performance reviews, A/B testing of sequences, and continuous tuning — your automation gets smarter over time.',
    color: '#00FF94',
    detail: 'Dedicated account manager included',
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" style={{
      padding: '100px 2rem',
      background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.02) 50%, transparent 100%)',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '5rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              display: 'inline-flex', gap: 8, alignItems: 'center',
              background: 'rgba(255,107,53,0.08)', border: '1px solid rgba(255,107,53,0.2)',
              borderRadius: 99, padding: '5px 14px', marginBottom: '1.25rem',
            }}
          >
            <span style={{ fontSize: 11, color: '#FF6B35', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              The Process
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}
          >
            From zero to fully automated<br />in <span style={{ color: '#FF6B35' }}>under 2 weeks</span>
          </motion.h2>
        </div>

        <div style={{ position: 'relative' }}>
          {/* Vertical connector */}
          <div style={{
            position: 'absolute', left: '50%', top: 40, bottom: 40,
            width: 1, background: 'linear-gradient(180deg, rgba(0,212,255,0.3), rgba(0,212,255,0.05))',
            transform: 'translateX(-50%)',
          }} className="hiw-line" />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
            {steps.map((step, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '1fr 80px 1fr',
                    gap: '2rem',
                    alignItems: 'center',
                  }}
                  className="hiw-row"
                >
                  {/* Left content */}
                  <div style={{ textAlign: isLeft ? 'right' : 'left', order: isLeft ? 0 : 2 }} className={isLeft ? '' : 'hiw-right'}>
                    {isLeft && <StepContent step={step} align="right" />}
                    {!isLeft && <div />}
                  </div>

                  {/* Center dot */}
                  <div style={{ display: 'flex', justifyContent: 'center', order: 1 }}>
                    <motion.div
                      whileInView={{ scale: [0.5, 1.15, 1] }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                      style={{
                        width: 52, height: 52, borderRadius: '50%',
                        background: `${step.color}15`,
                        border: `2px solid ${step.color}50`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        fontFamily: 'Syne, sans-serif', fontWeight: 800,
                        fontSize: 13, color: step.color,
                        boxShadow: `0 0 20px ${step.color}20`,
                      }}
                    >
                      {step.num}
                    </motion.div>
                  </div>

                  {/* Right content */}
                  <div style={{ order: isLeft ? 2 : 0 }}>
                    {!isLeft && <StepContent step={step} align="left" />}
                    {isLeft && <div />}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .hiw-line { display: none; }
          .hiw-row { grid-template-columns: 1fr !important; gap: 1rem !important; }
          .hiw-row > div:first-child, .hiw-row > div:last-child { text-align: left !important; }
        }
      `}</style>
    </section>
  );
}

function StepContent({ step, align }) {
  return (
    <div style={{
      background: 'rgba(10, 22, 40, 0.7)',
      border: `1px solid ${step.color}15`,
      borderRadius: 16, padding: '1.5rem',
      textAlign: align,
    }}>
      <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.75rem', fontFamily: 'Syne, sans-serif' }}>
        {step.title}
      </h3>
      <p style={{ fontSize: 14, color: 'rgba(240,244,255,0.55)', lineHeight: 1.65, marginBottom: '1rem' }}>
        {step.desc}
      </p>
      <span style={{
        fontSize: 12, color: step.color, fontWeight: 600,
        background: `${step.color}10`, borderRadius: 99, padding: '3px 10px',
        display: 'inline-block',
      }}>
        {step.detail}
      </span>
    </div>
  );
}
