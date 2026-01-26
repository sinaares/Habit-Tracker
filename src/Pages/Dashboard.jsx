import React, { useState, useEffect } from 'react';
import HabitForm from '../Components/HabitForm';
import HabitItem from '../Components/HabitItem';
import { createHabitObject } from '../Interfaces/habitTypes'; // Interface'den çektik

function Dashboard() {
  // --- State Yönetimi ---
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  // --- Side Effects (Kayıt) ---
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // --- Handlers (İşlevler) ---
  const handleAddHabit = (text, category) => {
    const newHabit = createHabitObject(text, category); // Interface fonksiyonunu kullandık
    setHabits([newHabit, ...habits]);
  };

  const handleToggleHabit = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const handleDeleteHabit = (id) => {
    if(window.confirm("Are you sure you want to delete this habit?")) { // Profesyonel detay: Onay kutusu
       setHabits(habits.filter(h => h.id !== id));
    }
  };

  // --- İstatistikler ---
  const completedCount = habits.filter(h => h.completed).length;
  const progress = habits.length > 0 ? Math.round((completedCount / habits.length) * 100) : 0;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      
      {/* Üst Bilgi Alanı */}
      <header className="mb-10 text-center sm:text-left sm:flex sm:items-end sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">Dashboard</h1>
          <p className="text-slate-500 mt-1">Track your habits, achieve your goals.</p>
        </div>
        
        {/* Progress Card */}
        <div className="mt-4 sm:mt-0 bg-white p-4 rounded-xl shadow-sm border border-slate-200 min-w-[200px]">
          <div className="flex justify-between text-sm font-medium mb-2 text-slate-600">
            <span>Daily Progress</span>
            <span className="text-indigo-600">{progress}%</span>
          </div>
          <div className="w-full bg-slate-100 rounded-full h-2">
            <div 
              className="bg-indigo-600 h-2 rounded-full transition-all duration-500" 
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </header>

      {/* Ana İçerik */}
      <main className="space-y-8">
        <section>
          <HabitForm onAdd={handleAddHabit} />
        </section>

        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-4 border-b border-slate-100 bg-slate-50/50 flex justify-between items-center">
            <h2 className="font-semibold text-slate-700">Your Habits</h2>
            <span className="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded-full">{habits.length} Items</span>
          </div>
          
          <div className="divide-y divide-slate-100">
            {habits.length > 0 ? (
              habits.map(habit => (
                <HabitItem 
                  key={habit.id} 
                  habit={habit} 
                  onToggle={handleToggleHabit} 
                  onDelete={handleDeleteHabit} 
                />
              ))
            ) : (
              <div className="text-center py-12">
                <p className="text-slate-400">No active habits.</p>
              </div>
            )}
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;