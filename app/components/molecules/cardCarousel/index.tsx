"use client"

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from '@/components/ui/carousel'
import CardImage from '@/app/components/atoms/cards/cardImage'

type CardData = {
  imageUrl: string
  title: string
  excerpt?: string
  linkText?: string
  linkHref?: string
}

const sampleCards: CardData[] = [
  {
    imageUrl: '/work-order.png',
    title: 'Work Order Management System',
    excerpt: 'Microservices-based system for managing work orders, including scheduling, tracking, and reporting. Built with Java Spring Boot and PostgreSQL.',
    linkText: 'Learn More ›',
    linkHref: 'https://github.com/sren97/telconova-supportsuite-workorder-service',
  },
  {
    imageUrl: '/e-commerce.png',
    title: 'E-commerce Website Development',
    excerpt: 'Developed a full-stack e-commerce website using React for the frontend and Node.js for the backend. Integrated Stripe for payment processing.',
    linkText: 'Learn More ›',
  },
  {
    imageUrl: '/AI-research.png',
    title: 'AI research project',
    excerpt: 'Conducted research on models to detect phishing emails. Implemented a machine learning model using Python and scikit-learn, achieving high accuracy in identifying malicious emails.',
    linkText: 'Learn More ›',
  },
]

const CardCarousel = ({ cards = sampleCards }: { cards?: CardData[] }) => {
  return (
    <div className="relative">
      <Carousel className="w-full">
        <CarouselContent className="">
          {cards.map((c, idx) => (
            <CarouselItem
              key={idx}
              className=""
              style={{ flex: '0 0 auto', width: 320 }}
            >
              <div className="p-2">
                <CardImage imageUrl={c.imageUrl} title={c.title} excerpt={c.excerpt} linkText={c.linkText} linkHref={c.linkHref} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default CardCarousel
