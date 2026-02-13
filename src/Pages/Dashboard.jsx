import React from 'react';
import HabitForm from '../Components/HabitForm';
import HabitItem from '../Components/HabitItem';
import { useHabits } from '../Context/HabitContext';

function Dashboard() {
  const { habits, addHabit, toggleHabit, deleteHabit } = useHabits();

  const completedCount = habits.filter(h => h.completed).length;
  const progress = habits.length > 0 ? Math.round((completedCount / habits.length) * 100) : 0;

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-slate-800">Hello, User 👋</h1>
        <p className="text-slate-500">Let's check your progress today.</p>
      </header>

      {/* Progress summary */}
      <div className="bg-indigo-600 rounded-2xl p-6 text-white shadow-lg shadow-indigo-200 mb-8 flex items-center justify-between">
         <div>
            <h2 className="text-2xl font-bold mb-1">Your Daily Goals</h2>
            <p className="text-indigo-200 text-sm">{completedCount} of {habits.length} completed</p>
         </div>
         <div className="text-4xl font-bold">{progress}%</div>
      </div>

      <HabitForm onAdd={addHabit} />

      <div className="mt-8 space-y-2">
        {habits.map(habit => (
           <HabitItem 
             key={habit.id} 
             habit={habit} 
             onToggle={toggleHabit} 
             onDelete={deleteHabit} 
           />
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
