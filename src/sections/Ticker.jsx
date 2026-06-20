import { motion } from 'framer-motion';

const items = [
  '⚡ Lead responded in 47 seconds',
  '📅 3 appointments booked overnight',
  '💰 $1.2M listing closed via AI follow-up',
  '🤖 412 leads auto-qualified this week',
  '📊 87% reduction in manual CRM work',
  '🔥 Zero leads lost to slow response',
];

export default function Ticker() {
  const doubled = [...items, ...items];
  return (
    <div style={{
      borderTop: '1px solid rgba(0,212,255,0.08)',
      borderBottom: '1px solid rgba(0,212,255,0.08)',
      background: 'rgba(0,212,255,0.03)',
      overflow: 'hidden',
      padding: '14px 0',
    }}>
      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
        style={{ display: 'flex', gap: '3rem', whiteSpace: 'nowrap', width: 'max-content' }}
      >
        {doubled.map((item, i) => (
          <span key={i} style={{ fontSize: 13, color: 'rgba(240,244,255,0.55)', fontWeight: 500 }}>
            {item}
            <span style={{ marginLeft: '3rem', color: 'rgba(0,212,255,0.3)' }}>·</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
