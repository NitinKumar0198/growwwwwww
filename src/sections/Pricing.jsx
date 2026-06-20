import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: 500,
    desc: 'Perfect for solo agents ready to automate their lead response.',
    color: '#00D4FF',
    features: [
      'Instant lead response (< 5 min)',
      'WhatsApp automation (up to 500/mo)',
      'Email drip sequences (3-step)',
      'CRM auto-update',
      'Monthly performance report',
      'Email support',
    ],
    cta: 'Start With Starter',
    popular: false,
  },
  {
    name: 'Growth',
    price: 1000,
    desc: 'For teams scaling fast who need full-pipeline automation.',
    color: '#7B61FF',
    features: [
      'Everything in Starter',
      'WhatsApp automation (unlimited)',
      'Email drip sequences (10-step + A/B)',
      'Calendar booking automation',
      'Lead scoring & qualification AI',
      'Bi-weekly strategy calls',
      'Priority Slack support',
    ],
    cta: 'Grow With GrowthMate',
    popular: true,
  },
  {
    name: 'Agency',
    price: 2000,
    desc: 'Custom build for brokerages managing multiple agent teams.',
    color: '#FF6B35',
    features: [
      'Everything in Growth',
      'AI voice follow-up calls',
      'Multi-team CRM architecture',
      'Custom integration builds',
      'Dedicated account manager',
      'Weekly calls + Slack channel',
      'Full white-glove onboarding',
    ],
    cta: 'Book a Custom Call',
    popular: false,
  },
];

export default function Pricing() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="pricing" style={{ padding: '100px 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              display: 'inline-flex', gap: 8, alignItems: 'center',
              background: 'rgba(123,97,255,0.08)', border: '1px solid rgba(123,97,255,0.2)',
              borderRadius: 99, padding: '5px 14px', marginBottom: '1.25rem',
            }}
          >
            <span style={{ fontSize: 11, color: '#7B61FF', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Transparent Pricing
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}
          >
            One deal pays for the<br />
            <span style={{ color: '#7B61FF' }}>whole year</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.5)', maxWidth: 480, margin: '0 auto' }}
          >
            No setup fees. No long-term contracts. Cancel anytime. We're confident you'll stay.
          </motion.p>
        </div>

        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem', alignItems: 'start',
        }}>
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: plan.popular ? `linear-gradient(135deg, rgba(123,97,255,0.12), rgba(10,22,40,0.9))` : 'rgba(10, 22, 40, 0.7)',
                border: plan.popular ? `2px solid ${plan.color}50` : '1px solid rgba(240,244,255,0.07)',
                borderRadius: 20, padding: '2rem',
                position: 'relative', overflow: 'hidden',
                transform: plan.popular ? 'scale(1.02)' : 'scale(1)',
                boxShadow: plan.popular ? `0 8px 40px ${plan.color}15` : 'none',
              }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  background: plan.color, color: '#050B18',
                  fontSize: 10, fontWeight: 800, letterSpacing: '0.08em',
                  padding: '4px 10px', borderRadius: 99,
                  fontFamily: 'Syne, sans-serif',
                }}>MOST POPULAR</div>
              )}

              {/* Glow */}
              {plan.popular && <div style={{
                position: 'absolute', top: -60, right: -60,
                width: 200, height: 200,
                background: `radial-gradient(circle, ${plan.color}15, transparent 70%)`,
                pointerEvents: 'none',
              }} />}

              <div style={{ fontSize: 13, fontWeight: 700, color: plan.color, marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
                {plan.name.toUpperCase()}
              </div>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: 4, marginBottom: '0.5rem' }}>
                <span style={{ fontSize: 14, color: 'rgba(240,244,255,0.5)' }}>$</span>
                <span style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, fontFamily: 'Syne, sans-serif', color: '#F0F4FF', lineHeight: 1 }}>
                  {plan.price.toLocaleString()}
                </span>
                <span style={{ fontSize: 14, color: 'rgba(240,244,255,0.4)' }}>/month</span>
              </div>
              <p style={{ fontSize: 13, color: 'rgba(240,244,255,0.5)', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                {plan.desc}
              </p>

              <a href="#contact" style={{
                display: 'block', textAlign: 'center',
                background: plan.popular ? `linear-gradient(135deg, ${plan.color}, #0066FF)` : 'transparent',
                border: `1px solid ${plan.popular ? 'transparent' : plan.color + '40'}`,
                color: plan.popular ? '#050B18' : plan.color,
                fontWeight: 700, fontSize: 14,
                padding: '13px 0', borderRadius: 10,
                fontFamily: 'Syne, sans-serif',
                marginBottom: '1.75rem',
                transition: 'all 0.2s',
                boxShadow: plan.popular ? `0 4px 20px ${plan.color}30` : 'none',
              }}
                onMouseEnter={e => {
                  if (!plan.popular) {
                    e.currentTarget.style.background = `${plan.color}12`;
                    e.currentTarget.style.borderColor = `${plan.color}60`;
                  } else {
                    e.currentTarget.style.boxShadow = `0 6px 28px ${plan.color}50`;
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }
                }}
                onMouseLeave={e => {
                  if (!plan.popular) {
                    e.currentTarget.style.background = 'transparent';
                    e.currentTarget.style.borderColor = `${plan.color}40`;
                  } else {
                    e.currentTarget.style.boxShadow = `0 4px 20px ${plan.color}30`;
                    e.currentTarget.style.transform = 'none';
                  }
                }}
              >
                {plan.cta}
              </a>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                {plan.features.map(f => (
                  <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.6rem' }}>
                    <div style={{
                      width: 18, height: 18, borderRadius: '50%',
                      background: `${plan.color}15`, flexShrink: 0, marginTop: 1,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Check size={10} color={plan.color} strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: 13, color: 'rgba(240,244,255,0.65)', lineHeight: 1.5 }}>{f}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{ textAlign: 'center', marginTop: '2rem', fontSize: 13, color: 'rgba(240,244,255,0.35)' }}
        >
          Not sure which plan? <a href="#contact" style={{ color: '#00D4FF' }}>Book a free call</a> — we'll recommend the right fit.
        </motion.p>
      </div>
    </section>
  );
}
