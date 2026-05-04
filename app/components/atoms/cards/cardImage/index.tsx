import React from 'react'
import Image from 'next/image'

type CardImageProps = {
  imageUrl: string
  title: string
  excerpt?: string
  linkText?: string
  linkHref?: string
  className?: string
}

const CardImage = ({ imageUrl, title, excerpt = '', linkText = 'Learn More', linkHref = '#', className = '' }: CardImageProps) => {
  return (
    <article className={`bg-white rounded-lg shadow-sm overflow-hidden ${className}`}>
      <div className="w-full h-40 relative">
        <Image src={imageUrl} alt={title} fill className="object-cover" />
      </div>

      <div className="p-4">
        <h3 className="text-base font-semibold mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-4">{excerpt}</p>
        <a href={linkHref} className="text-yellow-500 font-medium inline-flex items-center gap-2">
          {linkText}
          <span className="text-yellow-400">›</span>
        </a>
      </div>
    </article>
  )
}

export default CardImage
