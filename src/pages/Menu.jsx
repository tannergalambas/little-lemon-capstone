import './Menu.css';
import { useMemo, useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import bruschettaImg from '../assets/bruschetta.jpeg';
// You can add more real images later as you collect them

const menuData = {
  Starters: [
    { id: 'st1', name: 'Bruschetta', price: 8.5, description: 'Grilled bread with marinated tomatoes, basil, and olive oil.', tags: ['vegetarian'], image: bruschettaImg },
    { id: 'st2', name: 'Fried Calamari', price: 11.0, description: 'Crispy calamari with lemon aioli.', tags: [] },
    { id: 'st3', name: 'Seasonal Soup', price: 7.0, description: 'Chef’s soup of the day with warm bread.', tags: ['vegan', 'gf'] },
  ],
  Mains: [
    { id: 'm1', name: 'Lemon Herb Chicken', price: 17.5, description: 'Roasted chicken with lemon butter sauce and market vegetables.', tags: ['gf'] },
    { id: 'm2', name: 'Pappardelle Bolognese', price: 16.0, description: 'Slow-simmered beef ragu over fresh pappardelle.', tags: [] },
    { id: 'm3', name: 'Mushroom Risotto', price: 15.5, description: 'Creamy arborio rice, wild mushrooms, and parmesan.', tags: ['vegetarian', 'gf'] },
  ],
  Desserts: [
    { id: 'd1', name: 'Lemon Tart', price: 7.5, description: 'Buttery crust with bright lemon curd and whipped cream.', tags: ['vegetarian'] },
    { id: 'd2', name: 'Olive Oil Cake', price: 7.0, description: 'Moist citrus cake with almond and honey.', tags: ['vegetarian'] },
  ],
  Drinks: [
    { id: 'dr1', name: 'House Lemonade', price: 4.0, description: 'Fresh-squeezed lemons, a touch of sweetness.', tags: ['non-alcoholic'] },
    { id: 'dr2', name: 'Espresso', price: 3.5, description: 'Rich and smooth, single or double.', tags: [] },
    { id: 'dr3', name: 'Chianti (Glass)', price: 9.0, description: 'Medium-bodied red with cherry and spice.', tags: ['21+'] },
  ],
};

export default function Menu() {
  const [tags, setTags] = useState([]); // selected tag slugs

  const allTags = useMemo(() => {
    const tagSet = new Set();
    Object.values(menuData).forEach(items => {
      items.forEach(i => (i.tags || []).forEach(t => tagSet.add(t)));
    });
    // Preserve a friendly order
    const order = ['vegetarian', 'vegan', 'gf', 'non-alcoholic', '21+'];
    return Array.from(tagSet).sort((a, b) => order.indexOf(a) - order.indexOf(b));
  }, []);

  const tagLabels = {
    vegetarian: 'Vegetarian',
    vegan: 'Vegan',
    gf: 'Gluten-free',
    'non-alcoholic': 'Non-alcoholic',
    '21+': '21+',
  };

  const toggleTag = (t) => {
    setTags(prev => prev.includes(t) ? prev.filter(x => x !== t) : [...prev, t]);
  };

  const clearFilters = () => { setTags([]); };

  const filteredEntries = useMemo(() => {
    const entries = Object.entries(menuData);
    const hasTags = tags.length > 0;

    const filtered = entries.map(([section, items]) => [
      section,
      items.filter(i => {
        const itags = (i.tags || []);
        const matchesTags = !hasTags || tags.every(t => itags.map(x => x.toLowerCase()).includes(t.toLowerCase()));
        return matchesTags;
      })
    ]).filter(([, items]) => items.length > 0);

    return filtered;
  }, [tags]);

  return (
    <main className="menu" aria-labelledby="menu-title">
      <div className="container">
        <h1 id="menu-title" className="menu__title">Menu</h1>
        <p className="menu__subtitle">Seasonal plates and Little Lemon classics.</p>

        <div className="menu__filters" role="region" aria-label="Menu filters">
          <div className="menu__chips" aria-label="Dietary filters">
            {allTags.map(t => (
              <button
                key={t}
                type="button"
                className={`menu__chip ${tags.includes(t) ? 'is-on' : ''}`}
                aria-pressed={tags.includes(t)}
                onClick={() => toggleTag(t)}
                title={`Filter by ${tagLabels[t] || t}`}
              >
                {tagLabels[t] || t}
              </button>
            ))}
            {/* Clear button removed as requested */}
          </div>
          {/* Search bar removed as requested */}
        </div>
      </div>

      {filteredEntries.map(([section, items]) => (
        <section key={section} className="menu__section" aria-labelledby={`menu-${section}`}>
          <div className="container">
            <h2 id={`menu-${section}`} className="menu__heading">{section}</h2>
            <div className="menu__grid" role="list">
              {items.map(item => {
                const placeholderEmoji = section === 'Starters' ? '🥗' : section === 'Mains' ? '🍽️' : section === 'Desserts' ? '🍰' : '🥤';
                return (
                  <article key={item.id} className="menu-card" role="listitem">
                    {item.image ? (
                      <img src={item.image} alt={item.name} className="menu-card__img" />
                    ) : (
                      <div className="menu-card__img menu-card__img--placeholder" aria-hidden="true"><span>{placeholderEmoji}</span></div>
                    )}
                    <div className="menu-card__body">
                      <div className="menu-card__head">
                        <h3 className="menu-card__name">{item.name}</h3>
                        <span className="menu-card__price">${item.price.toFixed(2)}</span>
                      </div>
                      <p className="menu-card__desc">{item.description}</p>
                      {item.tags && item.tags.length > 0 && (
                        <ul className="menu-card__tags" aria-label="Dietary notes">
                          {item.tags.map(tag => {
                            const safe = tag.replace(/[^a-z0-9]/gi, '').toLowerCase();
                            return (
                              <li key={tag} className={`tag tag--${safe}`}>{tag}</li>
                            );
                          })}
                        </ul>
                      )}
                      <a href="/order-online" className="btn btn--secondary menu-card__cta" aria-label={`Add ${item.name} to order`}>
                        Add to Order <FaShoppingCart style={{ marginLeft: 6 }} />
                      </a>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      ))}
    </main>
  );
}
