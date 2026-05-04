import React from 'react'

interface LateralLayoutProps {
  children: React.ReactNode;
  bgColor?: string;
}

const Index = ({
  children,
  bgColor = 'bg-background',
}: Readonly<LateralLayoutProps>) => {
  return (
    <div className={`flex w-full min-h-screen ${bgColor}`}>{children}</div>
  )
}

export default Index