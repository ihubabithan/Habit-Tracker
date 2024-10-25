import React, { useState } from 'react';


const AddHabit = ({ onAddHabit }) => {
  const [habitInput, setHabitInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (habitInput.trim()) {
      onAddHabit(habitInput.trim());
      setHabitInput(''); // Clear the input after adding
    }
  };

  return (
    <div className="add-habit-container">
      <h1 className="add-habit-title">Add New Habit</h1>
      <form onSubmit={handleSubmit} className="add-habit-form">
        <input
          type="text"
          placeholder="Habit name"
          value={habitInput}
          onChange={(e) => setHabitInput(e.target.value)}
          className="add-habit-input"
        />
        <button type="submit" className="add-habit-button">Add Habit</button>
      </form>
    </div>
  );
};

export default AddHabit;
