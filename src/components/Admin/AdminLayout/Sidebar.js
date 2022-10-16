import React, { useState } from 'react'
// import bootstrap from 'bootstrap'
// import 'bootstrap/dist/css/bootstrap.css'
import { BsFillGrid1X2Fill, BsFillBagCheckFill, BsFillPersonFill } from 'react-icons/bs'



const Sidebar = () => {

  const clicked = (e) => {
    e.currentTarget.classList.toggle('active')
  }

  return (
    <aside>
      <ul className='sidebar-menu'>
        <li><div><span><BsFillGrid1X2Fill /></span><a href="#">Dashboard</a></div></li>
        <li>
          <div onClick={clicked} className='sidebarmenu-submenu'><span><BsFillBagCheckFill /></span>Product</div>
          <ul className="sidebarmenu-submenu-items">
            <li><a href="">Product List</a></li>
            <li><a href="">Add Product</a></li>
            <li><a href="">Categories</a></li>
            <li><a href="">Ingriedients</a></li>
          </ul>
        </li>
        <li><div onClick={clicked} className='sidebarmenu-submenu'><span><BsFillPersonFill /></span>Users</div>
          <ul className="sidebarmenu-submenu-items">
            <li>Authorized</li>
            <li>Customer</li>
          </ul>
        </li>
      </ul>
    </aside>
  )
}






export default Sidebar