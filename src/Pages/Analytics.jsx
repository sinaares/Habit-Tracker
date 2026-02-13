import React from 'react';
import { useHabits } from '../Context/HabitContext';
import { CATEGORIES, CATEGORY_COLORS } from '../Interfaces/habitTypes';

function Analytics() {
  const { habits } = useHabits();

  // Build per-category stats from the current habit list
  const stats = Object.values(CATEGORIES).map(cat => {
    const catHabits = habits.filter(h => h.category === cat);
    const total = catHabits.length;
    const completed = catHabits.filter(h => h.completed).length;
    const percentage = total === 0 ? 0 : Math.round((completed / total) * 100);
    return { name: cat, total, completed, percentage };
  });

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Performance Analytics</h2>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {stats.map(stat => (
          <div key={stat.name} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex justify-between items-start mb-4">
              <span className={`px-3 py-1 rounded-md text-sm font-bold ${CATEGORY_COLORS[stat.name]}`}>
                {stat.name}
              </span>
              <span className="text-2xl font-bold text-slate-700">{stat.percentage}%</span>
            </div>
            
            <div className="w-full bg-slate-100 rounded-full h-2 mb-2">
              <div 
                className="bg-indigo-500 h-2 rounded-full transition-all duration-1000" 
                style={{ width: `${stat.percentage}%` }}
              ></div>
            </div>
            <p className="text-sm text-slate-400">
              {stat.completed} of {stat.total} tasks completed
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Analytics;
