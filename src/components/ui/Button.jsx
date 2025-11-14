import React from 'react'

export default function Button({ children, icon: Icon, variant = 'primary', className = '', ...props }) {
  const base = 'inline-flex items-center gap-2 px-4 py-2 rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900';
  const variants = {
    primary: 'bg-purple-600/80 hover:bg-purple-600 text-white shadow-lg shadow-purple-900/30',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700',
    ghost: 'bg-transparent hover:bg-slate-800/60 text-slate-300',
    danger: 'bg-rose-600/80 hover:bg-rose-600 text-white',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {Icon && <Icon className="w-4 h-4" />}
      <span className="font-medium">{children}</span>
    </button>
  )
}
