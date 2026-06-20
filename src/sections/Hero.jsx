import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, TrendingUp, Clock } from 'lucide-react';

const stats = [
  { value: '5 min', label: 'Avg. lead response time' },
  { value: '3x', label: 'More appointments booked' },
  { value: '$0', label: 'Leads lost to slow follow-up' },
];

const pipelineNodes = [
  { label: 'New Lead', icon: '📥', color: '#00D4FF' },
  { label: 'Instant Reply', icon: '⚡', color: '#7B61FF' },
  { label: 'Nurture Seq', icon: '📧', color: '#00D4FF' },
  { label: 'Book Call', icon: '📅', color: '#FF6B35' },
  { label: 'Deal Closed', icon: '✅', color: '#00FF94' },
];

function PipelineViz() {
  return (
    <div style={{
      background: 'rgba(10, 22, 40, 0.8)',
      border: '1px solid rgba(0,212,255,0.15)',
      borderRadius: 20,
      padding: '2rem',
      position: 'relative',
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{ fontSize: 12, color: 'rgba(0,212,255,0.7)', fontWeight: 600, letterSpacing: '0.1em', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
        Live Automation Pipeline
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
        {pipelineNodes.map((node, i) => (
          <motion.div
            key={node.label}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.15, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
          >
            {/* Connector line */}
            {i > 0 && (
              <div style={{
                position: 'absolute',
                left: '2.9rem',
                width: 2,
                height: 28,
                background: `linear-gradient(180deg, ${pipelineNodes[i-1].color}40, ${node.color}40)`,
                marginTop: -28,
              }} />
            )}
            <motion.div
              animate={{
                boxShadow: [
                  `0 0 0px ${node.color}00`,
                  `0 0 16px ${node.color}60`,
                  `0 0 0px ${node.color}00`,
                ]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: i * 0.4 }}
              style={{
                width: 40, height: 40, borderRadius: 10,
                background: `${node.color}15`,
                border: `1px solid ${node.color}40`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 18, flexShrink: 0,
              }}
            >
              {node.icon}
            </motion.div>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 14, fontWeight: 600, color: '#F0F4FF' }}>{node.label}</div>
              <div style={{ height: 3, borderRadius: 99, background: 'rgba(240,244,255,0.06)', marginTop: 6, overflow: 'hidden' }}>
                <motion.div
                  initial={{ width: '0%' }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 1.2 + i * 0.2, duration: 1.2, ease: 'easeOut' }}
                  style={{ height: '100%', background: `linear-gradient(90deg, ${node.color}, ${node.color}80)`, borderRadius: 99 }}
                />
              </div>
            </div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 2.4 + i * 0.1 }}
              style={{ fontSize: 12, color: node.color, fontWeight: 700 }}>✓</motion.div>
          </motion.div>
        ))}
      </div>

      {/* Notification pop */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ delay: 3.2, duration: 0.4 }}
        style={{
          marginTop: '1.5rem',
          background: 'rgba(0,255,148,0.08)',
          border: '1px solid rgba(0,255,148,0.2)',
          borderRadius: 10, padding: '10px 14px',
          display: 'flex', alignItems: 'center', gap: 10,
        }}
      >
        <div style={{ width: 8, height: 8, borderRadius: '50%', background: '#00FF94', flexShrink: 0 }} />
        <span style={{ fontSize: 13, color: 'rgba(240,244,255,0.8)' }}>
          <span style={{ color: '#00FF94', fontWeight: 600 }}>New deal closed</span> — $485K listing via AI follow-up
        </span>
      </motion.div>
    </div>
  );
}

export default function Hero() {
  return (
    <section style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      padding: '120px 2rem 80px',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background gradient orbs */}
      <div style={{
        position: 'absolute', top: '-20%', right: '-10%',
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(0,212,255,0.06) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-10%', left: '-10%',
        width: 500, height: 500,
        background: 'radial-gradient(circle, rgba(255,107,53,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,212,255,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,212,255,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div style={{
        maxWidth: 1200, margin: '0 auto', width: '100%',
        display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center',
      }} className="hero-grid">
        {/* Left */}
        <div>
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(0,212,255,0.08)', border: '1px solid rgba(0,212,255,0.2)',
              borderRadius: 99, padding: '6px 14px', marginBottom: '1.5rem',
            }}
          >
            <Zap size={13} color="#00D4FF" />
            <span style={{ fontSize: 12, color: '#00D4FF', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              AI Automation for Real Estate
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            style={{ fontSize: 'clamp(2.8rem, 5vw, 4.2rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}
          >
            Stop Losing Leads.<br />
            <span style={{
              background: 'linear-gradient(135deg, #00D4FF 0%, #7B61FF 100%)',
              WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Start Closing Deals.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            style={{ fontSize: '1.15rem', color: 'rgba(240,244,255,0.65)', maxWidth: 480, lineHeight: 1.7, marginBottom: '2.5rem' }}
          >
            GrowthMate automates your entire lead pipeline — instant responses, smart follow-ups, and calendar booking — so your agents focus on closing, not chasing.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}
          >
            <a href="#contact" style={{
              background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
              color: '#050B18', fontWeight: 700, fontSize: 15,
              padding: '14px 28px', borderRadius: 10,
              display: 'inline-flex', alignItems: 'center', gap: 8,
              fontFamily: 'Syne, sans-serif',
              boxShadow: '0 4px 32px rgba(0,212,255,0.25)',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,212,255,0.4)'; }}
              onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,212,255,0.25)'; }}
            >
              Book Free Strategy Call <ArrowRight size={16} />
            </a>
            <a href="#how-it-works" style={{
              background: 'transparent', color: '#F0F4FF',
              border: '1px solid rgba(240,244,255,0.15)',
              fontWeight: 500, fontSize: 15,
              padding: '14px 28px', borderRadius: 10,
              display: 'inline-flex', alignItems: 'center', gap: 8,
              transition: 'border-color 0.2s, background 0.2s',
            }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(0,212,255,0.4)'; e.currentTarget.style.background = 'rgba(0,212,255,0.05)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(240,244,255,0.15)'; e.currentTarget.style.background = 'transparent'; }}
            >
              See How It Works
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}
          >
            {stats.map((s, i) => (
              <div key={i}>
                <div style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'Syne, sans-serif', color: '#00D4FF' }}>{s.value}</div>
                <div style={{ fontSize: 12, color: 'rgba(240,244,255,0.5)', marginTop: 2 }}>{s.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right — Pipeline viz */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          <PipelineViz />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; gap: 2.5rem !important; }
        }
      `}</style>
    </section>
  );
}
