import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    q: 'How fast can we get started?',
    a: 'We typically go live in 10–14 business days. Discovery call → system audit → build → test → launch. No technical work needed from your side.',
  },
  {
    q: 'Do I need to change my CRM?',
    a: 'Probably not. We integrate with the most common platforms — Salesforce, Follow Up Boss, HubSpot, kvCORE, and more. If you\'re on something niche, we\'ll assess during the audit call.',
  },
  {
    q: 'What if my leads come from multiple sources?',
    a: 'That\'s exactly where we shine. We centralize Zillow, Realtor.com, Facebook Ads, Google Ads, and your website into a single automated pipeline so nothing slips through.',
  },
  {
    q: 'Will the AI responses sound robotic?',
    a: 'No. We train the sequences on your brand voice, your market, and your client persona. Leads have no idea they\'re talking to automation — until you tell them.',
  },
  {
    q: 'What\'s the contract term?',
    a: 'Month-to-month. No lock-in. We believe the results should keep you, not the contract. Though we do ask for at least 30 days to see meaningful data.',
  },
  {
    q: 'Do you work with agents outside the US?',
    a: 'Our primary focus is the US market (we know the platforms, regulations, and lead behavior), but we\'ve worked with Canadian agents too. Reach out and we\'ll assess fit.',
  },
];

function FAQItem({ faq, i }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.4, delay: i * 0.06 }}
      style={{
        border: '1px solid rgba(240,244,255,0.07)',
        borderRadius: 12, overflow: 'hidden',
        background: open ? 'rgba(0,212,255,0.03)' : 'rgba(10,22,40,0.5)',
        transition: 'background 0.3s',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: '100%', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', gap: '1rem',
          padding: '1.25rem 1.5rem',
          background: 'none', color: '#F0F4FF',
          textAlign: 'left', cursor: 'pointer',
        }}
      >
        <span style={{ fontWeight: 600, fontSize: 15, fontFamily: 'Syne, sans-serif' }}>{faq.q}</span>
        <div style={{
          width: 28, height: 28, borderRadius: '50%', flexShrink: 0,
          background: open ? 'rgba(0,212,255,0.15)' : 'rgba(240,244,255,0.06)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'background 0.3s',
        }}>
          {open ? <Minus size={14} color="#00D4FF" /> : <Plus size={14} color="rgba(240,244,255,0.5)" />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{ padding: '0 1.5rem 1.25rem', fontSize: 14, color: 'rgba(240,244,255,0.6)', lineHeight: 1.7 }}>
              {faq.a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" style={{
      padding: '100px 2rem',
      background: 'linear-gradient(180deg, transparent 0%, rgba(0,212,255,0.02) 50%, transparent 100%)',
    }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <div ref={ref} style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', letterSpacing: '-0.02em', marginBottom: '1rem' }}
          >
            Questions we get all the time
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.15 }}
            style={{ fontSize: '1rem', color: 'rgba(240,244,255,0.5)' }}
          >
            Still have something on your mind? <a href="#contact" style={{ color: '#00D4FF' }}>Just ask us directly.</a>
          </motion.p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {faqs.map((faq, i) => <FAQItem key={faq.q} faq={faq} i={i} />)}
        </div>
      </div>
    </section>
  );
}
