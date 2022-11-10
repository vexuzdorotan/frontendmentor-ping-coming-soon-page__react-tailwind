import React from 'react'

import DesktopDesign from '../images/desktop-design.jpg'

const Background = ({ children }) => {
  return (
    <div className='flex flex-col justify-center items-center min-h-screen py-2'>
      {children}
    </div>
  )
}

export default Background
