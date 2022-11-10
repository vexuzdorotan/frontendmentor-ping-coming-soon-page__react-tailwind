import React from 'react'

const Subscribe = () => {
  return (
    <>
      <p className='text-sm mb-8'>Subscribe and get notified</p>

      <div className='grid grid-cols-3 gap-x-4 w-[40rem]'>
        <input
          type='text'
          className='text-sm border-2 border-secondaryPaleBlue focus:outline-primaryBlue col-span-2 px-5 py-3 rounded-full'
          placeholder='Your email address...'
        />

        <button className='text-sm bg-primaryBlue text-white col-span-1 rounded-full hover:bg-secondaryPaleBlue'>
          Notify Me
        </button>
      </div>
    </>
  )
}

export default Subscribe
