import React from 'react'
import ContactMeButton from "@/app/components/atoms/buttons/contactMe";
import Image from 'next/image';
type ProfileProps = {
    contenido: string;
    imageUrl: string;
};
const Index = ({ contenido, imageUrl }: ProfileProps) => {
  return (
    <div className="flex items-center justify-between w-full px-12 py-16 gap-12">
      
      {/* Texto */}
      <div className="flex flex-col space-y-6 max-w-lg">
        <h1 className="text-4xl font-bold">
          I’m Sebastian Rentería
        </h1>

        <h2 className="text-2xl font-semibold">
          <span className="text-yellow-500">Full-Stack</span> Developer
        </h2>

        <p className="text-gray-600 text-sm leading-relaxed">
          {contenido}
        </p>

        <ContactMeButton />
      </div>

      {/* Imagen */}
      <div className="shrink-0">
        <Image
          src={imageUrl}
          alt="Profile Image"
          width={325.7193908691406}
          height={459.0900573730469}
          className="rounded-lg object-cover"
        />
      </div>

    </div>
  )
}

export default Index