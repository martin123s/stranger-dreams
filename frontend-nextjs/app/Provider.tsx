import React from 'react'
import Header from './_component/Header';

const Provider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className='flex flex-row'>
      <Header/>
      {children}
    </div>
  )
}

export default Provider
