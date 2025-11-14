import React from 'react'

export function Table({ children }) {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full text-left text-sm">
        {children}
      </table>
    </div>
  )
}

export function THead({ children }) {
  return (
    <thead className="text-slate-400 uppercase text-xs">
      {children}
    </thead>
  )
}

export function TBody({ children }) {
  return (
    <tbody className="divide-y divide-slate-800/80 text-slate-200">
      {children}
    </tbody>
  )
}

export function TR({ children }) {
  return (
    <tr className="hover:bg-slate-800/50 transition-colors">
      {children}
    </tr>
  )
}

export function TH({ children, className = '' }) {
  return (
    <th className={`px-4 py-3 bg-slate-900 ${className}`}>{children}</th>
  )
}

export function TD({ children, className = '' }) {
  return (
    <td className={`px-4 py-3 ${className}`}>{children}</td>
  )
}
