import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const socialLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nitin-kumar-a003863a8', Icon: Linkedin },
  { label: 'Instagram', href: 'https://www.instagram.com/its_not_humann', Icon: Instagram },
];

const links = {
  Services: ['Lead Response AI', 'WhatsApp Automation', 'Email Sequences', 'CRM Automation', 'Appointment Booking'],
  Company: ['About GrowthMate', 'How It Works', 'Results & Case Studies', 'Blog', 'Contact'],
  Resources: ['Free Audit Call', 'ROI Calculator', 'Integration Docs', 'Help Center'],
};

export default function Footer() {
  return (
    <footer style={{
      borderTop: '1px solid rgba(240,244,255,0.06)',
      padding: '60px 2rem 40px',
      background: 'rgba(5, 8, 16, 0.8)',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.5fr 1fr 1fr 1fr',
          gap: '3rem',
          marginBottom: '3rem',
        }} className="footer-grid">
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem' }}>
              <div style={{
                width: 32, height: 32, borderRadius: 7,
                background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 12, color: '#050B18'
              }}>GM</div>
              <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 16 }}>
                Growth<span style={{ color: '#00D4FF' }}>Mate</span>
              </span>
            </div>
            <p style={{ fontSize: 13, color: 'rgba(240,244,255,0.45)', lineHeight: 1.7, maxWidth: 240, marginBottom: '1.5rem' }}>
              AI-powered sales automation for US real estate agents. Stop chasing. Start closing.
            </p>
            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {['in', 'tw', 'ig'].map(s => (
                <div key={s} style={{
                  width: 32, height: 32, borderRadius: 8,
                  background: 'rgba(240,244,255,0.06)', border: '1px solid rgba(240,244,255,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 11, fontWeight: 600, color: 'rgba(240,244,255,0.4)',
                  cursor: 'pointer', transition: 'background 0.2s, border-color 0.2s',
                }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(0,212,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(0,212,255,0.3)'; }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'rgba(240,244,255,0.06)'; e.currentTarget.style.borderColor = 'rgba(240,244,255,0.08)'; }}
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div style={{ fontSize: 12, fontWeight: 700, color: 'rgba(240,244,255,0.4)', letterSpacing: '0.08em', textTransform: 'uppercase', marginBottom: '1rem' }}>
                {group}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                {items.map(item => (
                  <a key={item} href="#" style={{
                    fontSize: 13, color: 'rgba(240,244,255,0.5)', transition: 'color 0.2s',
                  }}
                    onMouseEnter={e => e.target.style.color = '#F0F4FF'}
                    onMouseLeave={e => e.target.style.color = 'rgba(240,244,255,0.5)'}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div style={{
          borderTop: '1px solid rgba(240,244,255,0.05)',
          paddingTop: '1.5rem',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexWrap: 'wrap', gap: '1rem',
        }}>
          <span style={{ fontSize: 12, color: 'rgba(240,244,255,0.3)' }}>
            © 2025 GrowthMate Automation. All rights reserved.
          </span>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ fontSize: 12, color: 'rgba(240,244,255,0.3)', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = 'rgba(240,244,255,0.6)'}
                onMouseLeave={e => e.target.style.color = 'rgba(240,244,255,0.3)'}
              >{l}</a>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
