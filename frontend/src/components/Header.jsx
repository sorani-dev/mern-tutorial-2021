import { useDispatch, useSelector } from 'react-redux'
import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

import { logout, reset } from '../features/auth/authSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector(state => state.auth)

  const handleLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>GoalSetter</Link>
      </div>
      <nav>
        <ul>
          {user ? (
            <li>
              <button className='btn' onClick={handleLogout}>
                <FaSignOutAlt aria-hidden={true} /> Logout
              </button>
            </li>
          ) : (
            <>
              <li>
                <Link to='/login'>
                  <FaSignInAlt aria-hidden={true} /> Login
                </Link>
              </li>
              <li>
                <Link to='/register'>
                  <FaUser aria-hidden={true} /> Register
                </Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
