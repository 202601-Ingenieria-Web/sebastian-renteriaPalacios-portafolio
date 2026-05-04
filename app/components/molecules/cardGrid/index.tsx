import React from 'react'
import CustomCard from "@/app/components/atoms/cards/cardIcon";
const Index = () => {
  return (
    <div className="w-full py-16 px-6 flex flex-col items-center">
      
      <div className="text-center max-w-xl mb-12">
        <h1 className="text-3xl font-bold mb-4">My Knowledge</h1>
        <p className="text-gray-500 text-sm leading-relaxed">
            I have a strong foundation in both frontend and backend development, with experience in a variety of technologies and frameworks. My expertise includes building responsive user interfaces, developing server-side logic, and designing intuitive user experiences. I am also proficient in DevOps practices, testing methodologies, and have a keen interest in applying AI techniques to software solutions.
        </p>
      </div>

      <div className="grid w-full max-w-5xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <CustomCard title="Frontend" icon="mdi:react" description="Build responsive user interfaces with React, Next.js and Tailwind CSS." />
        <CustomCard title="Backend" icon="mdi:server" description="Develop server-side logic and manage databases with Java and Spring Boot." />
        <CustomCard title="UI/UX" icon="mdi:palette" description="Design attractive and functional user experiences." />
        <CustomCard title="DevOps" icon="mdi:cloud" description="Implement integration and continuous delivery practices." />
        <CustomCard title="Testing" icon="mdi:test-tube" description="Write automated tests to ensure software quality.  knowledg in BDD, TDD and E2E testing." />
        <CustomCard title="AI" icon="mdi:robot" description="Apply artificial intelligence techniques to software solutions." />
      </div>

    </div>
  )
}

export default Index