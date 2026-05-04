import React from 'react'
import { Icon } from "@iconify/react";
const Index = () => {
  return (
    <div>
        <div>
            <button className="bg-yellow-300 text-primary text-lg font-medium py-10px px-10px rounded-lg h-12.75 w-38.5 hover:cursor-pointer hover:bg-secondary-shadow hover:text-white transition duration-150 ease-in-out hover:-translate-y-1 hover:scale-110 flex items-center justify-center flex-row gap-2 ">
            CONTACT ME
            <Icon icon="material-symbols:arrow-forward-rounded" width="24" height="24" />
            </button>
        </div>
    </div>
  )
}

export default Index