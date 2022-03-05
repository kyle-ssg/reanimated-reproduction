import { FC } from 'react'
import ActiveLink from 'components/base/ActiveLink' // we need this to make JSX compile

type ComponentType = {}

const Nav: FC<ComponentType> = ({}) => {
  return (
    <nav className='navbar navbar-expand-md navbar-dark bg-dark mb-4'>
      <div className='container-fluid'>
        <a className='navbar-brand' href='#'>
          Top navbar
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarCollapse'
          aria-controls='navbarCollapse'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarCollapse'>
          <ul className='navbar-nav me-auto mb-2 mb-md-0'>
            <li className='nav-item'>
              <ActiveLink href='/'>
                <a className='nav-link' aria-current='page'>
                  Home
                </a>
              </ActiveLink>
            </li>
            <li className='nav-item'>
              <ActiveLink href='/other'>
                <a className='nav-link'>Link</a>
              </ActiveLink>
            </li>
            <li className='nav-item'>
              <a className='nav-link disabled'>Disabled</a>
            </li>
          </ul>
          <form onSubmit={(e) => e.preventDefault()} className='d-flex'>
            <input
              className='form-control me-2'
              type='search'
              placeholder='Search'
              aria-label='Search'
            />
            <button className='btn btn-outline-success' type='submit'>
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Nav
