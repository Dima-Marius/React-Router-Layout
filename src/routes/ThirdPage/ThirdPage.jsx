import React, { useEffect } from 'react';
import ContextSettings from '../../components/ContextSettings/ContextSettings';
import PageContent from '../../components/PageContent/PageContent';
import style from './thirdPage.module.css'

function ThirdPage() {
  const pageName = 'third'
  
  useEffect(() => {
    document.title = pageName.charAt(0).toUpperCase() + pageName.slice(1) + ' page'
  }, []);

  return (
    <div className={style.thirdPage}>
        <PageContent pageName={pageName}/>
        <ContextSettings/>
    </div>
  )
}

export default ThirdPage