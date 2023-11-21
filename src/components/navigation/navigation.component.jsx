import { Outlet, Link } from 'react-router-dom';
import './navigation.styles.scss';

const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <Link
          className='logo-container'
          to='/'
        >
          <img
            src='./assets/logo.png'
            alt='shop & shop'
          />
        </Link>

        <ul className='nav-links-container'>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/shop'
            >
              Shop
            </Link>
          </li>

          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/contact'
            >
              Contact
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/signIn'
            >
              Sign In
            </Link>
          </li>
          <li className='nav-item'>
            <Link
              className='nav-link'
              to='/cart'
            >
              Cart
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
