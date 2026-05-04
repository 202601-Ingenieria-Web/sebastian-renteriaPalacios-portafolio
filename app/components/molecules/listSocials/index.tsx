import React from 'react'
import Socials from "@/app/components/atoms/socials";
const Index = () => {
  return (
    <div className="space-y-2">
        <h1 className="text-[18px] font-bold w-11.75 h-5.5">Links</h1>
        <Socials url="https://www.linkedin.com/in/sebastian-renteria-palacios-839908206/" icon="entypo-social:linkedin-with-circle"/>
        <Socials url="https://github.com/sren97" icon="entypo-social:github-with-circle"/>
    </div>
  )
}

export default Index