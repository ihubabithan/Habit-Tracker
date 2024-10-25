import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar'; // Calendar component
import 'react-calendar/dist/Calendar.css'; // Calendar styles
import MotivationalQuote from './MotivationalQuote'; // Import the motivational quote component

const HabitCalendar = ({ habit, setHabits, habits }) => {
  const [daysCompleted, setDaysCompleted] = useState(habit.daysCompleted);
  const [missedDays, setMissedDays] = useState(habit.missedDays);
  const [streak, setStreak] = useState(habit.streak);

  useEffect(() => {
    // Calculate and update streak when daysCompleted changes
    calculateStreak();
  }, [daysCompleted]);

  const handleDayClick = (date) => {
    const dateString = date.toISOString().split('T')[0];

    if (daysCompleted.includes(dateString)) {
      setDaysCompleted(daysCompleted.filter((day) => day !== dateString));
    } else {
      setDaysCompleted([...daysCompleted, dateString]);
    }

    // Update the habit in the parent state
    const updatedHabits = habits.map((h) =>
      h.name === habit.name
        ? { ...h, daysCompleted: daysCompleted, streak: streak }
        : h
    );
    setHabits(updatedHabits);
  };

  const calculateStreak = () => {
    if (daysCompleted.length === 0) {
      setStreak(0);
      return;
    }

    let newStreak = 1;
    for (let i = daysCompleted.length - 1; i > 0; i--) {
      const currentDate = new Date(daysCompleted[i]);
      const previousDate = new Date(daysCompleted[i - 1]);

      // Check if the dates are consecutive
      if (currentDate - previousDate === 86400000) { 
        newStreak++;
      } else {
        break;
      }
    }
    setStreak(newStreak);
  };

  return (
    <div>
      <h2>{habit.name} Calendar</h2>
      <p>Current Streak: {streak} days</p>

      {/* Include the motivational quote */}
      <MotivationalQuote />

      <Calendar
        tileClassName={({ date }) => {
          const dateString = date.toISOString().split('T')[0];
          if (daysCompleted.includes(dateString)) {
            return 'completed'; // Green for completed days
          }
          if (missedDays.includes(dateString)) {
            return 'missed'; // Red for missed days
          }
          return null;
        }}
        onClickDay={handleDayClick}
      />
    </div>
  );
};

export default HabitCalendar;
