/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect, useContext } from 'react';
import { createHabitObject } from '../Interfaces/habitTypes';

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  // Load initial state from localStorage
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  // Persist changes
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (text, category) => {
    setHabits([createHabitObject(text, category), ...habits]);
  };

  const toggleHabit = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(h => h.id !== id));
  };

  // Quick reset helper (with confirmation)
  const clearData = () => {
    if(window.confirm("Are you sure? All data will be lost.")) {
        setHabits([]);
    }
  };

  return (
    <HabitContext.Provider value={{ habits, addHabit, toggleHabit, deleteHabit, clearData }}>
      {children}
    </HabitContext.Provider>
  );
};

export const useHabits = () => useContext(HabitContext);
