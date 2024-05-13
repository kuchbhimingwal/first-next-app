import React from 'react'

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
    <div className='border-b text-center'>
      20% offf for 
    </div>
    {children}
    </div>
  )
}

export default layout