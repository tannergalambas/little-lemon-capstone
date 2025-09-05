import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logoText from '../assets/logo-text-green.png';
import './Navbar.css';

export default function Navbar(){
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <div className="container navbar__inner">
        <Link to="/" className="navbar__brand" onClick={close} aria-label="Little Lemon home">
          <img src={logoText} alt="Little Lemon" width="140" height="28" />
        </Link>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-label="Toggle navigation"
          onClick={() => setOpen(v => !v)}
        >
          ☰
        </button>

        <nav className={`navbar__nav ${open ? 'is-open' : ''}`} aria-label="Primary">
          <ul className="navbar__links" onClick={close}>
            <li><NavLink to="/" end>Home</NavLink></li>
            <li><NavLink to="/menu">Menu</NavLink></li>
            <li><NavLink to="/reservations">Reservations</NavLink></li>
            <li><NavLink to="/order-online">Order Online</NavLink></li>
            <li><NavLink to="/login">Login</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}