import { useState } from "react";

export default function Calendar() {
    
  const [date, setDate] = useState(new Date());
  const daysInMonth = new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <div>
      {days.map((day) => (
        <div key={day}>{day.toString()}</div>
      ))}
    </div>
  );
}
