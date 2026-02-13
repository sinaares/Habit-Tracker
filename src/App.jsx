import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HabitProvider } from './Context/HabitContext';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Analytics from './Pages/Analytics';
import Settings from './Pages/Settings';

function App() {
  return (
    <HabitProvider>
      <BrowserRouter>
        <div className="flex min-h-screen bg-slate-50 font-sans">
          
          {/* Main navigation */}
          <Sidebar />

          {/* Page content */}
          <main className="flex-1 md:ml-64 transition-all">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/settings" element={<Settings />} />
            </Routes>
          </main>

        </div>
      </BrowserRouter>
    </HabitProvider>
  )
}

export default App;
