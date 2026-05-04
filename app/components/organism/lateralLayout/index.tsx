import React from 'react'

const Index = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex w-full min-h-screen">{children}</div>
  )
}

export default Index