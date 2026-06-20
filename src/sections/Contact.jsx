import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Mail, MessageSquare, Loader } from 'lucide-react';

// ─── PASTE YOUR GOOGLE APPS SCRIPT WEB APP URL HERE ───────────────────────
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxDMP6l7QqU2_syP5hEBz2-hw5qtdaH8wNeGp8ZMe1se8ueyLrvlszrTr5iN6synUevpg/exec';
// ───────────────────────────────────────────────────────────────────────────

const inputStyle = {
  width: '100%',
  background: 'rgba(240,244,255,0.04)',
  border: '1px solid rgba(240,244,255,0.1)',
  borderRadius: 8,
  padding: '10px 14px',
  color: '#F0F4FF',
  fontSize: 14,
  outline: 'none',
  fontFamily: 'Inter, sans-serif',
  transition: 'border-color 0.2s',
};

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    agents: '',
    source: '',
    message: '',
  });
  const [status, setStatus] = useState('idle'); // idle | loading | success | error
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const handleChange = (field) => (e) => setForm({ ...form, [field]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const payload = {
        ...form,
        submittedAt: new Date().toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }),
        source: form.source || 'Website Contact Form',
      };

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Google Apps Script requires this
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      // no-cors means we can't read the response, but if no error thrown = success
      setStatus('success');
    } catch (err) {
      console.error(err);
      setStatus('error');
    }
  };

  return (
    <section id="contact" style={{ padding: '100px 2rem' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          style={{
            background: 'linear-gradient(135deg, rgba(0,212,255,0.08) 0%, rgba(123,97,255,0.08) 100%)',
            border: '1px solid rgba(0,212,255,0.15)',
            borderRadius: 24, padding: 'clamp(2rem, 5vw, 4rem)',
            textAlign: 'center', marginBottom: '4rem',
            position: 'relative', overflow: 'hidden',
          }}
        >
          <div style={{
            position: 'absolute', top: -100, left: '50%', transform: 'translateX(-50%)',
            width: 500, height: 300,
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.06), transparent 70%)',
            pointerEvents: 'none',
          }} />
          <div style={{ fontSize: 11, color: '#00D4FF', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1rem' }}>
            Free Strategy Call
          </div>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}>
            Your leads are leaking.<br />
            <span style={{ color: '#00D4FF' }}>Let's stop it today.</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.55)', maxWidth: 480, margin: '0 auto 2rem' }}>
            Book a free 30-minute audit call. We'll show you exactly where your pipeline is losing money.
          </p>
          <a href="#booking-form" style={{
            background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
            color: '#050B18', fontWeight: 700, fontSize: 15,
            padding: '14px 32px', borderRadius: 10,
            display: 'inline-flex', alignItems: 'center', gap: 8,
            fontFamily: 'Syne, sans-serif',
            boxShadow: '0 4px 32px rgba(0,212,255,0.25)',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 40px rgba(0,212,255,0.4)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,212,255,0.25)'; }}
          >
            Book My Free Audit <ArrowRight size={16} />
          </a>
        </motion.div>

        {/* Form + Info */}
        <div id="booking-form" ref={ref} style={{
          display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '3rem', alignItems: 'start',
        }} className="contact-grid">

          {/* Left info */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              style={{ fontSize: '1.6rem', fontWeight: 800, fontFamily: 'Syne, sans-serif', marginBottom: '1rem' }}
            >
              Book your free call
            </motion.h3>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.1 }}
              style={{ fontSize: 14, color: 'rgba(240,244,255,0.55)', lineHeight: 1.7, marginBottom: '2rem' }}
            >
              Fill the form — we'll reach out within 24 hours to confirm your slot. Zero pressure, just clarity.
            </motion.p>

            {/* What happens next */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2 }}
              style={{
                background: 'rgba(10,22,40,0.6)',
                border: '1px solid rgba(0,212,255,0.1)',
                borderRadius: 12, padding: '1.25rem',
                marginBottom: '1.5rem',
              }}
            >
              <div style={{ fontSize: 12, color: '#00D4FF', fontWeight: 700, letterSpacing: '0.06em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
                What happens next
              </div>
              {[
                'We review your submission',
                'Email you within 24 hours',
                '30-min audit call — free',
                'Custom automation plan sent',
              ].map((step, i) => (
                <div key={step} style={{ display: 'flex', gap: 10, marginBottom: 8, alignItems: 'flex-start' }}>
                  <span style={{
                    width: 20, height: 20, borderRadius: '50%', background: 'rgba(0,212,255,0.12)',
                    border: '1px solid rgba(0,212,255,0.25)', display: 'flex', alignItems: 'center',
                    justifyContent: 'center', fontSize: 10, fontWeight: 700, color: '#00D4FF',
                    flexShrink: 0, marginTop: 1,
                  }}>{i + 1}</span>
                  <span style={{ fontSize: 13, color: 'rgba(240,244,255,0.6)' }}>{step}</span>
                </div>
              ))}
            </motion.div>

            {[
              { icon: Mail, label: 'Email', value: 'hello@growthmate.io', color: '#00D4FF' },
              { icon: MessageSquare, label: 'WhatsApp', value: '+1 (555) 000-0000', color: '#00FF94' },
            ].map(({ icon: Icon, label, value, color }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.25 + i * 0.1 }}
                style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}
              >
                <div style={{
                  width: 36, height: 36, borderRadius: 9,
                  background: `${color}12`, border: `1px solid ${color}25`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={15} color={color} />
                </div>
                <div>
                  <div style={{ fontSize: 11, color: 'rgba(240,244,255,0.4)', marginBottom: 1 }}>{label}</div>
                  <div style={{ fontSize: 14, fontWeight: 500 }}>{value}</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Form card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2 }}
            style={{
              background: 'rgba(10, 22, 40, 0.7)',
              border: '1px solid rgba(240,244,255,0.07)',
              borderRadius: 16, padding: '2rem',
            }}
          >
            {status === 'success' ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ textAlign: 'center', padding: '3rem 0' }}
              >
                <div style={{ fontSize: 52, marginBottom: '1rem' }}>✅</div>
                <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', marginBottom: '0.75rem' }}>
                  Booking received!
                </h3>
                <p style={{ fontSize: 14, color: 'rgba(240,244,255,0.55)', lineHeight: 1.7 }}>
                  We've saved your details and will reach out within 24 hours to confirm your free call slot.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ fontSize: 16, fontWeight: 700, fontFamily: 'Syne, sans-serif', marginBottom: '0.25rem' }}>
                  Book a free strategy call
                </div>

                {/* Name + Email */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <Field label="Full Name *" placeholder="John Smith"
                    value={form.name} onChange={handleChange('name')} required />
                  <Field label="Email Address *" placeholder="john@realty.com" type="email"
                    value={form.email} onChange={handleChange('email')} required />
                </div>

                {/* Phone + Company */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <Field label="Phone / WhatsApp *" placeholder="+1 555 000 0000"
                    value={form.phone} onChange={handleChange('phone')} required />
                  <Field label="Brokerage / Company" placeholder="Keller Williams Dallas"
                    value={form.company} onChange={handleChange('company')} />
                </div>

                {/* Agents + Lead Source */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }} className="form-row">
                  <div>
                    <label style={{ fontSize: 12, color: 'rgba(240,244,255,0.5)', display: 'block', marginBottom: 6 }}>
                      Team Size (agents)
                    </label>
                    <select
                      value={form.agents}
                      onChange={handleChange('agents')}
                      style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(240,244,255,0.1)'}
                    >
                      <option value="" style={{ background: '#0A1628' }}>Select...</option>
                      <option value="Solo agent" style={{ background: '#0A1628' }}>Solo agent</option>
                      <option value="2–5 agents" style={{ background: '#0A1628' }}>2–5 agents</option>
                      <option value="6–15 agents" style={{ background: '#0A1628' }}>6–15 agents</option>
                      <option value="15+ agents" style={{ background: '#0A1628' }}>15+ agents</option>
                    </select>
                  </div>
                  <div>
                    <label style={{ fontSize: 12, color: 'rgba(240,244,255,0.5)', display: 'block', marginBottom: 6 }}>
                      How did you find us?
                    </label>
                    <select
                      value={form.source}
                      onChange={handleChange('source')}
                      style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
                      onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'}
                      onBlur={e => e.target.style.borderColor = 'rgba(240,244,255,0.1)'}
                    >
                      <option value="" style={{ background: '#0A1628' }}>Select...</option>
                      <option value="Cold Email" style={{ background: '#0A1628' }}>Cold Email</option>
                      <option value="LinkedIn" style={{ background: '#0A1628' }}>LinkedIn</option>
                      <option value="Google Search" style={{ background: '#0A1628' }}>Google Search</option>
                      <option value="Referral" style={{ background: '#0A1628' }}>Referral</option>
                      <option value="Instagram/Facebook" style={{ background: '#0A1628' }}>Instagram / Facebook</option>
                      <option value="Other" style={{ background: '#0A1628' }}>Other</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label style={{ fontSize: 12, color: 'rgba(240,244,255,0.5)', display: 'block', marginBottom: 6 }}>
                    Biggest pain point right now
                  </label>
                  <textarea
                    placeholder="e.g. We respond to leads too slow, losing deals to competitors..."
                    rows={3}
                    value={form.message}
                    onChange={handleChange('message')}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'}
                    onBlur={e => e.target.style.borderColor = 'rgba(240,244,255,0.1)'}
                  />
                </div>

                {status === 'error' && (
                  <div style={{
                    background: 'rgba(255,80,80,0.08)', border: '1px solid rgba(255,80,80,0.2)',
                    borderRadius: 8, padding: '10px 14px',
                    fontSize: 13, color: '#FF5050',
                  }}>
                    Something went wrong. Please email us directly at hello@growthmate.io
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'loading'}
                  style={{
                    background: status === 'loading'
                      ? 'rgba(0,212,255,0.4)'
                      : 'linear-gradient(135deg, #00D4FF, #0066FF)',
                    color: '#050B18', fontWeight: 700, fontSize: 15,
                    padding: '13px', borderRadius: 10,
                    fontFamily: 'Syne, sans-serif',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
                    transition: 'transform 0.2s, box-shadow 0.2s',
                    boxShadow: '0 4px 24px rgba(0,212,255,0.2)',
                    cursor: status === 'loading' ? 'not-allowed' : 'pointer',
                  }}
                  onMouseEnter={e => { if (status !== 'loading') { e.currentTarget.style.transform = 'translateY(-1px)'; e.currentTarget.style.boxShadow = '0 6px 32px rgba(0,212,255,0.35)'; } }}
                  onMouseLeave={e => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = '0 4px 24px rgba(0,212,255,0.2)'; }}
                >
                  {status === 'loading'
                    ? <><Loader size={15} style={{ animation: 'spin 1s linear infinite' }} /> Booking...</>
                    : <> Book My Free Call <ArrowRight size={15} /></>
                  }
                </button>

                <p style={{ fontSize: 11, color: 'rgba(240,244,255,0.3)', textAlign: 'center' }}>
                  No spam. No sales pressure. Just a 30-min conversation.
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </section>
  );
}

function Field({ label, placeholder, value, onChange, type = 'text', required }) {
  return (
    <div>
      <label style={{ fontSize: 12, color: 'rgba(240,244,255,0.5)', display: 'block', marginBottom: 6 }}>
        {label}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        required={required}
        value={value}
        onChange={onChange}
        style={{
          width: '100%', background: 'rgba(240,244,255,0.04)',
          border: '1px solid rgba(240,244,255,0.1)',
          borderRadius: 8, padding: '10px 14px',
          color: '#F0F4FF', fontSize: 14,
          outline: 'none', fontFamily: 'Inter, sans-serif',
          transition: 'border-color 0.2s',
        }}
        onFocus={e => e.target.style.borderColor = 'rgba(0,212,255,0.4)'}
        onBlur={e => e.target.style.borderColor = 'rgba(240,244,255,0.1)'}
      />
    </div>
  );
}
