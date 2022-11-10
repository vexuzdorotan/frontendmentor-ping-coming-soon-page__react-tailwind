import React, { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)
  const [borderColor, setBorderColor] = useState('')

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    return email.match(emailRegex)
  }

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value)
    setIsEmailValid(validateEmail(e.target.value))

    // console.log(borderColor)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const color = isEmailValid ? 'secondaryPaleBlue' : 'secondaryLightRed'

    setBorderColor(color)
  }

  return (
    <>
      <p className='text-sm mb-8'>Subscribe and get notified</p>

      <form className='grid grid-cols-3 gap-x-4 w-[40rem]'>
        <input
          type='email'
          className={`peer text-sm border-2 border-${borderColor} focus:outline-primaryBlue col-span-2 px-5 py-3 rounded-full`}
          placeholder='Your email address...'
          value={email}
          onChange={handleEmailOnChange}
        />

        <button
          type='submit'
          className='text-sm bg-primaryBlue text-white col-span-1 rounded-full hover:bg-secondaryPaleBlue'
          onClick={handleSubmit}
        >
          Notify Me
        </button>

        <p className='invisible peer-invalid:visible text-sm text-secondaryLightRed font-light col-span-3 mt-2 ml-5'>
          Please provide a valid email address
        </p>
      </form>
    </>
  )
}

export default Subscribe
