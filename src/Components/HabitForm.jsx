import React, { useState } from 'react';
import { CATEGORIES } from '../Interfaces/habitTypes';

function HabitForm({ onAdd }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState(CATEGORIES.PERSONAL);

  // Handles form submit and sends the new habit to parent
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    onAdd(text, category);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-1 rounded-xl shadow-sm border border-slate-200 flex flex-col sm:flex-row gap-2">
      {/* Category selector */}
      <select 
        value={category} 
        onChange={(e) => setCategory(e.target.value)}
        className="bg-transparent text-slate-600 text-sm font-medium px-4 py-3 outline-none cursor-pointer hover:bg-slate-50 rounded-lg sm:w-32"
      >
        {Object.values(CATEGORIES).map(cat => (
          <option key={cat} value={cat}>{cat}</option>
        ))}
      </select>

      {/* Habit text input */}
      <input 
        type="text" 
        className="flex-1 bg-transparent text-slate-800 placeholder:text-slate-400 px-4 py-3 outline-none"
        placeholder="Add a new habit..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      
      <button 
        type="submit"
        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg m-1 font-medium transition-colors text-sm"
      >
        Add Habit
      </button>
    </form>
  );
}

export default HabitForm;
