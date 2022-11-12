import React, { useEffect } from 'react';
import style from './home.module.css';
import PageContent from '../../components/PageContent/PageContent';

function Home() {
  const pageName = 'home'
  useEffect(() => {
    document.title = pageName.charAt(0).toUpperCase() + pageName.slice(1)
  }, []);

  return (
      <div className={style.home}>
        <PageContent pageName={pageName}/>
      </div>
  )
}

export default Home