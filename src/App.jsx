import React from 'react'
import Dashboard from './Pages/Dashboard' // Pages klasöründen çağırdık

function App() {
  return (
    // Tüm uygulamanın arka plan rengi burada tanımlı
    <div className="min-h-screen bg-slate-50 font-sans antialiased text-slate-900">
      <Dashboard />
    </div>
  )
}

export default App