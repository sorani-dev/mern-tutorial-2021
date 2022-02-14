import { FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header'>
      <div className='logo'>
        <Link to='/'>GoalSetter</Link>
      </div>
      <nav>
        <ul>
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
        </ul>
      </nav>
    </header>
  )
}

export default Header
