import React from 'react'

const Index = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex flex-col w-full h-screen items-center bg-primary">{children}</div>
  )
}

export default Index