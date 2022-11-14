import ContextSettings from '../../components/ContextSettings/ContextSettings';
import React, { useContext, useEffect } from 'react';
import style from './home.module.css';
import ThemeContext from '../../context/theme-context'
import PageContent from '../../components/PageContent/PageContent';

function Home() {


  const pageName = 'home';
  useEffect(() => {
    document.title = pageName.charAt(0).toUpperCase() + pageName.slice(1)
  }, []);

  return (
      <div className={style.home}>
        <PageContent pageName={pageName}/>
        <ContextSettings />
      </div>
  )
}

export default Home