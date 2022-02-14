import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const { email, password } = formData

  const onChange = e => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = e => {
    e.preventDefault()
  }

  return (
    <>
      <section className='heading'>
        <h1>
          <FaSignInAlt aria-hidden={true} /> Login
        </h1>
        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='email'
              name='email'
              id='email'
              className='form-control'
              value={email}
              onChange={onChange}
              placeholder='Enter your email'
              aria-label='Enter your email'
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              name='password'
              id='password'
              className='form-control'
              value={password}
              onChange={onChange}
              placeholder='Enter your password'
              aria-label='Enter your password'
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Log in
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Login
