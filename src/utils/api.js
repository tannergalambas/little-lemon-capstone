// src/utils/api.js
export function fetchTimes(date) {
    const base = ['17:00', '18:00', '19:00', '20:00', '21:00'];
    const day = date.getDay();
    // Fewer slots on Mondays
    return day === 1 ? base.slice(0, 3) : base;
  }

  export function submitReservation(formData) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(true), 400);
    });
  }