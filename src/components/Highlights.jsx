import SpecialsCard from './SpecialsCard';
import './Highlights.css';
const specials = [
{ id: 1, name: 'Greek Salad', price: 12.99, description:
'Crisp lettuce, feta, olives, lemon vinaigrette.' },
{ id: 2, name: 'Bruschetta', price: 5.99, description: 'Grilled bread, tomatoes, garlic, basil.' },
{ id: 3, name: 'Lemon Dessert', price: 4.99, description: 'House favorite, zesty and sweet.' }
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
<SpecialsCard key={item.id} item={item} />
))}
</div>
</section>
);
}