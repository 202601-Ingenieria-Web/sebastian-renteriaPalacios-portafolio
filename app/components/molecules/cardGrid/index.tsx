import React from 'react'
import CustomCard from "@/app/components/atoms/cards";
const Index = () => {
  return (
    <div className="w-full py-16 px-6 flex flex-col items-center">
      
      <div className="text-center max-w-xl mb-12">
        <h1 className="text-3xl font-bold mb-4">My Knowledge</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </p>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <CustomCard title="Frontend" icon="mdi:react" description="..." />
        <CustomCard title="Backend" icon="mdi:server" description="..." />
        <CustomCard title="UI/UX" icon="mdi:palette" description="..." />
        <CustomCard title="DevOps" icon="mdi:cloud" description="..." />
        <CustomCard title="Testing" icon="mdi:test-tube" description="..." />
        <CustomCard title="AI" icon="mdi:robot" description="..." />
      </div>

    </div>
  )
}

export default Index