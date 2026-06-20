import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Zap, MessageSquare, Calendar, BarChart2, Mail, PhoneCall } from 'lucide-react';

const services = [
  {
    icon: Zap,
    color: '#00D4FF',
    title: 'Instant Lead Response',
    desc: 'AI responds to every new lead within 5 minutes — 24/7. No more losing deals to the agent who called first.',
    metric: '< 5 min response time',
  },
  {
    icon: MessageSquare,
    color: '#7B61FF',
    title: 'WhatsApp Automation',
    desc: 'Qualify, nurture, and convert leads via WhatsApp with smart conversation flows — while you sleep.',
    metric: '80% open rate on messages',
  },
  {
    icon: Mail,
    color: '#00D4FF',
    title: 'Email Drip Sequences',
    desc: 'Hyper-personalized email sequences that adapt to lead behavior and push them down the funnel automatically.',
    metric: '45% avg. email open rate',
  },
  {
    icon: Calendar,
    color: '#FF6B35',
    title: 'Appointment Booking',
    desc: 'Sync with your calendar and let leads book calls themselves — zero back-and-forth, maximum conversions.',
    metric: '3x more appointments',
  },
  {
    icon: BarChart2,
    color: '#00FF94',
    title: 'CRM Automation',
    desc: 'Auto-update lead stages, log interactions, and trigger follow-ups based on deal status — your CRM runs itself.',
    metric: '87% less manual data entry',
  },
  {
    icon: PhoneCall,
    color: '#FF6B35',
    title: 'AI Voice Follow-Up',
    desc: 'Outbound AI voice calls for cold and warm leads that sound human — scale follow-ups without hiring more staff.',
    metric: '2x call connect rate',
  },
];

function ServiceCard({ service, delay }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      style={{
        background: 'rgba(10, 22, 40, 0.6)',
        border: '1px solid rgba(240,244,255,0.07)',
        borderRadius: 16,
        padding: '1.75rem',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'default',
        transition: 'border-color 0.3s, transform 0.3s, box-shadow 0.3s',
      }}
      whileHover={{
        y: -4,
        transition: { duration: 0.2 }
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = `${service.color}30`;
        e.currentTarget.style.boxShadow = `0 8px 40px ${service.color}10`;
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = 'rgba(240,244,255,0.07)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Glow corner */}
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 120, height: 120,
        background: `radial-gradient(circle at top right, ${service.color}08, transparent 70%)`,
        pointerEvents: 'none',
      }} />

      <div style={{
        width: 44, height: 44, borderRadius: 12,
        background: `${service.color}12`,
        border: `1px solid ${service.color}25`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '1.25rem',
      }}>
        <Icon size={20} color={service.color} strokeWidth={1.8} />
      </div>

      <h3 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.6rem', fontFamily: 'Syne, sans-serif' }}>
        {service.title}
      </h3>
      <p style={{ fontSize: 14, color: 'rgba(240,244,255,0.55)', lineHeight: 1.65, marginBottom: '1.25rem' }}>
        {service.desc}
      </p>
      <div style={{
        display: 'inline-flex', alignItems: 'center', gap: 6,
        background: `${service.color}10`, border: `1px solid ${service.color}25`,
        borderRadius: 99, padding: '4px 12px',
      }}>
        <span style={{ fontSize: 12, color: service.color, fontWeight: 600 }}>{service.metric}</span>
      </div>
    </motion.div>
  );
}

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-80px' });

  return (
    <section id="services" style={{ padding: '100px 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={headerRef} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: 99, padding: '5px 14px', marginBottom: '1.25rem',
            }}
          >
            <span style={{ fontSize: 11, color: '#00D4FF', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              What We Automate
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '1rem', letterSpacing: '-0.02em' }}
          >
            Your entire sales pipeline,<br />
            <span style={{ color: '#00D4FF' }}>running on autopilot</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ fontSize: '1.05rem', color: 'rgba(240,244,255,0.55)', maxWidth: 520, margin: '0 auto' }}
          >
            From the moment a lead comes in to the moment a deal closes — GrowthMate handles the repetitive work so your agents never miss an opportunity.
          </motion.p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '1.25rem',
        }}>
          {services.map((s, i) => (
            <ServiceCard key={s.title} service={s} delay={i * 0.08} />
          ))}
        </div>
      </div>
    </section>
  );
}
