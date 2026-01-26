'use client'

import { useState, useEffect } from 'react'

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
  })

  useEffect(() => {
    const targetDate = new Date("2026-01-27T09:00:00").getTime()

    const updateCountdown = () => {
      const now = new Date().getTime()
      const diff = targetDate - now

      if (diff <= 0) {
        setTimeLeft({
          days: '00',
          hours: '00',
          minutes: '00',
          seconds: '00'
        })
        return
      }

      const secondsTotal = Math.floor(diff / 1000)
      const days = Math.floor(secondsTotal / (60 * 60 * 24))
      const hours = Math.floor((secondsTotal % (60 * 60 * 24)) / (60 * 60))
      const minutes = Math.floor((secondsTotal % (60 * 60)) / 60)
      const seconds = secondsTotal % 60

      setTimeLeft({
        days: String(days).padStart(2, "0"),
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0")
      })
    }

    updateCountdown()
    const interval = setInterval(updateCountdown, 1000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="glass-card p-4 text-center rounded-xl">
          <div className="text-2xl sm:text-3xl font-space-grotesk font-bold text-accent-blue">
            {value}
          </div>
          <div className="text-xs uppercase tracking-widest text-gray-400 mt-1">
            {unit}
          </div>
        </div>
      ))}
    </div>
  )
}