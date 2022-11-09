import React from 'react'

const Background = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen py-16'>
      {children}
    </div>
  )
}

export default Background
