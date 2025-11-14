import React from 'react'
import { Routes, Route, Link, useLocation } from 'react-router-dom'
import AdminDashboard from './components/AdminDashboard'
import StaffDashboard from './components/StaffDashboard'
import CustomerDashboard from './components/CustomerDashboard'

function TopNav() {
  const location = useLocation()
  const tabs = [
    { to: '/', label: 'Admin' },
    { to: '/staff', label: 'Staff' },
    { to: '/customer', label: 'Customer' },
  ]
  return (
    <div className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40 bg-slate-950/60 border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-300 to-fuchsia-300">Aradabiya</div>
        <div className="flex items-center gap-2">
          {tabs.map(t => (
            <Link key={t.to} to={t.to} className={`px-3 py-1.5 rounded-lg text-sm ${location.pathname===t.to? 'bg-purple-600/20 text-purple-200 border border-purple-700/50':'text-slate-300 hover:bg-slate-800/60 border border-transparent'}`}>{t.label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      <TopNav />
      <Routes>
        <Route path="/" element={<AdminDashboard />} />
        <Route path="/staff" element={<StaffDashboard />} />
        <Route path="/customer" element={<CustomerDashboard />} />
      </Routes>
    </div>
  )
}
