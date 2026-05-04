import React from 'react'
import Image from 'next/image';
type ProfileImageProps = {
    name: string;
    charge: string;
    imageUrl?: string;
}
const Index = ({name, charge, imageUrl}: ProfileImageProps) => {
  return (
    <div className="flex flex-col items-center m-4">
        <div>
            <Image src={imageUrl || "/profile-image.jpeg"} alt="Profile Image" width={150} height={242} className="rounded-full w-32 h-32 object-cover" />
        </div>
        <div className="flex flex-col items-center">
            <h2 className="text-18px font-medium p-2 justify-center">{name}</h2>
            <p className="text-paragraph text-15px font-medium justify-center">{charge}</p>
        </div>
    </div>
  )
}

export default Index