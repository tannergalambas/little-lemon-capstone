import { useMemo } from 'react';
import { useLocation, Link } from 'react-router-dom';
export default function Confirmation() {
const { search } = useLocation();
const details = useMemo(() => Object.fromEntries(new
URLSearchParams(search)), [search]);
return (
<section className="page page--narrow">
<h2>Reservation confirmed!</h2>
<p>
See you on <strong>{details.date}</strong> at <strong>{details.time}</
strong> for
<strong> {details.guests}</strong> guest(s).
</p>
{details.occasion && <p>Occasion: {details.occasion}</p>}
<Link className="btn" to="/">Back to Home</Link>
</section>
);
}