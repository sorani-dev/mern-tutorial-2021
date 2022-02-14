import { useState } from 'react'
import { FaUser } from 'react-icons/fa'

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const { name, email, password, confirmPassword } = formData

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
          <FaUser aria-hidden={true} /> Register
        </h1>
        <p>Login and start setting goals</p>
      </section>

      <section className='form'>
        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <input
              type='text'
              name='name'
              id='name'
              className='form-control'
              value={name}
              onChange={onChange}
              placeholder='Enter your name'
              aria-label='Enter your name'
            />
          </div>
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
            <input
              type='password'
              name='confirmPassword'
              id='confirmPassword'
              className='form-control'
              value={confirmPassword}
              onChange={onChange}
              placeholder='Confirm your password'
              aria-label='Confirm your password'
            />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>
              Register
            </button>
          </div>
        </form>
      </section>
    </>
  )
}

export default Register
