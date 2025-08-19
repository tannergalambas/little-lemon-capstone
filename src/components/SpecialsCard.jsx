export default function SpecialsCard({ item }) {
    return (
    <article className="card" role="listitem">
    <div className="card__img" aria-hidden="true" />
    <div className="card__body">
    <div className="card__row">
    <h3 className="card__title">{item.name}</h3>
    <span className="card__price">${item.price.toFixed(2)}</span>
    </div>
    <p className="card__desc">{item.description}</p>
    <a className="btn btn--secondary" href="/order-online">Order for
    delivery</a>
    </div>
    </article>
    );
    }