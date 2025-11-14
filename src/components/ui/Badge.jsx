import React from 'react'

const variants = {
  default: 'bg-purple-500/20 text-purple-300 ring-1 ring-purple-500/30',
  success: 'bg-emerald-500/20 text-emerald-300 ring-1 ring-emerald-500/30',
  warning: 'bg-amber-500/20 text-amber-300 ring-1 ring-amber-500/30',
  danger: 'bg-rose-500/20 text-rose-300 ring-1 ring-rose-500/30',
  outline: 'bg-transparent text-slate-300 ring-1 ring-slate-700',
}

export default function Badge({ children, variant = 'default' }) {
  return (
    <span className={`inline-flex items-center px-2 py-1 text-xs font-semibold rounded-full ${variants[variant]}`}>
      {children}
    </span>
  )
}
