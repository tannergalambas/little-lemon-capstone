import './SpecialsCard.css'; // If you’re using card-specific styles
import { FaShoppingCart } from 'react-icons/fa';

export default function SpecialsCard({ item }) {
  const { name, price, description, image } = item;

  return (
    <article className="highlight-card" role="listitem">
      <img
        src={image}
        alt={name}
        className="highlight-card__img"
        style={{ borderRadius: '12px', height: '200px', objectFit: 'cover', width: '100%' }}
      />
      <div className="highlight-card__content">
        <div className="highlight-card__header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '12px' }}>
          <h3 style={{ fontSize: '1.1rem', fontWeight: '600' }}>{name}</h3>
          <span style={{ fontWeight: '600', color: 'var(--accent)' }}>${price.toFixed(2)}</span>
        </div>
        <p className="highlight-card__description" style={{ margin: '8px 0', color: 'var(--muted)' }}>{description}</p>
        <a href="/order-online" className="btn btn--secondary" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>
          Order <FaShoppingCart style={{ marginLeft: '6px' }} />
        </a>
      </div>
    </article>
  );
}