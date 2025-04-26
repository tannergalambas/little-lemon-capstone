// src/components/OccasionDropdown.js

function OccasionDropdown({ value, onChange }) {
    return (
      <select
        id="occasion"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
      >
        <option value="">Select an occasion</option>
        <option value="Birthday">Birthday</option>
        <option value="Engagement">Engagement</option>
        <option value="Anniversary">Anniversary</option>
      </select>
    );
  }
  
  export default OccasionDropdown;