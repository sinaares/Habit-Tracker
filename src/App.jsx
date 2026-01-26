import React from 'react'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
      {/* Kart Yapısı */}
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden p-6 border-t-4 border-blue-500">
        
        <h1 className="text-2xl font-bold text-blue-800 mb-2">
          Habit Tracker Projesi 🚀
        </h1>
        
        <p className="text-gray-600 mb-6">
          Tailwind CSS ve React kurulumu başarıyla tamamlandı! 
          Şimdi CRUD adımlarına geçebiliriz.
        </p>

        {/* Test Butonu */}
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out transform hover:scale-105">
          Tıkla ve Dene
        </button>

        <div className="mt-6 pt-4 border-t border-gray-100">
          <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">
            Proje Adımları: Ekle, Listele, Güncelle, Sil
          </span>
        </div>
      </div>
    </div>
  )
}

export default App