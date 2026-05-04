import React from 'react'
import DateBadge from '@/app/components/atoms/dateBadge'

type EducationRowProps = {
  institution: string
  role?: string
  date?: string
  title: string
  description: string
  last?: boolean
}

const EducationRow = ({ institution, role = 'Student', date, title, description, last = false }: EducationRowProps) => {
  return (
    <div className={`w-full bg-white px-6 py-6 ${!last ? 'border-b border-gray-200' : ''}`}>
      <div className="flex flex-col sm:flex-row sm:justify-between gap-6">
        <div className="sm:w-1/3 min-w-0">
          <p className="text-sm text-gray-600">{role}</p>
          <h3 className="text-base font-semibold mt-2">{institution}</h3>
          {date ? (
            <div className="mt-3">
              <DateBadge>{date}</DateBadge>
            </div>
          ) : null}
        </div>

        <div className="sm:w-2/3">
          <h4 className="text-sm font-medium">{title}</h4>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default EducationRow
