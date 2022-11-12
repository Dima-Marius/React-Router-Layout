import React from 'react'
import style from './navbar.module.css'
import { NavLink } from 'react-router-dom'


function Navbar() {
  const resetRandomUrl = () => randomUrl = ''
  const addActiveClass = ({ isActive }) => isActive ? `${style.active}` : {} ;
  let randomUrl = (Math.random() + 1).toString(36).substring(2);

  return (
    <React.Fragment>
    <nav className={`${style.navbar}`}>
      <ul>
      <NavLink to='/' className={addActiveClass}><li>Home</li></NavLink>
      <NavLink to='/SecondPage'className={addActiveClass}><li>Second Page</li></NavLink>
      <NavLink to='/ThirdPage' className={addActiveClass}><li>Third Page</li></NavLink>
      <NavLink to='/ItemsPage' className={addActiveClass}><li>Items Page With Menu</li></NavLink>
      <NavLink to='/ItemsPageWithoutMenu' className={addActiveClass}><li>Items Page Without Menu</li></NavLink>
      <NavLink to={randomUrl} onClick={resetRandomUrl} className={addActiveClass}><li>Go to Random Link</li></NavLink>
      </ul>
    </nav>
    </React.Fragment>
  )
}

export default Navbar