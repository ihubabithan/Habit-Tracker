import React, { useState } from 'react';
import MyHabits from './components/MyHabits';
import AddHabit from './components/AddHabit';
import HabitCalendar from './components/HabitCalendar';
import './App.css';

function App() {
  const [habits, setHabits] = useState([]);
  const [currentView, setCurrentView] = useState('MyHabits'); // 'MyHabits' or 'AddHabit'
  const [selectedHabit, setSelectedHabit] = useState(null); // Track selected habit for calendar view

  const addHabit = (habitName) => {
    setHabits([...habits, { name: habitName, streak: 0, daysCompleted: [], missedDays: [] }]);
    setCurrentView('MyHabits'); // Go back to My Habits after adding
  };

  const handleHabitClick = (habit) => {
    setSelectedHabit(habit);
    setCurrentView('HabitCalendar');
  };

  return (
    <div className="App">
      <div className="dashboard">
        <nav>
          <button onClick={() => setCurrentView('MyHabits')}>My Habits</button>
          <button onClick={() => setCurrentView('AddHabit')}>Add Habit</button>
        </nav>
      </div>

      <div className="main-content">
        {currentView === 'MyHabits' && (
          <MyHabits habits={habits} onHabitClick={handleHabitClick} />
        )}

        {currentView === 'AddHabit' && <AddHabit onAddHabit={addHabit} />}

        {currentView === 'HabitCalendar' && selectedHabit && (
          <HabitCalendar
            habit={selectedHabit}
            setHabits={setHabits}
            habits={habits}
          />
        )}
      </div>
    </div>
  );
}

export default App;
