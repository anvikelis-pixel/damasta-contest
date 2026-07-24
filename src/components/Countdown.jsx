import { useEffect, useState } from "react";
import "../styles/Countdown.css";

const DRAW_DATE = new Date("2026-08-02T20:00:00+03:00");

function calculateTimeLeft() {
  const difference = DRAW_DATE.getTime() - Date.now();

  if (difference <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
      finished: true,
    };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
    finished: false,
  };
}

function Countdown() {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (timeLeft.finished) {
    return (
      <div className="countdown-finished">
        Η κλήρωση ολοκληρώθηκε
      </div>
    );
  }

  const units = [
    { value: timeLeft.days, label: "Ημέρες" },
    { value: timeLeft.hours, label: "Ώρες" },
    { value: timeLeft.minutes, label: "Λεπτά" },
    { value: timeLeft.seconds, label: "Δευτ." },
  ];

  return (
    <div className="countdown-wrapper">
      <p className="countdown-label">Μέχρι τη μεγάλη κλήρωση</p>

      <div className="countdown">
        {units.map((unit) => (
          <div className="countdown-unit" key={unit.label}>
            <strong>{String(unit.value).padStart(2, "0")}</strong>
            <span>{unit.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Countdown;