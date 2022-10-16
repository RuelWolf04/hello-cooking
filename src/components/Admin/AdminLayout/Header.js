import React from 'react'
import { FaBars, FaSearch, FaFacebookMessenger, FaBell, FaUser } from 'react-icons/fa'
import './AdminLayout.css'

const Header = () => {
  return (
    <header>
      <nav>
        <div>
          <span>
            <FaBars />
          </span>
          <h2>Hello<span className='cooking'>Cooking</span></h2>
        </div>

        <form className="search-container">
          <input type="search" name="" id="" />
          <button><FaSearch /></button>
        </form>
        <ul>
          <li>
            <FaFacebookMessenger />
          </li>
          <li><FaBell /></li>
          <li>
            <FaUser />
          </li>
        </ul>

      </nav>
    </header>
  )
}

export default Header