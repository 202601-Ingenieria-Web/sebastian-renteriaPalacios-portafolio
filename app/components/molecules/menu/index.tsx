import React from 'react'
import ProfileData from "@/app/components/atoms/profileImage"
import LabeledData from "@/app/components/atoms/label";
import { ProgressWithLabel } from "@/app/components/atoms/progressBar";
import ItemList from "@/app/components/atoms/itemList";

const Index = () => {
  return (
    <div className="text-[15px] flex flex-col  space-y-5 ">
        <div className="w-full">
            <ProfileData name="Sebastian Rentería" charge="Ingeniero de Sistemas" imageUrl="/anonimous-image.png" />
        </div>
        <div className="w-full">
            <LabeledData label="edad:" value="28" />
            <LabeledData label="Residencia:" value="Medellín, CO" />
            <LabeledData label="Disponibilidad:" value="Disponible" valueClassName="text-green-500" />
            <LabeledData label="Dirección:" value="Calle 123 # 45-67" />
        </div>
        <div className="w-full">
            <h1 className="text-xl mb-2">Idiomas            </h1>
            <ProgressWithLabel label="Español" value={100} id="nivel-español" />
            <ProgressWithLabel label="Inglés" value={80} id="nivel-inglés" />
        </div>
        <div className="w-full">
            <h1 className="text-xl mb-2">Lenguajes de Programación</h1>
            <ProgressWithLabel label="JavaScript" value={90} id="nivel-javascript" />
            <ProgressWithLabel label="Python" value={75} id="nivel-python" />
            <ProgressWithLabel label="Java" value={60} id="nivel-java" />
        </div>
        <div className="w-full">
            <h1 className="text-xl mb-2">Habilidades</h1>
            <ItemList name="Git" />
            <ItemList name="GraphQL" />
        </div>
    </div>
  )
}

export default Index