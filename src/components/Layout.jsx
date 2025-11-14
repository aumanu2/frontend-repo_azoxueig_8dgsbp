import React from 'react'
import { Menu, LogOut, Shield, Users, ShoppingCart, LayoutDashboard, CreditCard, Coffee, Clock, DoorOpen } from 'lucide-react'
import Spline from '@splinetool/react-spline'

function NavItem({ icon: Icon, label, active = false }) {
  return (
    <div className={`flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer ${active ? 'bg-purple-600/20 text-purple-300' : 'text-slate-300 hover:bg-slate-800/60'}`}>
      <Icon className="w-4 h-4" />
      <span className="text-sm font-medium">{label}</span>
    </div>
  )
}

export default function Layout({ role = 'Admin', children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0b15] via-[#0a0820] to-[#0a0014] text-slate-100">
      <div className="relative h-[320px]">
        <Spline scene="https://prod.spline.design/sHDPSbszZja1qap3/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0a001480] to-[#0a0014] pointer-events-none"></div>
        <div className="absolute inset-x-0 bottom-6 px-8 flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-600/20 text-purple-200 ring-1 ring-purple-500/40">
              <Shield className="w-4 h-4" />
              <span className="text-xs tracking-wide">Aradabiya Cafenet</span>
            </div>
            <h1 className="mt-3 text-3xl md:text-4xl font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-fuchsia-300 to-blue-300">{role} Dashboard</h1>
            <p className="text-slate-300/80 mt-1">Premium tech-café control center</p>
          </div>
          <div className="hidden md:flex items-center gap-3">
            <button className="px-4 py-2 rounded-lg bg-slate-900/60 hover:bg-slate-900 border border-slate-800">Login</button>
            <button className="px-4 py-2 rounded-lg bg-rose-600/80 hover:bg-rose-600">Logout</button>
          </div>
        </div>
      </div>

      <div className="px-6 md:px-8 -mt-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[260px,1fr] gap-6">
          <aside className="rounded-2xl bg-slate-950/60 border border-slate-800/80 p-4 h-max sticky top-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-slate-400 text-xs">Navigation</span>
              <Menu className="w-4 h-4 text-slate-500" />
            </div>
            <nav className="space-y-1">
              <NavItem icon={LayoutDashboard} label="Overview" active />
              <NavItem icon={Users} label="Customers" />
              <NavItem icon={Shield} label="Staff" />
              <NavItem icon={DoorOpen} label="Rooms" />
              <NavItem icon={CreditCard} label="Billing" />
              <NavItem icon={ShoppingCart} label="Transactions" />
              <NavItem icon={Coffee} label="Cafe Menu" />
              <div className="pt-2">
                <div className="flex items-center gap-2 px-3 py-2 rounded-xl text-rose-300/90 hover:bg-rose-900/20 cursor-pointer">
                  <LogOut className="w-4 h-4" />
                  <span className="text-sm font-medium">Logout</span>
                </div>
              </div>
            </nav>
            <div className="mt-6 rounded-xl p-3 bg-gradient-to-br from-purple-900/20 to-blue-900/10 border border-purple-800/30">
              <div className="text-xs text-slate-400">Status Ruangan</div>
              <div className="mt-2 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-lg bg-slate-900/70 border border-slate-800 p-2">
                  <div className="text-2xl font-bold text-emerald-300">3</div>
                  <div className="text-xs text-slate-400">Kosong</div>
                </div>
                <div className="rounded-lg bg-slate-900/70 border border-slate-800 p-2">
                  <div className="text-2xl font-bold text-amber-300">2</div>
                  <div className="text-xs text-slate-400">Dipakai</div>
                </div>
                <div className="rounded-lg bg-slate-900/70 border border-slate-800 p-2">
                  <div className="text-2xl font-bold text-purple-300">6</div>
                  <div className="text-xs text-slate-400">Total</div>
                </div>
              </div>
            </div>
          </aside>

          <main>
            {children}
          </main>
        </div>
      </div>
    </div>
  )
}
