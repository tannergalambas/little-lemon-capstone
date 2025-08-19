import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';
export default function Navbar() {
return (
<header className="navbar">
<div className="navbar__inner">
<Link to="/" className="navbar__brand">Little Lemon</Link>
<nav aria-label="Primary">
<ul className="navbar__links">
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