import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function CountUp({ to, suffix = '', prefix = '', duration = 2 }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = (Date.now() - start) / (duration * 1000);
      if (elapsed >= 1) { setVal(to); return; }
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setVal(Math.round(eased * to));
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, to, duration]);

  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

const metrics = [
  { value: 87, suffix: '%', label: 'Reduction in manual CRM work', color: '#00D4FF' },
  { value: 3, suffix: 'x', label: 'More appointments booked per agent', color: '#7B61FF' },
  { value: 5, suffix: ' min', label: 'Average lead response time', color: '#FF6B35' },
  { value: 42, suffix: '%', label: 'Increase in qualified leads monthly', color: '#00FF94' },
];

const testimonials = [
  {
    name: 'Chris Boyles',
    role: 'Realtor, Dallas TX',
    text: 'GrowthMate changed the game for my team. We went from responding to leads in 6 hours to under 5 minutes — our appointment rate tripled in the first month.',
    img: 'CB',
    color: '#00D4FF',
  },
  {
    name: 'Sandy M.',
    role: 'Broker, Miami FL',
    text: 'I was skeptical about AI automation but the ROI was undeniable. The WhatsApp follow-up sequences alone recaptured 30% of leads I thought were dead.',
    img: 'SM',
    color: '#FF6B35',
  },
  {
    name: 'Dave Jensen',
    role: 'Team Lead, Los Angeles CA',
    text: 'My agents used to spend 3 hours a day on data entry. Now that time goes to actual client calls. GrowthMate paid for itself in week two.',
    img: 'DJ',
    color: '#7B61FF',
  },
];

export default function Results() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="results" style={{ padding: '100px 2rem' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{
              display: 'inline-flex', gap: 8, alignItems: 'center',
              background: 'rgba(0,255,148,0.08)', border: '1px solid rgba(0,255,148,0.2)',
              borderRadius: 99, padding: '5px 14px', marginBottom: '1.25rem',
            }}
          >
            <span style={{ fontSize: 11, color: '#00FF94', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase' }}>
              Proven Results
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1 }}
            style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}
          >
            Numbers that change the<br />
            <span style={{ color: '#00FF94' }}>way you run your business</span>
          </motion.h2>
        </div>

        {/* Metrics grid */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '1.25rem', marginBottom: '5rem',
        }}>
          {metrics.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              style={{
                background: 'rgba(10, 22, 40, 0.7)',
                border: `1px solid ${m.color}20`,
                borderRadius: 16, padding: '2rem',
                textAlign: 'center',
              }}
            >
              <div style={{
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                fontWeight: 800, fontFamily: 'Syne, sans-serif',
                color: m.color, marginBottom: '0.5rem',
                lineHeight: 1,
              }}>
                <CountUp to={m.value} suffix={m.suffix} />
              </div>
              <div style={{ fontSize: 13, color: 'rgba(240,244,255,0.55)', lineHeight: 1.5 }}>
                {m.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div style={{
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '1.25rem',
        }}>
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: 'rgba(10, 22, 40, 0.7)',
                border: '1px solid rgba(240,244,255,0.07)',
                borderRadius: 16, padding: '1.75rem',
                position: 'relative',
              }}
            >
              <div style={{
                fontSize: 36, color: t.color, opacity: 0.3,
                fontFamily: 'Georgia, serif', lineHeight: 1,
                marginBottom: '1rem',
              }}>"</div>
              <p style={{ fontSize: 14, color: 'rgba(240,244,255,0.7)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {t.text}
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div style={{
                  width: 40, height: 40, borderRadius: '50%',
                  background: `${t.color}20`, border: `1px solid ${t.color}40`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700, color: t.color,
                }}>
                  {t.img}
                </div>
                <div>
                  <div style={{ fontSize: 14, fontWeight: 600 }}>{t.name}</div>
                  <div style={{ fontSize: 12, color: 'rgba(240,244,255,0.45)' }}>{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
