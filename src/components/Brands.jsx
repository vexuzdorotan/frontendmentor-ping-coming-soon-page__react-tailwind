import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { brands } from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

const Brands = () => {
  return (
    <div className='flex flex-row mb-2'>
      <FontAwesomeIcon
        icon={brands('facebook-f')}
        className='bg-wnite text-primaryBlue w-4 h-4 rounded-full p-2 mx-2 hover:bg-primaryBlue hover:text-white border-2'
      />
      <FontAwesomeIcon
        icon={brands('twitter')}
        className='bg-wnite text-primaryBlue w-4 h-4 rounded-full p-2 mx-2 hover:bg-primaryBlue hover:text-white border-2'
      />
      <FontAwesomeIcon
        icon={brands('instagram')}
        className='bg-wnite text-primaryBlue w-4 h-4 rounded-full p-2 mx-2 hover:bg-primaryBlue hover:text-white border-2'
      />
    </div>
  )
}

export default Brands
