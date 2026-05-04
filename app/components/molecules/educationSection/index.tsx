import React from 'react'
import EducationRow from '@/app/components/molecules/educationRow'

type EducationItem = {
  institution: string
  role?: string
  date?: string
  title: string
  description: string
}

const sampleData: EducationItem[] = [
  {
    institution: 'University Of Antioquia',
    role: 'Student',
    date: 'Jan 2022 - Dec 2026',
    title: 'Bachelor in Systems Engineering',
    description:
      'Academic program focused on the design, development, and maintenance of software systems. Covers programming, algorithms, databases, and software engineering principles.',
  },
  {
    institution: 'Mision TIC - AI Development Course',
    role: 'Student',
    date: 'Jan 2025 - Apr 2025',
    title: 'Certificate Of AI Development',
    description:
      'Comprehensive training in artificial intelligence development, covering machine learning, deep learning, and AI applications. Focuses on practical skills for building AI solutions.',
  },
  {
    institution: 'Coursera - Google Cloud Fundamentals',
    role: 'Student',
    date: 'Feb 2025 - May 2025',
    title: 'Certificate Of Cloud Computing',
    description:
      'In-depth course on cloud computing fundamentals, covering Google Cloud Platform services, architecture, and best practices. Equips learners with skills to design and manage cloud-based solutions.',
  },
]

const EducationSection = ({ data = sampleData }: { data?: EducationItem[] }) => {
  return (
    <section className="w-full max-w-4xl mx-auto py-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold">Education</h2>
        <p className="text-sm text-gray-500 mt-2"></p>
      </div>

      <div className="bg-white shadow-sm rounded-md overflow-hidden">
        {data.map((item, idx) => (
          <EducationRow
            key={idx}
            institution={item.institution}
            role={item.role}
            date={item.date}
            title={item.title}
            description={item.description}
            last={idx === data.length - 1}
          />
        ))}
      </div>
    </section>
  )
}

export default EducationSection
