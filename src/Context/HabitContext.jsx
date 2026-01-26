/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useState, useEffect, useContext } from 'react';
import { createHabitObject } from '../Interfaces/habitTypes';

const HabitContext = createContext();

export const HabitProvider = ({ children }) => {
  // Verileri LocalStorage'dan çek
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  // Her değişimde kaydet
  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  // --- CRUD İşlemleri ---
  const addHabit = (text, category) => {
    setHabits([createHabitObject(text, category), ...habits]);
  };

  const toggleHabit = (id) => {
    setHabits(habits.map(h => h.id === id ? { ...h, completed: !h.completed } : h));
  };

  const deleteHabit = (id) => {
    setHabits(habits.filter(h => h.id !== id));
  };

  const clearData = () => {
    if(window.confirm("Are you sure? All data will be lost.")) { // İngilizceleştirdik
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