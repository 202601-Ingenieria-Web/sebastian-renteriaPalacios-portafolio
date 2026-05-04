import React from 'react'
type LabelProps = {
    label: string;
    value: string;
    valueClassName?: string;
}
const Index = ({label, value, valueClassName}: LabelProps) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between w-full min-w-0">
        <div>
            <p>{label}</p>
        </div>
        <div>
             <p className={valueClassName}>{value}</p>
        </div>
    </div>
  )
}

export default Index