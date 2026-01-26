import React from 'react';
import { useHabits } from '../Context/HabitContext';

function Settings() {
  const { clearData } = useHabits();

  return (
    <div className="p-8 max-w-2xl">
      <h2 className="text-3xl font-bold text-slate-800 mb-6">Settings</h2>
      
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <h3 className="text-lg font-semibold text-slate-700 mb-2">Data Management</h3>
        <p className="text-slate-500 mb-6 text-sm">
          This action will permanently delete all your habits and progress. This cannot be undone.
        </p>
        <button 
          onClick={clearData}
          className="bg-red-50 text-red-600 border border-red-200 px-4 py-2 rounded-lg hover:bg-red-100 transition-colors font-medium text-sm"
        >
          Clear All Data
        </button>
      </div>
    </div>
  );
}

export default Settings;