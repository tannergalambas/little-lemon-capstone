import './Testimonials.css';
const reviews = [
{ id: 1, name: 'Alex', rating: 5, text: 'Fantastic flavors and cozy vibe.' },
{ id: 2, name: 'Riya', rating: 4, text: 'Great specials! Will be back.' },
{ id: 3, name: 'Marcus', rating: 5, text: 'Service was top-notch.' },
{ id: 4, name: 'Nadia', rating: 4, text: 'Loved the dessert.' }
];
export default function Testimonials() {
return (
<section className="testimonials" aria-labelledby="testimonials-title">
<h2 id="testimonials-title">Testimonials</h2>
<div className="testimonials__grid" role="list">
{reviews.map(r => (
<article key={r.id} role="listitem" className="review">
<div aria-label={`Rating: ${r.rating} out of 5`}
className="review__stars">
{'★'.repeat(r.rating)}{'☆'.repeat(5 - r.rating)}
</div>
<p className="review__text">{r.text}</p>
<p className="review__name">— {r.name}</p>
</article>
))}
</div>
</section>
);
}