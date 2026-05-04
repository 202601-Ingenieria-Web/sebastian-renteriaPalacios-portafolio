import React from 'react'
import { Icon } from "@iconify/react";
const Index = ({ name }: { name: string }) => {
  return (
    <div className='flex flex-row items-center flex-wrap gap-2'>
      <Icon icon="material-symbols:nest-heat-link-e" width="24" height="24 " className="text-green-500" />
      <span>{name}</span>
    </div>
  )
}

export default Index