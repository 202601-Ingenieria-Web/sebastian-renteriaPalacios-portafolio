import React from 'react'
import { Icon } from "@iconify/react";
type SocialLink = {
  url: string;
  icon: string;
};
const Index = ({ url, icon }: SocialLink) => {
  return (
    <div>
        <a href={url} target="_blank" rel="noopener noreferrer">
            <Icon icon={icon} width="48" height="48" />
        </a>
    </div>
  )
}

export default Index