import React from 'react'

const Background = ({ children }) => {
  return (
    <div className='min-h-screen py-8'>
      <div className='flex flex-col justify-center items-center mx-10'>
        {children}
      </div>
    </div>
  )
}

export default Background
