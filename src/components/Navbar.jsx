import React, { useState, useEffect } from 'react';
import logo from '../assets/img/Logo.png';
const navLinks = [
  { label: 'Intro', href: '#intro' },
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#edu' },
  { label: 'Works', href: '#works' },
  { label: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [active, setActive] = useState('Intro');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navContainer = `
    fixed top-0 left-0 z-50 w-[calc(100%-2rem)] flex items-center justify-between px-4 md:px-8 transition-all duration-300 ease-in-out
    ${isScrolled ? 'bg-blue-950 rounded-2xl shadow-2xl mt-4 mx-4 h-14 md:h-16' : 'bg-transparent h-16 md:h-20'}
  `;

  const linkBase = `transition-colors duration-300 px-1`;
  const getLinkStyle = (label) =>
    active === label ? 'text-white font-bold' : 'text-white/70 hover:text-white';

  return (
    <nav className={navContainer} role="navigation">
      {/* Logo */}
      <div className="flex-1">
        <a href="/" className="flex items-center gap-2">
          {!isScrolled && (
            <img 
              src={logo} 
              alt="Logo"
              className="h-8 w-8 rounded-full"
            />
          )}
          <span className={`text-xl md:text-3xl font-serif font-bold tracking-tight transition-colors duration-300 text-white`}>
            Haider Ali
          </span>
        </a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6 lg:gap-10 text-base lg:text-lg font-medium">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={() => setActive(link.label)}
            className={`${linkBase} ${getLinkStyle(link.label)}`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Hamburger Icon */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        className="md:hidden p-2"
      >
        <svg
          className={`w-7 h-7 text-white transition-colors duration-300`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {menuOpen ? (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className={`absolute top-full left-0 w-full ${isScrolled ? 'bg-blue-950' : 'bg-black/80'} shadow-lg flex flex-col items-center py-4 md:hidden transition-all duration-300`}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => {
                setActive(link.label);
                setMenuOpen(false);
              }}
              className={`w-full text-center py-2 text-base font-medium ${getLinkStyle(link.label)}`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
