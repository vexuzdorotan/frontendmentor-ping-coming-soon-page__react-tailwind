import React, { useState } from 'react'

const Subscribe = () => {
  const [email, setEmail] = useState('')
  const [isEmailValid, setIsEmailValid] = useState(false)

  const [errorMessage, setErrorMessage] = useState('')
  const [borderColor, setBorderColor] = useState('')

  const validateEmail = (email) => {
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

    return email.match(emailRegex)
  }

  const handleEmailOnChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const validateEmailValue = validateEmail(email)

    setIsEmailValid(validateEmailValue)

    const color = validateEmailValue
      ? 'border-primaryBlue'
      : 'border-secondaryLightRed'

    const errorMessageValue =
      email === ''
        ? 'Whoops! It looks like you forgot to add your email'
        : 'Please provide a valid email address'

    setErrorMessage(errorMessageValue)
    setBorderColor(color)
  }

  return (
    <>
      <p className='text-sm mb-8'>Subscribe and get notified</p>

      <form className='grid grid-cols-1 lg:grid-cols-3 gap-x-4 w-[40rem]'>
        <input
          type='email'
          className={`block text-sm border-2 ${borderColor} focus:outline-secondaryPaleBlue col-span-1 lg:col-span-2 mx-16 px-5 py-3 rounded-full lg:mx-0`}
          placeholder='Your email address...'
          value={email}
          onChange={handleEmailOnChange}
        />

        <p
          className={`${
            isEmailValid ? 'invisible' : 'visible'
          } italic text-sm text-secondaryLightRed text-center font-light col-span-1 lg:col-span-3 lg:order-last mt-2 mb-8 lg:text-left lg:mb-0 lg:ml-5`}
        >
          {errorMessage}
        </p>

        <button
          type='submit'
          className='text-sm bg-primaryBlue text-white col-span-1 rounded-full hover:bg-secondaryPaleBlue mx-16 py-4 lg:mx-0'
          onClick={handleSubmit}
        >
          Notify Me
        </button>
      </form>
    </>
  )
}

export default Subscribe
