import React from 'react';
import { CATEGORY_COLORS } from '../Interfaces/habitTypes'; // Renkleri buradan alıyoruz

function HabitItem({ habit, onToggle, onDelete }) {
  // Eğer kategori rengi bulunamazsa varsayılan gri olsun
  const badgeStyle = CATEGORY_COLORS[habit.category] || "bg-gray-100 text-gray-800";

  return (
    <div className={`group flex items-center justify-between p-4 hover:bg-slate-50 transition-colors duration-200 ${habit.completed ? 'opacity-50' : ''}`}>
      
      <div className="flex items-center gap-4">
        {/* Custom Checkbox */}
        <button 
          onClick={() => onToggle(habit.id)}
          className={`w-5 h-5 rounded border flex items-center justify-center transition-all ${habit.completed ? 'bg-indigo-600 border-indigo-600' : 'border-slate-300 hover:border-indigo-400'}`}
        >
          {habit.completed && (
             <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" /></svg>
          )}
        </button>
        
        <div className="flex flex-col">
          <span className={`text-sm font-medium ${habit.completed ? 'line-through text-slate-500' : 'text-slate-700'}`}>
            {habit.text}
          </span>
          <span className="text-[10px] text-slate-400 mt-0.5">Created: {habit.createdAt}</span>
        </div>
      </div>

      <div className="flex items-center gap-3">
        {/* Kategori Badge */}
        <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md border ${badgeStyle}`}>
          {habit.category.toUpperCase()}
        </span>

        {/* Silme Butonu - Sadece hover olunca görünür (opacity-0 group-hover:opacity-100) */}
        <button 
          onClick={() => onDelete(habit.id)}
          className="text-slate-300 hover:text-red-500 p-1.5 rounded-md hover:bg-red-50 transition-all opacity-0 group-hover:opacity-100"
        >
           <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
        </button>
      </div>
    </div>
  );
}

export default HabitItem;