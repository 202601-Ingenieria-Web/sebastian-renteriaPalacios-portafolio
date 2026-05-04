import React from 'react'

interface LayoutProps {
  children: React.ReactNode;
  bgColor?: string;
}

const Index = ({
  children,
  bgColor = 'bg-primary',
}: Readonly<LayoutProps>) => {
  return (
    <div className={`flex flex-col w-full h-screen items-center ${bgColor}`}>{children}</div>
  )
}

export default Index