import React, { useContext, useEffect, useState } from 'react'
import style from './navbar.module.css'
import { NavLink } from 'react-router-dom'
import ThemeContext from '../../context/theme-context';


function Navbar() {
  const [randomUrl, setRandomUrl] = useState('');
  const ctx = useContext(ThemeContext);

  useEffect(() => {
    setRandomUrl((Math.random() + 1).toString(36).substring(2))
    return () => {
      setRandomUrl(null);
    }
  },[])



  const addActiveClass = ({ isActive }) => isActive ? `${style.active}` : {} ;
  const conditionalNavTheme = {backgroundColor: ctx.prefferences.theme === 'on' && 'plum'}
  const addThemeClass = ctx.prefferences.theme === 'on' ? style.theme : undefined;


  return (
    <React.Fragment>
    <nav className={`${style.navbar}`}>
      <ul style={conditionalNavTheme} >
      <NavLink to='/' className={addActiveClass}><li className={addThemeClass}>Home</li></NavLink>
      <NavLink to='/SecondPage'className={addActiveClass}><li className={addThemeClass} >Second Page</li></NavLink>
      <NavLink to='/ThirdPage' className={addActiveClass}><li className={addThemeClass} >Third Page</li></NavLink>
      <NavLink to='/ItemsPage' className={addActiveClass}><li className={addThemeClass} >Items Page With Menu</li></NavLink>
      <NavLink to='/ItemsPageWithoutMenu' className={addActiveClass}><li className={addThemeClass} >Items Page Without Menu</li></NavLink>
      <NavLink to={randomUrl} className={addActiveClass}><li className={addThemeClass} >Go to Random Link</li></NavLink>
      </ul>
    </nav>
    </React.Fragment>
  )
}

export default Navbar