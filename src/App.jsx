import './App.css'

import IllustrationDashboard from './images/illustration-dashboard.png'

import Background from './components/Background'
import Footer from './components/Footer'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  solid,
  regular,
  brands,
  icon,
} from '@fortawesome/fontawesome-svg-core/import.macro' // <-- import styles to be used

function App() {
  return (
    <>
      <Background>
        <h1 className='text-3xl font-bold mb-10'>
          PING<span className='text-primaryBlue'>.</span>
        </h1>

        <h1 className='text-5xl mb-5'>
          <span className='font-light text-neutralGray'>We are launching</span>{' '}
          <span className='font-bold'>soon!</span>
        </h1>

        <p className='mb-10'>Subscribe and get notified</p>

        <div className='grid grid-cols-3 gap-x-4 w-[40rem] mb-20'>
          <input
            type='text'
            className='text-sm border-2 border-secondaryPaleBlue focus:outline-primaryBlue col-span-2 px-5 py-3 rounded-full'
            placeholder='Your email address...'
          />

          <button className='text-sm bg-primaryBlue text-white col-span-1 rounded-full hover:bg-secondaryPaleBlue'>
            Notify Me
          </button>
        </div>

        <img src={IllustrationDashboard} alt='' className='h-[22rem] mb-16' />

        <div className='flex flex-row mb-5'>
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

        <p className='text-neutralGray text-sm'>
          &copy; Copyright Ping. All rights reserved.
        </p>
      </Background>
      <Footer />
    </>
  )

  // We are launching soon!

  // Subscribe and get notified

  // Notify Me

  // &copy; Copyright Ping. All rights reserved.
}

export default App
