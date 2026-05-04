import React from 'react'
import ProfileData from "@/app/components/atoms/profileImage"
import LabeledData from "@/app/components/atoms/label";
import { ProgressWithLabel } from "@/app/components/atoms/progressBar";
import ItemList from "@/app/components/atoms/itemList";

const Index = () => {
  return (
    <div className="text-[15px] flex flex-col  space-y-5 ">
        <div className="w-full">
            <ProfileData name="Sebastian Rentería" charge="Systems Engineer" imageUrl="/anonimous-image.png" />
        </div>
        <div className="w-full">
            <LabeledData label="age:" value="28" />
            <LabeledData label="Residence:" value="Medellín, CO" />
            <LabeledData label="Availability:" value="Available" valueClassName="text-green-500" />
            <LabeledData label="Address:" value="St. 123 # 45-67" />
        </div>
        <div className="w-full">
            <h1 className="text-xl mb-2">Languages</h1>
            <ProgressWithLabel label="Español" value={100} id="nivel-español" />
            <ProgressWithLabel label="Inglés" value={80} id="nivel-inglés" />
        </div>
        <div className="w-full">
            <h1 className="text-xl mb-2">Programming Languages</h1>
            <ProgressWithLabel label="Python" value={90} id="nivel-python" />
            <ProgressWithLabel label="Java" value={80} id="nivel-java" />
            <ProgressWithLabel label="Java" value={80} id="nivel-java" />
            <ProgressWithLabel label="C++" value={65} id="nivel-cpp" />

            <ProgressWithLabel label="JavaScript" value={70} id="nivel-javascript" />
        </div>
        <div className="w-full">
            <h1 className="text-xl mb-2">Skills</h1>
            <ItemList name="Git" />
            <ItemList name="GraphQL" />
            <ItemList name="Docker" />
            <ItemList name="AWS" />
            <ItemList name="CI/CD" />
            <ItemList name="Agile Methodologies" />
        </div>
    </div>
  )
}

export default Index