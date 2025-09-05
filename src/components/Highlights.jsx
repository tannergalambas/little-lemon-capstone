import SpecialsCard from './SpecialsCard';
import './Highlights.css';

import greekSaladImg from '../assets/greek-salad.jpeg';
import bruschettaImg from '../assets/bruschetta.jpeg';
import lemonDessertImg from '../assets/lemon-dessert.png';

const specials = [
  { id: 1, name: 'Greek Salad', price: 12.99, description: 'Crisp lettuce, feta, olives, lemon vinaigrette.', image: greekSaladImg },
  { id: 2, name: 'Bruschetta', price: 5.99, description: 'Grilled bread, tomatoes, garlic, basil.', image: bruschettaImg },
  { id: 3, name: 'Lemon Dessert', price: 4.99, description: 'House favorite, zesty and sweet.', image: lemonDessertImg },
];

export default function Highlights() {
  return (
    <section className="highlights" aria-labelledby="highlights-title">
      <div className="highlights__head">
        <h2 id="highlights-title">This week's specials</h2>
        <a className="btn" href="/order-online">Order online</a>
      </div>
      
      <div className="highlights__row" role="list">
        {specials.map(item => (
          <div key={item.id} className="highlight-card" role="listitem">
            <SpecialsCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}