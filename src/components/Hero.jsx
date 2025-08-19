import { Link } from 'react-router-dom';
import './Hero.css';
export default function Hero() {
return (

<section className="hero" aria-labelledby="hero-title">
<div className="hero__content">
<h1 id="hero-title">Little Lemon</h1>
<p className="hero__location">Chicago</p>
<p className="hero__tagline">Fresh Mediterranean flavors, neighborhood
vibes.</p>
<Link to="/reservations" className="btn">Reserve a table</Link>
</div>
<div className="hero__image" aria-hidden="true" />
</section>
);
}