import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import FamilyCalendar from './components/FamilyCalendar'

function App() {
  return (
    <div className="min-h-screen w-screen bg-gray-100 flex items-center justify-center p-8">
      <div className="w-[95%] max-w-[1800px]">
        <FamilyCalendar />
      </div>
    </div>
  )
}

export default App
