import { Link } from 'react-router-dom';
import './Hero.css';
import heroImg from '../assets/greek-salad.jpeg';

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero__grid">
        <div className="hero__content">
          <h1>Little Lemon</h1>
          <p className="hero__location">Chicago</p>
          <p className="hero__tagline">Fresh Mediterranean flavors, neighborhood vibes.</p>
          <Link to="/reservations" className="btn">Reserve a table</Link>
        </div>
        <img className="hero__image" src={heroImg} alt="Fresh Greek salad with feta, olives, and lemon" />
      </div>
    </section>
  );
}
