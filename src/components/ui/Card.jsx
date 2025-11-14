import React from 'react'

export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800/80 shadow-xl shadow-purple-900/20 ${className}`}>
      {children}
    </div>
  )
}

export function CardHeader({ title, subtitle, action, className = '' }) {
  return (
    <div className={`p-5 border-b border-slate-800/80 flex items-center justify-between ${className}`}>
      <div>
        <h3 className="text-slate-200 font-semibold tracking-tight">{title}</h3>
        {subtitle && <p className="text-slate-400 text-sm mt-1">{subtitle}</p>}
      </div>
      {action}
    </div>
  )
}

export function CardContent({ children, className = '' }) {
  return <div className={`p-5 ${className}`}>{children}</div>
}
