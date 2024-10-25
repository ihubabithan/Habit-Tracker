import React from 'react';

const MyHabits = ({ habits, onHabitClick }) => {
  return (
    <div>
      <h1>My Habits</h1>
      {habits.length === 0 ? (
        <p>No habits added yet!</p>
      ) : (
        <ul className="habit-list">
          {habits.map((habit, index) => (
            <li key={index} onClick={() => onHabitClick(habit)}>
              <strong>{habit.name}</strong> - Current Streak: {habit.streak} days
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyHabits;
