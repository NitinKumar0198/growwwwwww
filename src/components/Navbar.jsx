import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Services', href: '#services' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Results', href: '#results' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '0 2rem',
          height: '72px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          background: scrolled ? 'rgba(5, 11, 24, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : '1px solid transparent',
          transition: 'background 0.4s, border-color 0.4s, backdrop-filter 0.4s',
        }}
      >
        {/* Logo */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          {/* <div style={{
            width: 36, height: 36, borderRadius: 8,
            background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 14, color: '#050B18'
          }}>GM</div> */}
        <div>
</div>
          <span style={{ fontFamily: 'Syne, sans-serif', fontWeight: 800, fontSize: 18 }}>
            Growth<span style={{ color: '#00D4FF' }}>Mate</span>
          </span>
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          {navLinks.map(link => (
            <a key={link.label} href={link.href} style={{
              fontSize: 14, fontWeight: 500, color: 'rgba(240,244,255,0.7)',
              transition: 'color 0.2s', letterSpacing: '0.01em'
            }}
              onMouseEnter={e => e.target.style.color = '#F0F4FF'}
              onMouseLeave={e => e.target.style.color = 'rgba(240,244,255,0.7)'}
            >{link.label}</a>
          ))}
        </div>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <a href="#pricing" className="desktop-nav" style={{
            fontSize: 14, fontWeight: 500, color: 'rgba(240,244,255,0.7)'
          }}>See Plans</a>
          <a href="#contact" style={{
            background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
            color: '#050B18', fontWeight: 700, fontSize: 13,
            padding: '10px 22px', borderRadius: 8, letterSpacing: '0.02em',
            display: 'inline-block', fontFamily: 'Syne, sans-serif',
            transition: 'transform 0.2s, box-shadow 0.2s',
            boxShadow: '0 0 20px rgba(0,212,255,0.2)'
          }}
            onMouseEnter={e => { e.target.style.transform = 'translateY(-1px)'; e.target.style.boxShadow = '0 4px 24px rgba(0,212,255,0.4)'; }}
            onMouseLeave={e => { e.target.style.transform = 'translateY(0)'; e.target.style.boxShadow = '0 0 20px rgba(0,212,255,0.2)'; }}
          >Book Free Call</a>
          <button onClick={() => setMobileOpen(!mobileOpen)} className="mobile-menu-btn"
            style={{ background: 'none', color: '#F0F4FF', display: 'none' }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: 72, left: 0, right: 0, zIndex: 999,
              background: 'rgba(5,11,24,0.98)', backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0,212,255,0.1)',
              padding: '1.5rem 2rem 2rem',
              display: 'flex', flexDirection: 'column', gap: '1.5rem'
            }}
          >
            {navLinks.map(link => (
              <a key={link.label} href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{ fontSize: 16, fontWeight: 500, color: 'rgba(240,244,255,0.8)' }}>
                {link.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setMobileOpen(false)} style={{
              background: 'linear-gradient(135deg, #00D4FF, #0066FF)',
              color: '#050B18', fontWeight: 700, fontSize: 14,
              padding: '12px 24px', borderRadius: 8, textAlign: 'center',
              fontFamily: 'Syne, sans-serif'
            }}>Book Free Call</a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
