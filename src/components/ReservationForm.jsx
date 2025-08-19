import { useEffect, useReducer, useState } from 'react';
import { fetchTimes, submitReservation } from '../utils/api';
import './ReservationForm.css';

function timesReducer(state, action) {
switch (action.type) {case 'init':
    return action.times;
    case 'set':
    return action.times;
    default:
    return state;
    }
    }
    export default function ReservationForm({ onSuccess }) {
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState(2);
    const [occasion, setOccasion] = useState('');
    const [times, dispatch] = useReducer(timesReducer, []);
    const [error, setError] = useState('');
    useEffect(() => {
    const initTimes = fetchTimes(new Date());
    dispatch({ type: 'init', times: initTimes });
    }, []);
    useEffect(() => {
    if (!date) return;
    const next = fetchTimes(new Date(date));
    dispatch({ type: 'set', times: next });
    }, [date]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const today = new Date();
        const chosen = new Date(date);
        if (!date || chosen < new Date(today.toDateString())) {
        setError('Please choose a future date.');
        return;
        }
        if (!time) {
        setError('Please select a time.');
        return;
        }
        if (guests < 1 || guests > 10) {
        setError('Guests must be between 1 and 10.');
        return;
        }
        const ok = await submitReservation({ date, time, guests, occasion });
        if (ok) onSuccess?.({ date, time, guests, occasion });
else setError('Something went wrong. Please try again.');
};
return (
<form className="res-form" onSubmit={handleSubmit} aria-labelledby="reservetitle">
<h2 id="reserve-title">Reserve a table</h2>
<label htmlFor="res-date">Date</label>
<input
id="res-date"
type="date"
value={date}
onChange={(e) => setDate(e.target.value)}
required
/>
<label htmlFor="res-time">Time</label>
<select id="res-time" value={time} onChange={(e) =>
setTime(e.target.value)} required>
<option value="">Select a time</option>
{times.map((t) => (
<option key={t} value={t}>{t}</option>
))}
</select>
<label htmlFor="guests">Guests</label>
<input
id="guests"
type="number"
min="1"
max="10"
value={guests}
onChange={(e) => setGuests(Number(e.target.value))}
required
/>

<label htmlFor="occasion">Occasion (optional)</label>
<select id="occasion" value={occasion} onChange={(e) =>
setOccasion(e.target.value)}>
<option value="">—</option>
<option>Birthday</option>
<option>Anniversary</option>
<option>Other</option>
</select>
{error && <p role="alert" className="res-form__error">{error}</p>}
<button className="btn" type="submit">Book table</button>
</form>
);
}