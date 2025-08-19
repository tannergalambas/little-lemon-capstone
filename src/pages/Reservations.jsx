import { useNavigate } from 'react-router-dom';
import ReservationForm from '../components/ReservationForm';
export default function Reservations() {
const navigate = useNavigate();
return (
<section className="page page--narrow">
<ReservationForm
onSuccess={(data) => {
const query = new URLSearchParams(data).toString();
navigate(`/confirmed?${query}`);
}}
/>
</section>
);
}