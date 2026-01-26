'use client';

import { useState, useEffect } from 'react';

export default function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  });

  useEffect(() => {
    const target = new Date(targetDate).getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const diff = target - now;

      if (diff <= 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        });
        return;
      }

      const secondsTotal = Math.floor(diff / 1000);
      const days = Math.floor(secondsTotal / (60 * 60 * 24));
      const hours = Math.floor((secondsTotal % (60 * 60 * 24)) / (60 * 60));
      const minutes = Math.floor((secondsTotal % (60 * 60)) / 60);
      const seconds = secondsTotal % 60;

      setTimeLeft({
        days: String(days).padStart(2, '0'),
        hours: String(hours).padStart(2, '0'),
        minutes: String(minutes).padStart(2, '0'),
        seconds: String(seconds).padStart(2, '0')
      });
    };

    updateTimer();
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div className="grid grid-cols-4 gap-3" aria-label="Countdown timer">
      <div className="time-box">
        <span className="time-value">{timeLeft.days}</span>
        <span className="time-label">Days</span>
      </div>
      <div className="time-box">
        <span className="time-value">{timeLeft.hours}</span>
        <span className="time-label">Hours</span>
      </div>
      <div className="time-box">
        <span className="time-value">{timeLeft.minutes}</span>
        <span className="time-label">Minutes</span>
      </div>
      <div className="time-box">
        <span className="time-value">{timeLeft.seconds}</span>
        <span className="time-label">Seconds</span>
      </div>
    </div>
  );
}