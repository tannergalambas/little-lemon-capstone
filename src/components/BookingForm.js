// src/components/BookingForm.js

import { useState } from 'react';
import OccasionDropdown from './OccasionDropdown'; // ✅ add this

function BookingForm() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !date || !time || !guests || !occasion) {
      alert('Please fill out all fields.');
      return;
    }

    alert(`Booking confirmed for ${name} on ${date} at ${time} for ${guests} guests! Occasion: ${occasion}`);
    
    // Reset form (optional)
    setName('');
    setDate('');
    setTime('');
    setGuests(1);
    setOccasion('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <legend>Book a Table</legend>

        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />

        <label htmlFor="date">Date:</label>
        <input
          id="date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label htmlFor="time">Time:</label>
        <input
          id="time"
          type="time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        />

        <label htmlFor="guests">Number of Guests:</label>
        <input
          id="guests"
          type="number"
          min="1"
          max="20"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />

<label htmlFor="occasion">Occasion:</label>
<OccasionDropdown
  value={occasion}
  onChange={setOccasion}
/>

        <button type="submit" style={{ marginTop: "10px" }}>
          Confirm Booking
        </button>
      </fieldset>
    </form>
  );
}

export default BookingForm;