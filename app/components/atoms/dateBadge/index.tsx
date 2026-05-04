import React from 'react'

type DateBadgeProps = {
  children: React.ReactNode
  className?: string
}

const DateBadge = ({ children, className = '' }: DateBadgeProps) => {
  return (
    <span className={`inline-block bg-yellow-500 text-white text-xs font-semibold px-2 py-1 rounded ${className}`}>
      {children}
    </span>
  )
}

export default DateBadge
